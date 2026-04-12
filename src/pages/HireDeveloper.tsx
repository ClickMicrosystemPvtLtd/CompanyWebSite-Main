import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BookOpen, Brain, Briefcase, CheckCircle, Code, LoaderCircle, MonitorSmartphone, Send, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import hireDevBg from "@/assets/hire-dev-bg.jpg";
import sectionBg3 from "@/assets/section-bg-3.jpg";
import { postJson } from "@/lib/api";
import { MOBILE_PATTERN, validateEmail, validateMobileNumber } from "@/lib/contactValidation";

const programs = [
  { icon: Brain, title: "AI & Machine Learning Training", desc: "Hands-on learning in prompting, NLP, computer vision, forecasting, and responsible AI adoption.", skills: ["OpenAI", "Prompt Design", "MLOps", "Evaluation"] },
  { icon: Code, title: "Full Stack Development Training", desc: "Modern web engineering tracks covering frontend, backend, APIs, and deployment workflows.", skills: ["React", "Node.js", "TypeScript", "Testing"] },
  { icon: MonitorSmartphone, title: "Mobile App Training", desc: "Build native and cross-platform apps with structured projects, mentoring, and release-readiness.", skills: ["Flutter", "React Native", "Kotlin", "Swift"] },
  { icon: Shield, title: "Cloud, DevOps & Security Training", desc: "Prepare teams to manage infrastructure, automation, and compliance-aware delivery.", skills: ["AWS", "Azure", "Docker", "CI/CD"] },
];

const formats = [
  { icon: Users, title: "Corporate Team Training", desc: "Instructor-led sessions tailored around your company's tools, use cases, and delivery goals.", best: "Department upskilling" },
  { icon: BookOpen, title: "Bootcamps", desc: "Fast-paced, project-based bootcamps for students, freshers, and transition learners.", best: "Career acceleration" },
  { icon: Briefcase, title: "Workshop Series", desc: "Short focused programs for specific topics like AI adoption, automation, or secure cloud operations.", best: "Targeted capability building" },
];

const learningJourney = [
  { step: "01", title: "Skill Assessment", desc: "We understand your learners, goals, current level, and preferred delivery format." },
  { step: "02", title: "Curriculum Planning", desc: "A practical syllabus is created with projects, milestones, and business relevance." },
  { step: "03", title: "Live Training", desc: "Learners attend guided sessions, complete projects, and receive mentor feedback." },
  { step: "04", title: "Certification & Support", desc: "We close with assessment, certification, and a roadmap for next-step learning." },
];

const initialForm = {
  name: "",
  email: "",
  mobileNumber: "",
  organization: "",
  trainingNeed: "",
  message: "",
};

