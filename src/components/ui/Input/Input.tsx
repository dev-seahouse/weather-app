import * as React from "react";

import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `
            flex h-10 w-full rounded-xs border border-input bg-background px-3
            py-0 text-xs ring-offset-background

            file:border-0 file:bg-transparent file:text-sm file:font-medium

            placeholder:text-muted-foreground

            focus-visible:outline-none focus-visible:ring-0
            focus-visible:ring-ring focus-visible:ring-offset-0

            disabled:cursor-not-allowed disabled:opacity-50

            sm:h-[3.4rem] sm:rounded-md sm:text-base
          `,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
