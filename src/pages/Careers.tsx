import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Laptop2,
  Rocket,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import careersBg from "@/assets/careers-bg.jpg";

const internshipTracks = [
  {
    icon: Code2,
    title: "Software Development Intern",
    detail: "Work on React, TypeScript, frontend features, APIs, and practical product delivery.",
  },
  {
    icon: Laptop2,
    title: "UI/UX & Web Intern",
    detail: "Support landing pages, design refinements, responsive layouts, and content presentation.",
  },
  {
    icon: Rocket,
    title: "AI & Automation Intern",
    detail: "Contribute to AI workflows, automation ideas, and implementation support on live projects.",
  },
];

const programHighlights = [
  "Real project exposure with mentor support",
  "Hands-on learning in web, AI, and business technology",
  "Structured weekly reviews and portfolio-building guidance",
  "Certificate and performance-based growth opportunities",
];

const candidateSignals = [
  "Students or fresh graduates from technical, design, or related programs",
  "Comfortable learning fast and taking ownership of small deliverables",
  "Basic understanding of web development, design tools, or AI concepts",
  "Strong communication, curiosity, and consistency in execution",
];

const applicationSteps = [
  { step: "Apply", desc: "Send your resume, portfolio, or project links with the internship track you want." },
  { step: "Review", desc: "We assess your skills, interest, and fit for current intern openings." },
  { step: "Discussion", desc: "Short conversation about your background, goals, and availability." },
  { step: "Start", desc: "Selected candidates receive onboarding details and project orientation." },
];

const trainerHiringOptions = [
  {
    icon: GraduationCap,
    title: "Professional IT Trainers",
    detail: "We are hiring experienced trainers who can deliver practical sessions in software development, cloud, cybersecurity, AI, and modern tools.",
  },
  {
    icon: Laptop2,
    title: "IT Tutors",
    detail: "We are looking for tutors who can support students with technical concepts, certification preparation, project guidance, and hands-on lab learning.",
  },
  {
    icon: Code2,
    title: "Bootcamp & Project Mentors",
    detail: "We are also hiring mentors who can lead coding batches, workshops, capstone projects, and job-ready technical practice sessions.",
  },
];

const internshipApplicationUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=ayush@clickmicrosystem.in&su=Internship%20Application%20-%20Field%20of%20Interest&body=Hello%20Ayush%2C%0A%0AI%20would%20like%20to%20apply%20for%20an%20internship%20at%20Click%20Microsystem.%0A%0AField%20of%20interest%3A%20%0AFull%20name%3A%20%0ACollege%20%2F%20Course%3A%20%0APhone%20number%3A%20%0AAvailable%20from%3A%20%0A%0AI%20will%20attach%20my%20resume%20for%20review.%0A%0ARegards%2C%0A";

const trainerApplicationUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=ayush@clickmicrosystem.in&su=Application%20for%20IT%20Trainer%20or%20Tutor%20Role&body=Hello%20Ayush%2C%0A%0AI%20would%20like%20to%20apply%20for%20the%20IT%20Trainer%20%2F%20Tutor%20role%20at%20Click%20Microsystem.%0A%0ARole%20of%20interest%3A%20%0AFull%20name%3A%20%0APhone%20number%3A%20%0AEmail%20address%3A%20%0ATeaching%20experience%3A%20%0ASpecialization%20%2F%20technologies%3A%20%0ACurrent%20location%3A%20%0AAvailability%3A%20%0A%0AI%20will%20attach%20my%20resume%20for%20review.%0A%0ARegards%2C%0A";

