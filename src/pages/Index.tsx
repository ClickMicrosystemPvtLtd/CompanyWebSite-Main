import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Cloud, Cpu, Cog, Code, Users, ChevronRight, Zap, Globe, TrendingUp, BarChart3, Factory, Landmark, Heart, Car, GraduationCap, Truck, Bot, Lock, Workflow } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { successStories } from "@/data/successStories";
import heroBg from "@/assets/hero-bg.jpg";
import sectionBg1 from "@/assets/section-bg-1.jpg";
import sectionBg4 from "@/assets/section-bg-4.jpg";
import successStoriesBg from "@/assets/success-stories-bg.jpg";

const services = [
  { icon: Cog, title: "System Integration", desc: "Seamlessly connect disparate systems, enabling smoother workflows and better data management." },
  { icon: Shield, title: "Managed IT Services", desc: "End-to-end management of your IT environment, ensuring stability, security, and continuous support." },
  { icon: Code, title: "Application Services", desc: "From development to maintenance, we create robust, scalable applications for your business." },
  { icon: Cloud, title: "Infrastructure Services", desc: "Build, manage, and optimize your IT infrastructure to support current and future growth." },
  { icon: Cpu, title: "Business Process Services", desc: "Streamline and automate your business processes, enhancing efficiency and reducing costs." },
  { icon: Users, title: "Consulting Services", desc: "Expert consultants help you navigate IT strategy complexities in a rapidly changing landscape." },
];

