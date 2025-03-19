
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "terminal" | "cyber";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-future transition-all duration-300 ease-in-out focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-[#1f1f1f] to-[#2d2d2d] text-white hover:bg-opacity-90 focus:ring-2 focus:ring-hackathon-accent focus:ring-opacity-50 hover:scale-[1.03] active:scale-[0.98]",
    secondary: "bg-white/10 text-white hover:bg-white/20 focus:ring-2 focus:ring-white/30 focus:ring-opacity-50 hover:scale-[1.03] active:scale-[0.98]",
    outline: "bg-transparent border border-white/20 text-white hover:border-white/40 focus:ring-2 focus:ring-white/30 focus:ring-opacity-50 hover:scale-[1.03] active:scale-[0.98]",
    ghost: "bg-transparent text-white hover:bg-white/10 focus:ring-2 focus:ring-white/30 focus:ring-opacity-50 hover:scale-[1.03] active:scale-[0.98]",
    terminal: "bg-transparent backdrop-blur-sm text-[#0077FF] hover:text-white border border-[#0077FF]/40 hover:border-[#0077FF]/80 focus:ring-2 focus:ring-[#0077FF]/30 focus:ring-opacity-50 hover:scale-[1.03] active:scale-[0.98]",
    cyber: "bg-[#151515] text-white font-mono text-xs tracking-wider border-0 shadow-[0_6px_10px_rgba(0,0,0,0.55)] hover:shadow-[0_8px_15px_rgba(0,0,0,0.65)] active:shadow-[0_2px_5px_rgba(0,0,0,0.5)] hover:translate-y-[-1px] active:translate-y-[1px] transition-all duration-200 cyber-button",
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-xl",
    md: "text-sm px-5 py-2 rounded-2xl",
    lg: "text-base px-8 py-3 rounded-2xl",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        isLoading && "opacity-80 cursor-wait",
        variant === "primary" ? "minimal-glow-ring" : "",
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}
      <span className={isLoading ? "invisible" : ""}>{children}</span>
    </button>
  );
};

export default Button;
