
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
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
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-hackathon-accent focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-hackathon-accent text-white hover:bg-opacity-90",
    secondary: "bg-white/10 text-white hover:bg-white/20",
    outline: "bg-transparent border border-white/20 text-white hover:border-white/40",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 rounded-md",
    md: "text-base px-5 py-2 rounded-lg",
    lg: "text-lg px-8 py-3 rounded-lg",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        isLoading && "opacity-80 cursor-wait",
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
