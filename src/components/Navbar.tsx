import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X, ArrowRight, BriefcaseBusiness, Cog, Shield, Code, Cloud, Cpu, Users } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MegaMenu from "@/components/MegaMenu";
import { successStories } from "@/data/successStories";
import logo from "@/assets/logom.png";

const primaryLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Industries", path: "/industries" },
  { label: "Insights", path: "/insights" },
  { label: "Careers", path: "/careers" },
];

const actionLinks = [
  { label: "Services", path: "/services" },
  { label: "Trainings", path: "/trainings" },
  { label: "Contact Us", path: "/contact" },
];

const mobileServices = [
  { icon: BriefcaseBusiness, title: "Placement Services", path: "/services#placement-services", featured: true },
  { icon: Cog, title: "System Integration", path: "/services" },
  { icon: Shield, title: "Managed IT Services", path: "/services" },
  { icon: Code, title: "Application Services", path: "/services" },
  { icon: Cloud, title: "Infrastructure Services", path: "/services" },
  { icon: Cpu, title: "Business Process Services", path: "/services" },
  { icon: Users, title: "Consulting Services", path: "/services" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [location]);

  const getLinkClasses = (path: string, highlight?: boolean) => {
    const isActive = location.pathname === path;

    if (highlight) {
      return `rounded-full px-2.5 py-1.5 text-[0.9rem] font-semibold transition-all 2xl:px-4 2xl:py-2 2xl:text-[0.95rem] ${
        isActive
          ? "bg-orange-500 text-white shadow-md shadow-orange-200"
          : "bg-orange-50 text-orange-600 hover:bg-orange-100 hover:text-orange-700"
      }`;
    }

    return `rounded-full px-3 py-1.5 text-sm font-semibold transition-all 2xl:px-3.5 2xl:py-2 2xl:text-[0.95rem] ${
      isActive
        ? "bg-slate-900 text-white shadow-sm shadow-slate-900/10"
        : "text-slate-800 hover:bg-orange-50 hover:text-orange-600"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-orange-100 bg-white/95 shadow-lg shadow-slate-200/40 backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between gap-3 px-3 sm:h-[5.5rem] sm:px-4 lg:h-24 xl:px-5">
        <Link
          to="/"
          className="flex w-[170px] flex-shrink-0 items-center sm:w-[190px] md:w-[205px] xl:w-[200px] 2xl:w-[235px]"
          aria-label="Click Microsystem home"
        >
          <img
            src={logo}
            alt="Click Microsystem"
            className="h-14 w-full object-contain object-left sm:h-16 md:h-[4.25rem] lg:h-[4.25rem] xl:h-[4.5rem] 2xl:h-20"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-between gap-3 xl:flex 2xl:gap-6">
          <div className="flex min-w-0 flex-shrink-0 items-center gap-0.5 xl:gap-1 2xl:gap-3">
            {primaryLinks.map((link) => (
              <Link key={link.path} to={link.path} className={getLinkClasses(link.path, link.highlight)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="ml-1 flex flex-shrink-0 items-center gap-1 rounded-full border border-orange-100 bg-white/90 px-1 py-1 shadow-sm 2xl:ml-6 2xl:gap-3 2xl:px-3 2xl:py-2">
            <MegaMenu highlightedMenu="services" />
            {actionLinks.slice(1).map((link, index) => (
              <Link key={link.path} to={link.path}>
                <Button
                  size="sm"
                  className={
                    index === 0
                      ? "rounded-full bg-orange-500 px-2 py-1.5 text-[0.9rem] font-semibold text-white shadow-md shadow-orange-200 hover:bg-orange-600 2xl:px-4 2xl:py-2 2xl:text-[0.95rem]"
                      : "rounded-full border border-orange-200 bg-white px-2 py-1.5 text-[0.9rem] font-semibold text-orange-700 shadow-sm hover:bg-orange-50 2xl:px-4 2xl:py-2 2xl:text-[0.95rem]"
                  }
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </nav>

        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="rounded-full p-2.5 text-slate-900 transition hover:bg-orange-50 xl:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-orange-100 bg-white xl:hidden"
          >
            <nav className="container-custom flex flex-col gap-2 px-4 py-5">
              {primaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                    location.pathname === link.path
                      ? "bg-orange-500 text-white"
                      : "text-slate-800 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => setMobileAccordion(mobileAccordion === "stories" ? null : "stories")}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-orange-50 hover:text-orange-600"
              >
                Success Stories
                <ChevronDown size={18} className={`transition-transform ${mobileAccordion === "stories" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileAccordion === "stories" && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden rounded-2xl bg-slate-50"
                  >
                    {successStories.map((story) => (
                      <Link
                        key={story.id}
                        to={`/success-stories/${story.id}`}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:text-orange-600"
                      >
                        <ChevronRight size={14} className="text-orange-500" />
                        {story.title}
                      </Link>
                    ))}
                    <Link to="/success-stories" className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-orange-600">
                      View All Stories <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setMobileAccordion(mobileAccordion === "services" ? null : "services")}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                  location.pathname === "/services"
                    ? "bg-orange-500 text-white"
                    : "bg-orange-50 text-orange-700 hover:bg-orange-100"
                }`}
              >
                Services
                <ChevronDown size={18} className={`transition-transform ${mobileAccordion === "services" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileAccordion === "services" && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden rounded-2xl bg-orange-50/60"
                  >
                    {mobileServices.map((service) => (
                      <Link
                        key={service.title}
                        to={service.path}
                        className={`flex items-center gap-3 px-4 py-3 text-sm font-medium ${
                          service.featured
                            ? "bg-orange-100/90 text-orange-700 hover:bg-orange-200/80"
                            : "text-slate-700 hover:text-orange-600"
                        }`}
                      >
                        <service.icon size={16} className={service.featured ? "text-orange-600" : "text-orange-500"} />
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {actionLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                    location.pathname === link.path
                      ? "bg-orange-500 text-white"
                      : "bg-orange-50 text-orange-700 hover:bg-orange-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;



