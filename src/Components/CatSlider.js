/*import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";*/
import '../Styles/components/CatSlider.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function CatSlider() {

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
            items: 1,
        },
        1000: {
            items: 6,
        },
    };


  return (
      <div id="catSlider">
          <OwlCarousel className='owl-theme CatSlider mt-3' dots={false} items={6} responsive={responsive} nav={false} loop margin={10}>
              <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                  <img src="/img/inCat1_01.jpg" alt="" />
                  <div className="row text-center">
                      <div className="title">
                          <h3>Cooking</h3>
                      </div>
                      <div className="catTitle">12 products</div>
                  </div>
              </div>
              <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                  <img src="/img/inCat1_02.jpg" alt="" />
                  <div className="row text-center">
                      <div className="title">
                          <h3>Clocks</h3>
                      </div>
                      <div className="catTitle">12 products</div>
                  </div>
              </div>
              <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                  <img src="/img/inCat1_03.jpg" alt="" />
                  <div className="row text-center">
                      <div className="title">
                          <h3>Toys</h3>
                      </div>
                      <div className="catTitle">12 products</div>
                  </div>
              </div>
              <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                  <img src="/img/inCat1_04.jpg" alt="" />
                  <div className="row text-center">
                      <div className="title">
                          <h3>Furniture</h3>
                      </div>
                      <div className="catTitle">12 products</div>
                  </div>
              </div>
              <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                  <img src="/img/inCat1_05.jpg" alt="" />
                  <div className="row text-center">
                      <div className="title">
                          <h3>Lighting</h3>
                      </div>
                      <div className="catTitle">12 products</div>
                  </div>
              </div>
              <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                  <img src="/img/inCat1_06.jpg" alt="" />
                  <div className="row text-center">
                      <div className="title">
                          <h3>Accessories</h3>
                      </div>
                      <div className="catTitle">12 products</div>
                  </div>
              </div>
          </OwlCarousel>
      </div>
  );
}

