import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Landmark, Heart, Shield as InsuranceIcon, GraduationCap, Factory, Truck, Wifi, Building } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sectionBg1 from "@/assets/section-bg-1.jpg";

const industries = [
  {
    icon: Car,
    title: "Automotive",
    desc: "Optimize manufacturing, supply chain, and customer experiences through digital transformation with smart manufacturing, IoT, digital twin technology, and robust cybersecurity.",
    solutions: ["System Integration for Seamless Operations", "Smart Manufacturing & IoT", "Digital Twin Technology", "Customer Experience & After-Sales", "Cybersecurity & Compliance"],
  },
  {
    icon: Landmark,
    title: "Banking & Capital Markets",
    desc: "Drive innovation, security, and regulatory compliance with advanced IT solutions for digital banking transformation, risk management, and financial analytics.",
    solutions: ["Digital Banking Transformation", "Risk Management & Compliance", "Cybersecurity & Data Protection", "Financial Analytics & BI", "Process Optimization & Automation"],
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    desc: "Enhance patient care, streamline operations, and stay compliant with cutting-edge technology including AI-driven analytics, telemedicine, and IoMT solutions.",
    solutions: ["Advanced Patient Care Solutions", "Clinical Research & Drug Development", "Healthcare Operations Optimization", "Cybersecurity & Data Privacy", "Smart Healthcare & IoMT"],
  },
  {
    icon: InsuranceIcon,
    title: "Insurance",
    desc: "Leverage data analytics and AI to offer better services, improve risk management, and streamline claims processing with innovative digital platforms.",
    solutions: ["AI-Driven Risk Management", "Customer-Centric Digital Platforms", "Streamlined Claims Processing", "Regulatory Compliance", "IoT Integration"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Modernize learning platforms and administrative processes for a seamless educational experience with smart learning, cloud collaboration, and EdTech integration.",
    solutions: ["Smart Learning Platforms", "Student & Faculty Management", "Cloud-Based Collaboration", "Data Analytics for Education", "EdTech Integration"],
  },
  {
    icon: Factory,
    title: "Manufacturing & Retail",
    desc: "Enable efficient production, distribution, and sales through integrated systems, smart manufacturing, supply chain optimization, and retail innovation.",
    solutions: ["Smart Manufacturing & IoT", "Supply Chain Optimization", "Retail Innovation", "Sustainability & Green Manufacturing"],
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Optimize operations with integrated, real-time solutions for supply chain management, digital transformation, and customer experience enhancement.",
    solutions: ["Integrated Supply Chain Management", "Digital Transformation & Automation", "Customer Experience Enhancement", "Sustainability & Green Logistics"],
  },
  {
    icon: Wifi,
    title: "Communication & Technology",
    desc: "Enhance innovation and customer engagement with AI-powered solutions, cloud transformation, 5G networks, and media management.",
    solutions: ["AI-Powered Customer Engagement", "Cloud Transformation", "5G & Next-Gen Networks", "Media & Content Management"],
  },
  {
    icon: Building,
    title: "Government",
    desc: "Enhance public services and governance with secure, scalable IT solutions including secure infrastructure, streamlined operations, and digital citizen engagement.",
    solutions: ["Secure IT Infrastructure", "Streamlined Operations", "Data-Driven Decision-Making", "Digital Citizen Engagement", "Compliance & Transparency"],
  },
];

const Industries = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img src={sectionBg1} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-3xl">
          <span className="text-accent font-display text-sm font-medium tracking-wider uppercase text-hero-sub">Industries</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 leading-[1.1] text-hero-shadow">
            Tailored Solutions for <span className="gradient-text">Every Industry</span>
          </h1>
          <p className="text-lg text-white/90 leading-relaxed text-hero-sub">
            We understand the unique challenges each industry faces and provide solutions tailored to meet those demands.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.title} delay={i * 0.06}>
              <div className="glass-card p-6 h-full flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <ind.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{ind.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{ind.desc}</p>
                <div className="space-y-1.5">
                  {ind.solutions.slice(0, 3).map((s) => (
                    <div key={s} className="text-xs text-accent flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {s}
                    </div>
                  ))}
                  {ind.solutions.length > 3 && (
                    <div className="text-xs text-muted-foreground">+{ind.solutions.length - 3} more</div>
                  )}
                </div>
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
              <img src={sectionBg1} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/80" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
                Let's Solve Your Industry Challenges
              </h2>
              <p className="text-white/85 max-w-xl mx-auto mb-8 text-hero-sub">
                Partner with ClickMicroSystem for solutions tailored to your industry's unique demands.
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

export default Industries;
