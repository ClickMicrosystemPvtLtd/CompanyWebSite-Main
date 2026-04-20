import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, ChevronDown, Cloud, Code, Cog, Cpu, Palette, Shield, Users } from "lucide-react";
import { successStories } from "@/data/successStories";

const services = [
  { icon: BriefcaseBusiness, title: "Placement Services", desc: "Placement support for employer hiring, screening, and talent readiness.", path: "/services#placement-services", featured: true },
  { icon: Cog, title: "System Integration", desc: "Connect ERP, CRM, data, and operations into one smooth workflow.", path: "/services" },
  { icon: Shield, title: "Managed IT Services", desc: "24/7 support, security governance, and stable business continuity.", path: "/services" },
  { icon: Code, title: "Application Services", desc: "Modern apps, legacy upgrades, and faster product releases.", path: "/services" },
  { icon: Cloud, title: "Infrastructure Services", desc: "Scalable cloud, networks, and high-availability deployment.", path: "/services" },
  { icon: Cpu, title: "Business Process Services", desc: "Automation-led operations for finance, HR, and customer workflows.", path: "/services" },
  { icon: Users, title: "Consulting Services", desc: "Technology roadmaps aligned with business growth and ROI.", path: "/services" },
  { icon: Palette, title: "Creative Services", desc: "Graphic design, content writing, photo editing, and video editing support.", path: "/services#creative-services" },
];

interface MegaMenuDropdownProps {
  type: "services" | "stories";
  onClose: () => void;
  onKeepOpen: () => void;
}

const MegaMenuDropdown = ({ type, onClose, onKeepOpen }: MegaMenuDropdownProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.18, ease: "easeOut" }}
    className="absolute right-0 top-full z-50 mt-3 w-[min(1120px,calc(100vw-1rem))] max-w-[calc(100vw-1rem)] rounded-[1.5rem] border border-orange-200 bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] sm:w-[min(1120px,calc(100vw-2rem))] sm:max-w-[calc(100vw-2rem)] sm:rounded-[2rem]"
    onMouseEnter={onKeepOpen}
    onMouseLeave={onClose}
  >
    <div className="max-h-[min(80vh,720px)] overflow-y-auto overscroll-contain p-5 sm:p-7 lg:p-9">
      {type === "services" ? (
        <div className="grid gap-6 lg:grid-cols-[1.55fr_0.95fr] lg:gap-8">
          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">Our Services</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                  Explore the core service lines we use to modernize operations, strengthen security, and support business growth.
                </p>
              </div>
              <Link to="/services" onClick={onClose} className="inline-flex text-sm font-semibold text-orange-600 hover:text-orange-700 sm:whitespace-nowrap">
                Explore all services
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.path}
                  onClick={onClose}
                  className={`group rounded-[1.25rem] border p-4 transition-all hover:-translate-y-1 hover:shadow-lg sm:min-h-[180px] sm:rounded-[1.5rem] sm:p-5 ${
                    service.featured
                      ? "border-orange-200 bg-orange-50/90 shadow-md hover:border-orange-300 hover:bg-orange-100/80"
                      : "border-slate-100 bg-slate-50/55 hover:border-orange-200 hover:bg-orange-50/80"
                  }`}
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${service.featured ? "bg-orange-500 text-white" : "bg-orange-100 text-orange-500"}`}>
                    <service.icon size={20} />
                  </div>
                  <h4 className={`font-display text-base font-semibold leading-snug transition-colors sm:text-[1.05rem] ${service.featured ? "text-orange-700 group-hover:text-orange-800" : "text-slate-900 group-hover:text-orange-600"}`}>
                    {service.title}
                  </h4>
                  <p className={`mt-2 text-sm leading-relaxed ${service.featured ? "text-orange-900/80" : "text-slate-600"}`}>{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-slate-900 p-5 text-white sm:p-7 sm:rounded-[1.75rem]">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Need Guidance?</span>
            <h4 className="mt-4 font-display text-xl font-bold leading-tight sm:text-2xl">Build the right roadmap before you invest.</h4>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              We help teams choose the right stack, rollout plan, and service model for practical business results.
            </p>
            <Link to="/contact" onClick={onClose} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200">
              Speak with our team <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">Success Stories</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                See how our AI, automation, and cloud solutions are delivering measurable results for real teams.
              </p>
            </div>
            <Link to="/success-stories" onClick={onClose} className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
              View all stories <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {successStories.map((story) => (
              <Link
                key={story.id}
                to={`/success-stories/${story.id}`}
                onClick={onClose}
                className="group overflow-hidden rounded-[1.25rem] border border-slate-100 bg-slate-50/50 transition-all hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:rounded-[1.5rem]"
              >
                <div className="relative h-36 overflow-hidden sm:h-40">
                  <img src={story.image} alt={story.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {story.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h4 className="font-display text-base font-semibold leading-snug text-slate-900 transition-colors sm:text-[1.05rem] group-hover:text-orange-600">{story.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{story.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

interface MegaMenuProps {
  highlightedMenu?: "services" | "stories" | null;
}

const MegaMenu = ({ highlightedMenu = null }: MegaMenuProps) => {
  const [openMenu, setOpenMenu] = useState<"services" | "stories" | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const clearCloseTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleEnter = (menu: "services" | "stories") => {
    clearCloseTimer();
    setOpenMenu(menu);
  };

  const handleLeave = () => {
    clearCloseTimer();
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 220);
  };

  const handleToggle = (menu: "services" | "stories") => {
    clearCloseTimer();
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  const getTriggerClasses = (menu: "services" | "stories") => {
    const isHighlighted = highlightedMenu === menu;
    const isActive = menu === "services" ? location.pathname === "/services" : location.pathname.startsWith("/success-stories");

    if (isHighlighted) {
      return `flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-1.5 text-[0.9rem] font-semibold transition-all 2xl:px-4 2xl:py-2 2xl:text-[0.95rem] ${
        isActive
          ? "bg-orange-600 text-white shadow-md shadow-orange-200"
          : "bg-orange-500 text-white shadow-md shadow-orange-200 hover:bg-orange-600"
      }`;
    }

    return `flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[0.9rem] font-semibold transition-all 2xl:px-3.5 2xl:py-2 2xl:text-[0.95rem] ${
      isActive
        ? "bg-slate-900 text-white shadow-md"
        : "text-slate-800 hover:bg-orange-50 hover:text-orange-600"
    }`;
  };

  return (
    <div ref={wrapperRef} className="relative flex items-center gap-1 2xl:gap-2" onMouseLeave={handleLeave}>
      <div onMouseEnter={() => handleEnter("stories")}>
        <button type="button" onClick={() => handleToggle("stories")} className={getTriggerClasses("stories")}>
          Success Stories
          <ChevronDown size={16} className={`transition-transform ${openMenu === "stories" ? "rotate-180" : ""}`} />
        </button>
      </div>
      <div onMouseEnter={() => handleEnter("services")}>
        <button type="button" onClick={() => handleToggle("services")} className={getTriggerClasses("services")}>
          Services
          <ChevronDown size={16} className={`transition-transform ${openMenu === "services" ? "rotate-180" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {openMenu && <MegaMenuDropdown type={openMenu} onClose={() => setOpenMenu(null)} onKeepOpen={clearCloseTimer} />}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;







