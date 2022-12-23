import React from 'react';
import '../Styles/components/MostPopularMan.css';

const Discount = (props) => {
    return (
        <div className="discount">{props.val}</div>
    )
}

const Label = (props) => {
    return (
        <div className="label">{props.val}</div>
    )
}

const MostPopularMan = (props) => {

    const bannerContent = props.MostPopularBanner[0];
    const productList = props.MostPopularList;

    const out = (
        <div id="mostPopularMan" className="container">
            <div className="items mt-3 row">
                <div className="col-md-4 banner p-0">
                    <div className="imgWraper">
                        <div className="inbox">
                            <img className="img-responsive imgBanner" src={bannerContent.thumb} alt=""/>
                        </div>
                    </div>
                    <div className={`cBanner ${props.bgColor}`}>
                        <div><span className="title">{bannerContent.title}</span><br/>{bannerContent.discount}</div>
                        <div className="readMore">
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mt-md-0 mt-4 ps-md-5 ps-2 pe-md-0 pe-2 ">
                    <div className="row">
                        <div className="itemList">
                            {productList.map((item,index)=> {
                                    return (
                                        <div className="item">
                                            {item.discount !== "" && <Discount val="-30%" />}
                                            {item.label !== "" && <Label val={item.label} />}
                                            <div className="img">
                                                <img src={item.thumb} alt=""/>
                                            </div>
                                            <div className="info">
                                                <h4>{item.title}</h4>
                                                <div className="categoryTitle">{item.categoryTitle}</div>
                                                <div className="price">{item.price}</div>
                                                <nav className="infoMenu">
                                                    <ul>
                                                        <li><a href="#"><i className="ico addIcon"></i></a></li>
                                                        <li><a href="#"><i className="ico quickIcon"></i></a></li>
                                                        <li><a href="#"><i className="ico favIcon"></i></a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        out
    )
};


export default MostPopularMan;

