import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness, Cog, Shield, Code, Cloud, Cpu, Users, CheckCircle, Palette, PenSquare, Camera, Video } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sectionBg3 from "@/assets/section-bg-3.jpg";
import sectionBg1 from "@/assets/section-bg-1.jpg";

const serviceDetails = [
  {
    icon: Cog, title: "System Integration", tagline: "Connect, Optimize, Succeed",
    desc: "Unlock your organization's full potential by integrating multiple systems into a cohesive, efficient ecosystem. Our system integration services use advanced API management, cloud integration, and data synchronization techniques to streamline data flow, simplify operations, and improve scalability.",
    benefits: ["Improves Efficiency", "Enhances Decision-Making", "Supports Scalability", "Enables Real-Time Data Access", "Enhances Security & Compliance"],
  },
  {
    icon: Shield, title: "Managed IT Services", tagline: "Innovation Driven, Security Assured",
    desc: "Maximize operational efficiency with holistic IT managed services. Our proactive monitoring ensures your systems stay up-to-date and secure, while our data backup and recovery solutions provide peace of mind against potential disasters.",
    benefits: ["Cost Efficient IT Tools", "Enhanced Security", "Scalability for Growth", "Continuous Monitoring", "Latest Cloud, AI & IoT Technologies"],
  },
  {
    icon: Code, title: "Application Services", tagline: "Adapt, Optimize, and Modernize",
    desc: "From cloud-native development to legacy migration, ClickMicroSystem delivers end-to-end application services that enhance your business agility and operational efficiency. Our team leverages DevOps, AI, and microservices architectures.",
    benefits: ["Future-Ready Applications", "Enhanced Business Agility", "Faster Time to Market", "Improved User Experience", "Reduced Operational Costs"],
  },
  {
    icon: Cloud, title: "Infrastructure Services", tagline: "Infrastructure Built for Growth",
    desc: "From cloud migrations and data center optimization to advanced network architecture, we integrate high-performance infrastructure solutions that drive operational efficiency and improve business resilience.",
    benefits: ["Best-in-Class Technology", "Minimize Disruptions", "Facilitate Digital Transformation", "Drive Operational Efficiency", "Streamline Processes & Reduce Costs"],
  },
  {
    icon: Cpu, title: "Business Process Services", tagline: "End-to-End BPM Solutions",
    desc: "At ClickMicroSystem, BPS are designed to help your business optimize, streamline, and scale core functions, enabling a focus on growth. We offer solutions to reduce operational costs, drive efficiency, and integrate cutting-edge technology.",
    benefits: ["Streamlines Tasks & Boosts Efficiency", "Reduces Operational Expenses", "Provides Insights for Better Decisions", "Focuses Resources on Core Priorities"],
  },
  {
    icon: Users, title: "Consulting Services", tagline: "Driving Strategy, Growth, and Efficiency",
    desc: "Designed to propel your business toward success by addressing complex challenges with customized strategies and innovative solutions. Our team provides strategic advisory, process optimization, and change management.",
    benefits: ["Enhanced Resource Allocation", "Customer-Centric Growth", "Scalable Innovation", "Effective Change Management", "Data-Driven Insights"],
  },
];

const placementHighlights = [
  "Candidate sourcing aligned to your skill requirements",
  "Pre-screening, technical evaluation, and shortlist support",
  "Campus, fresher, and lateral hiring coordination",
  "Industry-ready training with placement assistance",
  "Faster hiring cycles with quality-focused matching",
  "Support for startups, SMBs, and enterprise teams",
];

