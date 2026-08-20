import type { ReactNode } from "react";
import { site } from "@/content/site";

type DocumentPageProps = {
  title: string;
  children: ReactNode;
};

export function DocumentPage({ title, children }: DocumentPageProps) {
  return (
    <>
      <section className="bg-cream py-[clamp(48px,4.5756vw+30.841px,110px)]">
        <div className="shell">
          <h1 className="text-display font-bold text-balance">{title}</h1>
        </div>
      </section>
      <section className="py-[clamp(48px,3.8376vw+33.609px,100px)]">
        <div className="shell text-body flex max-w-[46em] flex-col gap-[clamp(20px,0.5904vw+17.786px,28px)]">
          {children}
          <p>
            For anything you need in the meantime, contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-brand font-bold underline-offset-4 hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
