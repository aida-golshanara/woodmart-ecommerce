import React from 'react';
import '../Styles/components/SocialIcons.css';


const SocialIcons = (props) => {

    const out = (
        <nav className={`socialIcons ${props.colorType}`}>
            <ul className="horizontalMenu px-0">
                <li>
                    <a href=""><i className="ico icoFb"></i></a>
                </li>
                <li>
                    <a href=""><i className="ico icoTw"></i></a>
                </li>
                <li>
                    <a href=""><i className="ico icoPin"></i></a>
                </li>
                <li>
                    <a href=""><i className="ico icoLink"></i></a>
                </li>
                <li>
                    <a href=""><i className="ico icoTel"></i></a>
                </li>
            </ul>
        </nav>
    );

    return (
        out
    )
};


export default SocialIcons;

