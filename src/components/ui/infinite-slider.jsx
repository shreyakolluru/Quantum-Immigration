import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- FIX: Defining the helper HERE so we don't need to import it ---
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function InfiniteSlider({
  gap = 16,
  reverse = false,
  speed = 100,
  speedOnHover,
  children,
  className,
}) {
  return (
    <div
      className={cn("flex overflow-hidden w-full", className)}
      style={{
        "--gap": `${gap}px`,
      }}
    >
      <div
        className={cn(
          "flex w-max items-center gap-[var(--gap)] animate-infinite-scroll",
          reverse && "animate-infinite-scroll-reverse",
          speedOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}