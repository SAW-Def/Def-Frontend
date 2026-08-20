import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-brand text-shell hover:bg-brand-deep",
  soft: "bg-cream text-brand hover:bg-[#ded6c8]",
  onBrand: "bg-paper text-brand hover:bg-white",
} as const;

const sizes = {
  sm: "text-btn-sm px-[2.4em]",
  md: "text-btn-md px-[2.4em]",
  lg: "text-btn-lg px-[2.083em]",
  xl: "text-btn-xl px-[2.708em]",
  "2xl": "text-btn-2xl px-[2.4em]",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full py-[0.375em] text-center font-bold leading-none whitespace-nowrap transition-colors duration-200";

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: SharedProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}

export function ButtonControl({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: SharedProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], "disabled:pointer-events-none disabled:opacity-60", className)}
      {...props}
    />
  );
}
