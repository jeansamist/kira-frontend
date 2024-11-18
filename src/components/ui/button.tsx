import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "__shadow-sm inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity/15",
  {
    variants: {
      variant: {
        white: "bg-white text-title",
        primary: "bg-primary text-white hover:bg-primary-600",
        "primary-secondary": "bg-primary/15 text-primary hover:bg-primary/15",
        secondary: "bg-secondary text-white hover:bg-secondary-600",
        "secondary-secondary":
          "bg-secondary/15 text-secondary hover:bg-secondary/15",
        green: "bg-green text-white hover:bg-green-600",
        "green-secondary": "bg-green/15 text-green hover:bg-green/15",
        yellow: "bg-yellow text-white hover:bg-yellow-600",
        "yellow-secondary": "bg-yellow/15 text-yellow hover:bg-yellow/15",
        red: "bg-red text-white hover:bg-red-600",
        "red-secondary": "bg-red/15 text-red hover:bg-red/15",
        "white-border": "bg-white text-title border border-border",
        "white-border-muted": "bg-white text-muted border border-border",
        "white-muted": "bg-white text-muted",
      },
      size: {
        default: "h-12 px-6 py-3",
        small: "text-xs h-9 px-3 py-2",
        icone: "w-12 h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
