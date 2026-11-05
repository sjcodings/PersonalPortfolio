import { GraduationCap, MapPin, Target, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const facts = [
  { icon: GraduationCap, label: "Education", value: "B.Sc. Information Technology" },
  { icon: Code2, label: "College", value: "MSG-SGKM College of Arts, Science and Commerce" },
  { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra, India" },
  { icon: Target, label: "Career Goal", value: "Frontend or Junior Full Stack Developer" }
];

export default function About() {
  return <section id="about" className="section-wrap">
    <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="About me" title="Turning curiosity into code." description="A practical learner focused on building useful, accessible, and responsive web experiences." />
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5 text-[15px] leading-8 text-slate-400">
          <p>I'm a B.Sc. Information Technology graduate developing my skills in frontend and full-stack web development. I enjoy taking ideas from a blank page to a working interface and improving the details along the way.</p>
          <p>Through personal projects, I've practised HTML, CSS, JavaScript, React, and Tailwind CSS. I'm continuously strengthening my coding fundamentals and learning how to build responsive applications with maintainable components and reliable data handling.</p>
          <p>My goal is to begin my IT career in a frontend or junior full-stack role where I can contribute, learn from experienced developers, and grow through real-world work.</p>
          
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {facts.map(({ icon: Icon, label, value }) => <div key={label} className="surface-card rounded-2xl p-5 transition hover:-translate-y-1 hover:border-violet-400/30">
            <div className="mb-5 inline-flex rounded-xl bg-violet-400/10 p-3 text-violet-300"><Icon size={20}/></div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-200">{value}</p>
            {label === "College" && <p className="mt-2 text-xs text-slate-500">Graduated 2022</p>}
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
