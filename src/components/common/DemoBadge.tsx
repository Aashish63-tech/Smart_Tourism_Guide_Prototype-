import React from 'react';
import { Info } from 'lucide-react';

interface DemoBadgeProps {
  label?: string;
  className?: string;
}

export const DemoBadge: React.FC<DemoBadgeProps> = ({
  label = 'Prototype Demo Data',
  className = ''
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 shadow-xs ${className}`}
      title="This information is generated from local simulated models for the college project prototype (no live external API key required)."
    >
      <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
      <span>{label}</span>
    </span>
  );
};
