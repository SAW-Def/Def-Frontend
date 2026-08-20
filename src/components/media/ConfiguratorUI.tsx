import { cn } from "@/lib/cn";

type ConfiguratorUIProps = {
  layout?: "desk" | "compact";
  className?: string;
};

const FIELDS = [
  { label: 56, value: 38 },
  { label: 44, value: 62 },
  { label: 62, value: 30 },
  { label: 38, value: 54 },
  { label: 52, value: 44 },
  { label: 46, value: 58 },
];

const SUMMARY = [
  { label: 46, value: 30 },
  { label: 62, value: 24 },
  { label: 38, value: 34 },
  { label: 54, value: 28 },
];

function Cabinet({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 250" fill="none" className={cn("w-full", className)} aria-hidden>
      <path d="M18 42h324v14H18z" fill="#c9a173" />
      <path d="M28 56h304v128H28z" fill="#dcbe97" />
      <path d="M129.3 56v128M230.7 56v128" stroke="#c9a173" strokeWidth="3" />
      <path d="M28 56h304v128H28z" stroke="#a97f52" strokeWidth="3" strokeLinejoin="round" />
      <path
        d="M64 124h32M162 124h36M264 124h32"
        stroke="#a97f52"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M46 184v22M314 184v22" stroke="#a97f52" strokeWidth="5" strokeLinecap="round" />
      <path
        d="M18 226h324M18 220v12M342 220v12"
        stroke="#b54937"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M356 42v142M350 42h12M350 184h12"
        stroke="#b54937"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Bar({ w, h = 2.2, tone = "#cfc8bc" }: { w: number; h?: number; tone?: string }) {
  return (
    <span
      className="block rounded-full"
      style={{ width: `${w}cqw`, height: `${h}cqw`, backgroundColor: tone }}
    />
  );
}

/** Brand-accurate impression of the product configurator, used in device frames. */
export function ConfiguratorUI({ layout = "desk", className }: ConfiguratorUIProps) {
  if (layout === "compact") {
    return (
      <div className={cn("@container flex h-full w-full flex-col bg-white", className)}>
        <div className="flex items-center gap-[3cqw] bg-sand px-[5cqw] py-[4cqw]">
          <span className="block h-[5cqw] w-[3.6cqw] bg-brand" />
          <Bar w={26} h={2.6} />
        </div>
        <div className="flex flex-1 items-center justify-center bg-sand px-[10cqw]">
          <Cabinet />
        </div>
        <div className="flex flex-col gap-[4cqw] px-[6cqw] py-[6cqw]">
          {FIELDS.slice(0, 3).map((field, index) => (
            <div key={index} className="flex flex-col gap-[2.4cqw]">
              <Bar w={field.label * 0.5} />
              <span className="block h-[9cqw] rounded-full border border-[#e4ded4] bg-white" />
            </div>
          ))}
          <div className="mt-[2cqw] flex items-center justify-between">
            <Bar w={20} h={2.6} />
            <Bar w={26} h={3.6} tone="#b54937" />
          </div>
          <span className="mt-[1cqw] block h-[11cqw] rounded-full bg-brand" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("@container flex h-full w-full flex-col bg-white", className)}>
      <div className="flex items-center gap-[1.4cqw] border-b border-cream bg-sand px-[1.8cqw] py-[1.2cqw]">
        <span className="block h-[2.2cqw] w-[1.6cqw] bg-brand" />
        <Bar w={9} h={0.8} />
        <span className="ml-auto flex gap-[0.8cqw]">
          <Bar w={5} h={1.4} tone="#ddd8cf" />
          <Bar w={3} h={1.4} tone="#ddd8cf" />
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        <div className="flex w-[25%] flex-col gap-[1.8cqw] border-r border-cream bg-shell px-[1.8cqw] py-[2cqw]">
          {FIELDS.map((field, index) => (
            <div key={index} className="flex flex-col gap-[0.8cqw]">
              <Bar w={field.label * 0.12} h={0.75} />
              <span className="block h-[2.9cqw] rounded-full border border-[#e4ded4] bg-white" />
            </div>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-center bg-sand px-[4cqw]">
          <Cabinet />
        </div>

        <div className="flex w-[27%] flex-col gap-[1.6cqw] border-l border-cream px-[1.8cqw] py-[2cqw]">
          <Bar w={11} h={1} tone="#b54937" />
          {SUMMARY.map((row, index) => (
            <div key={index} className="flex items-center justify-between gap-[1cqw]">
              <Bar w={row.label * 0.13} h={0.7} />
              <Bar w={row.value * 0.09} h={0.7} tone="#b8b1a5" />
            </div>
          ))}
          <span className="my-[0.6cqw] block h-px w-full bg-cream" />
          <div className="flex items-center justify-between">
            <Bar w={5} h={0.9} />
            <Bar w={8} h={1.5} tone="#b54937" />
          </div>
          <span className="mt-auto block h-[3.2cqw] rounded-full bg-brand" />
        </div>
      </div>
    </div>
  );
}
