import { cn } from "@/lib/cn";

type QueryBubblesProps = {
  queries: readonly string[];
  className?: string;
};

/** Customer questions layered over the qualified-lead photography. */
export function QueryBubbles({ queries, className }: QueryBubblesProps) {
  return (
    <div
      className={cn(
        "pointer-events-none flex flex-col items-end gap-[clamp(6px,0.6863vw+3.427px,15.3px)]",
        className,
      )}
    >
      {queries.map((query, index) => (
        <p
          key={query}
          className={cn(
            "text-quote bg-brand/85 text-paper w-full rounded-full px-[clamp(10px,0.7159vw+7.315px,22.7px)] py-[clamp(6px,0.5904vw+3.786px,14px)] text-center font-bold",
            index === 0 && "mr-[clamp(0px,1.9631vw-7.362px,26.6px)] max-w-[59.7%]",
            index === 1 && "max-w-[58.3%]",
          )}
        >
          <span className="whitespace-nowrap">Query:</span> {query}
        </p>
      ))}
    </div>
  );
}
