"use client";

import { useRef } from "react";
import { CloseIcon, PlayCircleIcon } from "@/components/ui/icons";

type VideoFeatureProps = {
  title: string[];
  src: string | null;
  label: string;
};

export function VideoFeature({ title, src, label }: VideoFeatureProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const open = () => dialogRef.current?.showModal();

  const close = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    dialogRef.current?.close();
  };

  const mark = (
    <PlayCircleIcon className="h-[clamp(84px,7.3432vw+56.463px,183.5px)] w-auto text-shell" />
  );

  return (
    <section className="bg-amber pt-[clamp(56px,6.0812vw+33.196px,138.4px)] pb-[clamp(80px,18.9299vw+9.013px,336.5px)]">
      <div className="shell text-center">
        <h2 className="text-h2 text-paper font-bold italic">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-[clamp(48px,5.0185vw+29.181px,116px)] flex justify-center">
          {src ? (
            <>
              <button
                type="button"
                onClick={open}
                aria-label={label}
                className="rounded-full transition-transform duration-300 hover:scale-105"
              >
                {mark}
              </button>

              <dialog
                ref={dialogRef}
                onClose={close}
                onClick={(event) => {
                  if (event.target === dialogRef.current) close();
                }}
                className="w-[min(1100px,92vw)] rounded-2xl bg-night p-0 backdrop:bg-night/80 open:fixed open:top-1/2 open:left-1/2 open:-translate-x-1/2 open:-translate-y-1/2"
              >
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close video"
                  className="absolute top-3 right-3 z-10 rounded-full bg-white/15 p-2 text-white transition-colors hover:bg-white/30"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
                <video ref={videoRef} src={src} controls playsInline className="aspect-video w-full" />
              </dialog>
            </>
          ) : (
            <span aria-hidden>{mark}</span>
          )}
        </div>
      </div>
    </section>
  );
}
