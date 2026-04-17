import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const linkedinUrl = "https://www.linkedin.com/in/your-linkedin-profile";

const footerLinks = {
  Services: [
    { label: "Placement Services", path: "/services#placement-services" },
    { label: "System Integration", path: "/services" },
    { label: "Managed IT Services", path: "/services" },
    { label: "Application Services", path: "/services" },
    { label: "Infrastructure Services", path: "/services" },
  ],
  Trainings: [
    { label: "AI & Machine Learning", path: "/trainings" },
    { label: "Full Stack Development", path: "/trainings" },
    { label: "Mobile App Training", path: "/trainings" },
    { label: "Cloud, DevOps & Security", path: "/trainings" },
    { label: "Corporate Team Training", path: "/trainings" },
  ],
  Products: [
    { label: "AI Analytics", path: "/products" },
    { label: "AI Chatbot", path: "/products" },
    { label: "Automation Suite", path: "/products" },
    { label: "Cloud Security", path: "/products" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Industries", path: "/industries" },
    { label: "Insights", path: "/insights" },
    { label: "Contact Us", path: "/contact" },
  ],
};

const Footer = () => (
  <footer className="bg-slate-950 text-white">
    <div className="container-custom section-padding">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-8">
        <div className="lg:col-span-2 xl:pr-6">
          <Link to="/" aria-label="Click Microsystem home" className="inline-flex">
            <img src={logo} alt="Click Microsystem" className="h-16 w-auto object-contain sm:h-20 md:h-24" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            Practical IT services, digital products, and focused training programs designed to help organizations grow with confidence.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <div className="flex items-center gap-2 break-all sm:break-normal"><Mail size={14} className="flex-shrink-0 text-orange-300" /> info@clickmicrosystem.com</div>
            <div className="flex items-center gap-2"><Phone size={14} className="flex-shrink-0 text-orange-300" /> +91 9839455577</div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 flex-shrink-0 text-orange-300" />
              <div>
                <div>7D/62, Vrindvan Yojna, Lucknow</div>
                <div>Uttar Pradesh 226030</div>
              </div>
            </div>
          </div>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300 transition-colors hover:bg-orange-400/20 hover:text-orange-200 sm:w-auto"
          >
            <Linkedin size={16} /> Follow us on LinkedIn
          </a>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/85">{title}</h4>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className={`text-sm leading-relaxed transition-colors hover:text-orange-300 ${link.label === "Placement Services" ? "font-semibold text-orange-300" : "text-white/55"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
        <p className="text-center text-xs text-white/40 md:text-left">(c) 2026 Click Microsystem PVT LTD. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-white/40 md:gap-6">
          <span className="cursor-pointer transition-colors hover:text-orange-300">Privacy Policy</span>
          <span className="cursor-pointer transition-colors hover:text-orange-300">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;


