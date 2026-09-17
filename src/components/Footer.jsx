import { GitBranch, Mail, Network } from 'lucide-react';
import { profile } from '../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-3 h-12 w-12 overflow-hidden rounded-2xl border border-cyan/30 bg-cyan/10">
            <img src={profile.photoUrl} alt="" className="h-full w-full object-cover object-top" />
          </div>
          <p className="mt-2 font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-slate-400">{profile.primaryRole}</p>
        </div>
        <div className="flex gap-3">
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitBranch size={19} />
          </a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Network size={19} />
          </a>
          <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={19} />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">© 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
}