const Careers = () => (
  <div className="min-h-screen bg-white">
    <Navbar />

    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:px-8 md:pb-20 md:pt-36">
      <div className="absolute inset-0">
        <img src={careersBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>
      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300 sm:text-sm">Careers</span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Internship opportunities for people ready to build, learn, and contribute.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            We are hiring interns who want meaningful project exposure, strong mentorship, and a practical path into modern
            software, AI, and digital product work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={internshipApplicationUrl} target="_blank" rel="noreferrer">
              <Button size="lg" className="w-full gap-2 bg-orange-500 px-8 font-semibold text-white hover:bg-orange-600 sm:w-auto">
                Apply for Internship <Send size={18} />
              </Button>
            </a>
            <p className="text-sm text-white/75 sm:self-center">
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-orange-200 bg-white/10 px-8 font-semibold text-white hover:bg-white/20 hover:text-white sm:w-auto"
              >
                Talk to Our Team <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Internship Tracks"
          title="Open roles for ambitious interns"
          description="Choose the path that best fits your current skills and the kind of work you want to grow into."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {internshipTracks.map((track, index) => (
            <AnimatedSection key={track.title} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-orange-100 bg-white p-6 shadow-lg shadow-slate-200/35">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                  <track.icon size={26} className="text-orange-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900">{track.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{track.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-orange-50/50">
      <div className="container-custom grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <AnimatedSection direction="left">
          <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300 sm:text-sm">Why Join</span>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">A practical internship, not a passive one.</h2>
            <div className="mt-6 space-y-4">
              {programHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Sparkles size={18} className="mt-0.5 flex-shrink-0 text-orange-300" />
                  <span className="text-sm text-white/85">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 rounded-2xl bg-white/5 p-5 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 text-orange-300">
                  <Users size={16} />
                  <span className="text-sm font-semibold">Mentorship</span>
                </div>
                <p className="mt-2 text-sm text-white/80">Work closely with a team that reviews, guides, and helps you improve.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-orange-300">
                  <GraduationCap size={16} />
                  <span className="text-sm font-semibold">Growth</span>
                </div>
                <p className="mt-2 text-sm text-white/80">Build confidence, project experience, and proof of capability for your next step.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg shadow-slate-200/35 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500 sm:text-sm">Who Should Apply</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl">What we look for in interns</h2>
            <div className="mt-6 space-y-4">
              {candidateSignals.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                  <span className="text-sm leading-relaxed text-slate-600">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Application tip</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Include GitHub, portfolio, LinkedIn, or class projects if you have them. We value initiative and proof of work.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="We Are Hiring"
          title="We are hiring professional IT trainers and IT tutors"
          description="Join Click Microsystem as a trainer, tutor, or mentor and help deliver practical technical learning experiences across student, institute, and professional programs."
        />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trainerHiringOptions.map((option, index) => (
              <AnimatedSection key={option.title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-orange-100 bg-white p-6 shadow-lg shadow-slate-200/35">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                    <option.icon size={26} className="text-orange-500" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-900">{option.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{option.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="right">
            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300 sm:text-sm">Who Should Apply</span>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Trainer and tutor roles for different teaching environments</h2>
              <div className="mt-6 space-y-4">
                {[
                  "Professionals with experience teaching software, cloud, AI, cybersecurity, or related IT subjects",
                  "Tutors who can guide students through practical assignments, projects, and technical foundations",
                  "Mentors who are confident handling workshops, bootcamps, and certification-oriented sessions",
                  "Candidates available for onsite, remote, or hybrid teaching and mentoring engagements",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Sparkles size={18} className="mt-0.5 flex-shrink-0 text-orange-300" />
                    <span className="text-sm text-white/85">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={trainerApplicationUrl} target="_blank" rel="noreferrer">
                  <Button size="lg" className="w-full gap-2 bg-orange-500 px-8 font-semibold text-white hover:bg-orange-600 sm:w-auto">
                    Apply for Trainer Role <Send size={18} />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full border-white/20 bg-transparent px-8 font-semibold text-white hover:bg-white/10 sm:w-auto">
                    Talk to Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="How It Works"
          title="Simple  hiring process"
          description="We keep the application journey short, clear, and focused on potential."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {applicationSteps.map((item, index) => (
            <AnimatedSection key={item.step} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/30">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-slate-950">
      <div className="container-custom">
        <AnimatedSection className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center text-white shadow-xl sm:p-8 md:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/15 text-orange-300">
            <BriefcaseBusiness size={30} />
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl md:text-4xl">Ready to apply for an internship?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Send your resume and a short introduction to our team. Mention your preferred internship track, availability, and any project links.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={internshipApplicationUrl} target="_blank" rel="noreferrer">
              <Button size="lg" className="w-full gap-2 bg-orange-500 px-8 font-semibold text-white hover:bg-orange-600 sm:w-auto">
                Email Your Application <Send size={18} />
              </Button>
            </a>
            <p className="text-sm text-white/70">
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full border-white/20 bg-transparent px-8 font-semibold text-white hover:bg-white/10 sm:w-auto">
                Contact for Details <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </div>
);

export default Careers;
