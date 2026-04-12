import { Link } from "react-router-dom";
import { ArrowRight, Bot, ChartColumn, Lock, Workflow, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sectionBg4 from "@/assets/section-bg-4.jpg";
import productAiAnalytics from "@/assets/product-ai-analytics.jpg";
import productAiChatbot from "@/assets/product-ai-chatbot.jpg";
import productAutomation from "@/assets/product-automation.jpg";
import productCloudSecurity from "@/assets/product-cloud-security.jpg";

const products = [
  {
    icon: ChartColumn,
    title: "Predictive AI Analytics",
    image: productAiAnalytics,
    summary: "Turn business data into reliable forecasts, KPI dashboards, and faster executive decisions.",
    points: ["Forecast revenue and demand", "Track team and process performance", "Unify data from sales, finance, and operations"],
  },
  {
    icon: Bot,
    title: "Smart Customer Assistant",
    image: productAiChatbot,
    summary: "Deploy conversational AI for support, lead qualification, and always-on customer engagement.",
    points: ["24/7 multilingual support", "Lead capture with CRM sync", "Knowledge-base driven answers"],
  },
  {
    icon: Workflow,
    title: "Process Automation Suite",
    image: productAutomation,
    summary: "Automate repetitive workflows across departments to reduce manual effort and human error.",
    points: ["Approval workflow automation", "Task routing and SLA tracking", "Faster turnaround across teams"],
  },
  {
    icon: Lock,
    title: "Cloud Security Platform",
    image: productCloudSecurity,
    summary: "Protect workloads, endpoints, and user access with centralized policy and compliance visibility.",
    points: ["Threat monitoring and alerts", "Access governance and audit trails", "Compliance-ready reporting"],
  },
];

const deliverySteps = [
  "Discovery workshop to map your business priorities",
  "Solution design and product customization",
  "Pilot rollout with measurable success criteria",
  "Scale-up, training, and continuous optimization",
];

const Products = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:px-8 md:pb-20 md:pt-36">
      <div className="absolute inset-0">
        <img src={sectionBg4} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>
      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Products</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Business-ready products built around AI, automation, and secure cloud operations.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Each product is designed to solve a clear business problem, deploy quickly, and scale with your organization.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full bg-orange-500 px-8 font-semibold text-white hover:bg-orange-600 sm:w-auto">
                Request a Demo <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/trainings">
              <Button size="lg" variant="outline" className="w-full border-white/40 px-8 font-semibold text-white hover:bg-white/10 sm:w-auto">
                Explore Trainings
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Featured Products"
          title="Solutions that fit real business teams"
          description="These offerings can be launched as standalone products or customized as part of a wider transformation roadmap."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <AnimatedSection key={product.title} delay={index * 0.08}>
              <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-lg shadow-slate-200/50">
                <img src={product.image} alt={product.title} className="h-64 w-full object-cover" />
                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                    <product.icon size={28} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-slate-900">{product.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{product.summary}</p>
                  <div className="mt-6 space-y-3">
                    {product.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-orange-500" />
                        <span className="text-sm font-medium text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-orange-50/60">
      <div className="container-custom grid gap-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-start">
        <AnimatedSection direction="left">
          <SectionHeading
            label="How We Deliver"
            title="From idea to live rollout with a practical plan"
            description="We keep delivery focused on speed, clarity, and measurable outcomes so your team can adopt the solution confidently."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {deliverySteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-orange-100 bg-white p-6">
                <div className="font-display text-3xl font-bold text-orange-500">0{index + 1}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Best Fit</span>
            <h3 className="mt-4 font-display text-3xl font-bold">Ideal for teams that need business impact fast.</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Our products are a strong fit for organizations that want faster deployment than custom software, but still need solution flexibility.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/85">
              <p>Retail and service teams improving customer response time</p>
              <p>Operations teams reducing approval delays and manual work</p>
              <p>Leadership teams needing reliable analytics and dashboards</p>
              <p>IT teams strengthening cloud governance and security posture</p>
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200">
              Talk about your use case <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </div>
);

export default Products;
