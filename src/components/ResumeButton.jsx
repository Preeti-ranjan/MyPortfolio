import { Download } from 'lucide-react';
import { profile } from '../data/portfolioData.js';

export default function ResumeButton({ variant = 'primary', className = '' }) {
  const base =
    'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink';
  const styles =
    variant === 'primary'
      ? 'bg-white text-ink hover:bg-cyan'
      : 'border border-line bg-white/5 text-white hover:border-cyan/60 hover:bg-cyan/10';

  if (!profile.resumeUrl) {
    return (
      <button
        type="button"
        disabled
        title="Add the real resume PDF to enable this download."
        className={`${base} ${styles} cursor-not-allowed opacity-55 ${className}`}
      >
        <Download size={17} aria-hidden="true" />
        Download Resume
      </button>
    );
  }

  return (
    <a href={profile.resumeUrl} download className={`${base} ${styles} ${className}`}>
      <Download size={17} aria-hidden="true" />
      Download Resume
    </a>
  );
}
