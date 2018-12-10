import React, { Component } from 'react';
import Error from './components/Error';
import Form from './components/Form';
import Header from './components/Header/';
import { IWeatherParams } from './interfaces';
import Utils from './Utils/Utils';

interface IAppState {
    params: IWeatherParams;
    paramsError: boolean;
}

class App extends Component<{}, IAppState> {

    public state: IAppState = {
        params: {},
        paramsError: false
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

        console.log(url);

    }

    private conditionalComponent(hasError: boolean) {
        if (hasError) {
            return <Error message="Ambos campos son obligatorios" />;
        }
    }
}

export default App;
