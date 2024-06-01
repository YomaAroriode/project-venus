import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconPosition, ...props }, ref) => {
    // Conditional padding classes based on the presence of icon and its position
    const paddingLeft = icon && iconPosition === "left" ? "pl-14" : "pl-3";
    const paddingRight = icon && iconPosition === "right" ? "pr-12" : "pr-3";

    return (
      <div className="relative">
        {icon && iconPosition === "left" && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-white py-2 text-sm ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            paddingLeft,
            paddingRight,
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon && iconPosition === "right" && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {icon}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
