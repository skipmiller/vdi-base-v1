
import { cn } from "@/lib/utils";
import React from "react";

interface FloatingFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "glass" | "bordered" | "minimal";
}

export function FloatingFrame({ 
  className, 
  children, 
  variant = "default",
  ...props 
}: FloatingFrameProps) {
  return (
    <div
      className={cn(
        "rounded-xl shadow-lg relative z-10",
        variant === "default" && "bg-white/90 backdrop-blur-md border border-gray-100 p-4",
        variant === "glass" && "bg-white/80 backdrop-blur-md border border-white/20 p-4",
        variant === "bordered" && "bg-white border-2 border-vdi-medium/20 p-4",
        variant === "minimal" && "bg-white/95 backdrop-blur-sm p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
