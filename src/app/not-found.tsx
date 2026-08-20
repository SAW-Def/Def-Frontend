import { Button } from "@/components/ui/Button";
import { routes } from "@/content/site";

export default function NotFound() {
  return (
    <section className="bg-sand py-[clamp(72px,8.7085vw+39.343px,190px)]">
      <div className="shell">
        <p className="text-h4 text-brand font-bold">404</p>
        <h1 className="text-display mt-[clamp(12px,0.5904vw+9.786px,20px)] font-bold text-balance">
          We couldn’t find that page.
        </h1>
        <p className="text-body mt-[clamp(16px,0.8856vw+12.679px,28px)] max-w-[36em]">
          The page you were looking for has moved or no longer exists. Head back to the homepage, or tell us what you
          were after and we’ll point you in the right direction.
        </p>
        <div className="mt-[clamp(28px,1.7712vw+21.358px,52px)] flex flex-wrap gap-[clamp(12px,0.5166vw+10.063px,19px)]">
          <Button href={routes.home}>Back to home</Button>
          <Button href={routes.scheduleCall} variant="soft">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
