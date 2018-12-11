import { IWeatherParams } from '../interfaces';

export default class Utils {
    public static getUrl = (params: IWeatherParams): string => {
        return `${process.env.REACT_APP_OPENWEATHER_API}?q=${params.city},${params.country}&appid=${process.env.REACT_APP_OPENWEATHER_APIKEY}`;
    }

    public static kelvinToCelcius = (kelvin: number): string => {
        return (kelvin - 273.15).toFixed(2);
    }

    public static getWeatherIcon = (iconId: string): string => {
        return `http://openweathermap.org/img/w/${iconId}.png`;
    }
}
