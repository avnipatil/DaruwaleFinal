import React from 'react'
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import '../layout.css'
const Header = () => {
    const SignIn = React.lazy(() => import('../../Components/SignIn/SignIn'))
    const [Navigation, setNavbar] = useState(false);
    const [expanded, setExpanded] = useState(false);
    //on scroll set hooks true
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 20) {
                setNavbar(true);
            }
        })
    }, []);

    const scrollgoTop = () => {
        window.scrollTo({ top: 0 });
    };
    return (
        <div className='header fixed-top'>
            <Navbar collapseOnSelect expand="lg" expanded={expanded}
                className=" bg-theme" style={{
                    // top: show ? '30px' : '5px',
                    backgroundColor: '#0d324d',
                }}>

                <Container>
                    <Navbar.Brand to="/">
                        <i className='fa fa-phone'></i> <a href='tel:(00) 33 169 7720' className='text-white'> (00) 33 169 7720</a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"
                        onClick={() => setExpanded(expanded ? false : "expanded")} />
                    <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end ">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link "
                                to="/product" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Product
                            </NavLink>
                            <NavLink className="nav-link "
                                to="/compare" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Compare
                            </NavLink>
                            <NavLink className="nav-link "
                                to="/order-tracking" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Order Tracking
                            </NavLink>
                            <NavLink className="nav-link "
                                to="/profile" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Account
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='sub-header py-2'
                style={{
                    background: Navigation ? '#fff' : 'transpernt',
                }}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-2'>
                            <NavLink to="/"><img  src={logo} height="50px" width="50px" className='img-fluid'></img></NavLink>

                            {/* <NavLink to="/" className='logo'><span className='text-dark'>&#127867;</span>Daruwale</NavLink> */}
                        </div>

                        <div className='col-lg-5'>
                            <input type="search" className='form-control search-bar'
                                placeholder='Search For Product' />
                        </div>
                        <div className='col-lg-5 d-flex justify-content-center 
                        align-items-center justify-content-around signin flex-wrap'>

                            <div>
                                <span >
                                    <NavLink to="/cart" className='sub-header-link' data-title='cart'>
                                        <i className='fa fa-shopping-cart text-danger'> </i>
                                    </NavLink>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <NavLink to="/wishlist" className='sub-header-link' data-title='wishlist'>
                                        <i className='fa fa-heart-o text-danger'> </i>
                                    </NavLink>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <NavLink to="/compare" className='sub-header-link' data-title='compare'>
                                        <i className='fa fa-refresh text-danger'> </i>
                                    </NavLink>
                                </span>
                            </div>
                            <div>
                                <SignIn />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header
