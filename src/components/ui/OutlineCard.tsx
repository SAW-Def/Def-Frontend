import Image from "next/image";
import { cn } from "@/lib/cn";
import { fluid } from "@/lib/fluid";

export type CardIcon = {
  src: string;
  width: number;
  height: number;
};

type OutlineCardProps = {
  title: readonly string[];
  icon: CardIcon;
  className?: string;
};

export function OutlineCard({ title, icon, className }: OutlineCardProps) {
  return (
    <div
      className={cn(
        "border-brand flex flex-col items-center rounded-[var(--radius-card)] border-[3px]",
        "px-[clamp(14px,0.738vw+11.232px,24px)] pt-[clamp(18px,0.738vw+15.232px,28px)] pb-[clamp(20px,0.9594vw+16.402px,33px)]",
        className,
      )}
    >
      <h3 className="text-h4 text-brand text-center font-bold">
        {title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>
      <Image
        src={icon.src}
        alt=""
        aria-hidden
        width={icon.width}
        height={icon.height}
        unoptimized
        className="mt-auto w-auto pt-[clamp(14px,1.1808vw+9.572px,30px)]"
        style={{ height: fluid(icon.height) }}
      />
    </div>
  );
}
