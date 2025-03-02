import { WeartherData } from '@/app/lib/types';
import Image from 'next/image';

interface CurrentWeatherProps {
  data: WeartherData;
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  const weatherIcon = data.weather[0]?.icon;

  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">
            {data.city}, {data.country}
          </h2>
          <p className="text-gray-600">{data.weather[0]?.description}</p>
        </div>

        <div className="flex items-center">
          {weatherIcon && (
            <div className="relative w-16 h-16 mr-2">
              <Image
                src={iconUrl}
                alt={data.weather[0]?.description || 'Weather icon'}
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
          )}
          <div className="text-4xl font-bold">
            {Math.round(data.temperature)} °C
          </div>
        </div>
      </div>
    </div>
  );
}
