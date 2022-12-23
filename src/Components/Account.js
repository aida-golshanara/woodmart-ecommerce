import React, {useEffect} from 'react';
import '../Styles/components/Account.css';
import {startAction} from "../Redux/actions/startAction";
import {stopAction} from "../Redux/actions/stopAction";
import {connect} from "react-redux";
import menuAction from "../Redux/actions/menuAction";


const Account = (props) => {


    useEffect(() => {
        console.log("this.props.rotating",props.showMenu)
    }, [props.visible])

    const out = (
        <div id="account" className={(props.showMenu) ? 'active' : ''}>
            <div className="container">
                <div className="row border-bottom px-2">
                    <div className="col-8">
                        <h4>SIGN IN</h4>
                    </div>
                    <div className="col-4 text-right">
                        <button className="closeBtn" onClick={() => props.menuAction(!props.showMenu)}>× Close</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pb-2">
                        Username or email address <span className="text-danger">*</span>
                    </div>
                    <div className="col-12 mb-3">
                        <input className="input" type="text" />
                    </div>
                    <div className="col-12 pb-2">
                        Password <span className="text-danger">*</span>
                    </div>
                    <div className="col-12 mb-3">
                        <input className="input" type="text" />
                    </div>
                    <div className="col-12 pb-3">
                        <button className="loginBtn">LOG IN</button>
                    </div>
                    <div className="row pb-3">
                        <div className="col-6">
                            <span>
                                <input className="me-2" type="checkbox"/>
                            </span>
                            <span>Remember me</span>
                        </div>
                        <div className="col-6 text-right">
                            <a className="forgetLink" href="#">Lost your password ?</a>
                        </div>
                    </div>
                    <div className="col-12 mb-3 text-center">
                        <span>OR LOGIN WITH</span>
                    </div>
                    <div className="col-12 px-2">
                        <button className="fbBtn my-1">Facebook</button>
                    </div>
                    <div className="col-12 px-2">
                        <button className="fbGoogle my-1">Google</button>
                    </div>
                    <div className="col-12 mt-3 border-top">
                        <i className="accountIcon"></i>
                    </div>
                    <div className="col-12 my-2 mt-4 text-center">
                        <span className="font-bold">No account yet?</span>
                    </div>
                    <div className="col-12 my-2 text-center">
                        <a className="font-bold" href="#">CREATE AN ACCOUNT</a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        out
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


export default connect(mapStateToProps, mapDispatchToProps)(Account);

