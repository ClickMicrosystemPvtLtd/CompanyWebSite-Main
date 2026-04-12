import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, centered = true, light = false }: SectionHeadingProps) => (
  <AnimatedSection className={`mb-10 md:mb-14 ${centered ? "mx-auto max-w-3xl text-center" : ""}`}>
    {label && (
      <span className="mb-3 inline-block font-display text-xs font-medium uppercase tracking-[0.22em] text-accent sm:text-sm">
        {label}
      </span>
    )}
    <h2 className={`mb-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-sm leading-relaxed sm:text-base md:text-lg ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </AnimatedSection>
);

export default SectionHeading;
