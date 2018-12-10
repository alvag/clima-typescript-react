import React, { Component } from 'react';
import Form from './components/Form';
import Header from './components/Header/';
import { IWeatherParams } from './interfaces';

interface IAppState {
    paramsError: boolean;
}

class App extends Component<{}, IAppState> {

    public state: IAppState = {
        paramsError: false
    };

    public weatherParams = (params: IWeatherParams) => {
        if (!params.city.trim() || !params.country.trim()) {
            this.setState({ paramsError: true });
        } else {
            this.setState({ paramsError: false });
        }
    }

    public render() {
        return (
            <div className="app">
                <Header title="Clima React" />
                <Form weatherParams={this.weatherParams} />
            </div>
        );
    }
}

export default App;
