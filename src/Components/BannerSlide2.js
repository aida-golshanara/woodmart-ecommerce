/*import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";*/
import '../Styles/components/BannerSlide2.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from "react";

export default function BannerSlide2() {

/*    const options = {
        items: 1,
        margin: 14,
        nav: true,
        dots: false,
        loop: false,
        stagePadding: 1,
        rtl: true,
        fluidSpeed: 1000,
        smartSpeed: 1000,
        dragEndSpeed: 1000,
        navSpeed: 1000,
    };*/

    const responsive = {
        0: {
            items: 1,
        },
        450: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };


  return (
      <div id="bannerSlide2" className="container">
          <OwlCarousel className='owl-theme bannerSlide2 mt-3' dots={false} items={6} responsive={responsive} nav={false} loop margin={10}>
              <div className="card banner7">
                  <div className="innerBox">
                      <div className="wrapBannerImg">
                          <div className="bannerImage"><img src="/img/banner07.jpg" alt=""/></div>
                      </div>
                      <div className="bannerBody">
                          <div className="title">
                              <h4>Discounts 30%<br />For Men Watches</h4>
                          </div>
                          <div className="viewMore">
                              <a href="#">VIEW MORE</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card banner6">
                  <div className="innerBox">
                      <div className="wrapBannerImg">
                          <div className="bannerImage"><img src="/img/banner06.jpg" alt=""/></div>
                      </div>
                      <div className="bannerBody">
                          <div className="title">
                              <h4>New Tents<br />Accessories Hiking</h4>
                          </div>
                          <div className="viewMore">
                              <a href="#">VIEW MORE</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card banner5">
                  <div className="innerBox">
                      <div className="wrapBannerImg">
                          <div className="bannerImage"><img src="/img/banner05.jpg" alt=""/></div>
                      </div>
                      <div className="bannerBody">
                          <div className="title">
                              <h4>Buy 2 Devices<br />With 5% discount</h4>
                          </div>
                          <div className="viewMore">
                              <a href="#">VIEW MORE</a>
                          </div>
                      </div>
                  </div>
              </div>
          </OwlCarousel>
      </div>
  );
}

