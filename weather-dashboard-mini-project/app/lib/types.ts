export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeartherData {
  city: string;
  country: string;
  temperature: number;
  feels_like: number;
  humidity: number;
  wind: {
    speed: number;
    deg: number;
  };
  weather: WeatherCondition[];
}

export interface DayForecast {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
  };
  weather: WeatherCondition;
  humidity: number;
  wind: {
    speed: number;
    deg: number;
  };
}


export interface CitySearchResult {
  id: string;
  name: string;
}

// Add these to your types.ts file
export interface DailyForecast {
  dt: number;
  date: string;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  humidity: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  wind: {
    speed: number;
    deg: number;
  };
  pop: number; // Probability of precipitation
}

export interface ForecastData {
  city: string;
  country: string;
  forecasts: DailyForecast[];
}