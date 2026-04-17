import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Globe, BriefcaseBusiness, BrainCircuit, Layers3, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutVisual from "@/assets/about-visual.png";
import sectionBg2 from "@/assets/section-bg-2.jpg";

const teamMembers = [
  {
    name: "Kundan",
    role: "Founder & CEO",
    icon: BriefcaseBusiness,
    bio: "Kundan leads vision, partnerships, and business strategy at ClickMicroSystem, helping clients align technology decisions with practical growth outcomes.",
  },
  {
    name: "Anu",
    role: "Director",
    icon: Layers3,
    bio: "Anu drives project execution, delivery quality, and client coordination across services, products, and training initiatives.",
  },
  {
    name: "Ayush",
    role: "AI & Technology Lead",
    icon: BrainCircuit,
    bio: "Ayush focuses on AI solutions, modern application architecture, and scalable digital systems that turn complex ideas into usable products.",
  },
];

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "info@clickmicrosystem.com",
    detail: "Reach out for partnerships, project discussions, and internship inquiries.",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9839455577",
    detail: "Talk to our team directly for urgent coordination and business conversations.",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "7D/62, Vrindvan Yojna, Lucknow, Uttar Pradesh 226030",
    detail: "Serving clients with practical onsite, remote, and hybrid support models.",
  },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 md:px-8 md:pt-32">
      <div className="absolute inset-0">
        <img src={sectionBg2} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-accent text-hero-sub sm:text-sm">About Us</span>
          <h1 className="mt-3 mb-5 font-display text-3xl font-bold leading-[1.08] text-white text-hero-shadow sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
            Your Trusted Partner in <span className="gradient-text">IT Solutions</span>
          </h1>
          <p className="text-base leading-relaxed text-white/90 text-hero-sub sm:text-lg">
            ClickMicroSystem is dedicated to driving the success of businesses through innovative IT services. With years of experience across a variety of industries, we are committed to helping clients solve complex challenges, adopt new technologies, and achieve their goals.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <AnimatedSection direction="left">
            <img src={aboutVisual} alt="Digital transformation visualization" className="mx-auto w-full max-w-sm sm:max-w-md" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-accent sm:text-sm">Our Mission</span>
            <h2 className="mt-3 mb-5 font-display text-2xl font-bold text-foreground sm:text-3xl md:mb-6 md:text-4xl">
              Empowering Businesses in the Digital Era
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:mb-6 sm:text-base">
              At ClickMicroSystem, our mission is to empower businesses to thrive in the digital era by providing reliable, scalable, and forward-thinking IT solutions. Our team of expert engineers, consultants, and strategists work closely with you to deliver solutions that meet your unique business needs.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              From AI-driven automation to secure, cloud-native infrastructures, we help organizations thrive in a digital-first world. Our expertise in low-code platforms, DevOps, and microservices enables faster innovation, stronger security, and seamless integration across every industry.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding bg-orange-50/50">
      <div className="container-custom">
        <SectionHeading
          label="Our Team"
          title="People Behind Click"
          description="Meet the core team shaping our strategy, delivery, and technology direction."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-orange-100 bg-white p-5 shadow-lg shadow-slate-200/35 sm:p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 sm:mb-5 sm:h-16 sm:w-16">
                  <member.icon size={26} className="text-orange-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">{member.name}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:text-sm">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Contact Details"
          title="Connect With Click Microsystem"
          description="If you want to discuss a project, service requirement, training need, or internship opportunity, here is the fastest way to reach us."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {contactDetails.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-orange-100 bg-white p-5 shadow-lg shadow-slate-200/35 sm:p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 sm:mb-5 sm:h-16 sm:w-16">
                  <item.icon size={26} className="text-orange-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-orange-600 sm:text-base">{item.value}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={sectionBg2} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="container-custom relative z-10">
        <SectionHeading label="Our Values" title="What Drives Us" light />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {[
            { icon: Target, title: "Innovation", desc: "Continuously pushing boundaries with cutting-edge technology solutions." },
            { icon: Users, title: "Partnership", desc: "Building lasting relationships as trusted partners to leading industries." },
            { icon: Lightbulb, title: "Excellence", desc: "Delivering consistent, high-impact results with every engagement." },
            { icon: Globe, title: "Global Impact", desc: "Transforming businesses worldwide across diverse sectors and markets." },
          ].map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="glass-card h-full border-border/30 p-5 sm:p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <v.icon size={24} className="text-accent" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-primary-foreground">{v.title}</h3>
                <p className="text-sm leading-relaxed text-white/80 text-hero-sub">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom text-center">
        <AnimatedSection>
          <h2 className="mb-4 font-display text-2xl font-bold sm:text-3xl md:text-4xl">Let&apos;s Build the Future Together</h2>
          <p className="mx-auto mb-8 max-w-xl text-sm text-muted-foreground sm:text-base">
            Partner with ClickMicroSystem and experience innovation at scale.
          </p>
          <Link to="/contact">
            <Button size="lg" className="w-full gap-2 bg-accent px-8 font-semibold text-accent-foreground hover:bg-cyan-light sm:w-auto sm:px-10">
              Contact Us <ArrowRight size={18} />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
