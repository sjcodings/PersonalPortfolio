import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      let current = "Home";
      links.forEach((name) => {
        const el = document.getElementById(name.toLowerCase());
        if (el && el.getBoundingClientRect().top <= 140) current = name;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080b14]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" onClick={close} className="text-lg font-extrabold tracking-tight text-white">
          MYPORTFOLIO<span className="text-violet-400">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={`text-sm transition-colors ${active === link ? "text-violet-300" : "text-slate-400 hover:text-white"}`}>
              {link}
            </a>
          ))}
          <a href="/Suraj Jaiswar.pdf" download className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400">
            <Download size={15} /> Resume
          </a>
        </div>
        <button type="button" className="rounded-lg p-2 text-slate-200 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#0b0e19] px-5 py-4 md:hidden">
        <div className="flex flex-col gap-1">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={close} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{link}</a>)}
          <a href="/Suraj Jaiswar.pdf" download onClick={close} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white"><Download size={16} /> Download Resume</a>
        </div>
      </div>}
    </header>
  );
}
