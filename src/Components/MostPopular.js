import React from 'react';
import '../Styles/components/MostPopular.css';


const MostPopular = () => {

    const DiscountBanner = (
        <React.Fragment>
            <div className="sectionTitle">
                <h2><span>MOST POPULAR</span></h2>
            </div>
            <nav id="mostPopular" className="verticalMenu">
                <ul>
                    <li>
                        <a href="#">
                            <div className="row">
                                <div className="col-md-2 col-3 px-0 thumb">
                                    <img className="img-responsive" src="/img/mostpopular1.jpg" alt=""/>
                                </div>
                                <div className="col-md-10 col-9">
                                    <h3 className="title">Stapler TTR</h3>
                                    <div className="price">$267</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="row">
                                <div className="col-md-2 col-3 px-0 thumb">
                                    <img className="img-responsive" src="/img/mostpopular2.jpg" alt=""/>
                                </div>
                                <div className="col-md-10 col-9">
                                    <h3 className="title">Stapler TTR</h3>
                                    <div className="price">$267</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="row">
                                <div className="col-md-2 col-3 px-0 thumb">
                                    <img className="img-responsive" src="/img/mostpopular3.jpg" alt=""/>
                                </div>
                                <div className="col-md-10 col-9">
                                    <h3 className="title">Stapler TTR</h3>
                                    <div className="price">$267</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="row">
                                <div className="col-md-2 col-3 px-0 thumb">
                                    <img className="img-responsive" src="/img/mostpopular4.jpg" alt=""/>
                                </div>
                                <div className="col-md-10 col-9">
                                    <h3 className="title">Stapler TTR</h3>
                                    <div className="price">$267</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );

    return (
        DiscountBanner
    )
};


export default MostPopular;

