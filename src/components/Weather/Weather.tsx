import React, { Component } from 'react';
import Utils from '../../Utils/Utils';
import './Weather.css';

interface IProps {
    weatherData: any;
}

class Weather extends Component<IProps> {

    public render() {
        return (
            <div className="container">
                {this.showResult()}
            </div>
        );
    }

    private showResult = () => {
        const { name, weather, main } = this.props.weatherData;
        if (!name || !weather || !main) {
            return;
        }
        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado Clima de: {name}</h2>
                            <p className="temperatura">
                                Actual: {Utils.kelvinToCelcius(main.temp)} &deg;C
                                <img src={Utils.getWeatherIcon(weather[0].icon)} alt="" />
                            </p>
                            <p>Max. {Utils.kelvinToCelcius(main.temp_max)} &deg;C</p>
                            <p>Min. {Utils.kelvinToCelcius(main.temp_min)} &deg;C</p>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;
