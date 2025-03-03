'use client';

import { useTemperatureUnit } from '@/app/contexts/TemperatureUnitContext';

export default function TemperatureUnitToggle() {
  const { unit, toggleUnit } = useTemperatureUnit();

  return (
    <button
      onClick={toggleUnit}
      className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Switch to {unit === 'celsius' ? '°F' : '°C'}
    </button>
  );
}
