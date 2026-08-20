import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { socialIcons } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { footerNav, routes, site, socialLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand text-paper">
      <div className="shell pt-[clamp(44px,1.7417vw+37.469px,67.6px)] pb-[clamp(48px,1.9926vw+40.528px,75px)]">
        <div className="grid gap-x-10 gap-y-14 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="text-h3 text-cream leading-[1.2] max-w-[13.5em]">
            <p>{site.tagline}</p>
            <p className="mt-[clamp(24px,0.8856vw+20.679px,36px)] italic">{site.strapline}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-[clamp(28px,3.2472vw+15.823px,72px)] gap-y-10 sm:grid-cols-3 lg:grid-cols-[276.1px_192.2px_auto] lg:gap-x-0">
            {footerNav.map((column, index) => (
              <div
                key={column.heading}
                className={cn(
                  "lg:w-[276.1px]",
                  index === 1 && "lg:w-[192.2px]",
                  index === 2 && "lg:w-auto",
                )}
              >
                <h2 className="text-body font-bold tracking-[0.01em] uppercase">{column.heading}</h2>
                <ul className="mt-[clamp(26px,1.8376vw+19.109px,50.9px)] space-y-[clamp(4px,0.0221vw+3.917px,4.3px)]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-body transition-opacity hover:opacity-70",
                          "emphasis" in link && link.emphasis && "font-bold",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[clamp(48px,8.2731vw+16.976px,160.1px)] flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href={routes.home} aria-label={`${site.name} — home`} className="inline-block text-cream">
              <Logo layout="stack" className="h-auto w-[clamp(68px,2.7749vw+57.594px,105.6px)]" />
            </Link>
            <p className="text-caption mt-[clamp(18px,0.4059vw+16.478px,23.5px)]">
              © 2026 {site.name}. All rights reserved.
            </p>
          </div>

          <ul className="flex items-center gap-[clamp(20px,1.4022vw+14.742px,39px)]">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="text-cream block transition-opacity hover:opacity-70"
                  >
                    <Icon className="h-[clamp(30px,1.0332vw+26.125px,44px)] w-auto" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
