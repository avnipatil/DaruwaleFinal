import React from 'react'
import '../layout.css';
import cards_alt from '../../assets/images/Footer/cards-alt.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <section className="container-fluid px-0">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <Link className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-orange" to="/">
                                <div className="card-body text-center">
                                    <i className="text-orange fa fa-edit mb-2"></i>
                                    <h3 className="h5 mb-1 text-dark">Read the blog</h3>
                                    <p className="text-muted fs-sm">Latest store, fashion news and trends</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to="/" className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-indigo">
                                <div className="card-body text-center">
                                    <i className="text-indigo fa fa-instagram mb-2"></i>
                                    <h3 className="h5 mb-1 text-dark">Follow on Instagram</h3>
                                    <p className="text-muted fs-sm">#ShopWithDaruwale</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section style={{ background: "#0d324d" }}>
                    <div className='container' >
                        <div className='row pb-2'>
                            <div className='col-md-6 col-lg-3'>
                            <div className='compare-sec-footer pb-2 pt-4'>
                                    <ul className='compare-list-ul-footer text-md-start'>
                                        <h3 className="compare-heading-footer text-light">Account</h3>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/profile'>Your account</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/support-tickets'>Support Tickets</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/orders'>Orders</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/addresses'>Addresses</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/payment-methods'>Payment Methods</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className='col-md-6 col-lg-3'>
                                <div className='compare-sec-footer pb-2 pt-4'>
                                    <ul className='compare-list-ul-footer text-md-start'>
                                        <h3 className="compare-heading-footer text-light">Shipping info</h3>
                                        {/* <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/'>Your account</Link>
                                        </li> */}
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/'>Shipping rates & policies</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/'>Refunds & replacements</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/order-tracking'>Order tracking</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/'>Delivery info</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/'>Taxes & Fees</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-2'>

                                <div className='compare-sec-footer pb-2 pt-4'>
                                    <ul className='compare-list-ul-footer text-md-start'>
                                        <h3 className="compare-heading-footer text-light pb-1">About Us</h3>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/'>About company</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/'>Our team</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/'>Careers</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/'>News</Link>
                                        </li>
                                        <li className='compare-list-footer'>
                                            <Link className='compare-list-link-footer text-md-start' to='/'>FAQ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className=' col-md-6 col-lg-4 '>
                                <div className='subscription-form-antispam-footer pb-2 pt-4'>
                                    <h3 className="compare-heading-footer-stay text-light pb-1">Stay informed</h3>
                                    <div className="subscription-form-footer validate-footer">
                                        <form className="input-group flex-nowrap">
                                            <input className="form-control email-input-footer" type="email" name="EMAIL" placeholder="Your email" required="" />
                                            <button className="btn btn-danger btn-subscribe-footer" type="submit" name="subscribe" style={{ "backgroundcolor": "#fe3638" }}>Subscribe</button>
                                        </form>
                                        <div className="compare-list-link-footer text-light opacity-50 mt-1">Subscribe to our newsletter to receive early discount offers, updates and new products info.</div>
                                        <div className="subscription-status"></div>
                                    </div>
                                </div>
                                <div className="pb-2 mb-1">
                                    <h3 className="compare-heading-footer-Download text-light pb-1 mt-4 download-app text-md-start">Download our app</h3>
                                    <div className="d-flex flex-wrap">
                                        <div className="me-2 mb-2">
                                            <a className="btn-market btn-download" href="https://www.facebook.com/" role="button">
                                                <i className="fa fa-apple" aria-hidden="true"></i>
                                                <span className="btn-market-subtitle">Download on the</span>
                                                <span className="btn-market-title">App Store</span>
                                            </a>
                                        </div>
                                        <div className="mb-2">
                                            <a className="btn-market btn-download" href="https://www.facebook.com/" role="button">
                                                <i className="fa fa-caret-right"></i>
                                                <span className="btn-market-subtitle">Download on the</span>
                                                <span className="btn-market-title">Google Play</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="pt-3 sec-2-footer">
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-3 footer-content-resp">
                                    <div className="d-flex align-items-center"><i className="fa fa-rocket text-orange"></i>
                                        <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">Fast and free delivery</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">Free delivery for all orders over $200</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3 footer-content-resp">
                                    <div className="d-flex align-items-center"><i className="fa fa-money text-orange"></i>
                                        <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">Money back guarantee</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">We return money within 30 days</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3 footer-content-resp">
                                    <div className="d-flex align-items-center"><i className="fa fa-headphones text-orange"></i>
                                        <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">24/7 customer support</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">Friendly 24/7 customer support</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3 ">
                                    <div className="d-flex align-items-center"><i className="fa fa-support text-orange"></i>
                                        <div className="ps-3">
                                            <h6 className="fs-base text-light mb-1">Fast and free delivery</h6>
                                            <p className="mb-0 fs-ms text-light opacity-50">Free delivery for all orders over $200</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr-light " style={{ "color": "#d1d6e0" }} /> */}
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start">

                                    <div className="compare-sec-footer compare-links compare-light">
                                        <ul className="compare-list-ul-footer d-flex flex-wrap justify-content-center justify-content-md-start">
                                            <li className="compare-list-footer me-4"><Link className="compare-list-link-footer" to="/">Outlets</Link></li>
                                            <li className="compare-list-footer me-4"><Link className="compare-list-link-footer" to="/">Affiliates</Link></li>
                                            <li className="compare-list-footer me-4"><Link className="compare-list-link-footer" to="/">Support</Link></li>
                                            <li className="compare-list-footer me-4"><Link className="compare-list-link-footer" to="/">Privacy</Link></li>
                                            <li className="compare-list-footer me-4"><Link className="compare-list-link-footer" to="/">Terms of use</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 text-center mb-1'>
                                    <img className="d-inline-block" src={cards_alt} width="187" alt="Payment methods" />

                                </div>
                                <div className="col-md-4 text-center text-md-end mb-2">
                                    <div className="">
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="https://www.facebook.com/">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="https://www.facebook.com/">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="https://www.facebook.com/">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="https://www.facebook.com/">
                                            <i className="fa fa-pinterest"></i>
                                        </a>
                                        <a className="btn-social-icon-footer bs-light socialhover ms-2 mb-2" href="https://www.facebook.com/">
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Footer;

