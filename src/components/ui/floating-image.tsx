
import { cn } from "@/lib/utils";
import React from "react";

interface FloatingImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function FloatingImage({
  src,
  alt,
  width,
  height,
  className,
  style,
  ...props
}: FloatingImageProps) {
  return (
    <div
      className={cn(
        "relative shadow-lg rounded-lg overflow-hidden", 
        className
      )}
      style={{
        ...style,
        width: width ? `${width}px` : "auto",
        height: height ? `${height}px` : "auto",
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
