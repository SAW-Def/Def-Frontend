"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
import { ChevronIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export type CarouselImage = {
  src: string;
  alt: string;
  position?: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ImageCarousel({
  images,
  className,
  sizes = "100vw",
  priority = false,
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 28 }, [
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    const media = window.matchMedia(REDUCED_MOTION);
    const sync = () => (media.matches ? autoplay.stop() : autoplay.play());
    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const sync = () => setSelected(emblaApi.selectedScrollSnap());
    sync();
    emblaApi.on("select", sync);
    return () => {
      emblaApi.off("select", sync);
    };
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const control =
    "absolute top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-white/35 group-hover:opacity-100 focus-visible:opacity-100 sm:block";

  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Platform imagery"
    >
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              key={image.src}
              className="relative h-full min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${images.length}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={sizes}
                priority={priority && index === 0}
                className="object-cover"
                style={{ objectPosition: image.position ?? "center" }}
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className={cn(control, "left-4")}
          >
            <ChevronIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className={cn(control, "right-4")}
          >
            <ChevronIcon className="h-5 w-5 rotate-180" />
          </button>

          <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2.5">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === selected}
                className={cn(
                  "h-2.5 rounded-full bg-white transition-all duration-300",
                  index === selected ? "w-8 opacity-100" : "w-2.5 opacity-50 hover:opacity-80",
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
