import React from 'react';
import '../Styles/components/DiscountBanner.css';
import SocialIcons from "./SocialIcons";


const DiscountBanner = () => {

    const DiscountBanner = (
        <div id="discountBanner">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 content">
                        <div className="title text-left">Learn how to get a 30% discount on all products.</div>
                        <div className="desc text-left">Senectus ullamcorper lacus a euismod vestibulum habitasse.</div>
                    </div>
                    <div className="col-md-4 text-right d-md-block d-none">
                        <h5>Follow us on:</h5>
                        <SocialIcons colorType="white" />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        DiscountBanner
    )
};


export default DiscountBanner;