const HireDeveloper = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<{ email?: string; mobileNumber?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const nextErrors = {
      email: validateEmail(formData.email) ?? undefined,
      mobileNumber: validateMobileNumber(formData.mobileNumber) ?? undefined,
    };

    setErrors(nextErrors);
    return !nextErrors.email && !nextErrors.mobileNumber;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Fix highlighted fields",
        description: "Please enter a valid email address and mobile number before submitting.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const result = await postJson<{ ok: boolean; message?: string }>("/api/training.php", formData);

      if (!result.ok) {
        throw new Error(result.message || "Unable to submit your training request right now.");
      }

      toast({
        title: "Training request sent",
        description: "Your training inquiry has been emailed to the team successfully.",
      });
      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={hireDevBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <div className="relative z-10 container-custom flex min-h-[70vh] items-center px-4 pt-24 sm:px-6 md:px-8 md:pt-28">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-1.5 text-sm font-medium text-orange-300">
                <BadgeCheck size={14} /> Industry-Focused Trainings
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Build stronger teams with practical <span className="gradient-text">technology training</span>.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              We deliver structured trainings in AI, software engineering, mobile development, cloud, and automation for students, professionals, and corporate teams.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="#training-form">
                <Button size="lg" className="w-full bg-orange-500 px-8 font-semibold text-white hover:bg-orange-600 sm:w-auto">
                  Book Training <ArrowRight size={18} />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-accent px-8 font-semibold text-accent-foreground shadow-lg shadow-cyan-500/30 hover:bg-cyan-light sm:w-auto">
                  Talk to Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Why Choose Us"
            title="Training that balances theory, projects, and business context"
            description="Our training model is designed to make learning practical and immediately useful."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              { icon: Zap, title: "Project-Based Learning", desc: "Every training includes assignments, guided labs, and real-world implementation exercises." },
              { icon: Users, title: "Mentor Support", desc: "Learners receive live guidance, doubt clearing, and feedback from experienced practitioners." },
              { icon: Shield, title: "Industry Relevance", desc: "Programs are aligned with current tools, workflows, and employer expectations." },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="h-full rounded-3xl border border-orange-100 bg-white p-6 shadow-lg shadow-slate-200/40">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                    <item.icon size={24} className="text-orange-500" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-orange-50/50">
        <div className="container-custom">
          <SectionHeading
            label="Programs"
            title="Training tracks for learners and teams"
            description="Choose a program based on your learning goals, technology focus, or team transformation priorities."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-orange-100 bg-white p-6 shadow-lg shadow-slate-200/30">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-100">
                      <program.icon size={28} className="text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-slate-900">{program.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{program.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {program.skills.map((skill) => (
                          <span key={skill} className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Formats"
            title="Flexible training formats"
            description="We can deliver for individuals, batches, or enterprise teams depending on your need."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {formats.map((format, index) => (
              <AnimatedSection key={format.title} delay={index * 0.1}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg shadow-slate-200/30">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                    <format.icon size={28} className="text-orange-500" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-900">{format.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{format.desc}</p>
                  <span className="mt-4 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    Best for: {format.best}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={sectionBg3} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/88" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeading
            label="Learning Journey"
            title="How our training process works"
            description="A clear structure keeps learners engaged and gives teams measurable progress."
            light
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {learningJourney.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.15}>
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-orange-400">{step.step}</div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="training-form" className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 xl:grid-cols-2 xl:items-start">
            <AnimatedSection direction="left">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">Get Started</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                Tell us about your training requirement
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                Share your learning goals and we will recommend the most suitable curriculum, format, and duration.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Customized syllabus based on learner profile",
                  "Online, offline, or hybrid delivery options",
                  "Projects, assessments, and mentor support",
                  "Suitable for students, teams, and working professionals",
                  "Certification support for completed programs",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="flex-shrink-0 text-orange-500" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-orange-100 bg-white p-6 shadow-lg shadow-slate-200/40 sm:p-8">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Full Name *</label>
                  <Input required placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Email *</label>
                  <Input
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({ ...formData, email: value });
                      setErrors((current) => ({ ...current, email: value ? validateEmail(value) ?? undefined : undefined }));
                    }}
                    onBlur={(e) => setErrors((current) => ({ ...current, email: validateEmail(e.target.value) ?? undefined }))}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? <p className="mt-1.5 text-xs text-red-600">{errors.email}</p> : null}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Mobile Number *</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({ ...formData, mobileNumber: value });
                      setErrors((current) => ({ ...current, mobileNumber: value ? validateMobileNumber(value) ?? undefined : undefined }));
                    }}
                    onBlur={(e) => setErrors((current) => ({ ...current, mobileNumber: validateMobileNumber(e.target.value) ?? undefined }))}
                    inputMode="tel"
                    pattern={MOBILE_PATTERN.source}
                    aria-invalid={Boolean(errors.mobileNumber)}
                  />
                  {errors.mobileNumber ? <p className="mt-1.5 text-xs text-red-600">{errors.mobileNumber}</p> : null}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Organization *</label>
                  <Input required placeholder="Company, college, or team name" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Training Need *</label>
                  <Input required placeholder="AI training, web development bootcamp, cloud security workshop..." value={formData.trainingNeed} onChange={(e) => setFormData({ ...formData, trainingNeed: e.target.value })} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Message *</label>
                  <Textarea required rows={4} placeholder="Tell us about audience size, level, timeline, or preferred mode..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <Button type="submit" size="lg" disabled={submitting} className="w-full bg-orange-500 font-semibold text-white hover:bg-orange-600 disabled:opacity-70">
                  {submitting ? <LoaderCircle size={16} className="animate-spin" /> : <Send size={16} />}
                  {submitting ? "Sending..." : "Submit Training Request"}
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HireDeveloper;
