import React from 'react';
import './Header.css';

interface IHeader {
    title: string;
}

const Header = (props: IHeader) => {
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
