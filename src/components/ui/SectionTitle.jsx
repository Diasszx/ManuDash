export function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`font-heading text-[clamp(2rem,5vw,3.5rem)] leading-tight text-text-primary ${className}`}>
      {children}
    </h2>
  );
}
