import React from "react";
// import { cn } from "@/lib/utils"

/**
 * A single "ATM-style" service card with hover elevation.
 * Uses design tokens defined in globals.css for colors.
 */
export function ServiceCard({ title, description, icon, className }) {
  // Temporary cn function until you import the real one
  const cn = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <article
      className={cn(
        // Card base
        "group bg-green-600 relative rounded-xl bg-brand text-primary-foreground shadow-md",
        "ring-1 ring-black/5",
        // Interaction
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:shadow-xl focus-within:-translate-y-2 focus-within:shadow-xl",
        // Ensure it can stack above siblings when hovered
        "hover:z-50 focus-within:z-50",
        className,
      )}
    >
      <div className="flex gap-6 p-6 md:p-8">
        <div
          aria-hidden
          className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-accent-yellow/80 text-accent-yellow"
        >
          {icon ?? (
            // simple placeholder icon
            <svg width="28" height="28" viewBox="0 0 24 24" className="opacity-90">
              <path
                d="M4 10h16M4 14h16M6 6h12M6 18h12"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold leading-snug text-pretty">{title}</h3>
          <p className="mt-2 text-sm/6 text-white/80">{description}</p>

          <button className="mt-6 inline-flex items-center rounded-full bg-accent-yellow px-5 py-2.5 text-sm font-medium text-brand transition-colors hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-yellow/60">
            Learn More
            <span aria-hidden className="ml-2">
              ↗
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}