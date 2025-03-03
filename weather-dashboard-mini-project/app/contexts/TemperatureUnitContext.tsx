'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type TemperatureUnit = 'celsius' | 'fahrenheit';

interface TemperatureUnitContextType {
  unit: TemperatureUnit;
  toggleUnit: () => void;
  convertTemperature: (temp: number) => number;
  formatTemperature: (temp: number) => string;
}

const TemperatureUnitContext = createContext<
  TemperatureUnitContextType | undefined
>(undefined);

export function TemperatureUnitProvider({ children }: { children: ReactNode }) {
  const [unit, setUnit] = useState<TemperatureUnit>('celsius');

  const toggleUnit = () => {
    setUnit(prevUnit => (prevUnit === 'celsius' ? 'fahrenheit' : 'celsius'));
  };

  const convertTemperature = (temp: number): number => {
    if (unit === 'celsius') return temp;
    return (temp * 9) / 5 + 32; // Convert to Fahrenheit
  };

  const formatTemperature = (temp: number): string => {
    const convertedTemp = convertTemperature(temp);
    const symbol = unit === 'celsius' ? '°C' : '°F';
    return `${Math.round(convertedTemp)}${symbol}`;
  };

  return (
    <TemperatureUnitContext.Provider
      value={{ unit, toggleUnit, convertTemperature, formatTemperature }}
    >
      {children}
    </TemperatureUnitContext.Provider>
  );
}

export function useTemperatureUnit() {
  const context = useContext(TemperatureUnitContext);
  if (context === undefined) {
    throw new Error(
      'useTemperatureUnit must be used within a TemperatureUnitProvider'
    );
  }
  return context;
}
