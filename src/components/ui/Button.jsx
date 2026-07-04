export function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-surface text-text-primary border border-border hover:bg-card",
    ghost: "text-text-primary hover:text-primary bg-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
