import type { Metadata } from "next";
import Image from "next/image";
import { ScheduleForm } from "@/components/forms/ScheduleForm";
import { Button } from "@/components/ui/Button";
import { photos } from "@/content/media";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Schedule a Call",
  description:
    "Tell us about your furniture business and we’ll show you how the configurator fits your workflow, pricing rules and production structure. We respond within two business days.",
};

export default function ScheduleACallPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[clamp(320px,11.8819vw+275.443px,481px)] items-center overflow-hidden">
        <Image
          src={photos.configuratorWarehouse.src}
          alt={photos.configuratorWarehouse.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[50%_66%]"
        />
        <span
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.037) 25%, rgba(0,0,0,0.147) 50%, rgba(0,0,0,0.249) 65%, rgba(0,0,0,0.378) 80%, rgba(0,0,0,0.478) 90%, rgba(0,0,0,0.59) 100%)",
          }}
        />
        <div className="shell py-[clamp(40px,3.69vw+26.162px,90px)]">
          <h1 className="text-h1 text-cream font-bold">
            <span className="lg:block">Ready to transform how</span>{" "}
            <span className="lg:block">you sell furniture?</span>
          </h1>
          <p className="text-body-sm text-cream mt-[clamp(20px,2.4354vw+10.867px,53px)] max-w-[36em] font-bold">
            Whether you’re exploring digital sales, looking to streamline custom configurations, or want to understand
            how our platform fits into your existing operation, we’re here to help. Tell us a little about your
            business, and we’ll guide you through the next steps.
          </p>
        </div>
      </section>

      <section className="pt-[clamp(52px,4.1993vw+36.253px,108.9px)] pb-[clamp(40px,1.4391vw+34.603px,59.5px)]">
        <div className="shell">
          <div className="mx-auto max-w-[1291px]">
            <h2 className="sr-only">Request a call</h2>
            <div id="schedule-form" className="scroll-mt-[140px]">
              <ScheduleForm />
            </div>

            <div className="bg-brand mt-[clamp(20px,0.6347vw+17.62px,28.6px)] flex flex-col gap-6 rounded-[clamp(20px,1.1808vw+15.572px,36px)] px-[clamp(24px,3.321vw+11.546px,69px)] py-[clamp(22px,0.6642vw+19.509px,31px)] sm:flex-row sm:items-center sm:justify-between">
              <div className="text-body text-paper">
                <p className="font-bold">Get in Touch</p>
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </div>
              <Button href="#schedule-form" variant="onBrand" size="lg">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
