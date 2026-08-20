import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type DeviceFrameProps = {
  kind: "laptop" | "tablet" | "phone";
  children: ReactNode;
  className?: string;
};

export function DeviceFrame({ kind, children, className }: DeviceFrameProps) {
  if (kind === "laptop") {
    return (
      <div className={cn("w-full", className)}>
        <div className="rounded-[1.4%/2.2%] bg-night p-[0.9%] shadow-[0_24px_60px_-30px_rgba(34,31,32,0.55)]">
          <div className="aspect-[16/10] overflow-hidden rounded-[0.6%/1%] bg-white">{children}</div>
        </div>
        <div className="relative mx-auto h-[1.6cqw] w-full min-h-2.5 rounded-b-[10px] bg-[#38332f]">
          <span className="absolute top-0 left-1/2 h-[42%] w-[14%] -translate-x-1/2 rounded-b-full bg-[#2b2624]" />
        </div>
      </div>
    );
  }

  if (kind === "tablet") {
    return (
      <div
        className={cn(
          "rounded-[6%/4.4%] bg-night p-[2.4%] shadow-[0_20px_50px_-28px_rgba(34,31,32,0.5)]",
          className,
        )}
      >
        <div className="aspect-[3/4] overflow-hidden rounded-[4%/3%] bg-white">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-[13%/6%] bg-night p-[3.4%] shadow-[0_18px_44px_-24px_rgba(34,31,32,0.55)]",
        className,
      )}
    >
      <div className="relative aspect-[9/18] overflow-hidden rounded-[10%/5%] bg-white">
        {children}
        <span className="absolute top-[1.6%] left-1/2 h-[1.6%] w-[34%] -translate-x-1/2 rounded-full bg-night" />
      </div>
    </div>
  );
}
