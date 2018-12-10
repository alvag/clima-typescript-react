import React, { Component } from 'react';
import Form from './components/Form';
import Header from './components/Header/';

class App extends Component {
    public render() {
        return (
            <div className="app">
                <Header title="Clima React" />
                <Form />
            </div>
        );
    }
}

export default App;
