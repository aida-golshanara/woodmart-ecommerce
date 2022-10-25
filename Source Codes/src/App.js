import React from "react";
import MainNav from './Components/MainNav';
import Header from './Components/Header';
import BannerSlide1 from "./Components/BannerSlide1";
import BannerSlide2 from './Components/BannerSlide2';
import Footer from './Components/Footer';
import './Styles/main.css';
import CatSlider from "./Components/CatSlider";
import Top from "./Components/Top";
import MostPopularMan from "./Components/MostPopularMan";
import MostPopularWoman from "./Components/MostPopularWoman";
import DiscountBanner from "./Components/DiscountBanner";
import TopSellers from "./Components/TopSellers";
import MostPopular from "./Components/MostPopular";




const MostPopularManBanner = [
    {
        "thumb": "/img/mostPopularMan.jpg",
        "title": "All Jackets",
        "discount": "Discount- 30%"
    },
];

const MostPopularManList = [
    {
        "thumb": "/img/most1.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "-30%",
        "label": ""
    },
    {
        "thumb": "/img/most2.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/most3.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/most4.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/most5.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/most6.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/most7.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/most8.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/most9.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": "NEW"
    },
    {
        "thumb": "/img/most10.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    }
];

const MostPopularWomanBanner = [
    {
        "thumb": "/img/mostPopularWoman.jpg",
        "title": "All Jackets",
        "discount": "Discount- 30%"
    },
];

const MostPopularWomanList = [
    {
        "thumb": "/img/wmost01.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "-30%",
        "label": ""
    },
    {
        "thumb": "/img/wmost02.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/wmost03.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/wmost04.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/wmost05.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/wmost06.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/wmost07.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/wmost08.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    },
    {
        "thumb": "/img/wmost09.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": "NEW"
    },
    {
        "thumb": "/img/wmost10.jpg",
        "title": "Men Shirt",
        "categoryTitle": "Black friday",
        "price": "$270.00",
        "discount": "",
        "label": ""
    }
];


function App() {
  return (
      <div>
        <MainNav />
        <Header />

        <Top />

          <div className="py-5"></div>


          <div className="container">
              <div className="row">
                  <div className="sectionTitle">
                      <h2>
                          <span>MOST POPULAR FOR MAN</span>
                      </h2>
                  </div>
              </div>
              <MostPopularMan bgColor="bgBlue" MostPopularBanner={MostPopularManBanner} MostPopularList={MostPopularManList} />
          </div>

          <div className="py-5"></div>

            <div className="bgGray py-5">
                <div className="container mb-5">
                    <div className="row">
                        <div className="sectionTitle">
                            <h2>
                                <span>ELECTRONIC CATEGORY</span>
                            </h2>
                        </div>
                    </div>
                    <CatSlider />
                </div>

                <BannerSlide1 />
            </div>

          <div className="py-5"></div>

          <div className="container">
              <div className="row">
                  <div className="sectionTitle">
                      <h2>
                          <span>MOST POPULAR FOR WOMAN</span>
                      </h2>
                  </div>
              </div>
              <MostPopularMan bgColor="bgBrown" MostPopularBanner={MostPopularWomanBanner} MostPopularList={MostPopularWomanList} />
          </div>


          <div className="py-5"></div>

          <DiscountBanner />

          <div className="py-5"></div>

          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                    <MostPopular />
                  </div>
                  <div className="col-md-3 mb-md-0 mb-5">
                      <TopSellers title="HOT DEALS" />
                  </div>
                  <div className="col-md-6">
                      <img src="/img/worker.png" className="img-responsive" alt=""/>
                  </div>
              </div>
          </div>

          <div className="py-5"></div>

          <BannerSlide2 />

          <div className="my-5"></div>

        <Footer />
      </div>
  );
}

export default App;

