import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { successStories, storyCategories } from "@/data/successStories";
import successStoriesBg from "@/assets/success-stories-bg.jpg";
import sectionBg4 from "@/assets/section-bg-4.jpg";

const SuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? successStories : successStories.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={successStoriesBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="text-accent font-display text-sm font-medium tracking-wider uppercase text-hero-sub">Success Stories</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 leading-[1.1] text-hero-shadow">
              Real Impact, <span className="gradient-text">Real Results</span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed text-hero-sub">
              Explore how we've helped businesses transform through AI-powered products, intelligent automation, and cutting-edge SaaS solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {storyCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((story, i) => (
              <AnimatedSection key={story.id} delay={i * 0.1}>
                <Link to={`/success-stories/${story.id}`} className="group block">
                  <div className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-xs font-medium">
                        {story.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl mb-2 text-foreground group-hover:text-accent transition-colors">{story.title}</h3>
                      <p className="text-accent text-sm font-medium mb-3">{story.tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{story.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {story.metrics.slice(0, 2).map((m) => (
                          <div key={m.label} className="text-center p-2 rounded-lg bg-muted/50">
                            <div className="font-display font-bold text-lg gradient-text">{m.value}</div>
                            <div className="text-xs text-muted-foreground">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-accent text-sm font-medium">
                        View Case Study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden p-10 md:p-16 text-center">
              <div className="absolute inset-0">
                <img src={sectionBg4} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/80" />
              </div>
              <div className="relative z-10">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 text-hero-shadow">
                  Want Similar Results?
                </h2>
                <p className="text-white/85 max-w-xl mx-auto mb-8 text-hero-sub">
                  Let's discuss how we can build a custom AI-powered solution for your business.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-cyan-light font-semibold px-10 gap-2">
                    Start a Conversation <ArrowRight size={18} />
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

export default SuccessStories;
