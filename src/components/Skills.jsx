import { useEffect, useRef, useState } from "react";
import { Code2, Database, GitBranch, Server } from "lucide-react";
import { skillGroups } from "../data/skills.js";
import SectionHeading from "./SectionHeading.jsx";

const icons = [Code2, Server, Database, GitBranch];

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <section id="skills" className="section-wrap border-y border-white/[0.04] bg-white/[0.015]">
    <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="Technical toolkit" title="Skills I'm building with." description="These percentages are my own learning estimates, not official assessments or professional proficiency ratings." />
      <div ref={ref} className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] || Code2;
          return <div key={group.title} className="surface-card rounded-2xl p-6 sm:p-7">
            <div className="mb-7 flex items-center gap-3"><span className="rounded-xl bg-violet-400/10 p-3 text-violet-300"><Icon size={20}/></span><h3 className="font-bold text-white">{group.title}</h3></div>
            <div className="space-y-5">
              {group.skills.map(skill => <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between gap-3 text-sm"><span className="text-slate-300">{skill.name}</span><span className="font-mono text-xs text-slate-500">{skill.level}%</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]" role="progressbar" aria-label={`${skill.name} self-assessed learning level`} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
                  <div className="skill-bar h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400" style={{ width: visible ? `${skill.level}%` : "0%", transition: "width 1000ms cubic-bezier(.2,.7,.2,1)" }} />
                </div>
              </div>)}
            </div>
          </div>;
        })}
      </div>
      
    </div>
  </section>;
}
