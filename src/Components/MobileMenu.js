import React from 'react';
import '../Styles/components/MobileMenu.css';


const MobileMenu = () => {

    const nav = (
        <div id="mobileMenu" className="container">
            <div className="row">
                <form className="searchForm">
                    <input className="searchTxt" name="searchTxt" placeholder="Search for products" type="text"/>
                    <button className="searchBtn"><i className="ico searchBtnIco"></i></button>
                </form>
                <nav>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">DEMO</a></li>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">BLOG</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );

    return (
        nav
    )
};


export default MobileMenu;

