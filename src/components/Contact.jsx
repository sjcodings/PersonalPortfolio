import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const initialForm = { name: "", email: "", subject: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const update = (event) => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
    if (status !== "idle") { setStatus("idle"); setStatusMessage(""); }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email address.";
    else if (!emailPattern.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (status === "loading" || !validate()) return;
    // Configure VITE_CONTACT_ENDPOINT in .env.local to connect a backend or form service.
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      setStatusMessage("My form is validated, but it is not connected yet.");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error("The server could not accept your message. Please try again.");
      setStatus("success");
      setStatusMessage("Thanks! Your message was submitted successfully.");
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setStatusMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  const fieldClass = (name) => `form-field ${errors[name] ? "border-rose-400/70 focus:border-rose-400" : ""}`;
  return <section id="contact" className="section-wrap">
    <div className="mx-auto max-w-7xl">
      <SectionHeading title="Get In Touch"/>
      <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <div className="space-y-4">
          <a href="mailto:surajsj167@gmail.com" className="surface-card flex items-start gap-4 rounded-2xl p-5 transition hover:border-violet-400/30"><span className="rounded-xl bg-violet-400/10 p-3 text-violet-300"><Mail size={20}/></span><span><span className="block text-sm font-semibold text-white">Email</span><span className="mt-1 block text-sm text-slate-400">surajsj167@gmail.com</span></span></a>
          <div className="surface-card flex items-start gap-4 rounded-2xl p-5"><span className="rounded-xl bg-violet-400/10 p-3 text-violet-300"><MapPin size={20}/></span><span><span className="block text-sm font-semibold text-white">Location</span><span className="mt-1 block text-sm text-slate-400">Mumbai, Maharashtra, India</span></span></div>
          <div className="surface-card rounded-2xl p-5"><p className="text-sm font-semibold text-white">Find me online</p><div className="mt-4 flex gap-3"><a href="https://github.com/sjcodings" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-violet-400/40 hover:text-white"><Github size={19}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn placeholder" className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-violet-400/40 hover:text-white"><Linkedin size={19}/></a></div></div>
        </div>
        <form onSubmit={submit} noValidate className="surface-card rounded-2xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div><label className="form-label" htmlFor="name">Full Name</label><input className={fieldClass("name")} id="name" name="name" autoComplete="name" value={form.name} onChange={update} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name"/>{errors.name && <p id="name-error" className="field-error">{errors.name}</p>}</div>

            <div><label className="form-label" htmlFor="email">Email Address</label><input className={fieldClass("email")} id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@example.com"/>{errors.email && <p id="email-error" className="field-error">{errors.email}</p>}</div>

            <div className="sm:col-span-2"><label className="form-label" htmlFor="subject">Subject</label><input className={fieldClass("subject")} id="subject" name="subject" value={form.subject} onChange={update} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} placeholder="What would you like to discuss?"/>{errors.subject && <p id="subject-error" className="field-error">{errors.subject}</p>}</div>

            <div className="sm:col-span-2"><label className="form-label" htmlFor="message">Message</label><textarea className={`${fieldClass("message")} min-h-36 resize-y`} id="message" name="message" value={form.message} onChange={update} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder="Write your message here..."/>{errors.message && <p id="message-error" className="field-error">{errors.message}</p>}</div>
          </div>
          
          <button disabled={status === "loading"} type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-violet-400 disabled:cursor-wait disabled:opacity-60">{status === "loading" ? "Sending..." : "Submit Message"} <Send size={16}/></button>
          {statusMessage && <div role="status" aria-live="polite" className={`mt-5 flex items-start gap-2 rounded-xl border p-3 text-sm leading-6 ${status === "success" ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-200" : "border-amber-400/20 bg-amber-400/[0.06] text-amber-100"}`}>{status === "success" ? <CheckCircle2 className="mt-1 shrink-0" size={16}/> : <AlertCircle className="mt-1 shrink-0" size={16}/>}<span>{statusMessage}</span></div>}
        </form>
      </div>
    </div>
  </section>;
}
