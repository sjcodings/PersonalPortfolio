import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden px-5 pb-16 pt-28 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div className="relative z-10">
          
          <p className="mb-4 text-sm font-semibold uppercase tracking-[.25em] text-violet-300">Hi, I'm Suraj Jaiswar</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Frontend Developer <span className="text-slate-500">|</span> <span className="gradient-text">Aspiring Full Stack Developer</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I build responsive, user-friendly web applications using modern web technologies. I'm passionate about learning, solving problems, and creating meaningful digital experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:bg-violet-400">View My Projects <ArrowUpRight size={17} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-violet-300/60 hover:bg-white/5">Contact Me <ArrowDownRight size={17} /></a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-slate-400">
            <span className="mr-1 text-xs uppercase tracking-widest text-slate-500">Connect</span>
            <a aria-label="GitHub profile" href="https://github.com/sjcodings" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2.5 transition hover:border-violet-400/50 hover:text-white"><Github size={18} /></a>
            <a aria-label="LinkedIn profile placeholder" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2.5 transition hover:border-violet-400/50 hover:text-white"><Linkedin size={18} /></a>
            <a aria-label="Email Suraj" href="mailto:surajsj167@gmail.com" className="rounded-full border border-white/10 p-2.5 transition hover:border-violet-400/50 hover:text-white"><Mail size={18} /></a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/25 via-blue-500/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#171b2b] to-[#0e1220] p-4 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between px-3 pb-4 pt-2">
              <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"/></div>
              <span className="font-mono text-xs text-slate-500">developer.profile</span>
            </div>
            <div className="flex aspect-[4/4.4] flex-col items-center justify-center rounded-2xl border border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/20 via-[#111627] to-[#0b0e18] p-8 text-center">
              <div>
              <img className="mb-6 grid h-36 w-36 place-items-center rounded-full border border-violet-300/30 bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-5xl font-black text-violet-200 shadow-xl shadow-violet-950/30" src={profile} alt="profile_image" />
              </div>
              <Sparkles className="mb-3 text-violet-300" size={21} />
              <p className="text-2xl font-bold text-white">Building the web,</p>
              <p className="mt-1 text-2xl font-bold text-violet-300">one project at a time.</p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">B.Sc. Information Technology · Mumbai, India</p>
            </div>
            <div className="flex items-center justify-between px-3 pb-2 pt-4 text-xs text-slate-500"><span>React · JavaScript · Tailwind</span><span className="text-emerald-300">● Learning & building</span></div>
          </div>
          <p className="mt-3 text-center text-xs text-slate-600">Replace this initials card with your professional photo whenever ready.</p>
        </div>
      </div>
    </section>
  );
}