const creativeServices = [
  {
    icon: Palette,
    title: "Graphic Designing Services",
    detail: "Creative brand assets, marketing visuals, social media posts, banners, brochures, presentations, and digital design support tailored to your business.",
  },
  {
    icon: PenSquare,
    title: "Content Writing",
    detail: "Professional content for websites, company profiles, blogs, product descriptions, marketing campaigns, and business communication needs.",
  },
  {
    icon: Camera,
    title: "Professional Photo Editors",
    detail: "High-quality image retouching, correction, compositing, catalog editing, and polished visual enhancement for brand and promotional use.",
  },
  {
    icon: Video,
    title: "Professional Video Editors",
    detail: "Editing for reels, promos, explainer videos, interviews, social campaigns, training media, and branded visual storytelling.",
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    window.setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:px-8 md:pb-20 md:pt-36">
        <div className="absolute inset-0">
          <img src={sectionBg1} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-accent text-hero-sub sm:text-sm">Our Services</span>
            <h1 className="mt-3 mb-5 font-display text-3xl font-bold leading-[1.08] text-white text-hero-shadow sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
              Explore Our <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-base leading-relaxed text-white/90 text-hero-sub sm:text-lg">
              Comprehensive IT solutions designed to meet the diverse technology needs of today&apos;s businesses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-14 md:space-y-20">
          {serviceDetails.map((svc, i) => (
            <AnimatedSection key={svc.title}>
              <div className={`grid items-start gap-6 lg:grid-cols-2 lg:gap-10 ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 sm:h-12 sm:w-12">
                      <svc.icon size={22} className="text-accent" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold sm:text-2xl lg:text-3xl">{svc.title}</h2>
                      <p className="text-sm font-medium text-accent">{svc.tagline}</p>
                    </div>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{svc.desc}</p>
                  <Link to="/contact">
                    <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-cyan-light sm:w-auto">
                      Get Started <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
                <div className={`glass-card p-5 sm:p-6 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">Benefits of Partnering with Us</h4>
                  <ul className="space-y-3">
                    {svc.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                        <span className="text-sm text-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < serviceDetails.length - 1 && <div className="mt-14 border-t border-border md:mt-20" />}
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section id="creative-services" className="section-padding scroll-mt-32 bg-orange-50/50">
        <div className="container-custom">
          <SectionHeading
            label="Creative Services"
            title="Creative support for design, content, photo editing, and video editing"
            description="Along with technology services, we also provide creative professionals who help brands communicate clearly and present their work with stronger visual impact."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {creativeServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-orange-100 bg-white p-6 shadow-lg shadow-slate-200/35">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                    <service.icon size={26} className="text-orange-500" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="mt-8 rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300 sm:text-sm">Creative Delivery</span>
                  <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Need creative specialists for your brand or campaign?</h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                    We support businesses with reliable creative execution for branding, promotions, web content, social media, product showcases, and polished media production.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <Link to="/contact">
                    <Button size="lg" className="w-full bg-orange-500 font-semibold text-white hover:bg-orange-400 sm:w-auto">
                      Request Creative Services <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="w-full border-white/20 bg-transparent font-semibold text-white hover:bg-white/10 sm:w-auto">
                      Talk to Our Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="placement-services" className="scroll-mt-32 px-4 pb-16 sm:px-6 md:px-8 md:pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-[1px] shadow-2xl shadow-orange-200/60">
              <div className="grid gap-6 rounded-[calc(1.5rem-1px)] bg-slate-950 px-5 py-6 sm:px-7 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10 lg:py-10">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
                    <BriefcaseBusiness size={16} /> Placement Services
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    Placement support that connects trained talent with real hiring opportunities.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                    Our Placement Services help organizations find job-ready candidates and help learners move from training to employment with structured screening, coordination, and employer alignment.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link to="/contact">
                      <Button size="lg" className="w-full bg-orange-500 font-semibold text-white hover:bg-orange-400 sm:w-auto">
                        Request Placement Support <ArrowRight size={18} />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="w-full border-orange-300/60 text-orange-200 hover:bg-orange-400/10 sm:w-auto">
                        Hire Through Us
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 p-5 backdrop-blur-sm sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-orange-200">What&apos;s Included</h3>
                  <ul className="mt-5 space-y-3">
                    {placementHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-orange-300" />
                        <span className="text-sm text-white/85">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl p-6 text-center sm:p-8 md:p-12 lg:p-16">
              <div className="absolute inset-0">
                <img src={sectionBg3} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-primary/80" />
              </div>
              <div className="relative z-10">
                <h2 className="mb-4 font-display text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl">
                  Start a Conversation Today
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-sm text-white/85 text-hero-sub sm:text-base">
                  Let&apos;s discuss how our services can drive your business forward.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="w-full gap-2 bg-accent px-8 font-semibold text-accent-foreground hover:bg-cyan-light sm:w-auto sm:px-10">
                    Let&apos;s Connect <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

