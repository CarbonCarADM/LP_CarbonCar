import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "gradient";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
  href?: string;
  target?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", className = "", children, href, target, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 no-underline";
    
    const variants = {
      default: "bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:translate-y-0 active:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
      secondary: "bg-gray-800 text-white hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none",
      ghost: "hover:bg-white/10 text-white hover:text-white",
      gradient: "bg-gradient-to-b from-red-700 via-red-800 to-red-950 text-white hover:scale-105 active:scale-95 border border-red-500/30 shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_-5px_rgba(220,38,38,0.7)]"
    };
    
    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-10 px-5 text-sm",
      lg: "h-12 px-8 text-base"
    };
    
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <a 
          href={href} 
          target={target} 
          className={classes}
          // Using any here to bypass strict button attribute checking when rendering as anchor
          {...(props as any)}
        >
          {children}
        </a>
      );
    }
    
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;