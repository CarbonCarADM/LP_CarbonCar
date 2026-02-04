import React from "react";

interface SectionBadgeProps {
  title: string;
  className?: string;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ title, className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0F0F0F] border border-white/10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)] backdrop-blur-md select-none ${className}`}>
      <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white uppercase whitespace-nowrap pl-0.5">
        {title}
      </span>
      <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
    </div>
  );
};

export default SectionBadge;