const industries = [
  { icon: Car, label: "Automotive" },
  { icon: Landmark, label: "Banking & Finance" },
  { icon: Heart, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Education" },
  { icon: Truck, label: "Logistics" },
  { icon: Globe, label: "Government" },
  { icon: Zap, label: "Communication & Tech" },
];

const stats = [
  { value: "9+", label: "Industries Served" },
  { value: "6", label: "Core Service Lines" },
  { value: "24/7", label: "Support & Monitoring" },
  { value: "100%", label: "Client Focused" },
];

const products = [
  { icon: Bot, title: "AI Customer Assistants", desc: "Always-on support, lead qualification, and knowledge-based response automation." },
  { icon: TrendingUp, title: "Predictive Analytics", desc: "Forecast revenue, demand, and business performance using live data models." },
  { icon: Workflow, title: "Workflow Automation", desc: "Reduce manual effort across approvals, operations, and internal service processes." },
  { icon: Lock, title: "Cloud Security", desc: "Secure access, improve compliance visibility, and monitor threats centrally." },
];

const antiGravityParticles = [
  { size: 220, top: "8%", left: "6%", delay: "0s", duration: "18s" },
  { size: 140, top: "18%", left: "72%", delay: "-4s", duration: "16s" },
  { size: 180, top: "58%", left: "12%", delay: "-9s", duration: "20s" },
  { size: 110, top: "62%", left: "78%", delay: "-2s", duration: "14s" },
  { size: 90, top: "28%", left: "46%", delay: "-6s", duration: "12s" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-80" />
          <div className="antigravity-bg absolute inset-0 opacity-90">
            <div className="antigravity-core antigravity-drift" />
            <div className="antigravity-ring antigravity-ring-one" />
            <div className="antigravity-ring antigravity-ring-two" />
            <div className="antigravity-grid" />
            {antiGravityParticles.map((particle, index) => (
              <span
                key={index}
                className="antigravity-particle"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  top: particle.top,
                  left: particle.left,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 container-custom px-4 pt-24 sm:px-6 md:px-8 md:pt-28">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-sm font-medium mb-6">
                <Zap size={14} /> Empowering Digital Transformation
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mb-6 font-display text-4xl font-bold leading-[1.1] text-white text-hero-shadow sm:text-5xl lg:text-6xl xl:text-7xl">
              Connecting Systems,{" "}
              <span className="gradient-text">Empowering</span>{" "}
              Industries
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mb-8 max-w-2xl text-base leading-relaxed text-white/90 text-hero-sub sm:text-lg md:text-xl">
              Through future-ready solutions in AI, cloud, and cybersecurity, we elevate standards and foster seamless integration across every sector.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/services">
                <Button size="lg" className="w-full gap-2 bg-accent px-8 font-semibold text-accent-foreground hover:bg-cyan-light sm:w-auto">
                  Explore Services <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-accent px-8 font-semibold text-accent-foreground shadow-lg shadow-cyan-500/30 hover:bg-cyan-light sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-6 left-1/2 hidden h-10 w-6 -translate-x-1/2 items-start justify-center rounded-full border-2 border-primary-foreground/30 pt-2 sm:flex">
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20 px-4 md:px-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="glass-card p-6 text-center accent-glow">
                <div className="font-display font-bold text-3xl md:text-4xl gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading label="Our Services" title="Comprehensive IT Solutions for the Modern Enterprise" description="Whether you're looking to optimize infrastructure or streamline business processes, we have the expertise to help you succeed." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.08}>
                <Link to="/services" className="group block glass-card p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <svc.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight size={14} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-orange-50/40">
        <div className="container-custom">
          <SectionHeading
            label="Our Products"
            title="Ready-to-deploy digital products for modern business teams"
            description="Explore productized solutions designed to improve customer experience, automation, analytics, and security."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <AnimatedSection key={product.title} delay={i * 0.08}>
                <Link to="/products" className="group block rounded-3xl border border-orange-100 bg-white p-6 shadow-lg shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                    <product.icon size={26} className="text-orange-500" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-900 group-hover:text-orange-600">{product.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{product.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-orange-500">
                    View product details <ChevronRight size={14} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Showcase */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={successStoriesBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeading label="Success Stories" title="AI Products That Deliver Real Impact" description="See how our custom-built solutions have transformed businesses across industries." light />
          <div className="space-y-16">
            {successStories.slice(0, 4).map((story, i) => (
              <AnimatedSection key={story.id} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-medium mb-4">
                      {story.category}
                    </span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 text-hero-shadow">{story.title}</h3>
                    <p className="text-accent font-medium text-sm mb-3">{story.tagline}</p>
                    <p className="text-white/80 text-sm leading-relaxed mb-6 text-hero-sub">{story.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {story.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="glass-card p-3 text-center border-accent/10">
                          <div className="font-display font-bold text-xl gradient-text">{m.value}</div>
                          <div className="text-xs text-white/60">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link to={`/success-stories/${story.id}`}>
                      <Button className="bg-accent text-accent-foreground hover:bg-cyan-light font-medium gap-2">
                        View Details <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                  <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <Link to={`/success-stories/${story.id}`} className="group block rounded-2xl overflow-hidden shadow-2xl">
                      <div className="relative overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/success-stories">
              <Button size="lg" variant="outline" className="border-2 border-accent/60 text-accent hover:bg-accent/20 font-semibold px-10 gap-2">
                View All Success Stories <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition with BG image */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={sectionBg1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeading label="Why ClickMicroSystem" title="Your Partner in Digital Innovation" description="Our comprehensive suite of services allows businesses to modernize, innovate, and scale with seamless integration and AI-driven insights." light />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Accelerated Growth", desc: "Faster innovation through low-code platforms, DevOps, and microservices architectures." },
              { icon: Shield, title: "Enterprise Security", desc: "Advanced cybersecurity protecting your data and ensuring compliance across all operations." },
              { icon: BarChart3, title: "Data-Driven Insights", desc: "AI-powered analytics and predictive tools to make smarter, faster business decisions." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5">
                    <item.icon size={28} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3 text-primary-foreground">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed text-hero-sub">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading label="Industries" title="Tailored Solutions for Every Industry" description="From automotive to healthcare, our expertise spans diverse sectors with solutions tailored to meet unique demands." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.label} delay={i * 0.06}>
                <Link to="/industries" className="group glass-card p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <ind.icon size={24} className="text-accent" />
                  </div>
                  <span className="font-display font-medium text-sm text-foreground">{ind.label}</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with BG image */}
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
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/85 max-w-xl mx-auto mb-8 text-hero-sub">
                  Start your digital transformation journey with ClickMicroSystem. Let's build the future together.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-cyan-light font-semibold px-10 gap-2 shadow-lg shadow-cyan-500/30">
                      Contact Us <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link to="/trainings">
                    <Button size="lg" variant="outline" className="border-2 border-accent/60 text-accent hover:bg-accent/20 font-semibold px-8 gap-2">
                      Explore Trainings <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
