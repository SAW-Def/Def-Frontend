import { CheckBadgeIcon } from "./icons";
import { cn } from "@/lib/cn";

type StatTileProps = {
  value: string;
  suffix?: string;
  lines: readonly string[];
  tone: "light" | "brand";
};

export function StatTile({ value, suffix, lines, tone }: StatTileProps) {
  const onBrand = tone === "brand";

  return (
    <div
      className={cn(
        "flex flex-col items-center px-[clamp(20px,2.0664vw+12.251px,48px)] pt-[clamp(24px,0.5756vw+21.841px,31.8px)] pb-[clamp(36px,1.3727vw+30.852px,54.6px)] text-center",
        onBrand ? "bg-brand" : "bg-sand",
      )}
    >
      <p
        className={cn(
          "text-stat font-bold",
          onBrand ? "text-paper" : "text-brand",
        )}
      >
        {value}
        {suffix ? <sup className="top-[-0.42em] text-[0.583em] leading-none">{suffix}</sup> : null}
      </p>
      <p
        className={cn(
          "text-body mt-[clamp(16px,0.9077vw+12.596px,28.3px)] leading-[1.25] font-bold",
          onBrand ? "text-paper" : "text-brand",
        )}
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <CheckBadgeIcon
        ringColor={onBrand ? "#b54937" : "#f3f1ed"}
        className="text-leaf mt-[clamp(18px,1.0258vw+14.153px,31.9px)] h-[clamp(34px,0.9742vw+30.347px,47.2px)] w-auto"
      />
    </div>
  );
}
