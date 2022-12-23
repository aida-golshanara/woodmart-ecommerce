import React from 'react';
import '../Styles/components/Footer.css';


const Footer = () => {

    const fetures = (
        <div id="feturesShop" className="row justify-content-center">
            <div className="col-auto">
                <div className="item px-1">
                    <div>
                        <i className="feicon freeShipping"></i>
                    </div>
                    <div>
                        <h4>FREE SHIPPING</h4>
                        <span>Carrier information.</span>
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="item px-1">
                    <div>
                        <i className="feicon onlinePayment"></i>
                    </div>
                    <div>
                        <h4>ONLINE PAYMENT</h4>
                        <span>Payment methods.</span>
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="item px-1">
                    <div>
                        <i className="feicon support"></i>
                    </div>
                    <div>
                        <h4>24/7 SUPPORT</h4>
                        <span>Unlimited help desk.</span>
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="item px-1">
                    <div>
                        <i className="feicon safe"></i>
                    </div>
                    <div>
                        <h4>100% SAFE</h4>
                        <span>View our benefits.</span>
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="item px-1">
                    <div>
                        <i className="feicon freeReturns"></i>
                    </div>
                    <div>
                        <h4>FREE RETURNS</h4>
                        <span>Track or cancel orders.</span>
                    </div>
                </div>
            </div>
        </div>
    );


    const footerBody = (
        <div id="footerBody">
            <div className="py-3 ps-md-0 ps-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-6">
                            <div className="widgetTitle">OUR STORES</div>
                            <ul className="subFooterMenu">
                                <li className="">
                                    <a href="#" title="">New York</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">London SF</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Cockfosters BP</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Los Angeles</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Chicago</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Las Vegas</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="widgetTitle">USEFUL LINKS</div>
                            <ul className="subFooterMenu">
                                <li className="">
                                    <a href="#" title="">New York</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">London SF</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Cockfosters BP</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Los Angeles</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Chicago</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Las Vegas</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="widgetTitle">OUR STORES</div>
                            <ul className="subFooterMenu">
                                <li className="">
                                    <a href="#" title="">New York</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">London SF</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Cockfosters BP</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Los Angeles</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Chicago</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Las Vegas</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="widgetTitle">USEFUL LINKS</div>
                            <ul className="subFooterMenu">
                                <li className="">
                                    <a href="#" title="">New York</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">London SF</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Cockfosters BP</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Los Angeles</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Chicago</a>
                                </li>
                                <li className="">
                                    <a href="#" title="">Las Vegas</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="widgetTitle">AVAILABLE ON:</div>
                                <div className="row storeBanner">
                                    <div className="col-6 ps-0 text-left">
                                        <a href="#"><img className="img-responsive" src="/img/googlePlay.webp" alt="googlePlay" /></a>
                                    </div>
                                    <div className="col-6 pe-0 text-left">
                                        <a href="#"><img className="img-responsive" src="/img/appStore.webp" alt="appStore" /></a>
                                    </div>
                                </div>
                            </div>
                            <div id="newsletter" className="row">
                                <div className="widgetTitle mt-4 px-0">JOIN OUR NEWSLETTER:</div>
                                <div className="row mb-2">
                                    Will be used in accordance with our Privacy Policy
                                </div>
                                <div className="row">
                                    <form className="newsletter px-0">
                                        <input placeholder="Your email address" name="email" type="text" />
                                        <button>SIGN UP</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-6">
                            <div className="widgetTitle">Payment System:</div>
                            <div className="itemList text-left">
                                <img className="img-responsive" src="/img/payment.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="widgetTitle">Shipping System:</div>
                            <div className="itemList text-left">
                                <img className="img-responsive" src="/img/shipping.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widgetTitle">Our Social Links:</div>
                            <div className="itemList">
                                <ul className="socialNetworks horizontalMenu ps-0">
                                    <li><a href=""><i className="ico ico-fb"></i></a></li>
                                    <li><a href=""><i className="ico ico-tw"></i></a></li>
                                    <li><a href=""><i className="ico ico-pin"></i></a></li>
                                    <li><a href=""><i className="ico ico-linkedin"></i></a></li>
                                    <li><a href=""><i className="ico ico-telegram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyRight" className="text-center py-3 border-top">
                <div className="container">
                    <div className="col-12">
                        <span>CREATED BY <a href='https://www.linkedin.com/in/aida-golshanara/'>AIDA GOLSHANARA</a> WITH REACT/REDUX ACCORDING TO WOODMART 2022 CREATED BY XTEMOS STUDIO. PREMIUM E-COMMERCE SOLUTIONS.</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div id="footer">
            {fetures}
            {footerBody}
        </div>
    )
};


export default Footer;

