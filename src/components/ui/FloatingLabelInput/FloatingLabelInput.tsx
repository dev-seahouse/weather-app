import * as React from "react";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <Input
        placeholder=" "
        className={cn("peer", "pt-[10px]", className)}
        value={value}
        ref={ref}
        {...props}
      />
    );
  },
);
FloatingInput.displayName = "FloatingInput";

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        `
          absolute start-2 top-2 z-10 origin-[0] -translate-y-2 scale-75
          bg-transparent px-[.4rem] text-sm text-gray-500 duration-300
        `,
        `
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
          peer-placeholder-shown:scale-100
        `,
        `
          peer-focus:top-2 peer-focus:-translate-y-2 peer-focus:scale-75
          peer-focus:px-[.4rem] peer-focus:text-primary

          sm:py-1 sm:peer-focus:py-[4px]
        `,
        `
          peer:not(:placeholder-shown):top-2
          peer:not(:placeholder-shown):-translate-y-2
          peer:not(:placeholder-shown):scale-75
        `,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
FloatingLabel.displayName = "FloatingLabel";

type FloatingLabelInputProps = InputProps & {
  label?: string;
  labelClassName?: string;
};

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, labelClassName, ...props }, ref) => {
  return (
    <div className="relative">
      <FloatingInput ref={ref} id={id} {...props} />
      <FloatingLabel htmlFor={id} className={labelClassName}>
        {label}
      </FloatingLabel>
    </div>
  );
});
FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
