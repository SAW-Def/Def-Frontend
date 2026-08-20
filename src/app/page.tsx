import Image from "next/image";
import { ConfiguratorPreview } from "@/components/media/ConfiguratorPreview";
import { DeviceShowcase } from "@/components/media/DeviceShowcase";
import { ImageCarousel } from "@/components/media/ImageCarousel";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { CrossCircleIcon } from "@/components/ui/icons";
import { OutlineCard } from "@/components/ui/OutlineCard";
import { QueryBubbles } from "@/components/ui/QueryBubbles";
import { StatTile } from "@/components/ui/StatTile";
import {
  businessOutcomes,
  customerQueries,
  painPoints,
  platformCapabilities,
  salesRoutes,
  stats,
  visibilityCards,
} from "@/content/home";
import { heroSlides, photos } from "@/content/media";
import { routes } from "@/content/site";

function Hero() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="shell-lead flex flex-col justify-center py-[clamp(48px,6.1255vw+25.03px,131px)]">
        <h1 className="text-display leading-[1.3] font-bold text-balance">
          <span className="block">Stop quoting.</span>
          <span className="text-brand block">Start converting.</span>
        </h1>
        <div className="text-body-sm mt-[clamp(28px,1.845vw+21.081px,53px)] max-w-[28em] leading-[1.334]">
          <p className="font-bold">Turn your website into a 24/7 furniture showroom!</p>
          <p>A furniture configurator that lets your customers design, price, and order furniture online.</p>
        </div>
        <div className="mt-[clamp(32px,4.8708vw+13.734px,98px)] flex flex-wrap gap-[clamp(12px,0.5166vw+10.063px,19px)]">
          <Button href={routes.scheduleCall}>Schedule a Call</Button>
          <Button href={routes.howItWorks} variant="soft">
            See How It Works
          </Button>
        </div>
      </div>

      <div className="bg-amber aspect-[865/560] lg:aspect-auto lg:min-h-[672px]">
        <ImageCarousel
          images={heroSlides}
          className="h-full w-full"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="bg-sand py-[clamp(56px,2.4354vw+46.867px,89px)]">
      <div className="shell">
        <h2 className="text-h1 font-bold text-balance">
          Where furniture expertise meets technology.
        </h2>
        <p className="text-body mt-[clamp(20px,1.107vw+15.849px,35px)] max-w-[50em]">
          We didn’t start as a tech company. <strong className="font-bold">We started on the factory floor.</strong>{" "}
          Running both <strong className="font-bold">B2B and B2C furniture operations</strong> gave us something most
          software platforms never have, <strong className="font-bold">full visibility into:</strong>
        </p>
        <div className="mt-[clamp(36px,3.0996vw+24.376px,78px)] grid grid-cols-1 gap-[clamp(16px,1.107vw+11.849px,31px)] sm:grid-cols-2 lg:grid-cols-4">
          {visibilityCards.map((card) => (
            <OutlineCard key={card.title.join(" ")} title={card.title} icon={card.icon} className="min-h-[clamp(190px,5.3875vw+169.797px,263px)]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function SalesRoutes() {
  return (
    <section className="pt-[clamp(44px,2.5609vw+34.397px,78.7px)] pb-[clamp(56px,4.7454vw+38.205px,120.3px)]">
      <div className="shell">
        <h2 className="text-h1 font-bold text-balance">
          <span className="text-brand">One platform,</span> two ways to sell furniture.
        </h2>

        <div className="mt-[clamp(40px,4.4428vw+23.339px,100.2px)] grid gap-[clamp(16px,0.3469vw+14.699px,20.7px)] lg:grid-cols-2">
          {salesRoutes.map((route, index) => {
            const image = index === 0 ? photos.configuratorHome : photos.qualifiedLead;
            return (
              <article
                key={route.title}
                className="bg-sand flex flex-col overflow-hidden rounded-[var(--radius-panel)]"
              >
                <div className="relative aspect-[725/504]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  {index === 1 ? (
                    <QueryBubbles
                      queries={customerQueries}
                      className="absolute inset-x-0 top-[clamp(10px,0.8856vw+6.679px,21.8px)] px-[clamp(10px,1.2177vw+5.434px,26.5px)]"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center px-[clamp(20px,2.3616vw+11.144px,52px)] pt-[clamp(12px,0.1771vw+11.336px,14.4px)] pb-[clamp(24px,0.583vw+21.814px,31.9px)] text-center">
                  <h3 className="text-h1 text-brand font-bold text-balance">{route.title}</h3>
                  <p
                    className="text-body mt-[clamp(14px,0.8118vw+10.956px,25px)]"
                    style={{ maxWidth: route.bodyWidth }}
                  >
                    {route.body}
                  </p>
                  <p className="text-body mt-auto pt-[clamp(16px,0.5904vw+13.786px,24px)] font-bold text-balance">
                    {route.outcome}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="bg-sand pt-[clamp(60px,3.1513vw+48.183px,102.7px)] pb-[clamp(64px,3.7048vw+50.107px,114.2px)]">
      <div className="shell">
        <h2 className="text-h2 text-brand font-bold">We feel your pain!</h2>
        <p className="text-body mt-[clamp(10px,0.2952vw+8.893px,14px)]">
          Selling personalised furniture <strong className="font-bold">shouldn’t be this complicated.</strong>
        </p>

        <ul className="mt-[clamp(34px,1.7417vw+27.469px,57.6px)] grid gap-x-[clamp(24px,5.6089vw+2.967px,100px)] gap-y-[clamp(16px,0.6494vw+13.565px,24.8px)] lg:grid-cols-2">
          {painPoints.map((point) => (
            <li key={point} className="text-h4 text-brand flex items-start gap-[0.85em] font-bold">
              <CrossCircleIcon className="mt-[0.03em] h-[1.72em] w-[1.72em] shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-body mt-[clamp(26px,1.0849vw+21.932px,40.7px)] max-w-[42em]">
          Meanwhile, your customers{" "}
          <strong className="font-bold">expect speed, clarity, and confidence before they buy.</strong> Traditional
          sales processes is not always the best solution to turn leads into customers.
        </p>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section className="pt-[clamp(56px,4.4059vw+39.478px,115.7px)] pb-[clamp(56px,3.3948vw+43.269px,102px)]">
      <div className="shell grid items-center gap-[clamp(40px,4.1328vw+24.502px,96px)] lg:grid-cols-2">
        <div className="order-last lg:order-first">
          <ConfiguratorPreview className="mx-auto max-w-[620px]" />
        </div>
        <div>
          <h2 className="text-h3 text-brand font-bold text-balance">
            A software platform built for real manufacturing logic.
          </h2>
          <p className="text-body-sm mt-[clamp(20px,0.9004vw+16.624px,32.2px)] max-w-[17em]">
            Our system eases the personalised furniture sales process.
          </p>
          <CheckList items={platformCapabilities} className="mt-[clamp(26px,1.1513vw+21.683px,41.6px)]" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Platform results" className="grid sm:grid-cols-3">
      {stats.map((stat) => (
        <StatTile
          key={stat.value}
          value={stat.value}
          suffix={"suffix" in stat ? stat.suffix : undefined}
          lines={stat.lines}
          tone={stat.tone}
        />
      ))}
    </section>
  );
}

function BusinessImpact() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="shell-lead flex flex-col justify-center pt-[clamp(56px,3.8155vw+41.692px,107.7px)] pb-[clamp(56px,4.1993vw+40.253px,112.9px)]">
        <h2 className="text-h2 font-bold text-balance">What this means for your business</h2>
        <CheckList items={businessOutcomes} className="mt-[clamp(28px,1.3948vw+22.769px,46.9px)]" />
      </div>
      <div className="relative order-first min-h-[clamp(280px,34.3911vw+151.033px,746px)] lg:order-last">
        <Image
          src={photos.handshake.src}
          alt={photos.handshake.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

function TransformCta() {
  return (
    <section className="bg-sand pt-[clamp(56px,3.6015vw+42.494px,104.8px)] pb-[clamp(64px,4.2952vw+47.893px,122.2px)]">
      <div className="shell grid items-start gap-[clamp(40px,5.3137vw+20.074px,112px)] lg:grid-cols-[minmax(0,749fr)_minmax(0,609fr)]">
        <div>
          <h2 className="text-h1 font-bold">
            <span className="lg:block">Ready to transform how</span>{" "}
            <span className="lg:block">you sell furniture?</span>
          </h2>
          <p className="text-body-sm mt-[clamp(24px,2.0959vw+16.14px,52.4px)] max-w-[42em]">
            Let’s show you how the platform fits into your workflow and production structure. See how configuration,
            pricing, and conversion can finally work together.
          </p>
          <Button href={routes.scheduleCall} size="2xl" className="mt-[clamp(28px,2.5092vw+18.59px,62px)]">
            Schedule a Call
          </Button>
        </div>
        <DeviceShowcase className="lg:self-center" />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Expertise />
      <SalesRoutes />
      <PainPoints />
      <Platform />
      <Stats />
      <BusinessImpact />
      <TransformCta />
    </>
  );
}
