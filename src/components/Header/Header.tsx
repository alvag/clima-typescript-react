import React from 'react';
import './Header.css';

export interface IProps {
    title: string;
}

const Header = (props: IProps) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <a className="brand-logo">{props.title}</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
