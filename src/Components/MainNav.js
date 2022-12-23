import React, {useEffect} from 'react';
import '../Styles/components/MainNav.css';
import Account from "./Account";
import { connect } from "react-redux";
import { startAction } from "../Redux/actions/startAction";
import { stopAction } from "../Redux/actions/stopAction";
import menuAction from "../Redux/actions/menuAction";


const MainNav = (props) => {

    //useEffect hook
    useEffect(() => {
        console.log("useEffect has been called!");
    });

    const nav = (
        <div id="mainNav" className="container d-lg-block d-none px-3">
            <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-auto">
                                <ul className="mainNavTopMenu horizontalMenu p-0">
                                    <li>
                                        <a href=""><i className="ico icoNewsletter"></i><span className="item">Newsletter</span></a>
                                    </li>
                                    <li>
                                        <a href=""><span className="item">Contact Us</span></a>
                                    </li>
                                    <li>
                                        <a href=""><span className="item">FAQS</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-auto">
                                <span className="bannerText">FREE SHIPPING FOR ALL ORDERS OF $150</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-4 text-right">
                    <span className="compare ps-3">
                        <a href="#"><span className="ico compareIco">
                            <span className="count">0</span>
					</span>Compare</a>
                    </span>
                        <span className="wishList ps-3">
                        <a href="#"><span className="ico wishlistIco">
                            <span className="count">0</span>
					</span>WishList</a>
                    </span>
                        <span onClick={() => props.menuAction(!props.showMenu)} className="account ps-3">
                        <span><span>Login</span>/<span>Register</span></span>
                    </span>
                    </div>
                </div>

            <Account />

        </div>
    );

    return (
        nav
    )
};


const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    menuAction: (payload) => dispatch(menuAction(payload)),
    startAction: () => dispatch(startAction),
    stopAction: () => dispatch(stopAction)
});


export default connect(mapStateToProps, mapDispatchToProps)(MainNav);

