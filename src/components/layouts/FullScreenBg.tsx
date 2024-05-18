import type { PropsWithChildren } from "react";

export function FullScreenBg({ children }: PropsWithChildren) {
  return (
    <div
      className={`
        h-dvh bg-[lightgray] bg-[url('assets/bg-dark.png')] bg-cover bg-center
        bg-no-repeat
      `}
    >
      {children}
    </div>
  );
}
