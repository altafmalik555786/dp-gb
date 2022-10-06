import React from 'react'
import { Link } from "react-router-dom"
import logoWhite from "../Assets/images/dpgb.png"
import { constRoute } from '../utility/constRoute'
import Logo from '../Assets/images/dpgb.png'
import style from './logoStyle.module.scss'
function Header2() {
    return (
        <div>
            <header className="header-area">
                <div className="header-top-bar bg-dark-opacity py-2 padding-right-30px padding-left-30px">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-center header-top-info font-size-14">
                                <p className="mr-3 pr-3 border-right border-right-color">
                                    <span className="mr-1 text-white font-weight-semi-bold">Email:</span>
                                    <a href="#" className="font-weight-medium">DPGB@gmail.com</a>
                                </p>
                                <p>
                                    <span className="mr-1 text-white font-weight-semi-bold">Phone:</span>
                                    <a href="#" className="font-weight-medium">+98 76543210</a>
                                </p>
                            </div>
                            {/* <!-- end col-lg-4 --> */}
                            <div className="col-lg-4 header-top-info">
                                <div className="logo text-center py-2">
                                    <Link to={constRoute?.home}><img src={Logo} className={style.logoSize} alt="logo" /></Link>
                                </div>
                                {/* <!-- end logo --> */}
                            </div>
                            {/* <!-- end col-lg-4 --> */}
                            <div className="col-lg-4 d-flex align-items-center justify-content-end header-top-info flex-column-inherit">
                                <span className="mr-2 text-white font-weight-semi-bold font-size-14">Follow us on:</span>
                                <ul className="social-profile social-profile-colored">
                                    <li><a href="#" className="facebook-bg"><i className="lab la-facebook-f"></i></a></li>
                                    <li><a href="#" className="twitter-bg"><i className="lab la-twitter"></i></a></li>
                                    <li><a href="#" className="instagram-bg"><i className="lab la-instagram"></i></a></li>
                                </ul>
                                <div className="user-chosen-select-container ml-3">
                                    <select className="user-chosen-select">
                                        <option value="1" selected>English</option>
                                        <option value="2">Espanol</option>
                                        <option value="3">Deutsch</option>
                                        <option value="4">Türkçe</option>
                                        <option value="5">Polski</option>
                                        <option value="6">Português</option>
                                        <option value="7">Italiano</option>
                                        <option value="8">Dansk</option>
                                        <option value="9">French</option>
                                        <option value="10">German</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container-fluid --> */}
                </div>
                {/* <!-- end header-top-bar --> */}
                <div className="header-menu-wrapper padding-right-30px padding-left-30px">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-full-width align-items-center justify-content-between">
                                    <p className="login-and-signup-wrap">
                                        <a href="#" data-toggle="modal" data-target="#loginModal">
                                            <span className="mr-1 la la-sign-in"></span>Login
                                        </a>
                                        <span className="or-text px-2">or</span>
                                        <a href="#" data-toggle="modal" data-target="#signUpModal">
                                            <span className="mr-1 la la-user-plus"></span>Sign Up
                                        </a>
                                    </p>
                                    <div className="quick-search-form d-flex align-items-center">
                                        <form action="#" className="w-100">
                                            <div className="header-search position-relative">
                                                <i className="la la-search form-icon"></i>
                                                <input type="search" placeholder="What are you looking for?" />
                                                <div className="instant-results">
                                                    <ul className="instant-results-list">
                                                        <li><a href="#" className="d-flex align-items-center"><span className="icon-element bg-1 mr-2"><i className="la la-glass"></i></span>Food & Drinks</a></li>
                                                        <li><a href="#" className="d-flex align-items-center"><span className="icon-element bg-2 mr-2"><i className="la la-hotel"></i></span>Travel & Hotel</a></li>
                                                        <li><a href="#" className="d-flex align-items-center"><span className="icon-element bg-3 mr-2"><i className="la la-cutlery"></i></span>Restaurants</a></li>
                                                        <li><a href="#" className="d-flex align-items-center"><span className="icon-element bg-4 mr-2"><i className="la la-television"></i></span>Entertainment</a></li>
                                                        <li><a href="#" className="d-flex align-items-center"><span className="icon-element bg-5 mr-2"><i className="la la-shopping-bag"></i></span> Shopping</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- end quick-search-form --> */}
                                    <div className="d-flex align-items-center ml-auto">
                                        <Link to="/add-listing" className="btn-gray add-listing-btn-show font-size-24 mr-2 flex-shrink-0" data-toggle="tooltip" data-placement="left" title="Add Listing">
                                            <i className="la la-plus"></i>
                                        </Link>
                                        <div className="menu-toggle">
                                            <span className="menu__bar"></span>
                                            <span className="menu__bar"></span>
                                            <span className="menu__bar"></span>
                                        </div>
                                        {/* <!-- end menu-toggle --> */}
                                    </div>
                                    <div className="main-menu-content ml-auto">
                                        <nav className="main-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">home <span className="la la-angle-down"></span></a>
                                                    <ul className="dropdown-menu-item">
                                                        <li><Link to="/">home one</Link></li>
                                                        <li><Link to="/Home-two">home two</Link></li>
                                                        <li><Link to="/Home-three">home three</Link></li>
                                                        <li><Link to="/Home-four">home four</Link></li>
                                                        <li><Link to="/Home-five">home five</Link></li>
                                                        <li><Link to="/Home-six">home six</Link></li>
                                                        <li><Link to="/Home-seven">home seven</Link></li>
                                                        <li><a href="#">home (Airbnd) <span className="ribbon">Coming</span></a></li>
                                                        <li><a href="#">home (Vrbo) <span className="ribbon">Coming</span></a></li>
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
                                                                    <li><a href="about.html">about</a></li>
                                                                    <li><a href="user-profile.html">user profile</a></li>
                                                                    <li><a href="career.html">career</a></li>
                                                                    <li><a href="career-details.html">career details</a></li>
                                                                    <li><a href="top-place.html">top places </a></li>
                                                                    <li><Link to="/add-listing">add listing </Link></li>
                                                                </ul>
                                                            </li>
                                                            <li className="col-lg-4 mega-menu-item">
                                                                <ul>
                                                                    <li><a href="top-author.html">top authors </a></li>
                                                                    <li><a href="booking.html">booking</a></li>
                                                                    <li><a href="booking-confirmation.html">booking confirmation </a></li>
                                                                    <li><a href="invoice.html">invoice</a></li>
                                                                    <li><a href="pricing.html">Pricing</a></li>
                                                                    <li><a href="all-categories.html">all categories</a></li>
                                                                    <li><a href="all-locations.html">all locations</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="col-lg-4 mega-menu-item">
                                                                <ul>
                                                                    <li><a href="add-new-post.html">add new post </a></li>
                                                                    <li><a href="contact.html">contact</a></li>
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
                                    <div className="nav-right-content pt-0">
                                        <Link to="/add-listing" className="theme-btn gradient-btn shadow-none add-listing-btn-hide">
                                            <i className="la la-layer-group mr-2"></i>Add Listing
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

export default Header2