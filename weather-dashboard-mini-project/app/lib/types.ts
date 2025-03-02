
export interface WeartherData {
  city: string;
  country: string;
  temperature: number;
  weather: WeatherConditon[];
};

export interface WeatherConditon {
  id: number;
  main: string;
  description: string;
  icon: string;
}
