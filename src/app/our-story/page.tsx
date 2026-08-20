import type { Metadata } from "next";
import Image from "next/image";
import { ConfiguratorPreview } from "@/components/media/ConfiguratorPreview";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { cn } from "@/lib/cn";
import { photos, type Photo } from "@/content/media";
import { routes, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "DEF Software Solutions was built from more than 30 years of real furniture manufacturing experience, by industry professionals who understand both production and sales from the ground up.",
};

const pillars = [
  { title: ["B2B + B2C", "Operational", "Expertise"], tone: "light" },
  { title: ["30+ Years of", "Manufacturing", "Experience"], tone: "brand" },
  { title: ["Built From Real", "Production", "Challenges"], tone: "light" },
] as const;

const productionOutcomes = [
  "Production-safe customisation",
  "Controlled furniture parameters",
  "Standardised components where needed",
  "Faster sales workflows",
  "Reduced showroom dependency",
  "Improved order accuracy",
  "Better-qualified customer enquiries",
  "Scalable manufacturing efficiency",
];

const workshopTop = [photos.workshopPress, photos.sprayBooth, photos.craftsmanVeneer];
const workshopBottom = [photos.beamSaw, photos.assemblyLine, photos.edgeBander];

function PhotoStrip({ images }: { images: readonly Photo[] }) {
  return (
    <div className="grid grid-cols-3">
      {images.map((image) => (
        <div key={image.src} className="relative aspect-[577/350]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function OurStoryPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[clamp(360px,23.0258vw+273.653px,672px)] items-center overflow-hidden">
        <Image
          src={photos.panelSaw.src}
          alt={photos.panelSaw.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 origin-[7.57%_95.42%] scale-[1.442] object-cover"
        />
        <span className="bg-night/33 absolute inset-0 -z-10" aria-hidden />
        <div className="shell py-[clamp(48px,3.5424vw+34.716px,96px)]">
          <h1 className="text-h1 text-cream font-bold">
            <span className="lg:block">Technology meets</span>{" "}
            <span className="lg:block">real furniture expertise.</span>
          </h1>
          <p className="text-h1 text-cream mt-[clamp(24px,2.3616vw+15.144px,56px)] font-bold italic">
            {site.strapline}
          </p>
          <Button href={routes.scheduleCall} size="xl" className="mt-[clamp(28px,3.3948vw+15.269px,74px)]">
            Schedule a Call
          </Button>
        </div>
      </section>

      <section className="bg-sand pt-[clamp(56px,2.9742vw+44.847px,96.3px)] pb-[clamp(60px,3.2546vw+47.795px,104.1px)]">
        <div className="shell">
          <p className="text-h2 leading-[1.286]">
            {site.name} was built from{" "}
            <strong className="font-bold">more than 30 years of real furniture manufacturing experience</strong>{" "}
            created by industry professionals who understand both production and sales from the ground up.
          </p>
        </div>
      </section>

      <PhotoStrip images={workshopTop} />

      <section aria-label="What shapes the platform" className="grid grid-cols-1 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title.join(" ")}
            className={cn(
              "flex items-center justify-center px-[clamp(8px,1.7712vw+1.358px,32px)] py-[clamp(24px,3.5424vw+10.716px,72px)] text-center",
              pillar.tone === "brand" ? "bg-brand" : "bg-sand",
            )}
          >
            <h2
              className={cn(
                "text-h1 font-bold",
                pillar.tone === "brand" ? "text-paper" : "text-brand",
              )}
            >
              {pillar.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
        ))}
      </section>

      <PhotoStrip images={workshopBottom} />

      <section className="pt-[clamp(56px,2.6642vw+46.009px,92.1px)] pb-[clamp(40px,1.0849vw+35.932px,54.7px)]">
        <div className="shell">
          <h2 className="text-h1 text-brand font-bold text-balance">
            From factory floor to software platform
          </h2>
          <div className="text-body mt-[clamp(28px,1.4465vw+22.576px,47.6px)] flex flex-col gap-[clamp(20px,0.5978vw+17.758px,28.1px)]">
            <p>
              Our journey began with <span className="underline underline-offset-4">SAW,</span> a furniture
              manufacturing business delivering custom projects for hotels, restaurants, bars, and commercial spaces.
              Years of dealing with international designers managing production taught us the realities of the
              industry: operational bottlenecks, scalability challenges, and slow sales processes.
            </p>
            <p>
              In 2019, we launched <span className="underline underline-offset-4">DARI</span>, bringing our
              manufacturing expertise directly to homeowners through a consumer-focused furniture brand operating from
              a showroom. Operating both businesses gave us something most software companies lack, real visibility
              across manufacturing, retail, customer behaviour, and production operations.
            </p>
            <p>
              It also exposed a clear problem: the traditional sales process is adequate for some sales,{" "}
              <strong className="font-bold">BUT</strong> not all. In today’s world, consumers are looking for
              efficient ways to place orders, evaluate proposals and explore options. So, we built a better system
              with <strong className="font-bold">EFFICIENCY</strong> at its core.
            </p>
            <p>
              Efficient for your customers.
              <br />
              Efficient for your sales team.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand pt-[clamp(52px,2.2952vw+43.393px,83.1px)] pb-[clamp(60px,3.2472vw+47.823px,104px)]">
        <div className="shell grid items-center gap-[clamp(40px,4.1328vw+24.502px,96px)] lg:grid-cols-2">
          <div>
            <h2 className="text-h3 font-bold text-balance">Built around manufacturing reality</h2>
            <div className="text-body mt-[clamp(20px,0.4945vw+18.146px,26.7px)] flex max-w-[30em] flex-col gap-[clamp(20px,0.6125vw+17.703px,28.3px)]">
              <p>{site.name} was designed around real production workflows not generic software assumptions.</p>
              <p>
                The platform is built to keep manufacturing efficient while giving customers the flexibility to
                personalise products with confidence.
              </p>
            </div>
            <CheckList items={productionOutcomes} className="mt-[clamp(22px,0.4649vw+20.256px,28.3px)]" />
            <p className="text-body mt-[clamp(24px,0.524vw+22.035px,31.1px)]">
              We are furniture manufacturers first.
              <br />
              That’s why {site.name} was built around production not in spite of it.
            </p>
            <Button href={routes.scheduleCall} size="xl" className="mt-[clamp(32px,2.0664vw+24.251px,60px)]">
              Schedule a Call
            </Button>
          </div>
          <ConfiguratorPreview className="mx-auto max-w-[560px]" />
        </div>
      </section>
    </>
  );
}
