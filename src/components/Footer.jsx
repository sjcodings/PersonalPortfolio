import { ArrowUp, Github, Linkedin } from "lucide-react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  return <footer className="border-t border-white/[0.07] px-5 py-8 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div><a href="#home" className="text-lg font-extrabold text-white">Suraj Jaiswar<span className="text-violet-400">.</span></a><p className="mt-1 text-xs text-slate-500">Frontend Developer | Aspiring Full Stack Developer</p><p className="mt-3 text-xs text-slate-600">© {new Date().getFullYear()} Suraj Jaiswar. All rights reserved.</p></div>
      <div className="flex flex-wrap gap-x-5 gap-y-3">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} className="text-xs text-slate-400 transition hover:text-white">{link}</a>)}</div>
      <div className="flex items-center gap-3"><a href="https://github.com/sjcodings" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-2.5 text-slate-400 transition hover:text-white"><Github size={16}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn placeholder" className="rounded-full border border-white/10 p-2.5 text-slate-400 transition hover:text-white"><Linkedin size={16}/></a></div>
    </div>
    
  </footer>;
}
