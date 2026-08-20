import type { Metadata } from "next";
import { VideoFeature } from "@/components/media/VideoFeature";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { OutlineCard } from "@/components/ui/OutlineCard";
import { introFilmUrl, routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Solution",
  description:
    "Built by furniture manufacturers, for furniture manufacturers. DEF Software Solutions addresses the skilled labour shortage and the inefficiencies of quoting, selling and manufacturing personalised furniture.",
};

const manufacturerBenefits = [
  {
    title: ["Sell more", "efficiently"],
    icon: { src: "/icons/sell-more.svg", width: 147.5, height: 109.7 },
  },
  {
    title: ["Reduce unnecessary", "sales intervention"],
    icon: { src: "/icons/no-sales.svg", width: 118.9, height: 84 },
  },
  {
    title: ["Focus your time and", "resources where it matters most:", "furniture production"],
    icon: { src: "/icons/factory.svg", width: 175.9, height: 93.8 },
  },
];

export default function OurSolutionPage() {
  return (
    <>
      <section className="bg-cream pt-[clamp(48px,6.1255vw+25.03px,131px)] pb-[clamp(48px,1.1808vw+43.572px,64px)]">
        <div className="shell">
          <h1 className="text-display font-bold">
            <span className="lg:block">Built by furniture manufacturers,</span>{" "}
            <span className="lg:block">for furniture manufacturers.</span>
          </h1>
          <p className="text-body-sm mt-[clamp(24px,1.8081vw+17.219px,48.5px)] max-w-[80em]">
            This software was developed to address the{" "}
            <strong className="font-bold">real challenges</strong> faced in modern furniture manufacturing,
            particularly the <strong className="font-bold">growing shortage of skilled labour</strong> and the{" "}
            <strong className="font-bold">
              inefficiencies involved in quoting, selling and manufacturing personalised furniture.
            </strong>
          </p>
          <Button href={routes.howItWorks} size="xl" className="mt-[clamp(24px,1.3137vw+19.074px,41.8px)]">
            See How It Works
          </Button>
        </div>
      </section>

      <section className="pt-[clamp(46px,1.8081vw+39.22px,70.5px)] pb-[clamp(56px,2.4502vw+46.812px,89.2px)]">
        <div className="shell">
          <div className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4">
            <h2 className="text-h3 font-bold text-balance">
              This software platform is designed to help manufacturers:
            </h2>
            <ArrowLink href={routes.scheduleCall} className="text-caption">
              Schedule a Call
            </ArrowLink>
          </div>

          <div className="mt-[clamp(36px,2.8856vw+25.179px,75.1px)] grid gap-[clamp(16px,1.9188vw+8.804px,42px)] sm:grid-cols-2 lg:grid-cols-3">
            {manufacturerBenefits.map((benefit) => (
              <OutlineCard
                key={benefit.title.join(" ")}
                title={benefit.title}
                icon={benefit.icon}
                className="min-h-[clamp(180px,6.4502vw+155.812px,267.4px)]"
              />
            ))}
          </div>
        </div>
      </section>

      <VideoFeature
        title={["Video of Mark Cassar", "Explaining DEF Software Solutions"]}
        src={introFilmUrl}
        label="Play the introduction from Mark Cassar"
      />
    </>
  );
}
