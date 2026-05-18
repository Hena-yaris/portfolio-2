

import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-accent text-background hover:bg-accent/90 shadow-[0_1px_15px_-4px_rgba(212,175,55,0.4)] hover:shadow-[0_10px_20px_-8px_rgba(212,175,55,0.5)]",
    secondary:
      "bg-card text-foreground border border-border-subtle hover:bg-card/80 hover:border-border",
  };

  const sizeClasses = {
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}