
import { cn } from "@/lib/utils";
import React from "react";

interface GradientBlobProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  colorStart?: string;
  colorEnd?: string;
  intensity?: "light" | "medium" | "strong";
}

export function GradientBlob({
  className,
  colorStart = "from-vdi-lightest/30",
  colorEnd = "to-vdi-medium/20",
  intensity = "medium",
  ...props
}: GradientBlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full filter",
        intensity === "light" && "blur-2xl opacity-20",
        intensity === "medium" && "blur-3xl opacity-30",
        intensity === "strong" && "blur-3xl opacity-40",
        "bg-gradient-to-br",
        colorStart,
        colorEnd,
        className
      )}
      {...props}
    />
  );
}
