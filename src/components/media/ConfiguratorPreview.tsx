import { cn } from "@/lib/cn";
import { ConfiguratorUI } from "./ConfiguratorUI";
import { DeviceFrame } from "./DeviceFrame";

/** Single laptop view of the configurator for in-page feature blocks. */
export function ConfiguratorPreview({ className }: { className?: string }) {
  return (
    <div className={cn("@container w-full", className)} aria-hidden>
      <DeviceFrame kind="laptop">
        <ConfiguratorUI />
      </DeviceFrame>
    </div>
  );
}
