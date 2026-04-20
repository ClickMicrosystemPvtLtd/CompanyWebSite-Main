import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Brain, BarChart3, Zap, Shield, MessageSquare, GitBranch, TrendingUp, Database, Cog, Eye, Activity, Lock, FileCheck, LineChart, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { successStories } from "@/data/successStories";
import sectionBg4 from "@/assets/section-bg-4.jpg";

const iconMap: Record<string, LucideIcon> = {
  Brain, BarChart3, Zap, Shield, MessageSquare, GitBranch, TrendingUp, Database, Cog, Eye, Activity, Lock, FileCheck, LineChart,
  Workflow: Cog,
};

const SuccessStoryDetail = () => {
  const { id } = useParams();
  const story = successStories.find((s) => s.id === id);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Story Not Found</h1>
          <Link to="/success-stories"><Button>Back to Stories</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:px-8 md:pb-20 md:pt-32">
        <div className="absolute inset-0">
          <img src={story.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container-custom relative z-10">
          <Link to="/success-stories" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-6 hover:underline">
            <ArrowLeft size={14} /> Back to Success Stories
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-medium mb-4">
              {story.category}
            </span>
            <h1 className="mb-4 font-display text-3xl font-bold leading-[1.1] text-white text-hero-shadow sm:text-4xl md:text-5xl lg:text-6xl">
              {story.title}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/90 text-hero-sub sm:text-lg md:text-xl">{story.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative -mt-12 z-20 px-4 md:px-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {story.metrics.map((m, i) => (
              <AnimatedSection key={m.label} delay={i * 0.1} className="glass-card p-6 text-center accent-glow">
                <div className="font-display font-bold text-2xl md:text-3xl gradient-text mb-1">{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            <AnimatedSection direction="left">
              <div className="glass-card h-full border-destructive/20 p-6 sm:p-8">
                <span className="text-xs font-display font-semibold text-destructive uppercase tracking-wider">The Challenge</span>
                <h2 className="font-display font-bold text-2xl mt-3 mb-4 text-foreground">Problem</h2>
                <p className="text-muted-foreground leading-relaxed">{story.problem}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="glass-card h-full border-accent/20 p-6 sm:p-8">
                <span className="text-xs font-display font-semibold text-accent uppercase tracking-wider">Our Approach</span>
                <h2 className="font-display font-bold text-2xl mt-3 mb-4 text-foreground">Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{story.solution}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">Key Features</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {story.features.map((f, i) => {
              const Icon = iconMap[f.icon] || Zap;
              return (
                <AnimatedSection key={f.title} delay={i * 0.1}>
                  <div className="glass-card p-6 flex gap-4 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1 text-foreground">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {story.techStack.map((tech) => (
                <span key={tech} className="px-5 py-2.5 rounded-full bg-muted border border-border text-sm font-medium text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      {story.testimonial && (
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={sectionBg4} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="container-custom relative z-10 text-center">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto">
                <div className="mb-4 font-serif text-5xl text-accent/30 sm:text-6xl">"</div>
                <p className="mb-6 text-base font-medium leading-relaxed text-white text-hero-shadow sm:text-xl md:text-2xl">
                  {story.testimonial.quote}
                </p>
                <div>
                  <p className="text-white font-semibold text-hero-sub">{story.testimonial.author}</p>
                  <p className="text-white/70 text-sm text-hero-sub">{story.testimonial.role}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-display text-2xl font-bold sm:text-3xl md:text-4xl">Want a Similar Solution?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let our team build a custom solution tailored to your unique business challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full gap-2 bg-accent px-10 font-semibold text-accent-foreground hover:bg-cyan-light sm:w-auto">
                  Get Similar Solution <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/success-stories">
                <Button size="lg" variant="outline" className="w-full border-2 border-accent/60 px-8 font-semibold text-accent hover:bg-accent/10 sm:w-auto">
                  More Stories
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStoryDetail;
