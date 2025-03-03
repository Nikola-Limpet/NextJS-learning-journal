'use client';

import { WeartherData } from '@/app/lib/types';
import { useTemperatureUnit } from '@/app/contexts/TemperatureUnitContext';
import Image from 'next/image';

export default function CurrentWeatherClient({ data }: { data: WeartherData }) {
  const { unit, toggleUnit, formatTemperature } = useTemperatureUnit();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          Current Weather in {data.city}
        </h2>
        <button
          onClick={toggleUnit}
          className="px-3 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Switch to {unit === 'celsius' ? '°F' : '°C'}
        </button>
      </div>

      <div className="flex items-center mb-6">
        <Image
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          width={80}
          height={80}
        />
        <div className="ml-4">
          <div className="text-4xl font-bold">
            {formatTemperature(data.temperature)}
          </div>
          <p className="text-gray-600 capitalize">
            {data.weather[0].description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-gray-500">Feels Like</p>
          <p className="font-medium">{formatTemperature(data.feels_like)}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-gray-500">Humidity</p>
          <p className="font-medium">{data.humidity}%</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-gray-500">Wind</p>
          <p className="font-medium">{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
