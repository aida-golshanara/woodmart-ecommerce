import React from 'react';
import '../Styles/components/Top.css';
import TopSellers from "./TopSellers";
import SlideShow from "./SlideShow";


const Top = () => {

    const top = (
        <div id="top" className="container">
            <div className="row">
                <div className="col-lg-3 d-lg-block d-none">
                    <div className="browseCategory">Browse Category</div>
                    <nav className="categoryMenu">
                        <ul>
                            <li className="active"><i className="ico ico01"></i><a href="#">Furniture</a></li>
                            <li className="active"><i className="ico ico02"></i><a href="#">Cooking</a></li>
                            <li className="active"><i className="ico ico03"></i><a href="#">Accessories</a></li>
                            <li className="active"><i className="ico ico04"></i><a href="#">Fashion</a></li>
                            <li className="active"><i className="ico ico05"></i><a href="#">Clocks</a></li>
                            <li className="active"><i className="ico ico06"></i><a href="#">Lighting</a></li>
                            <li className="active"><i className="ico ico07"></i><a href="#">Toys</a></li>
                            <li><i className="ico ico08"></i><a href="#">Hand Made</a></li>
                            <li><i className="ico ico09"></i><a href="#">Minimalism</a></li>
                            <li><i className="ico ico10"></i><a href="#">Electronics</a></li>
                            <li><i className="ico ico11"></i><a href="#">Cars</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <form className="searchBox">
                                    <input placeholder="Search For Products" id="searchTxt" name="searchTxt" type="text" />
                                    <div className="rightSearch">
                                        <select className="searchCategory">
                                            <option>Select Category</option>
                                            <option>Furniture</option>
                                            <option>Accessories</option>
                                            <option>Clocks</option>
                                            <option>Lighting</option>
                                        </select>
                                        <button className="searchBotton" type="button">

                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 d-lg-block d-none">
                            <div className="row">
                                <div className="col-7">
                                    <i className="itemIcon supportIcon"></i>
                                    <div className="itemBox support">
                                        <div className="itemHead">24/7 SUPPORT</div>
                                        <div className="itemBody">+73 099 321 312</div>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <i className="itemIcon basketIcon"></i>
                                    <div className="itemBox basket">
                                        <div className="itemHead">$0.00</div>
                                        <div className="itemBody">0 items</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-8 px-0">
                            <SlideShow/>
                        </div>
                        <div className="col-lg-4 d-lg-block d-none">
                            <TopSellers title="Top Sellers" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

    return (
        top
    )
};


export default Top;
