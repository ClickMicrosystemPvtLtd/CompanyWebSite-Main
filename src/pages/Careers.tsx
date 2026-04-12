import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import careersBg from "@/assets/careers-bg.jpg";

const perks = [
  { icon: Sparkles, title: "Innovative Work Culture", desc: "Work on cutting-edge projects that challenge you to think outside the box." },
  { icon: TrendingUp, title: "Career Growth", desc: "Opportunities for personal and professional growth with continuous learning." },
  { icon: Users, title: "Diverse & Inclusive", desc: "We value different perspectives and encourage a workplace where everyone's voice is heard." },
  { icon: Globe, title: "Impactful Work", desc: "Shape the future of industries like healthcare, finance, automotive, and more." },
];

const Careers = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero with BG image */}
    <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img src={careersBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-3xl">
          <span className="text-accent font-display text-sm font-medium tracking-wider uppercase text-hero-sub">Careers</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 leading-[1.1] text-hero-shadow">
            Join Our Team – Be Part of <span className="gradient-text">Global Change</span>
          </h1>
          <p className="text-lg text-white/90 leading-relaxed text-hero-sub">
            At ClickMicroSystem, we believe that exceptional work begins with hiring, celebrating, and nurturing the best people from all walks of life.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Why ClickMicroSystem */}
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading label="Why Work at ClickMicroSystem" title="A Place Where Innovation Thrives" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="glass-card p-6 h-full text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Apply Now - Left/Right Layout */}
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <AnimatedSection direction="left">
            <span className="text-accent font-display text-sm font-medium tracking-wider uppercase">Apply Now</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3 mb-6">
              Ready to Make a <span className="gradient-text">Difference</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Submit your application and join our mission to change the world with technology. We're looking for passionate individuals who want to push boundaries and create impact.
            </p>
            <div className="space-y-4">
              {[
                "Work with cutting-edge technologies like AI, Cloud & IoT",
                "Collaborate with global teams across 9+ industries",
                "Continuous learning and professional development",
                "Competitive compensation and flexible work culture",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right - Form */}
          <AnimatedSection direction="right">
            <form className="glass-card p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-sm focus:ring-2 focus:ring-accent/50 outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-sm focus:ring-2 focus:ring-accent/50 outline-none transition" placeholder="you@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-sm focus:ring-2 focus:ring-accent/50 outline-none transition" placeholder=" +91 9839455577" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Current Role</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-sm focus:ring-2 focus:ring-accent/50 outline-none transition" placeholder="Your current position" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Position Interested In</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-sm focus:ring-2 focus:ring-accent/50 outline-none transition" placeholder="e.g. System Integration Engineer" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Comments</label>
                <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-sm focus:ring-2 focus:ring-accent/50 outline-none transition resize-none" placeholder="Tell us about yourself..." />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-cyan-light font-semibold gap-2">
                Submit Application <ArrowRight size={18} />
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Careers;
