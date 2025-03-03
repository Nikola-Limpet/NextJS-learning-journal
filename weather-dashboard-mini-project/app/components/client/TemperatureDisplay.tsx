'use client';

import { useTemperatureUnit } from '@/app/contexts/TemperatureUnitContext';

interface TemperatureDisplayProps {
  temperature: number;
  className?: string;
}

export default function TemperatureDisplay({
  temperature,
  className = '',
}: TemperatureDisplayProps) {
  const { formatTemperature } = useTemperatureUnit();

  return <span className={className}>{formatTemperature(temperature)}</span>;
}
