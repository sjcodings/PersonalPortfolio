import { BriefcaseBusiness, GraduationCap, Laptop2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const items = [
  { icon: GraduationCap, type: "Education", date: "Completed 2022", title: "B.Sc. Information Technology", place: "MSG-SGKM College of Arts, Science and Commerce", text: "Built a foundation in information technology and continued developing practical web development skills through independent projects." },
  { icon: Laptop2, type: "Learning journey", date: "Ongoing", title: "Frontend & Full-Stack Practice", place: "Personal projects", text: "Practising responsive UI development, reusable React components, browser storage, API concepts, and version control through self-directed projects." },
  { icon: BriefcaseBusiness, type: "Additional experience", date: "Previous experience", title: "Retail Sales Associate", place: "The Souled Store · Forever 21", text: "Retail experience helped develop customer communication, teamwork, service, and working toward targets. This is non-IT experience, listed separately from technical projects." }
];

export default function Experience() {
  return <section id="experience" className="section-wrap border-y border-white/[0.04] bg-white/[0.015]">
    <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="My journey" title="Education, practice & experience." description="A transparent overview of my education, personal technical learning, and transferable workplace skills." />
      <div className="relative ml-3 space-y-8 border-l border-violet-400/25 pl-8 sm:ml-6 sm:pl-10">
        {items.map(({ icon: Icon, ...item }) => <article key={item.title} className="relative">
          <span className="absolute -left-[45px] top-0 grid h-9 w-9 place-items-center rounded-xl border border-violet-400/25 bg-[#111426] text-violet-300 sm:-left-[57px]"><Icon size={17}/></span>
          <div className="surface-card rounded-2xl p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3"><span className="text-xs font-bold uppercase tracking-[.16em] text-violet-300">{item.type}</span><span className="text-xs text-slate-500">{item.date}</span></div>
            <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">{item.title}</h3>
            <p className="mt-1 text-sm font-medium text-slate-300">{item.place}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">{item.text}</p>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
