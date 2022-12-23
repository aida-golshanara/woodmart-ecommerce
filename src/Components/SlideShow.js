/*import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";*/
import '../Styles/components/SlideShow.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from "react";

export default function SlideShow() {

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


  return (
      <div id="slideShow">
          <OwlCarousel className='owl-theme slideShow mt-3' dots={true} items={1} nav={false} loop>
              <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                  <img className="img-responsive" src="/img/slideshow1.jpg" alt="" />
              </div>
              <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                  <img className="img-responsive" src="/img/slideshow2.jpg" alt="" />
              </div>
              <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                  <img className="img-responsive" src="/img/slideshow3.jpg" alt="" />
              </div>
          </OwlCarousel>
      </div>
  );
}

