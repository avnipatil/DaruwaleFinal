import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Account_Orders_History.css';
import { Nav } from "react-bootstrap";
import profile from '../../assets/images/AccountHistory/profile.png';
const Account_Orders_History = React.memo((props) => {
    return (
        <>
            <div className='Account-Order-History'>
                <div className='profile-col-sidebar'>
                    <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
                        <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                            <div className="d-md-flex align-items-center">
                                <div className='position-relative img-boreder-profile'>
                                    <span className="ToolTip-img bg-warning position-absolute">384</span>
                                    <img className='profile-orderhistory' src={profile} alt=""></img>
                                </div>
                            </div>
                            <div className='justify-content-center align-items-center text-md-start ps-md-3 p-4'>
                                <h6>Susan Gardner</h6>
                                <span className='text-primary'>s.gardner@example.com</span>
                            </div>
                        </div>
                        <div id="account-menu">
                            <div className="bg-light px-4 py-3">
                                <h6 className="text-muted">Dashboard</h6>
                            </div>
                            <Nav variant="pills" className="flex-column">
                                <ul>
                                    <Nav.Item>
                                        <NavLink to="/orders" className='nav-link'>
                                            <li className="sidebar-li">
                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                    <i className="fa fa-shopping-bag me-2"></i>Orders
                                                    <span className="text-muted ms-auto"></span>
                                                </div>
                                            </li>
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/wishlist" className='nav-link'>
                                            <li className="sidebar-li">
                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                    <i className="fa fa-heart-o me-2"></i>Wishlist
                                                    <span className="text-muted ms-auto">{props.wishlistcount}
                                                    </span>
                                                </div>
                                            </li>
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/support-tickets" className='nav-link'>
                                            <li className="sidebar-li">
                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                    <i className="fa fa-life-ring me-2"></i>Support tickets
                                                    <span className="text-muted ms-auto"></span>
                                                </div>
                                            </li>
                                        </NavLink>
                                    </Nav.Item>
                                </ul>
                                <div className="bg-light px-4 py-3">
                                    <h6 className="text-muted">Account settings</h6>
                                </div>
                                <ul>
                                    <Nav.Item>
                                        <NavLink to="/profile" className='nav-link'>
                                            <li className="sidebar-li">
                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                    <i className="fa fa-user-o me-2"></i>Profile info
                                                    <span className="text-muted ms-auto"></span>
                                                </div>
                                            </li>
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/addresses" className='nav-link'>
                                            <li className="sidebar-li">
                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                    <i className="fa fa-map-marker me-2"></i>Addresses
                                                    <span className="text-muted ms-auto"></span>
                                                </div>
                                            </li>
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/payment-methods" className='nav-link'>
                                            <li className="sidebar-li">
                                                <div className="d-flex align-items-center px-2 py-1 fw-bold">
                                                    <i className="fa fa-credit-card me-2"></i>Payment methods
                                                    <span className="text-muted ms-auto"></span>
                                                </div>
                                            </li>
                                        </NavLink>
                                    </Nav.Item>
                                </ul>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})
export default Account_Orders_History;