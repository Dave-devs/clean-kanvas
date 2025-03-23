import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
                    "transition-all duration-200 ease-in-out",
                    {
                        "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] shadow-button":
                            variant === "primary",
                        "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]":
                            variant === "secondary",
                        "border border-input bg-transparent hover:bg-accent/10 text-foreground":
                            variant === "outline",
                        "hover:bg-accent/10 text-foreground": variant === "ghost",
                        "h-10 px-4 py-2": size === "default",
                        "h-9 px-3 text-xs": size === "sm",
                        "h-11 px-8 text-base": size === "lg",
                        "h-10 w-10 p-0": size === "icon",
                    },
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };