import React, { Component } from 'react';
import Error from './components/Error';
import Form from './components/Form';
import Header from './components/Header/';
import Weather from './components/Weather/';
import { IWeatherParams } from './interfaces';
import Utils from './Utils/Utils';

interface IAppState {
    params: IWeatherParams;
    paramsError: boolean;
    weatherData: any;
}

class App extends Component<{}, IAppState> {

    public state: IAppState = {
        params: {},
        paramsError: false,
        weatherData: {}
    };

    public render() {
        const hasError = this.state.paramsError;

        return (
            <div className="app">
                <Header title="Clima React" />
                <Form weatherParams={this.weatherParams} />
                {this.conditionalComponent(hasError)}
            </div>
        );
    }

    private weatherParams = (params: IWeatherParams) => {
        if (!params.city || !params.country) {
            this.setState({ paramsError: true });
        } else {
            this.setState({ paramsError: false, params });
            this.requestApi(params);
        }
    }

    private requestApi = (params: IWeatherParams) => {
        const url = Utils.getUrl(params);

        fetch(url).then((response) => {
            return response.json();
        }).then((weatherData) => {
            this.setState({ weatherData });
        }).catch((error) => {
            console.log(error);
        });

    }

    private conditionalComponent(hasError: boolean) {
        const { cod } = this.state.weatherData;

        if (hasError) {
            return <Error message="Ambos campos son obligatorios" />;
        } else if (cod === '404') {
            return <Error message="Ciudad no encontrada" />;
        } else {
            return <Weather weatherData={this.state.weatherData} />;
        }
    }
}

export default App;
