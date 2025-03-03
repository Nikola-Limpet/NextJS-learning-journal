import { ForecastData } from '@/app/lib/types';
import TemperatureDisplay from '../client/TemperatureDisplay';

export default function ForecastTable({ data }: { data: ForecastData }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">5-Day Forecast</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Conditions</th>
              <th className="py-3 px-4 text-center">Temperature</th>
              <th className="py-3 px-4 text-center">Wind</th>
              <th className="py-3 px-4 text-center">Humidity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.forecasts.map(day => (
              <tr key={day.dt} className="hover:bg-gray-50">
                <td className="py-4 px-4">
                  {new Date(day.dt * 1000).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <img
                      src={`https://openweathermap.org/img/wn/${day.weather.icon}.png`}
                      alt={day.weather.description}
                      className="w-10 h-10"
                    />
                    <span className="ml-2 capitalize">
                      {day.weather.description}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <TemperatureDisplay
                    temperature={day.temp.day}
                    className="font-medium"
                  />
                  <div className="text-xs text-gray-500">
                    <TemperatureDisplay temperature={day.temp.min} /> /{' '}
                    <TemperatureDisplay temperature={day.temp.max} />
                  </div>
                </td>
                <td className="py-4 px-4 text-center">{day.wind.speed} m/s</td>
                <td className="py-4 px-4 text-center">{day.humidity}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
