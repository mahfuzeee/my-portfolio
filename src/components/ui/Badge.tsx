import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
