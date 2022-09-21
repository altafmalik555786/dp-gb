import React from 'react'
import ListingHeader from './ListingHeader'
import Footer from './Footer'
import { Link } from "react-router-dom"
function Pricing() {
    return (
        <div>
            <ListingHeader />
            <section className="breadcrumb-area bread-bg bread-overlay overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                                <div className="section-heading">
                                    <h2 className="sec__title text-white font-size-40 mb-0">Pricing Plans</h2>
                                </div>
                                <ul className="list-items bread-list ">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Pages</li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                            {/* <!-- end breadcrumb-content --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
                <div className="bread-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50px" viewBox="0 0 1200 150" preserveAspectRatio="none">
                        <g><path fill-opacity="0.2" d="M0,150 C600,100 1000,50 1200,-1.13686838e-13 C1200,6.8027294 1200,56.8027294 1200,150 L0,150 Z"></path></g><g className="pix-waiting animated" data-anim-type="fade-in-up" data-anim-delay="300"><path fill="rgba(255,255,255,0.8)" d="M0,150 C600,120 1000,80 1200,30 C1200,36.8027294 1200,76.8027294 1200,150 L0,150 Z"></path></g><path fill="#fff" d="M0,150 C600,136.666667 1000,106.666667 1200,60 C1200,74 1200,104 1200,150 L0,150 Z"></path><defs></defs>
                    </svg>
                </div>
                {/* <!-- end bread-svg --> */}
            </section>
            {/* <!-- end breadcrumb-area --> */}
            {/* <!-- ================================
    END BREADCRUMB AREA
================================= -->

<!-- ================================
    START PRICING AREA
================================= --> */}
            <section className="pricing-area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 responsive-column">
                            <div className="price-item">
                                <div className="price-head bg-1">
                                    <h3 className="price__title text-uppercase">Standard</h3>
                                    <svg className="svg-bg h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><path fill="#fff" d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path></svg>
                                </div>
                                {/* <!-- end price-head --> */}
                                <div className="price-box d-flex flex-column align-items-center justify-content-center mx-auto text-color-3">
                                    <h3 className="price__text text-color-3">Free</h3>
                                    <span className="price__text-meta">/ per month</span>
                                </div>
                                {/* <!-- end price-box --> */}
                                <ul className="list-items price-list mt-4">
                                    <li><i className="la la-check text-success mr-2"></i>One Listing</li>
                                    <li><i className="la la-check text-success mr-2"></i>10 Days Availability</li>
                                    <li><i className="la la-check text-success mr-2"></i>2 Tags Per Listing</li>
                                    <li><i className="la la-check text-success mr-2"></i>Non-Featured</li>
                                    <li><i className="la la-check text-success mr-2"></i>Limited Support</li>
                                    <li><i className="la la-close text-danger mr-2"></i>Average Price Range</li>
                                    <li><i className="la la-close text-danger mr-2"></i>Business Hours</li>
                                    <li><i className="la la-close text-danger mr-2"></i>Lifetime Availability</li>
                                    <li><i className="la la-close text-danger mr-2"></i>Featured In Search Results</li>
                                </ul>
                                <div className="price-btn-box text-center">
                                    <Link to="/add-listing" className="theme-btn bg-1 text-white">Get Started <i className="la la-arrow-right ml-2"></i></Link>
                                </div>
                            </div>
                            {/* <!-- end price-item --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div className="col-lg-4 responsive-column">
                            <div className="price-item">
                                <div className="price-head bg-2">
                                    <span className="ribbon ribbon-2">Most Popular</span>
                                    <h3 className="price__title text-uppercase">Professional</h3>
                                    <svg className="svg-bg h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><path fill="#fff" d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path></svg>
                                </div>
                                {/* <!-- end price-head --> */}
                                <div className="price-box d-flex flex-column align-items-center justify-content-center mx-auto text-color-4">
                                    <h3 className="price__text text-color-4">$19.90</h3>
                                    <span className="price__text-meta">/ per month</span>
                                </div>
                                {/* <!-- end price-box --> */}
                                <ul className="list-items price-list mt-4">
                                    <li><i className="la la-check text-success mr-2"></i>Ten Listing</li>
                                    <li><i className="la la-check text-success mr-2"></i>30 Days Availability</li>
                                    <li><i className="la la-check text-success mr-2"></i>5 Tags Per Listing</li>
                                    <li><i className="la la-check text-success mr-2"></i>Non-Featured</li>
                                    <li><i className="la la-check text-success mr-2"></i>Limited Support</li>
                                    <li><i className="la la-close text-success mr-2"></i>Average Price Range</li>
                                    <li><i className="la la-close text-success mr-2"></i>Business Hours</li>
                                    <li><i className="la la-close text-danger mr-2"></i>Lifetime Availability</li>
                                    <li><i className="la la-close text-danger mr-2"></i>Featured In Search Results</li>
                                </ul>
                                <div className="price-btn-box text-center">
                                    <Link to="/add-listing" className="theme-btn bg-2 text-white">Get Started <i className="la la-arrow-right ml-2"></i></Link>
                                </div>
                            </div>
                            {/* <!-- end price-item --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div className="col-lg-4 responsive-column">
                            <div className="price-item">
                                <div className="price-head bg-3">
                                    <h3 className="price__title text-uppercase">Business</h3>
                                    <svg className="svg-bg h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><path fill="#fff" d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path></svg>
                                </div>
                                {/* <!-- end price-head --> */}
                                <div className="price-box d-flex flex-column align-items-center justify-content-center mx-auto text-color-5">
                                    <h3 className="price__text text-color-5">$29.90 </h3>
                                    <span className="price__text-meta">/ per month</span>
                                </div>
                                {/* <!-- end price-box --> */}
                                <ul className="list-items price-list mt-4">
                                    <li><i className="la la-check text-success mr-2"></i>Twenty Listing</li>
                                    <li><i className="la la-check text-success mr-2"></i>90 Days Availability</li>
                                    <li><i className="la la-check text-success mr-2"></i>15 Tags Per Listing</li>
                                    <li><i className="la la-check text-success mr-2"></i>Non-Featured</li>
                                    <li><i className="la la-check text-success mr-2"></i>Limited Support</li>
                                    <li><i className="la la-close text-success mr-2"></i>Average Price Range</li>
                                    <li><i className="la la-close text-success mr-2"></i>Business Hours</li>
                                    <li><i className="la la-close text-success mr-2"></i>Lifetime Availability</li>
                                    <li><i className="la la-close text-success mr-2"></i>Featured In Search Results</li>
                                </ul>
                                <div className="price-btn-box text-center">
                                    <Link to="/add-listing" className="theme-btn bg-3 text-white">Get Started <i className="la la-arrow-right ml-2"></i></Link>
                                </div>
                            </div>
                            {/* <!-- end price-item --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            <Footer />
        </div>
    )
}

export default Pricing