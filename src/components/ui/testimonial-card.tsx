
import { cn } from "@/lib/utils";
import React from "react";
import { Quote } from "lucide-react";

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  position?: string;
  company?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  position,
  company,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white p-8 rounded-xl shadow-md border border-gray-100",
        className
      )}
      {...props}
    >
      <Quote className="text-vdi-lightest h-10 w-10 mb-4" />
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900">{author}</span>
        {(position || company) && (
          <span className="text-gray-500">
            {position}
            {position && company && ", "}
            {company}
          </span>
        )}
      </div>
    </div>
  );
}
