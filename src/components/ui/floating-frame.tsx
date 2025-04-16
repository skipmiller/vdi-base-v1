
import { cn } from "@/lib/utils";
import React from "react";

interface FloatingFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function FloatingFrame({ className, children, ...props }: FloatingFrameProps) {
  return (
    <div
      className={cn(
        "bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 p-4 relative z-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
