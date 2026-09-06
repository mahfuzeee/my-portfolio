import { site } from "@/data/site";

export default function AvailabilityPill() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-secondary px-4 py-2">
      <span className="relative flex h-2.5 w-2.5">
        {/* Ping animation */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
        {/* Solid dot */}
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success"></span>
      </span>
      <span className="text-xs sm:text-sm font-mono text-text-secondary">
        {site.availability}
      </span>
    </div>
  );
}
