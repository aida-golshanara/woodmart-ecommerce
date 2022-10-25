import '../Styles/components/TopSellers.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProgressBar from "./ProgressBar";

function TopSellers(props) {
    return (
        <div id="topSellers">
            <h2>{props.title}</h2>
            <OwlCarousel className='owl-theme CatSlider mt-3' dots={false} autoPlay={true} items={1} nav={true} loop margin={10}>
                <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                    <img src="/img/inCat1_01.jpg" alt="" />
                    <div className="row text-center">
                        <div className="title">
                            <h3>Cooking</h3>
                        </div>
                        <div className="catTitle">Black Friday</div>
                        <div className="priceValue">$320.00</div>
                    </div>
                    <div className="row available">
                        <div className="col-6">Ordered: 28</div>
                        <div className="col-6">item available: 2</div>
                    </div>
                    <ProgressBar progress={80} height={10} />
                </div>
                <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                    <img src="/img/inCat1_02.jpg" alt="" />
                    <div className="row text-center">
                        <div className="title">
                            <h3>Clocks</h3>
                        </div>
                        <div className="catTitle">Black Friday</div>
                        <div className="priceValue">$320.00</div>
                    </div>
                    <div className="row available">
                        <div className="col-6">Ordered: 28</div>
                        <div className="col-6">item available: 2</div>
                    </div>
                    <ProgressBar progress={80} height={10} />
                </div>
                <div style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                    <img src="/img/inCat1_03.jpg" alt="" />
                    <div className="row text-center">
                        <div className="title">
                            <h3>Toys</h3>
                        </div>
                        <div className="catTitle">Black Friday</div>
                        <div className="priceValue">$320.00</div>
                    </div>
                    <div className="row available">
                        <div className="col-6">Ordered: 28</div>
                        <div className="col-6">item available: 2</div>
                    </div>
                    <ProgressBar progress={80} height={10} />
                </div>
            </OwlCarousel>
        </div>
    );
}


export default TopSellers;

