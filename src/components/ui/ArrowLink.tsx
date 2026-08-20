import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowCircleIcon } from "./icons";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ArrowLink({ href, children, className }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-[0.55em] font-bold text-brand transition-colors hover:text-brand-deep",
        className,
      )}
    >
      <ArrowCircleIcon className="h-[1.2em] w-[1.2em] shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      <span>{children}</span>
    </Link>
  );
}
