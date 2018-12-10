import { IWeatherParams } from '../interfaces';

// export const getUrl = (params: IWeatherParams): string => {
//     return `${process.env.REACT_APP_OPENWEATHER_API}?q=${params.city},${params.country}&appid=${process.env.REACT_APP_OPENWEATHER_APIKEY}`;
// };

export default class Utils {
    public static getUrl = (params: IWeatherParams): string => {
        return `${process.env.REACT_APP_OPENWEATHER_API}?q=${params.city},${params.country}&appid=${process.env.REACT_APP_OPENWEATHER_APIKEY}`;
    }
}
