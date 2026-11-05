import { useMemo, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects.js";
import SectionHeading from "./SectionHeading.jsx";

const filters = ["All", "React", "JavaScript"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter(project => project.category === filter), [filter]);
  return <section id="projects" className="section-wrap">
    <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="Selected work" title="Projects that put learning into practice." description="A selection of personal projects built to practise interfaces, component design, and core frontend concepts." />
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map(item => <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${filter === item ? "bg-violet-500 text-white" : "border border-white/10 text-slate-400 hover:border-white/25 hover:text-white"}`} aria-pressed={filter === item}>{item}</button>)}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => <article key={project.title} className="surface-card group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">
          <div className="relative overflow-hidden border-b border-white/[0.06] bg-[#101525]">
            <img src={project.image} alt={project.imageAlt} loading="lazy" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
            <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#080b14]/80 px-3 py-1 text-xs text-slate-300 backdrop-blur">{project.category}</span>
          </div>
          <div className="p-6 sm:p-7">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.tech.map(tech => <span key={tech} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-xs text-slate-300">{tech}</span>)}</div>
            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-5">
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-violet-400/40 hover:bg-white/5"><Github size={16}/> Repository <ArrowUpRight size={14}/></a>
              {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-violet-500/15 px-3.5 py-2.5 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/25">Live Demo <ExternalLink size={15}/></a> : <span className="text-xs text-slate-500">Live demo link not added</span>}
            </div>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
