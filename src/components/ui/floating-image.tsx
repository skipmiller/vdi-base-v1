
import { cn } from "@/lib/utils";
import React from "react";

interface FloatingImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
}

export function FloatingImage({
  src,
  alt,
  width,
  height,
  className,
  style,
  rounded = "lg",
  shadow = "lg",
  ...props
}: FloatingImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden", 
        rounded === "none" && "",
        rounded === "sm" && "rounded-sm",
        rounded === "md" && "rounded-md",
        rounded === "lg" && "rounded-lg",
        rounded === "full" && "rounded-full",
        shadow === "none" && "",
        shadow === "sm" && "shadow-sm",
        shadow === "md" && "shadow-md",
        shadow === "lg" && "shadow-lg",
        shadow === "xl" && "shadow-xl",
        className
      )}
      style={{
        ...style,
        width: typeof width === 'number' ? `${width}px` : width || "auto",
        height: typeof height === 'number' ? `${height}px` : height || "auto",
      }}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
