import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Custom button component with shine and glow effects
export const Button = React.forwardRef(({ 
  className, 
  children, 
  effect = "default", 
  variant = "default", 
  ...props 
}, ref) => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Base styles for the tech-inspired dark button
  const baseStyles = "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 overflow-hidden";
  
  // Variants
  const variants = {
    default: "bg-gray-900 text-white px-6 py-3 border border-gray-700",
    primary: "bg-blue-900 text-white px-6 py-3 border border-blue-700",
    destructive: "bg-red-900 text-white px-6 py-3 border border-red-700",
    outline: "bg-transparent text-white px-6 py-3 border border-gray-700",
    ghost: "bg-transparent text-white hover:bg-gray-800 px-6 py-3",
    link: "bg-transparent text-blue-500 underline-offset-4 hover:underline px-2"
  };
  
  // Effects
  const effects = {
    default: "",
    shineHover: "group",
    edgeGlow: "edge-glow",
    pulse: "pulse-effect",
    neon: "neon-effect"
  };
  
  // Handler for mouseenter
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  // Handler for mouseleave
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        effects[effect],
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Code brackets for tech appearance */}
      {variant !== "link" && (
        <span className="opacity-60 mr-1">&lt;&gt;</span>
      )}
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Shine effect */}
      {effect === "shineHover" && (
        <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-1000 transform ${isHovering ? "translate-x-full" : "-translate-x-full"} pointer-events-none`}></span>
      )}
      
      {/* Edge glow effect */}
      {effect === "edgeGlow" && (
        <>
          <span className="absolute inset-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_15px_3px_rgba(255,255,255,0.3)]"></span>
          <span className="absolute -inset-px rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-blue-500 via-transparent to-purple-500 blur-sm"></span>
        </>
      )}
      
      {/* Pulse effect */}
      {effect === "pulse" && (
        <span className="absolute inset-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-pulse bg-gradient-to-r from-blue-500/30 to-purple-500/30"></span>
      )}
      
      {/* Neon effect */}
      {effect === "neon" && (
        <span className="absolute inset-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none box-shadow-[0_0_20px_5px_rgba(120,200,255,0.5)]"></span>
      )}
      
      {/* Code brackets for tech appearance */}
      {variant !== "link" && (
        <span className="opacity-60 ml-1">REGISTER NOW</span>
      )}
    </button>
  );
});

Button.displayName = "Button";

// CSS to be added to your global styles
const GlobalStyles = () => {
  return (
    <style jsx global>{`
      .edge-glow:hover {
        box-shadow: 0 0 15px 3px rgba(255,255,255,0.3), 0 0 5px 1px rgba(150,150,255,0.5);
      }
      
      .neon-effect:hover {
        box-shadow: 0 0 20px 5px rgba(120,200,255,0.5), inset 0 0 10px 1px rgba(120,200,255,0.3);
        text-shadow: 0 0 5px rgba(255,255,255,0.7);
      }
      
      .pulse-effect {
        animation: pulse 2s infinite;
      }
      
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(120,200,255,0.4); }
        70% { box-shadow: 0 0 0 10px rgba(120,200,255,0); }
        100% { box-shadow: 0 0 0 0 rgba(120,200,255,0); }
      }
    `}</style>
  );
};

export { GlobalStyles };

/* import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }

*/
