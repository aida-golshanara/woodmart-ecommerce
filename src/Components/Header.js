import React, {useEffect, useState} from 'react';
import '../Styles/components/Header.css';
import SocialIcons from "./SocialIcons";
import MobileMenu from "./MobileMenu";


const Header = () => {

    const [menuState, setMenu] = useState(false);

    const [stickyNav, setStickyNav] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setStickyNav(window.scrollY < 200 ? false : true);
            return () => (window.onscroll = null);
        };
    }, []);

    const head = (
        <div id="Header">
            <div className={`desktopView d-lg-flex d-none ${stickyNav ? 'fixed' : ''}`}>
               <div className="container">
                   <div className="row">
                       <div className="col-md-3">
                           <a href="/">
                               <img className="img img-responsive" src="/img/logo.svg" alt="logo" />
                           </a>
                       </div>
                       <div className="col-md-4 ps-0">
                           <nav className="MainMenu">
                               <ul className="horizontalMenu px-0 pt-3">
                                   <li>
                                       <a href="#"><span>Home</span></a>
                                   </li>
                                   <li>
                                       <a href="#"><span>Shop</span></a>
                                   </li>
                                   <li>
                                       <a href="#"><span>Blog</span></a>
                                   </li>
                                   <li>
                                       <a href="#"><span>Pages</span></a>
                                   </li>
                                   <li>
                                       <a href="#"><span>Elements</span></a>
                                   </li>
                               </ul>
                           </nav>
                       </div>
                       <div className="col-md-5">
                           <div className="row">
                               <div className="col-auto quickMenu pt-3">
                                   <a className="active" href="#"><span>SPECIAL OFFER</span></a>
                                   <a href="#"><span>PURCHASE THEME</span></a>
                               </div>
                               <div className="col-auto pt-3">
                                   <SocialIcons colorType="gray" />
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            <div className="row mobileView d-lg-none d-flex">
                <div className="col-3 ps-4">
                    <div className="toggleMenu" onClick={()=>setMenu(!menuState)}>
                        <i className="ico toggleMenuIco"></i>
                    </div>
                </div>
                <div className="col-6 text-center">
                    <a href="/">
                        <img className="img img-responsive" src="/img/logo.svg" alt="logo" />
                    </a>
                </div>
                <div className="col-3 text-right">
                    <div className="row justify-content-end">
                        <div className="col-auto text-right">
                           <span className="basket ps-3">
                            <a href="#">
                                <span className="ico basketIcon">
                                    <span className="count">0</span>
                                </span>
                            </a>
                           </span>
                        </div>
                    </div>
                </div>
            </div>


            {menuState &&
                <React.Fragment>
                    <MobileMenu />
                    <div onClick={()=>setMenu(!menuState)} className="backMobileMenu"></div>
                </React.Fragment>
            }

        </div>
    );

    return (
        head
    )
};


export default Header;

