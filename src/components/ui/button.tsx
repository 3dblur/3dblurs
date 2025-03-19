import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
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
        
        // New iOS-style variants
        ios: [
          "bg-gradient-to-br from-[#f9f9f9] to-[#e5e5e5] border border-[rgba(0,0,0,0.08)]",
          "rounded-[28px] py-3 px-6 text-base font-medium text-[#393939]",
          "shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9),0_0_0_1px_rgba(255,255,255,0.2)]",
          "transition-all duration-300 min-w-[140px] cursor-pointer text-center",
          "text-shadow-[0_1px_0_rgba(255,255,255,0.5)]",
          "hover:bg-gradient-to-br hover:from-[#ffffff] hover:to-[#f0f0f0]",
          "hover:shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(255,255,255,0.3)]",
          "hover:translate-y-[-1px] hover:scale-[1.01]",
          "active:bg-gradient-to-br active:from-[#e5e5e5] active:to-[#d0d0d0]",
          "active:translate-y-[1px] active:scale-[0.99]",
          "active:shadow-[0_1px_3px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.7)]",
          "active:transition-all active:duration-100",
          "before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-[50%]",
          "before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.6)] before:to-transparent",
          "before:transform before:skew-x-[-15deg] before:rounded-t-[28px]",
          "before:pointer-events-none before:transition-transform before:duration-800 before:blur-[3px]",
          "hover:before:transform hover:before:translate-x-full hover:before:skew-x-[-15deg]",
          "after:content-[''] after:absolute after:inset-[1px]",
          "after:bg-gradient-to-b after:from-[rgba(255,255,255,0.9)] after:via-[rgba(255,255,255,0.4)] after:to-transparent",
          "after:rounded-[27px] after:opacity-60 after:pointer-events-none after:transition-opacity after:duration-300",
          "hover:after:opacity-80"
        ].join(" "),
        
        iosPrimary: [
          "bg-gradient-to-br from-[#78b6ff] to-[#4a90e2] border border-[rgba(0,0,0,0.1)]",
          "rounded-[28px] py-3 px-6 text-base font-medium text-white",
          "shadow-[0_2px_8px_rgba(74,144,226,0.3),inset_0_1px_0_rgba(255,255,255,0.3),0_0_0_1px_rgba(255,255,255,0.1)]",
          "transition-all duration-300 min-w-[140px] cursor-pointer text-center",
          "text-shadow-[0_1px_1px_rgba(0,0,0,0.1)]",
          "hover:bg-gradient-to-br hover:from-[#89c0ff] hover:to-[#5a9ced]",
          "hover:shadow-[0_4px_12px_rgba(74,144,226,0.4),inset_0_1px_0_rgba(255,255,255,0.4),0_0_0_1px_rgba(255,255,255,0.2)]",
          "hover:translate-y-[-1px] hover:scale-[1.01]",
          "active:bg-gradient-to-br active:from-[#4a90e2] active:to-[#3a80d2]",
          "active:translate-y-[1px] active:scale-[0.99]",
          "active:shadow-[0_1px_4px_rgba(0,0,0,0.2),inset_0_1px_3px_rgba(0,0,0,0.1)]",
          "active:transition-all active:duration-100",
          "before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-[50%]",
          "before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.5)] before:to-transparent",
          "before:transform before:skew-x-[-15deg] before:rounded-t-[28px]",
          "before:pointer-events-none before:transition-transform before:duration-800 before:blur-[3px]",
          "hover:before:transform hover:before:translate-x-full hover:before:skew-x-[-15deg]",
          "after:content-[''] after:absolute after:inset-[1px]",
          "after:bg-gradient-to-b after:from-[rgba(255,255,255,0.7)] after:via-[rgba(255,255,255,0.2)] after:to-transparent",
          "after:rounded-[27px] after:opacity-60 after:pointer-events-none after:transition-opacity after:duration-300",
          "hover:after:opacity-80"
        ].join(" "),

        // iOS-inspired cosmic style for your theme
        iosCosmic: [
          "bg-gradient-to-br from-[rgba(0,119,255,0.2)] to-[rgba(0,59,127,0.4)] border border-[rgba(0,119,255,0.3)]",
          "rounded-[28px] py-3 px-6 font-mono text-base font-medium tracking-wider text-white",
          "shadow-[0_2px_8px_rgba(0,119,255,0.3),inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.1)]",
          "transition-all duration-300 min-w-[140px] cursor-pointer text-center",
          "text-shadow-[0_1px_2px_rgba(0,0,0,0.5)]",
          "hover:bg-gradient-to-br hover:from-[rgba(0,140,255,0.3)] hover:to-[rgba(0,70,150,0.5)]",
          "hover:shadow-[0_4px_12px_rgba(0,119,255,0.4),inset_0_1px_0_rgba(255,255,255,0.3),0_0_0_1px_rgba(255,255,255,0.2)]",
          "hover:translate-y-[-1px] hover:scale-[1.01]",
          "active:bg-gradient-to-br active:from-[rgba(0,70,150,0.5)] active:to-[rgba(0,40,100,0.6)]",
          "active:translate-y-[1px] active:scale-[0.99]",
          "active:shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]",
          "active:transition-all active:duration-100",
          "before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-[50%]",
          "before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.4)] before:to-transparent",
          "before:transform before:skew-x-[-15deg] before:rounded-t-[28px]",
          "before:pointer-events-none before:transition-transform before:duration-800 before:blur-[3px]",
          "hover:before:transform hover:before:translate-x-full hover:before:skew-x-[-15deg]",
          "after:content-[''] after:absolute after:inset-[1px]",
          "after:bg-gradient-to-b after:from-[rgba(255,255,255,0.7)] after:via-[rgba(255,255,255,0.2)] after:to-[rgba(0,119,255,0.1)]",
          "after:rounded-[27px] after:opacity-60 after:pointer-events-none after:transition-opacity after:duration-300",
          "hover:after:opacity-80"
        ].join(" "),
        
        iosCosmicPrimary: [
          "bg-gradient-to-br from-[#0077FF] to-[#005AC9] border border-[rgba(0,0,0,0.1)]",
          "rounded-[28px] py-3 px-6 font-mono text-base font-medium tracking-wider text-white",
          "shadow-[0_2px_8px_rgba(0,119,255,0.4),inset_0_1px_0_rgba(255,255,255,0.3),0_0_0_1px_rgba(255,255,255,0.1)]",
          "transition-all duration-300 min-w-[140px] cursor-pointer text-center",
          "text-shadow-[0_1px_1px_rgba(0,0,0,0.2)]",
          "hover:bg-gradient-to-br hover:from-[#1A86FF] hover:to-[#0066E0]",
          "hover:shadow-[0_4px_12px_rgba(0,119,255,0.5),inset_0_1px_0_rgba(255,255,255,0.4),0_0_0_1px_rgba(255,255,255,0.2)]",
          "hover:translate-y-[-1px] hover:scale-[1.01]",
          "active:bg-gradient-to-br active:from-[#0066E0] active:to-[#0052B3]",
          "active:translate-y-[1px] active:scale-[0.99]",
          "active:shadow-[0_1px_4px_rgba(0,0,0,0.2),inset_0_1px_3px_rgba(0,0,0,0.1)]",
          "active:transition-all active:duration-100",
          "before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-[50%]",
          "before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.5)] before:to-transparent",
          "before:transform before:skew-x-[-15deg] before:rounded-t-[28px]",
          "before:pointer-events-none before:transition-transform before:duration-800 before:blur-[3px]",
          "hover:before:transform hover:before:translate-x-full hover:before:skew-x-[-15deg]",
          "after:content-[''] after:absolute after:inset-[1px]",
          "after:bg-gradient-to-b after:from-[rgba(255,255,255,0.7)] after:via-[rgba(255,255,255,0.2)] after:to-transparent",
          "after:rounded-[27px] after:opacity-60 after:pointer-events-none after:transition-opacity after:duration-300",
          "hover:after:opacity-80"
        ].join(" "),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        // Adding iOS-specific sizes if needed
        ios: "h-14 px-7 py-3 text-base",
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
*/
Button.displayName = "Button"

export { Button, buttonVariants }
