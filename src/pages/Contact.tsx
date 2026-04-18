import { useState } from "react";
import { ArrowRight, Clock3, Linkedin, LoaderCircle, Mail, MapPin, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sectionBg3 from "@/assets/section-bg-3.jpg";
import { useToast } from "@/hooks/use-toast";
import { postJson } from "@/lib/api";
import { MOBILE_PATTERN, validateEmail, validateMobileNumber } from "@/lib/contactValidation";

const linkedinUrl = "https://www.linkedin.com/in/your-linkedin-profile";

const contactCards = [
  { icon: Mail, label: "Email Us", value: "info@clickmicrosystem.com admin@clickmicrosystem.com", detail: "Share your requirement and we will route it to the right team." },
  { icon: Phone, label: "Call Us", value: "+91 9839455577", detail: "Best for urgent discussions, consultations, and follow-up calls." },
  { icon: MapPin, label: "Office Presence", value: "Global Delivery Support", detail: "We support onsite, remote, and hybrid engagement models." },
];

const initialForm = {
  name: "",
  email: "",
  mobileNumber: "",
  organization: "",
  inquiryType: "General Inquiry",
  message: "",
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<{ email?: string; mobileNumber?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));

    if (field === "email") {
      setErrors((current) => ({ ...current, email: value ? validateEmail(value) ?? undefined : undefined }));
    }

    if (field === "mobileNumber") {
      setErrors((current) => ({ ...current, mobileNumber: value ? validateMobileNumber(value) ?? undefined : undefined }));
    }
  };

  const validateForm = () => {
    const nextErrors = {
      email: validateEmail(formData.email) ?? undefined,
      mobileNumber: validateMobileNumber(formData.mobileNumber) ?? undefined,
    };

    setErrors(nextErrors);
    return !nextErrors.email && !nextErrors.mobileNumber;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Fix highlighted fields",
        description: "Please enter a valid email address and mobile number before submitting.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const result = await postJson<{ ok: boolean; message?: string }>("/api/contact.php", formData);

      if (!result.ok) {
        throw new Error(result.message || "Unable to submit your message right now.");
      }

      toast({
        title: "Message sent",
        description: "Your contact inquiry has been emailed to the team successfully.",
      });
      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:px-8 md:pb-20 md:pt-36">
        <div className="absolute inset-0">
          <img src={sectionBg3} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/85" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300 sm:text-sm">Contact Us</span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s talk about your project, product, or training need.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
              Whether you need services, product guidance, or a training plan, our team is ready to help you map the next step clearly.
            </p>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-5 py-2.5 text-sm font-semibold text-orange-200 transition-colors hover:bg-orange-300/20 hover:text-white sm:w-auto"
            >
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-orange-50/50">
        <div className="container-custom grid gap-6 lg:gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <AnimatedSection direction="left">
            <div className="space-y-5 rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
              <div>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">Why teams contact us</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Most conversations start with one of these needs. If you are unsure, just describe the problem and we will guide you.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Planning a new digital product or internal platform",
                  "Upgrading infrastructure, security, or business workflows",
                  "Requesting a product demo or implementation discussion",
                  "Arranging training for students, staff, or working professionals",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Users size={18} className="mt-0.5 flex-shrink-0 text-orange-300" />
                    <span className="text-sm text-white/85">{item}</span>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 rounded-2xl bg-white/5 p-4 sm:grid-cols-2 sm:p-5">
                <div>
                  <div className="flex items-center gap-2 text-orange-300">
                    <Clock3 size={16} />
                    <span className="text-sm font-semibold">Response Time</span>
                  </div>
                  <p className="mt-2 text-sm text-white/80">Initial response within one business day.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-orange-300">
                    <MapPin size={16} />
                    <span className="text-sm font-semibold">Delivery Model</span>
                  </div>
                  <p className="mt-2 text-sm text-white/80">Remote, hybrid, and enterprise-ready support.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <form className="space-y-5 rounded-3xl border border-orange-100 bg-white p-5 shadow-lg shadow-slate-200/40 sm:p-6 lg:p-8" onSubmit={handleSubmit}>
              <div className="grid gap-5 lg:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-orange-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Email *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={(e) => setErrors((current) => ({ ...current, email: validateEmail(e.target.value) ?? undefined }))}
                    aria-invalid={Boolean(errors.email)}
                    className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-orange-200"
                    placeholder="you@email.com"
                  />
                  {errors.email ? <p className="mt-1.5 text-xs text-red-600">{errors.email}</p> : null}
                </div>
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Organization *</label>
                  <input
                    required
                    type="text"
                    value={formData.organization}
                    onChange={(e) => handleChange("organization", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-orange-200"
                    placeholder="Your company or institute"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Mobile Number *</label>
                  <input
                    required
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => handleChange("mobileNumber", e.target.value)}
                    onBlur={(e) => setErrors((current) => ({ ...current, mobileNumber: validateMobileNumber(e.target.value) ?? undefined }))}
                    inputMode="tel"
                    pattern={MOBILE_PATTERN.source}
                    aria-invalid={Boolean(errors.mobileNumber)}
                    className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-orange-200"
                    placeholder="+91 98765 43210"
                  />
                  {errors.mobileNumber ? <p className="mt-1.5 text-xs text-red-600">{errors.mobileNumber}</p> : null}
                </div>
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-900">Inquiry Type *</label>
                  <select
                    required
                    value={formData.inquiryType}
                    onChange={(e) => handleChange("inquiryType", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-orange-200"
                  >
                    <option>General Inquiry</option>
                    <option>Service Consultation</option>
                    <option>Products Demo</option>
                    <option>Trainings</option>
                    <option>Careers</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-900">Message *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-orange-200"
                  placeholder="Tell us what you are looking for..."
                />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full bg-orange-500 font-semibold text-white hover:bg-orange-600 disabled:opacity-70">
                {submitting ? <LoaderCircle size={18} className="animate-spin" /> : <ArrowRight size={18} />}
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {contactCards.map((card, index) => (
              <AnimatedSection key={card.label} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-orange-100 bg-white p-5 shadow-lg shadow-slate-200/40 sm:p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                    <card.icon size={22} className="text-orange-500" />
                  </div>
                  <h2 className="font-display text-lg font-semibold text-slate-900 sm:text-xl">{card.label}</h2>
                  <p className="mt-2 break-words text-sm font-medium text-orange-600 sm:text-base">{card.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
