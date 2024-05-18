import type { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

export function FullScreenBg({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        `
          h-dvh bg-[lightgray] bg-[url('assets/bg-dark.png')] bg-cover bg-center
          bg-no-repeat
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
