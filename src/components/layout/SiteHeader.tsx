"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { mainNav, routes, site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isCurrent = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-cream">
      <div className="shell flex h-[clamp(72px,3.9114vw+57.332px,125px)] items-center justify-between gap-6">
        <Link
          href={routes.home}
          aria-label={`${site.name} — home`}
          className="text-brand h-[clamp(44px,2.4502vw+34.812px,77.2px)] shrink-0"
        >
          <Logo className="h-full w-auto" wordmarkClassName="text-ink" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-[clamp(28px,2.7306vw+17.76px,65px)] lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={cn(
                "text-body transition-colors hover:text-brand",
                isCurrent(item.href) ? "text-brand" : "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href={routes.scheduleCall} size="sm">
            Schedule a Call
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="text-ink -mr-2 p-2 lg:hidden"
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-cream lg:hidden">
          <div className="shell flex h-[clamp(72px,3.9114vw+57.332px,125px)] items-center justify-between">
            <span className="text-brand h-[clamp(44px,2.4502vw+34.812px,77.2px)]">
              <Logo className="h-full w-auto" wordmarkClassName="text-ink" />
            </span>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="text-ink -mr-2 p-2"
            >
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>
          <nav aria-label="Main" className="shell flex flex-col items-start gap-8 pt-10">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={cn("text-h4 font-bold", isCurrent(item.href) ? "text-brand" : "text-ink")}
              >
                {item.label}
              </Link>
            ))}
            <Button href={routes.scheduleCall} onClick={closeMenu} size="md" className="mt-2">
              Schedule a Call
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
