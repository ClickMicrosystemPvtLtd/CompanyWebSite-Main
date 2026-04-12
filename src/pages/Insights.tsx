import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Cloud, Code, Shield, Blocks, Globe, Zap, Server, MonitorSmartphone, Brain } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sectionBg4 from "@/assets/section-bg-4.jpg";

const topics = [
  { icon: Brain, title: "AI and Machine Learning", desc: "Increasing integration of AI in applications for automation and predictive analytics." },
  { icon: Code, title: "Low-Code/No-Code Development", desc: "Tools that allow users to create applications with minimal coding knowledge." },
  { icon: Zap, title: "DevOps", desc: "Emphasis on collaboration between development and operations for faster deployment." },
  { icon: Cloud, title: "Cloud-Native", desc: "Building and running applications that exploit the advantages of cloud computing." },
  { icon: Server, title: "Microservices", desc: "Architectural style structuring applications as loosely coupled services." },
  { icon: Blocks, title: "Blockchain", desc: "Expanding use beyond cryptocurrency to supply chain and smart contracts." },
  { icon: Shield, title: "Cybersecurity", desc: "Increasing focus on security solutions and practices in software development." },
  { icon: MonitorSmartphone, title: "Edge Computing", desc: "Processing data near the source instead of relying on centralized data centers." },
  { icon: Globe, title: "Digital Transformation", desc: "Adapting to new technologies to improve business processes and customer experiences." },
  { icon: Cpu, title: "Advanced Automation", desc: "AI-driven automation tools to streamline operations, reduce costs, and enhance productivity." },
];

const Insights = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img src={sectionBg4} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-3xl">
          <span className="text-accent font-display text-sm font-medium tracking-wider uppercase text-hero-sub">Insights</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 leading-[1.1] text-hero-shadow">
            Stay Ahead with <span className="gradient-text">Expert Insights</span>
          </h1>
          <p className="text-lg text-white/90 leading-relaxed text-hero-sub">
            We offer thought leadership to keep you informed of the latest trends, technologies, and best practices in the IT world.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading label="Technology Trends" title="Next-Gen Technology Ecosystem" description="Focusing on future-forward technologies shaping the digital landscape." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((t, i) => (
            <AnimatedSection key={t.title} delay={i * 0.05}>
              <div className="glass-card p-6 h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <t.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA with BG */}
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden p-10 md:p-16 text-center">
            <div className="absolute inset-0">
              <img src={sectionBg4} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/80" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
                Want to Learn More?
              </h2>
              <p className="text-white/85 max-w-xl mx-auto mb-8 text-hero-sub">
                Connect with our experts and explore how emerging technologies can transform your business.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-cyan-light font-semibold px-10 gap-2">
                  Contact Us <ArrowRight size={18} />
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

export default Insights;
