import { CheckCircleIcon } from "./icons";
import { cn } from "@/lib/cn";

type CheckListProps = {
  items: readonly string[];
  className?: string;
};

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn("flex flex-col gap-[0.995em]", className)}>
      {items.map((item) => (
        <li key={item} className="text-body text-ink-soft flex items-start gap-[1.19em] font-bold">
          <CheckCircleIcon className="text-leaf mt-[0.02em] h-[1.53em] w-[1.53em] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
