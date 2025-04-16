
import { cn } from "@/lib/utils";
import React from "react";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100",
        className
      )}
      {...props}
    >
      <div className="flex items-start">
        <div className="mr-4 text-vdi-medium">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
