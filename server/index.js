import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 4174);
const isProduction = process.env.NODE_ENV === 'production';
const recipientEmail = process.env.CONTACT_TO_EMAIL || 'preetiranjansarangi25@gmail.com';
const deliveryMode = process.env.CONTACT_DELIVERY || (hasSmtpConfig() ? 'smtp' : 'local');

const allowedOrigins = (process.env.CORS_ORIGIN || 'http://127.0.0.1:5173,http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const recentRequests = new Map();
const limitWindowMs = 60 * 1000;
const maxRequestsPerWindow = 5;

app.use(express.json({ limit: '24kb' }));

if (!isProduction) {
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
          return;
        }
        callback(new Error('Origin is not allowed by CORS.'));
      },
    }),
  );
}

app.get('/api/health', (_request, response) => {
  response.json({ ok: true });
});

app.post('/api/contact', async (request, response) => {
  const ip = request.headers['x-forwarded-for']?.split(',')[0]?.trim() || request.socket.remoteAddress || 'unknown';
  if (!isAllowed(ip)) {
    response.status(429).json({ message: 'Too many messages. Please try again in a minute.' });
    return;
  }

  const form = normalizeForm(request.body);
  const errors = validateForm(form);
  if (Object.keys(errors).length > 0) {
    response.status(400).json({ message: 'Please fix the highlighted fields.', errors });
    return;
  }

  try {
    if (deliveryMode === 'local' || !hasSmtpConfig()) {
      await saveLocalMessage(form);
      response.json({
        message: 'Message received successfully. It was saved locally because SMTP is not configured yet.',
      });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      connectionTimeout: Number(process.env.SMTP_CONNECTION_TIMEOUT || 10000),
      greetingTimeout: Number(process.env.SMTP_GREETING_TIMEOUT || 10000),
      socketTimeout: Number(process.env.SMTP_SOCKET_TIMEOUT || 15000),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipientEmail,
      replyTo: form.email,
      subject: `Portfolio contact: ${form.subject}`,
      text: buildTextEmail(form),
      html: buildHtmlEmail(form),
    });

    response.json({ message: 'Message sent successfully. Thank you for reaching out.' });
  } catch (error) {
    console.error('Contact email failed:', error);
    response.status(502).json({ message: getMailErrorMessage(error) });
  }
});

if (isProduction) {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));
  app.get(/.*/, (_request, response) => {
    response.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Contact backend listening on http://127.0.0.1:${port}`);
});

function normalizeForm(body = {}) {
  return {
    name: String(body.name || '').trim(),
    email: String(body.email || '').trim(),
    subject: String(body.subject || '').trim(),
    message: String(body.message || '').trim(),
  };
}

function validateForm(form) {
  const errors = {};
  if (form.name.length < 2) errors.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Please enter a valid email.';
  if (form.subject.length < 3) errors.subject = 'Please add a subject.';
  if (form.message.length < 10) errors.message = 'Please write a message of at least 10 characters.';
  if (form.message.length > 3000) errors.message = 'Please keep the message under 3000 characters.';
  return errors;
}

function hasSmtpConfig() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

async function saveLocalMessage(form) {
  const messagesPath = path.join(__dirname, '..', 'messages');
  await fs.mkdir(messagesPath, { recursive: true });
  await fs.appendFile(
    path.join(messagesPath, 'contact-messages.jsonl'),
    `${JSON.stringify({ ...form, receivedAt: new Date().toISOString() })}\n`,
    'utf8',
  );
}

function getMailErrorMessage(error) {
  if (process.env.NODE_ENV !== 'production' && error?.message) {
    return `Email delivery failed: ${error.message}`;
  }
  return 'Message could not be sent right now. Please check the email configuration.';
}

function isAllowed(ip) {
  const now = Date.now();
  const history = (recentRequests.get(ip) || []).filter((timestamp) => now - timestamp < limitWindowMs);
  if (history.length >= maxRequestsPerWindow) {
    recentRequests.set(ip, history);
    return false;
  }
  history.push(now);
  recentRequests.set(ip, history);
  return true;
}

function buildTextEmail(form) {
  return [
    'New portfolio contact message',
    '',
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Subject: ${form.subject}`,
    '',
    form.message,
  ].join('\n');
}

function buildHtmlEmail(form) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2>New portfolio contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(form.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(form.email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(form.subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(form.message).replace(/\n/g, '<br>')}</p>
    </div>
  `;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
