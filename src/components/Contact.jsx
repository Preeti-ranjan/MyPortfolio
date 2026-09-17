import { ArrowRight, GitBranch, Mail, Network, Phone } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/portfolioData.js';
import ResumeButton from './ResumeButton.jsx';
import Section from './Section.jsx';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (event) => {
    setForm((value) => ({ ...value, [event.target.name]: event.target.value }));
    setErrors((value) => ({ ...value, [event.target.name]: '' }));
    setStatus({ type: '', message: '' });
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.';
    if (!form.subject.trim()) nextErrors.subject = 'Please add a subject.';
    if (form.message.trim().length < 10) nextErrors.message = 'Please write a message of at least 10 characters.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result.errors) setErrors(result.errors);
        throw new Error(result.message || 'Message could not be sent right now.');
      }

      setForm(initialForm);
      setStatus({ type: 'success', message: result.message || 'Message sent successfully.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Let's Build Something Together" subtitle="Have an opportunity, project, or idea? Let's connect.">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <form onSubmit={submit} noValidate className="rounded-3xl border border-line bg-white/[0.035] p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={update} error={errors.name} />
            <Field label="Email" name="email" type="email" value={form.email} onChange={update} error={errors.email} />
          </div>
          <Field label="Subject" name="subject" value={form.subject} onChange={update} error={errors.subject} className="mt-5" />
          <Field
            label="Message"
            name="message"
            value={form.message}
            onChange={update}
            error={errors.message}
            className="mt-5"
            textarea
          />
          {status.message && (
            <p
              className={`mt-5 rounded-2xl border p-4 text-sm ${
                status.type === 'success'
                  ? 'border-cyan/25 bg-cyan/10 text-cyan'
                  : 'border-red-400/25 bg-red-400/10 text-red-200'
              }`}
              role="status"
            >
              {status.message}
            </p>
          )}
          <button type="submit" className="btn-primary mt-6" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={18} aria-hidden="true" />
          </button>
        </form>

        <aside className="rounded-3xl border border-line bg-white/[0.035] p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white">Contact Details</h3>
          <div className="mt-6 grid gap-3">
            <ContactLink icon={Mail} label="Email" href={`mailto:${profile.email}`} text={profile.email} />
            <ContactLink icon={Phone} label="Phone" href={`tel:${profile.phone.replace(/\s/g, '')}`} text={profile.phone} />
            <ContactLink icon={Network} label="LinkedIn" href={profile.linkedin} text="LinkedIn Profile" />
            <ContactLink icon={GitBranch} label="GitHub" href={profile.github} text="GitHub Profile" />
          </div>
          <ResumeButton variant="secondary" className="mt-7 w-full" />
        </aside>
      </div>
    </Section>
  );
}

function Field({ label, name, type = 'text', value, onChange, error, textarea = false, className = '' }) {
  const inputId = `field-${name}`;
  const Input = textarea ? 'textarea' : 'input';
  return (
    <div className={className}>
      <label htmlFor={inputId} className="mb-2 block text-sm font-semibold text-slate-200">
        {label}
      </label>
      <Input
        id={inputId}
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 6 : undefined}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className="w-full rounded-2xl border border-line bg-ink/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/70 focus:ring-2 focus:ring-cyan/20"
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactLink({ icon: Icon, label, href, text }) {
  return (
    <a className="repo-row" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
      <span className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
          <Icon size={18} aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">{label}</span>
          <span className="break-all text-sm font-semibold text-white">{text}</span>
        </span>
      </span>
    </a>
  );
}
