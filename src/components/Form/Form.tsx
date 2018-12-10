import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    public render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12 m8 l4 offset-m2">
                            <input type="text" id="city" />
                            <label htmlFor="city">Ciudad</label>
                        </div>

                        <div className="input-field col s12 m8 l4 offset-m2">
                            <select name="country" id="country">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
