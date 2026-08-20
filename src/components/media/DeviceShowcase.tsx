import { cn } from "@/lib/cn";
import { ConfiguratorUI } from "./ConfiguratorUI";
import { DeviceFrame } from "./DeviceFrame";

/** Desktop, tablet and handset views of the configurator, shown as one composition. */
export function DeviceShowcase({ className }: { className?: string }) {
  return (
    <div className={cn("@container relative aspect-[609/325] w-full", className)} aria-hidden>
      <DeviceFrame kind="laptop" className="absolute top-0 left-0 w-[72%]">
        <ConfiguratorUI />
      </DeviceFrame>
      <DeviceFrame kind="tablet" className="absolute right-[7%] bottom-0 w-[25%] rotate-[3deg]">
        <ConfiguratorUI layout="compact" />
      </DeviceFrame>
      <DeviceFrame kind="phone" className="absolute right-0 bottom-[7%] w-[13%] -rotate-[4deg]">
        <ConfiguratorUI layout="compact" />
      </DeviceFrame>
    </div>
  );
}
