import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-accent text-background hover:bg-accent/90",
  secondary:
    "bg-secondary text-text-primary border border-border hover:border-accent/40 hover:bg-card",
  ghost: "text-text-secondary hover:text-text-primary",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

// Polymorphic component props
type ButtonProps = BaseProps & {
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  target?: string;
  rel?: string;
  download?: boolean;
};

export default function Button({
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  target,
  rel,
  download,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={target}
          rel={rel}
          download={download}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
