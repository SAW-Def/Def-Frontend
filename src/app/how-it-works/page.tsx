import type { Metadata } from "next";
import Image from "next/image";
import { ConfiguratorPreview } from "@/components/media/ConfiguratorPreview";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CheckList } from "@/components/ui/CheckList";
import { QueryBubbles } from "@/components/ui/QueryBubbles";
import { customerQueries } from "@/content/home";
import { photos } from "@/content/media";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Add the configurator to your website with a simple link. Customers personalise furniture to their exact requirements, producing either a direct online sale or a fully specified, qualified lead.",
};

const operationalRules = [
  "Material pricing and cost structures",
  "Available decors and material finishes",
  "Material options such as MDF, plywood, MFC, or veneered panels",
  "Optional added-value services, including site visit measurement and installation services",
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-cream pt-[clamp(48px,6.1255vw+25.03px,131px)] pb-[clamp(56px,3.1439vw+44.21px,98.6px)]">
        <div className="shell">
          <h1 className="text-display font-bold">
            <span className="lg:block">Inside the solution, a more</span>{" "}
            <span className="lg:block">efficient way to sell furniture.</span>
          </h1>
          <p className="text-body mt-[clamp(28px,3.6458vw+14.328px,77.4px)]">
            The software can be{" "}
            <strong className="font-bold">adopted through a simple link onto your website,</strong> allowing your
            customers to <strong className="font-bold">personalise their furniture</strong> online according to their
            exact requirements. By involving customers directly in the{" "}
            <strong className="font-bold">furniture design process</strong>, the platform creates{" "}
            <strong className="font-bold">two clear sales outcomes.</strong> In both scenarios, you engage only with
            customers who have already defined their needs, resulting in fewer unqualified enquiries and a
            significantly faster sales process.
          </p>
        </div>
      </section>

      <div className="bg-sand">
        <section className="grid lg:grid-cols-2">
          <div className="relative order-first min-h-[clamp(260px,30.4059vw+145.978px,672px)]">
            <Image
              src={photos.configuratorHome.src}
              alt={photos.configuratorHome.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="shell-trail flex flex-col justify-center py-[clamp(40px,4.1328vw+24.502px,96px)]">
            <h2 className="text-h1 text-brand font-bold text-balance">Direct online purchase</h2>
            <p className="text-body mt-[clamp(24px,4.6125vw+6.703px,86.5px)] max-w-[30em]">
              Customers <strong className="font-bold">personalise their furniture</strong> and{" "}
              <strong className="font-bold">complete the purchase online</strong>, with{" "}
              <strong className="font-bold">no sales intervention required.</strong>
            </p>
            <p className="text-body mt-[clamp(18px,0.738vw+15.232px,28px)] max-w-[30em]">
              <em>Voila!</em>
              <br />
              You just sold without your sale’s team involvement!
            </p>
          </div>
        </section>

        <section className="grid lg:grid-cols-2">
          <div className="shell-lead flex flex-col justify-center py-[clamp(40px,4.1328vw+24.502px,96px)]">
            <h2 className="text-h1 text-brand font-bold text-balance">Qualified sales engagement</h2>
            <div className="text-body mt-[clamp(24px,4.6052vw+6.731px,86.4px)] flex max-w-[30em] flex-col gap-[clamp(18px,0.738vw+15.232px,28px)]">
              <p>
                Customers <strong className="font-bold">personalise their furniture online</strong> but{" "}
                <strong className="font-bold">require reassurance before proceeding.</strong>
              </p>
              <p>
                This may be due to{" "}
                <strong className="font-bold">uncertainty around measurements, product details, or design decisions.</strong>
              </p>
              <p>
                You’ll receive queries from <strong className="font-bold">qualified leads</strong>.
              </p>
            </div>
          </div>
          <div className="relative order-first min-h-[clamp(260px,30.4059vw+145.978px,672px)] lg:order-last">
            <Image
              src={photos.qualifiedLead.src}
              alt={photos.qualifiedLead.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <QueryBubbles
              queries={customerQueries}
              className="absolute inset-x-0 top-[clamp(12px,1.6679vw+5.745px,34.6px)] px-[clamp(10px,1.2177vw+5.434px,26.5px)]"
            />
          </div>
        </section>
      </div>

      <section className="pt-[clamp(64px,6.2509vw+40.559px,148.7px)] pb-[clamp(56px,2.2952vw+47.393px,87.1px)]">
        <div className="shell">
          <h2 className="text-h3 font-bold">
            <span className="lg:block">The software platform allows furniture manufacturers to define</span>{" "}
            <span className="lg:block">their own operational rules, including:</span>
          </h2>

          <div className="mt-[clamp(30px,1.1661vw+25.627px,45.8px)] grid items-center gap-[clamp(40px,4.1328vw+24.502px,96px)] lg:grid-cols-2">
            <CheckList items={operationalRules} />
            <ConfiguratorPreview className="mx-auto max-w-[560px]" />
          </div>

          <div className="text-body mt-[clamp(40px,4.1107vw+24.585px,95.7px)] flex max-w-[42em] flex-col gap-[clamp(20px,0.5904vw+17.786px,28px)]">
            <p>
              These services can be <strong className="font-bold">included or excluded</strong> from your clients’
              experience based entirely on your <strong className="font-bold">preference.</strong>
            </p>
            <p>
              Furniture manufacturers also{" "}
              <strong className="font-bold">retain full control over service areas and delivery locations,</strong>{" "}
              ensuring orders are <strong className="font-bold">accepted only within defined geographical limits.</strong>{" "}
              This <strong className="font-bold">flexibility</strong> allows the software to{" "}
              <strong className="font-bold">scale alongside your business</strong> and{" "}
              <strong className="font-bold">align with your target market.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand pt-[clamp(44px,1.3579vw+38.908px,62.4px)] pb-[clamp(56px,2.9299vw+45.013px,95.7px)]">
        <div className="shell">
          <div className="text-h3 flex flex-col gap-[clamp(24px,1.1808vw+19.572px,40px)]">
            <p>
              Your costs are based on platform activity, so you are{" "}
              <strong className="font-bold">only charged according to software usage.</strong>
            </p>
            <p>
              Discover how <strong className="font-bold">DEF Software Solutions</strong> simplifies personalised
              furniture sales.
            </p>
            <p>
              Explore the platform from both the manufacturer and customer side, including{" "}
              <strong className="font-bold">
                real-time pricing, product personalisation, and production-ready workflows.
              </strong>
            </p>
          </div>

          <ArrowLink
            href={routes.scheduleCall}
            className="text-h1 mt-[clamp(36px,2.8413vw+25.345px,74.5px)] font-normal"
          >
            Submit your interest and schedule a call
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
