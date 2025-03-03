import { WeartherData } from '@/app/lib/types';

// Remove all client components from this server component
export default function CurrentWeather({ data }: { data: WeartherData }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Current Weather</h2>
      </div>
      <div className="flex items-center mb-6">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          width={80}
          height={80}
        />
        <div className="ml-4">
          <div className="text-4xl font-bold">{data.temperature}°C</div>
          <p className="text-gray-600 capitalize">
            {data.weather[0].description}
          </p>
        </div>
      </div>
    </div>
  );
}
