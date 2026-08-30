import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          // Base
          "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          // Size
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-5 py-2.5 text-sm",
          size === "lg" && "px-7 py-3.5 text-base",
          // Variant
          variant === "primary" &&
            "bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600",
          variant === "secondary" &&
            "bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent",
          variant === "outline" &&
            "border border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-600",
          variant === "ghost" &&
            "text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-600",
          variant === "danger" &&
            "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
          // Full width
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
