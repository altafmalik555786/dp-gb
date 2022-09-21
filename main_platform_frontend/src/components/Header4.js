import React from 'react'
import Logo from '../Assets/images/logo-white.png'
import logoBlack from "../Assets/images/logo-black.png"

import { Link } from "react-router-dom"
import { constRoute } from '../utility/constRoute'
function Header4() {
    return (
        <div>
            <header className="header-area position-inherit top-auto bg-white">
                <div className="header-top-bar bg-dark py-2 padding-right-30px padding-left-30px">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center header-top-info font-size-14 font-weight-medium">
                                <p className="login-and-signup-wrap">
                                    <a href="#" data-toggle="modal" data-target="#loginModal">
                                        <span className="mr-1 la la-sign-in"></span>Login
                                    </a>
                                    <span className="or-text px-2">or</span>
                                    <a href="#" data-toggle="modal" data-target="#signUpModal">
                                        <span className="mr-1 la la-user-plus"></span>Sign Up
                                    </a>
                                </p>
                            </div>
                            {/* <!-- end col-lg-6 --> */}
                            <div className="col-lg-6 d-flex align-items-center justify-content-end header-top-info">
                                <span className="mr-2 text-white font-weight-semi-bold font-size-14">Follow Listhub on:</span>
                                <ul className="social-profile social-profile-colored">
                                    <li><a href="#" className="facebook-bg"><i className="lab la-facebook-f"></i></a></li>
                                    <li><a href="#" className="twitter-bg"><i className="lab la-twitter"></i></a></li>
                                    <li><a href="#" className="instagram-bg"><i className="lab la-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container-fluid --> */}
                </div>
                {/* <!-- end header-top-bar --> */}
                <div className="header-menu-wrapper padding-right-30px padding-left-30px">
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-full-width">
                                    <div className="logo">
                                        <Link to={constRoute?.home}  className="sticky-logo-hide"><img src={logoBlack} alt="logo" /></Link>
                                        <Link to={constRoute?.home}  className="sticky-logo-show"><img src={Logo} alt="logo" /></Link>
                                        <div className="d-flex align-items-center">
                                            <a href="add-listing" className="btn-gray add-listing-btn-show font-size-24 mr-2 flex-shrink-0 text-color" data-toggle="tooltip" data-placement="left" title="Add Listing">
                                                <i className="la la-plus"></i>
                                            </a>
                                            <div className="menu-toggle menu-toggle-black">
                                                <span className="menu__bar"></span>
                                                <span className="menu__bar"></span>
                                                <span className="menu__bar"></span>
                                            </div>
                                            {/* <!-- end menu-toggle --> */}
                                        </div>
                                    </div>
                                    {/* <!-- end logo --> */}
                                    <div className="main-menu-content main-menu-content-2 border-left-color">
                                        <nav className="main-menu main-menu-2">
                                            <ul>
                                                <li>
                                                    <a href="#">Categories <span className="la la-angle-down"></span></a>
                                                    <ul className="dropdown-menu-item">
                                                        <li><Link to="/listing-list">apartments</Link></li>
                                                        <li><Link to="/listing-list">Restaurants</Link></li>
                                                        <li><Link to="/listing-list">Travel</Link></li>
                                                        <li><Link to="/listing-list">Events</Link></li>
                                                        <li><Link to="/listing-list">fitness</Link></li>
                                                        <li><Link to="/listing-list">Hotels</Link></li>

                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">listings <span className="la la-angle-down"></span></a>
                                                    <ul className="dropdown-menu-item">
                                                        <li><Link to="/listing-grid">listing grid</Link></li>
                                                        <li><Link to="/listing-list">listing list</Link></li>
                                                        <li><Link to="/listing-fullwidth-map">fullwidth map</Link></li>
                                                        <li><Link to="/listing-halfmap-grid">half map grid</Link></li>
                                                        <li><Link to="/listing-halfmap-list">half map list</Link></li>
                                                        <li><Link to="/listing-Left-sidebar">listing left sidebar  </Link></li>
                                                        <li><Link to="/listing-Right-sidebar">listing right sidebar  </Link></li>
                                                        <li><Link to="/listing-details">listing details</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">pages <span className="la la-angle-down"></span></a>
                                                    <div className="dropdown-menu-item mega-menu">
                                                        <ul className="row no-gutters">
                                                            <li className="col-lg-4 mega-menu-item">
                                                                <ul>
                                                                    <li><Link to="/dashboard">dashboard <span className="ribbon">Hot</span></Link></li>
                                                                    <li><Link to="/about">about</Link></li>
                                                                    <li><Link to="/user-profile">user profile</Link></li>
                                                                    <li><Link to="/career">career</Link></li>
                                                                    <li><Link to="/career-details">career details</Link></li>
                                                                    <li><a href="top-place.html">top places </a></li>
                                                                    <li><Link to="/add-listing">add listing </Link></li>
                                                                </ul>
                                                            </li>
                                                            <li className="col-lg-4 mega-menu-item">
                                                                <ul>
                                                                    <li><a href="top-author.html">top authors </a></li>
                                                                    <li><a href="booking.html">booking</a></li>
                                                                    <li><a href="booking-confirmation.html">booking confirmation </a></li>
                                                                    <li><Link to="/invoice">invoice</Link></li>
                                                                    <li><Link to="/pricing">Pricing</Link></li>
                                                                    <li><Link to="/all-categories">all categories</Link></li>
                                                                    <li><a href="all-locations.html">all locations</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="col-lg-4 mega-menu-item">
                                                                <ul>
                                                                    <li><Link to="/add-new-post">add new post </Link></li>
                                                                    <li><Link to="/contact">contact us</Link></li>
                                                                    <li><a href="faq.html">faq</a></li>
                                                                    <li><a href="page-404.html">404 page</a></li>
                                                                    <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
                                                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                                                    <li><a href="coming-soon.html"> Coming Soon</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">blog <span className="la la-angle-down"></span></a>
                                                    <ul className="dropdown-menu-item">
                                                        <li><a href="blog-full-width.html">full width</a></li>
                                                        <li><a href="blog-grid.html">blog grid</a></li>
                                                        <li><a href="blog-left-sidebar.html">left sidebar </a></li>
                                                        <li><a href="blog-right-sidebar.html">right sidebar </a></li>
                                                        <li><a href="blog-single.html">blog detail</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* <!-- end main-menu-content --> */}
                                    <div className="nav-right-content ml-auto">
                                        <Link to="/add-listing" className="theme-btn gradient-btn add-listing-btn-hide">
                                            <i className="la la-plus mr-2"></i>Add Listing
                                        </Link>
                                    </div>
                                    {/* <!-- end nav-right-content --> */}
                                </div>
                                {/* <!-- end menu-full-width --> */}
                            </div>
                            {/* <!-- end col-lg-12 --> */}
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container-fluid --> */}
                </div>
                {/* <!-- end header-menu-wrapper --> */}
            </header>
        </div>
    )
}

export default Header4