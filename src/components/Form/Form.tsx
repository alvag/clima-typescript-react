import React, { Component, FormEvent } from 'react';
import { IWeatherParams } from '../../interfaces';
import './Form.css';

interface IProps {
    weatherParams: (params: IWeatherParams) => void;
}

class Form extends Component<IProps> {

    private city = React.createRef<HTMLInputElement>();
    private country = React.createRef<HTMLSelectElement>();

    public search = (e: FormEvent) => {
        e.preventDefault();

        const city = this.city.current!.value.trim();
        const country = this.country.current!.value.trim();

        const params: IWeatherParams = { city, country };

        this.props.weatherParams(params);
    }

    public render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.search}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.city} type="text" id="city" />
                                <label htmlFor="city">Ciudad</label>
                            </div>

                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.country} name="country" id="country">
                                    <option value="" defaultValue="true">Elije un País</option>
                                    <option value="AR">Argentina</option>
                                    <option value="PE">Perú</option>
                                    <option value="MX">México</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                </select>
                                <label htmlFor="country">País</label>
                            </div>

                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="waves-effect waves-light btn btn-large yellow accent-4" value="Bucar..." />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
