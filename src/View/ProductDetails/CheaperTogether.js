import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import BTearphones from '../../assets/images/Product/Product-Desc/Smart-watch/BT-Earphones.jpg'
import CTSMwatch from '../../assets/images/Product/Product-Desc/Smart-watch/5.jpg'
import SmWatchCharger from '../../assets/images/Product/Product-Desc/Smart-watch/Smartwatch-charger.jpg'
const CheaperTogether =()=> {
    const options3 = {
        items: 1,
        rewind: true,
        autoplay: false,
        dots: true
    }
    return (
        <section className='Cheaper-Together'>
                <div className="container pt-lg-1 pb-5 mb-md-3">
                    <div className="card-CT card-body pt-5">
                        <h2 className="h3 text-center pb-4">Cheaper Together</h2>
                        <OwlCarousel options={options3}>
                            <div className='row Cheap-To-item align-items-center justify-content-center d-flex'>
                                <div className='col-md-3 col-sm-4'>
                                    <div className=" text-center mx-auto">
                                        <Link className="card-img-top d-block overflow-hidden" to="/product">
                                            <img src={CTSMwatch} alt="Product" className='img-fluid' /></Link>
                                        <div className="card-body py-2"><span className="d-inline-block CT_bg rounded-1 py-1 px-2 mb-3">Your product</span>
                                            <h3 className="product-title fs-sm"><Link to="/product">Smartwatch Youth Edition</Link></h3>
                                            <div className="C-Tprice">$124.<small>99</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-2 align-items-center justify-content-center d-flex">
                                    <div className="display-4 fw-light text-muted px-4">+</div>
                                </div>
                                <div className='col-md-3 col-sm-4'>
                                    <div className=" text-center mx-auto">
                                        <Link className="card-img-top d-block overflow-hidden" to="/product">
                                            <img src={BTearphones} alt="Product" className='img-fluid' />
                                        </Link>
                                        <div className="card-body py-2"><span className="d-inline-block bg-danger fs-ms text-white rounded-1 py-1 px-2 mb-3">-15%</span>
                                            <h3 className="product-title fs-sm">
                                                <Link to="/product">Bluetooth Headset Air (White)</Link>
                                            </h3>
                                            <div className="C-Tprice"><span className="text-accent">$59.<small>00  </small></span>
                                                <del className="fs-sm C-Tprice text-muted">  $69.<small>00</small></del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-2 align-items-center justify-content-center d-flex">
                                    <div className="display-4 fw-light text-muted px-4">=</div>
                                </div>
                                <div className="col-md-4 pt-3">
                                    <div className="bg-CT-Box p-4 rounded-3 text-center mx-auto ">
                                        <div className="h3 product-price-CT-box mb-3 me-1">$183.<small>99</small></div>
                                        <button className="Button-Full-Red px-3" type="button">Purchase together</button>
                                    </div>
                                </div>
                            </div>

                            <div className='row Cheap-To-item align-items-center justify-content-center d-flex'>
                                <div className='col-md-3 col-sm-4'>
                                    <div className=" text-center mx-auto">
                                        <Link className="card-img-top d-block overflow-hidden" to="/product">
                                            <img src={CTSMwatch} alt="Product" className='img-fluid' /></Link>
                                        <div className="card-body py-2"><span className="d-inline-block CT_bg rounded-1 py-1 px-2 mb-3">Your product</span>
                                            <h3 className="product-title fs-sm"><Link to="/product">Smartwatch Youth Edition</Link></h3>
                                            <div className="C-Tprice">$124.<small>99</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-2 align-items-center justify-content-center d-flex">
                                    <div className="display-4 fw-light text-muted px-4">+</div>
                                </div>
                                <div className='col-md-3 col-sm-4'>
                                    <div className=" text-center mx-auto">
                                        <Link className="card-img-top d-block overflow-hidden" to="/product">
                                            <img src={SmWatchCharger} alt="Product" className='img-fluid' />
                                        </Link>
                                        <div className="card-body py-2"><span className="d-inline-block bg-danger fs-ms text-white rounded-1 py-1 px-2 mb-3">-20%</span>
                                            <h3 className="product-title fs-sm"><Link to="/product">Smart Watch Wireless Charger</Link></h3>
                                            <div className="C-Tprice"><span className="text-accent">$16.<small>00  </small></span>
                                                <del className="fs-sm C-Tprice text-muted">  $20.<small>00</small></del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-2 align-items-center justify-content-center d-flex">
                                    <div className="display-4 fw-light text-muted px-4">=</div>
                                </div>
                                <div className="col-md-4 pt-3">
                                    <div className="bg-CT-Box p-4 rounded-3 text-center mx-auto ">
                                        <div className="h3 product-price-CT-box mb-3 me-1">$183.<small>99</small></div>
                                        <button className="Button-Full-Red px-3" type="button">Purchase together</button>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
    )
}

export default CheaperTogether
