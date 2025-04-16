
import { cn } from "@/lib/utils";
import React from "react";

interface GradientBlobProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  colorStart?: string;
  colorEnd?: string;
}

export function GradientBlob({
  className,
  colorStart = "from-vdi-lightest/30",
  colorEnd = "to-vdi-medium/20",
  ...props
}: GradientBlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full filter blur-3xl opacity-30 bg-gradient-to-br",
        colorStart,
        colorEnd,
        className
      )}
      {...props}
    />
  );
}
