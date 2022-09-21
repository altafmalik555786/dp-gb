import React from 'react'
import img4 from "../Assets/images/img4.jpg"
import img5 from "../Assets/images/img5.jpg"
import img6 from "../Assets/images/img6.jpg"
import img7 from "../Assets/images/img7.jpg"
import img8 from "../Assets/images/img8.jpg"
import img9 from "../Assets/images/img9.jpg"
import sketch from "../Assets/images/sketch.png"
import listingLogo from "../Assets/images/listing-logo.jpg"
import listingLogo2 from "../Assets/images/listing-logo2.jpg"
import listingLogo3 from "../Assets/images/listing-logo3.jpg"
import anywhere from "../Assets/images/anywhere.png"
import fillSign from "../Assets/images/fill-sign.png"
import logoBlack from "../Assets/images/logo-black.png"
import genericSmallImg from "../Assets/images/generic-small-img.jpg"
import genericSmallImg2 from "../Assets/images/generic-small-img-2.jpg"
import genericSmallImg3 from "../Assets/images/generic-small-img-3.jpg"
import genericSmallImg4 from "../Assets/images/generic-small-img-4.jpg"
import genericSmallImg5 from "../Assets/images/generic-small-img-5.jpg"
import genericSmallImg6 from "../Assets/images/generic-small-img-6.jpg"
import genericSmallImg7 from "../Assets/images/generic-small-img-7.jpg"
import Logo from '../Assets/images/logo-white.png'
import avatarImg from "../Assets/images/avatar-img.jpg"
import avatarImg2 from "../Assets/images/avatar-img2.jpg"
import avatarImg3 from "../Assets/images/avatar-img3.jpg"
import avatarImg4 from "../Assets/images/avatar-img4.jpg"
import SingleListingImg1 from "../Assets/images/single-listing-img1.jpg"
import SingleListingImg2 from "../Assets/images/single-listing-img2.jpg"
import SingleListingImg3 from "../Assets/images/single-listing-img3.jpg"
import SingleListingImg4 from "../Assets/images/single-listing-img4.jpg"
import SingleListingImg5 from "../Assets/images/single-listing-img5.jpg"
import SingleListingImg6 from "../Assets/images/single-listing-img6.jpg"
import SingleListingImg7 from "../Assets/images/single-listing-img7.jpg"
import SingleListingImg8 from "../Assets/images/single-listing-img8.jpg"
import { Link } from "react-router-dom"
import ListingdetailsCrosal from './ListingdetailsCrosal'
import HomeCrousal from './HomeCrousal'
import Header4 from './Header4'
function ListingDetails() {


    return (
        <div>

            <Header4 />

            {<ListingdetailsCrosal />}
            {/* <!-- end full-screen-slider-area --> */}
            {/* <!-- ================================
    END FULL SCREEN SLIDER
================================= -->

<!-- ================================
    START BREADCRUMB AREA
================================= --> */}
            <section className="breadcrumb-area bg-gradient-gray py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content breadcrumb-content-2 d-flex flex-wrap align-items-end justify-content-between">
                                <div className="section-heading">
                                    <ul className="list-items bread-list bread-list-2 bg-transparent rounded-0 p-0">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">Restaurant</a></li>
                                        <li>Super Duper Burgers</li>
                                    </ul>
                                    <div className="d-flex align-items-center pt-1">
                                        <h2 className="sec__title mb-0">Super Duper Burgers</h2>
                                        <div className="hover-tooltip-box ml-2 pt-2">
                                            <span className="text-color"><i className="la la-check-circle mr-1 text-color-4"></i>Claimed</span>
                                            <div className="hover-tooltip">
                                                <p>This business has been claimed by the owner or a representative. <a href="#">Learn more</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="sec__desc py-2 font-size-17"><i className="la la-map-marker mr-1 text-color-2"></i>390 Greenwich StNew York, NY 10013</p>
                                    <p className="pb-2 font-weight-medium">
                                        <span className="price-range mr-1 text-color font-size-16" data-toggle="tooltip" data-placement="top" title="Moderate">
                                            <strong className="font-weight-medium">$</strong>
                                            <strong className="font-weight-medium ml-n1">$</strong>
                                        </span>
                                        <span className="category-link">
                                            <a href="#">Burgers</a>,
                                            <a href="#">American (Traditional)</a>
                                        </span>
                                    </p>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="star-rating-wrap d-flex align-items-center">
                                            <div className="star-rating text-color-5 font-size-18">
                                                <span><i className="la la-star"></i></span>
                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                            </div>
                                            <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                        </div>
                                        <div className="timestamp font-weight-medium ml-3 pl-3 border-left border-left-color line-height-20">
                                            <span className="text-color-4 mr-2">Open:</span>
                                            <span>11:00 AM - 8:00 PM</span>
                                        </div>
                                    </div>
                                    <div className="btn-box pt-3">
                                        <a href="#review" className="btn-gray mr-1"><i className="la la-star mr-1"></i>Write a Review</a>
                                        <a href="#" className="btn-gray mr-1"><i className="la la-bookmark mr-1"></i>Save</a>
                                        <a href="#" className="btn-gray" data-toggle="modal" data-target="#shareModal"><i className="la la-external-link mr-1"></i>Share</a>
                                    </div>
                                </div>
                                <div className="btn-box d-flex align-items-center">
                                    <span className="btn-gray mr-2"><i className="la la-eye mr-1"></i>Viewed - 255</span>
                                    <span className="btn-gray mr-2"><i className="la la-heart mr-1"></i>Saved - 124</span>
                                    <div className="dropdown dot-action-wrap">
                                        <button className="dot-action-btn dropdown-toggle after-none border-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="la la-ellipsis-v"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#reportModal"><i className="la la-flag mr-1"></i>Report</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end breadcrumb-content --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end breadcrumb-area --> */}
            {/* <!-- ================================
    END BREADCRUMB AREA
================================= --> */}

            {/* <!-- ================================
    START LISTING DETAIL AREA
================================= --> */}
            <section className="listing-detail-area padding-top-60px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="listing-detail-wrap">
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">COVID-19 Updates</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <div className="info-list-box pb-4">
                                            <h3 className="widget-title font-size-16 pb-3">Updated Services</h3>
                                            <ul className="row info-list">
                                                <li className="col-lg-3"><i className="la la-check mr-2 text-color-4"></i>Outdoor seating</li>
                                                <li className="col-lg-3"><i className="la la-check mr-2 text-color-4"></i>Delivery</li>
                                                <li className="col-lg-3"><i className="la la-check mr-2 text-color-4"></i>Takeout</li>
                                                <li className="col-lg-3"><i className="la la-check mr-2 text-color-4"></i>Sit-down dining</li>
                                            </ul>
                                        </div>
                                        <div className="info-list-box">
                                            <h3 className="widget-title font-size-16 pb-3">Health & Safety Measures <span className="pl-2 font-size-14 text-gray font-weight-medium">Based on info from the business and our users</span></h3>
                                            <ul className="row info-list">
                                                <li className="col-lg-6"><i className="la la-check mr-2 text-color-4"></i>Masks required</li>
                                                <li className="col-lg-6"><i className="la la-check mr-2 text-color-4"></i>Staff wears masks</li>
                                                <li className="col-lg-6"><i className="la la-check mr-2 text-color-4"></i>Hand sanitizer provided</li>
                                                <li className="col-lg-6"><i className="la la-check mr-2 text-color-4"></i>Social distancing enforced</li>
                                                <li className="col-lg-6"><i className="la la-check mr-2 text-color-4"></i>Sanitizing between customers</li>
                                                <li className="col-lg-6"><i className="la la-check mr-2 text-color-4"></i>Temperature checks</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Listing Description</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <p className="pb-3 font-weight-medium line-height-30">
                                            Nemo ucxqui officia voluptatem accu santium doloremque laudantium,
                                            totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi
                                            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                                            unde omnis iste natus error sit voluptatem accusan tium dolorem
                                            que laudantium, totam rem aperiam the eaque ipsa quae abillo
                                            was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                        <div className="collapse collapse-content" id="showMoreOptionCollapse">
                                            <p className="font-weight-medium line-height-30 pb-3">
                                                Porpoise uncritical gosh and much and this haughtily broadcast goodness ponderous squid darn in sheepish yet the slapped mildly and adventurously sincere less dalmatian assentingly wherever left ethereal the underneath oh lustily arduously that a groggily some vexedly broadcast sheepish yet the slapped.
                                            </p>
                                        </div>
                                        <a className="collapse-btn" data-toggle="collapse" href="#showMoreOptionCollapse" role="button" aria-expanded="false" aria-controls="showMoreOptionCollapse">
                                            <span className="collapse-btn-hide">Read More <i className="la la-plus ml-1"></i></span>
                                            <span className="collapse-btn-show">Read Less <i className="la la-minus ml-1"></i></span>
                                        </a>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Amenities</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <ul className="list-items row">
                                            <li className="col-lg-4"><i className="la la-cutlery text-color-2 mr-2 font-size-18"></i> Instant Burgers</li>
                                            <li className="col-lg-4"><i className="la la-wifi text-color-2 mr-2 font-size-18"></i> Wireless Internet</li>
                                            <li className="col-lg-4"><i className="la la-smoking text-color-2 mr-2 font-size-18"></i> Smoking Allowed</li>
                                            <li className="col-lg-4"><i className="la la-smile text-color-2 mr-2 font-size-18"></i> Friendly workspace</li>
                                            <li className="col-lg-4"><i className="la la-biking text-color-2 mr-2 font-size-18"></i> Free parking on street</li>
                                            <li className="col-lg-4"><i className="la la-credit-card text-color-2 mr-2 font-size-18"></i> Accepts Credit cards</li>
                                            <li className="col-lg-4"><i className="la la-shopping-cart text-color-2 mr-2 font-size-18"></i> Online Ordering</li>
                                            <li className="col-lg-4"><i className="la la-paw text-color-2 mr-2 font-size-18"></i> Pet Friendly</li>
                                            <li className="col-lg-4"><i className="la la-air-freshener text-color-2 mr-2 font-size-18"></i> Air Conditioned</li>
                                            <li className="col-lg-12">
                                                <ul className="collapse collapse-content row" id="showMoreOptionCollaps2">
                                                    <li className="col-lg-4"><i className="la la-umbrella text-color-2 mr-2 font-size-18"></i> Outdoor Seating</li>
                                                    <li className="col-lg-4"><i className="la la-users text-color-2 mr-2 font-size-18"></i> Good for Groups</li>
                                                    <li className="col-lg-4"><i className="la la-cutlery text-color-2 mr-2 font-size-18"></i> Good for Lunch, Dinner</li>
                                                    <li className="col-lg-4"><i className="la la-baby text-color-2 mr-2 font-size-18"></i> Good For Kids</li>
                                                    <li className="col-lg-4"><i className="la la-glass text-color-2 mr-2 font-size-18"></i> Beer & Wine Only</li>
                                                    <li className="col-lg-4"><i className="la la-coffee text-color-2 mr-2 font-size-18"></i> Happy Hour Specials</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <a className="collapse-btn" data-toggle="collapse" href="#showMoreOptionCollaps2" role="button" aria-expanded="false" aria-controls="showMoreOptionCollaps2">
                                            <span className="collapse-btn-hide">Show More <i className="la la-plus ml-1"></i></span>
                                            <span className="collapse-btn-show">Show Less <i className="la la-minus ml-1"></i></span>
                                        </a>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Promo Video</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <div className="video-box">
                                            <img className="lazy" src={SingleListingImg7} data-src={SingleListingImg7} alt="video image" />
                                            <div className="video-content">
                                                <a className="icon-element icon-element-lg icon-element-white hover-scale mx-auto" href="https://www.youtube.com/watch?v=GlrxcuEDyF8" data-fancybox="" title="Play Video">
                                                    <i className="la la-play"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Location / Contact</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <div className="map-container height-400">
                                            <div id="map"></div>
                                        </div>
                                        <ul className="list-items list--items list-items-style-2 py-4">
                                            <li><span className="text-color"><i className="la la-map mr-2 text-color-2 font-size-18"></i>Address:</span> 12345 Little Baker St, Melbourne</li>
                                            <li><span className="text-color"><i className="la la-phone mr-2 text-color-2 font-size-18"></i>Phone:</span><a href="#">+ 61 23 8093 3400</a></li>
                                            <li><span className="text-color"><i className="la la-envelope mr-2 text-color-2 font-size-18"></i>Email:</span><a href="#">listhub@gmail.com</a></li>
                                            <li><span className="text-color"><i className="la la-globe mr-2 text-color-2 font-size-18"></i>Website:</span><a href="#">www.techydevs.com</a></li>
                                        </ul>
                                        <ul className="social-profile social-profile-styled">
                                            <li><a href="#" className="facebook-bg" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="lab la-facebook-f"></i></a></li>
                                            <li><a href="#" className="twitter-bg" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="lab la-twitter"></i></a></li>
                                            <li><a href="#" className="instagram-bg" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="lab la-instagram"></i></a></li>
                                            <li><a href="#" className="youtube-bg" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="la la-youtube"></i></a></li>
                                            <li><a href="#" className="behance-bg" data-toggle="tooltip" data-placement="top" title="Behance"><i className="la la-behance"></i></a></li>
                                            <li><a href="#" className="dribbble-bg" data-toggle="tooltip" data-placement="top" title="Dribbble"><i className="la la-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Questions & Answers</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <div className="accordion-item" id="accordion">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5>
                                                        <button className="btn btn-link d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Once this list has been developed, the member takes the clients?
                                                            <i className="la la-minus"></i>
                                                            <i className="la la-plus"></i>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end card --> */}
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5>
                                                        <button className="btn btn-link d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            A cooling off period is usually where one party - usually?
                                                            <i className="la la-minus"></i>
                                                            <i className="la la-plus"></i>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end card --> */}
                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h5>
                                                        <button className="btn btn-link d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            It is also import to take note of the prevailing market conditions?
                                                            <i className="la la-minus"></i>
                                                            <i className="la la-plus"></i>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end card --> */}
                                        </div>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Rating Stats</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <div className="review-content d-flex flex-wrap align-items-center">
                                            <div className="review-rating-summary">
                                                <span className="stats-average__count">
                                                    4.6
                                                </span>
                                                {/* <!-- end stats-average__count --> */}
                                                <div className="star-rating-wrap">
                                                    <p className="font-size-14 font-weight-medium">out of 5.0</p>
                                                    <div className="star-rating text-color-5 font-size-18">
                                                        <span><i className="la la-star"></i></span>
                                                        <span className="ml-n1"><i className="la la-star"></i></span>
                                                        <span className="ml-n1"><i className="la la-star"></i></span>
                                                        <span className="ml-n1"><i className="la la-star"></i></span>
                                                        <span className="ml-n1"><i className="la la-star"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end review-rating-summary --> */}
                                            <div className="review-bars d-flex flex-row flex-wrap flex-grow-1 align-items-center">
                                                <div className="review-bars-item">
                                                    <span className="review-bars-name">Service</span>
                                                    <div className="review-bars-inner d-flex w-100 align-items-center">
                                                        <span className="review-bars-review" data-rating="4.6">
                                                            <span className="review-bars-review-inner"></span>
                                                        </span>
                                                        <span className="pill">4.6</span>
                                                    </div>
                                                </div>
                                                {/* <!-- end review-bars-item --> */}
                                                <div className="review-bars-item">
                                                    <span className="review-bars-name">Value for Money</span>
                                                    <div className="review-bars-inner d-flex w-100 align-items-center">
                                                        <span className="review-bars-review" data-rating="4.0">
                                                            <span className="review-bars-review-inner"></span>
                                                        </span>
                                                        <span className="pill">4.0</span>
                                                    </div>
                                                </div>
                                                {/* <!-- end review-bars-item --> */}
                                                <div className="review-bars-item">
                                                    <span className="review-bars-name">Quality</span>
                                                    <div className="review-bars-inner d-flex w-100 align-items-center">
                                                        <span className="review-bars-review" data-rating="2.8">
                                                            <span className="review-bars-review-inner"></span>
                                                        </span>
                                                        <span className="pill">2.8</span>
                                                    </div>
                                                </div>
                                                {/* <!-- end review-bars-item --> */}
                                                <div className="review-bars-item">
                                                    <span className="review-bars-name">Location</span>
                                                    <div className="review-bars-inner d-flex w-100 align-items-center">
                                                        <span className="review-bars-review" data-rating="3.9">
                                                            <span className="review-bars-review-inner"></span>
                                                        </span>
                                                        <span className="pill">3.9</span>
                                                    </div>
                                                </div>
                                                {/* <!-- end review-bars-item --> */}
                                            </div>
                                            {/* <!-- end review-bars --> */}
                                        </div>
                                        {/* <!-- end review-content --> */}
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Reviews <span className="ml-1 text-color-2">(5)</span></h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <div className="comments-list">
                                            <div className="comment">
                                                <div className="user-thumb user-thumb-lg flex-shrink-0">
                                                    <img src={avatarImg} alt="author-img" />
                                                </div>
                                                <div className="comment-body">
                                                    <div className="meta-data d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h4 className="comment__title">Adam Smith</h4>
                                                            <span className="comment__meta">San Francisco, CA</span>
                                                        </div>
                                                        <div className="star-rating-wrap text-center">
                                                            <div className="star-rating text-color-5 font-size-18">
                                                                <span><i className="la la-star"></i></span>
                                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                                            </div>
                                                            <p className="font-size-13 font-weight-medium">04/10/2020</p>
                                                        </div>
                                                    </div>
                                                    <p className="comment-desc">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation.
                                                    </p>
                                                    <div className="review-photos d-flex flex-wrap align-items-center ml-n1 mb-3">
                                                        <a href="images/single-listing-img1.jpg" className="d-inline-block" data-fancybox="gallery">
                                                            <img className="lazy" src={SingleListingImg1} data-src={SingleListingImg1} alt="review image" />
                                                        </a>
                                                        <a href="images/single-listing-img2.jpg" className="d-inline-block" data-fancybox="gallery">
                                                            <img className="lazy" src={SingleListingImg2} data-src={SingleListingImg2} alt="review image" />
                                                        </a>
                                                    </div>
                                                    {/* <!-- end review-photos --> */}
                                                    <div className="comment-action d-flex align-items-center justify-content-between">
                                                        <a className="btn-gray btn-gray-sm" href="#" data-toggle="modal" data-target="#replayModal">
                                                            <i className="la la-reply mr-1"></i>Reply
                                                        </a>
                                                        <p className="feedback-box">
                                                            <button type="button" className="btn-gray btn-gray-sm mr-1">
                                                                <i className="la la-thumbs-o-up mr-1"></i>Useful <span className="text-color font-weight-semi-bold">2</span>
                                                            </button>
                                                            <button type="button" className="btn-gray btn-gray-sm">
                                                                <i className="la la-smile-o mr-1"></i>Funny
                                                            </button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end comment --> */}
                                            <div className="comment comment-reply">
                                                <div className="user-thumb user-thumb-lg flex-shrink-0">
                                                    <img src={avatarImg2} alt="author-img" />
                                                </div>
                                                <div className="comment-body">
                                                    <div className="meta-data d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h4 className="comment__title">Comment from Jeremiah. of Super Duper Burgers</h4>
                                                            <span className="comment__meta">Business Manager</span>
                                                            <span className="comment__meta">4/12/2020</span>
                                                        </div>
                                                    </div>
                                                    <p className="comment-desc">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <!-- end comment --> */}
                                            <div className="comment">
                                                <div className="user-thumb user-thumb-lg flex-shrink-0">
                                                    <img src={avatarImg3} alt="author-img" />
                                                </div>
                                                <div className="comment-body">
                                                    <div className="meta-data d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h4 className="comment__title">Mark Hardson</h4>
                                                            <span className="comment__meta">Los Angeles, CA</span>
                                                        </div>
                                                        <div className="star-rating-wrap text-center">
                                                            <div className="star-rating text-color-5 font-size-18">
                                                                <span><i className="la la-star"></i></span>
                                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                                                <span className="ml-n1"><i className="la la-star"></i></span>
                                                                <span className="ml-n1"><i className="la la-star-o"></i></span>
                                                            </div>
                                                            <p className="font-size-13 font-weight-medium">02/8/2020</p>
                                                        </div>
                                                    </div>
                                                    <p className="comment-desc">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation.
                                                    </p>
                                                    <div className="review-photos d-flex flex-wrap align-items-center ml-n1 mb-3">
                                                        <a href="images/single-listing-img1.jpg" className="d-inline-block" data-fancybox="gallery">
                                                            <img className="lazy" src={SingleListingImg3} data-src={SingleListingImg3} alt="review image" />
                                                        </a>
                                                    </div>
                                                    {/* <!-- end review-photos --> */}
                                                    <div className="comment-action d-flex align-items-center justify-content-between">
                                                        <a className="btn-gray btn-gray-sm" href="#" data-toggle="modal" data-target="#replayModal">
                                                            <i className="la la-reply mr-1"></i>Reply
                                                        </a>
                                                        <p className="feedback-box">
                                                            <button type="button" className="btn-gray btn-gray-sm mr-1">
                                                                <i className="la la-thumbs-o-up mr-1"></i>Useful <span className="text-color font-weight-semi-bold">2</span>
                                                            </button>
                                                            <button type="button" className="btn-gray btn-gray-sm">
                                                                <i className="la la-smile-o mr-1"></i>Funny
                                                            </button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end comment --> */}
                                        </div>
                                        <div className="text-center">
                                            <div className="pagination-wrapper d-inline-block">
                                                <div className="section-pagination">
                                                    <nav aria-label="Page navigation">
                                                        <ul className="pagination flex-wrap justify-content-center">
                                                            <li className="page-item">
                                                                <a className="page-link" href="#" aria-label="Previous">
                                                                    <span aria-hidden="true"><i className="la la-angle-left"></i></span>
                                                                    <span className="sr-only">Previous</span>
                                                                </a>
                                                            </li>
                                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                            <li className="page-item"><a className="page-link page-link-active" href="#">2</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#" aria-label="Next">
                                                                    <span aria-hidden="true"><i className="la la-angle-right"></i></span>
                                                                    <span className="sr-only">Next</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                {/* <!-- end section-pagination --> */}
                                                <ul className="pagination-simple d-flex align-items-center justify-content-center pt-3">
                                                    <li className="mr-4">
                                                        <a href="#" className="pagination-simple-nav first-nav"><i className="la la-long-arrow-left mr-1"></i>First</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="pagination-simple-nav last-nav active">Last<i className="la la-long-arrow-right ml-1"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card" id="review">
                                    <div className="block-card-header">
                                        <h2 className="widget-title pb-1">Add a Review</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <div className="add-rating-bars review-bars d-flex flex-row flex-wrap flex-grow-1 align-items-center justify-content-between">
                                            <div className="review-bars-item mx-0 mt-0">
                                                <span className="review-bars-name">Service</span>
                                                <div className="review-bars-inner pt-1">
                                                    <form className="leave-rating">
                                                        <input type="radio" name="rating" id="rating-1" value="1" />
                                                        <label for="rating-1" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-2" value="2" />
                                                        <label for="rating-2" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-3" value="3" />
                                                        <label for="rating-3" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-4" value="4" />
                                                        <label for="rating-4" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-5" value="5" />
                                                        <label for="rating-5" className="fa fa-star"></label>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* <!-- end review-bars-item --> */}
                                            <div className="review-bars-item mx-0 mt-0">
                                                <span className="review-bars-name">Value for Money</span>
                                                <div className="review-bars-inner pt-1">
                                                    <form className="leave-rating">
                                                        <input type="radio" name="rating" id="rating-6" value="1" />
                                                        <label for="rating-6" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-7" value="2" />
                                                        <label for="rating-7" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-8" value="3" />
                                                        <label for="rating-8" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-9" value="4" />
                                                        <label for="rating-9" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-10" value="5" />
                                                        <label for="rating-10" className="fa fa-star"></label>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* <!-- end review-bars-item --> */}
                                            <div className="review-bars-item mx-0 mt-0">
                                                <span className="review-bars-name">Quality</span>
                                                <div className="review-bars-inner pt-1">
                                                    <form className="leave-rating">
                                                        <input type="radio" name="rating" id="rating-11" value="1" />
                                                        <label for="rating-11" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-12" value="2" />
                                                        <label for="rating-12" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-13" value="3" />
                                                        <label for="rating-13" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-14" value="4" />
                                                        <label for="rating-14" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-15" value="5" />
                                                        <label for="rating-15" className="fa fa-star"></label>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* <!-- end review-bars-item --> */}
                                            <div className="review-bars-item mx-0 mt-0">
                                                <span className="review-bars-name">Location</span>
                                                <div className="review-bars-inner pt-1">
                                                    <form className="leave-rating">
                                                        <input type="radio" name="rating" id="rating-16" value="1" />
                                                        <label for="rating-16" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-17" value="2" />
                                                        <label for="rating-17" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-18" value="3" />
                                                        <label for="rating-18" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-19" value="4" />
                                                        <label for="rating-19" className="fa fa-star"></label>
                                                        <input type="radio" name="rating" id="rating-20" value="5" />
                                                        <label for="rating-20" className="fa fa-star"></label>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* <!-- end review-bars-item --> */}
                                        </div>
                                        {/* <!-- end review-bars --> */}
                                        <form method="post" className="form-box row pt-3">
                                            <div className="col-lg-6">
                                                <div className="input-box">
                                                    <label className="label-text">Name</label>
                                                    <div className="form-group">
                                                        <span className="la la-user form-icon"></span>
                                                        <input className="form-control" type="text" name="name" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div className="col-lg-6">
                                                <div className="input-box">
                                                    <label className="label-text">Email</label>
                                                    <div className="form-group">
                                                        <span className="la la-envelope-o form-icon"></span>
                                                        <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div className="col-lg-12">
                                                <div className="input-box">
                                                    <label className="label-text">Review</label>
                                                    <div className="form-group">
                                                        <span className="la la-pencil form-icon"></span>
                                                        <textarea className="message-control form-control" name="message" placeholder="Tell about your experience or leave a tip for others"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                            <div className="col-lg-12">
                                                <div className="file-upload-wrap file-upload-wrap-2">
                                                    <input type="file" name="files[]" className="multi file-upload-input with-preview" multiple />
                                                    <span className="file-upload-text"><i className="la la-photo mr-2"></i>Add Photos</span>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                            <div className="col-lg-12">
                                                <div className="btn-box pt-1">
                                                    <button className="theme-btn gradient-btn border-0">Submit Review<i className="la la-arrow-right ml-2"></i></button>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                        </form>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                            </div>
                            {/* <!-- end listing-detail-wrap --> */}
                        </div>
                        {/* <!-- end col-lg-8 --> */}
                        <div className="col-lg-4">
                            <div className="sidebar mb-0">
                                <div className="sidebar-widget">
                                    <div className="d-flex align-items-center pb-3">
                                        <svg className="mr-2" width="55" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 316.658 316.658" >
                                            <g>
                                                <path style={{ fill: "#222220" }} d="M257.591,183.075c-11.104-12.792-26.45-21.154-43.217-23.551l-38.492-6.036V86.313
                                            c0-15.952-12.979-28.93-28.931-28.93h-0.433c-15.952,0-28.931,12.978-28.931,28.93v107.881L77.794,177.14
                                            c-7.993-3.425-17.104-2.614-24.367,2.176c-7.262,4.788-11.597,12.841-11.597,21.539v0.363c0,7.361,3.155,14.389,8.656,19.28
                                            l67.102,59.669v28.989c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5V276.8c0-2.142-0.916-4.182-2.517-5.604l-69.618-61.906
                                            c-2.303-2.048-3.623-4.989-3.623-8.071v-0.363c0-3.695,1.77-6.982,4.854-9.017c3.087-2.035,6.807-2.366,10.201-0.911l50.24,21.532
                                            c0.462,0.199,0.948,0.355,1.453,0.458c0.751,0.155,1.509,0.189,2.25,0.114c0.084-0.008,0.166-0.024,0.249-0.035
                                            c0.155-0.021,0.311-0.041,0.464-0.071c0.134-0.026,0.265-0.063,0.396-0.096c0.1-0.026,0.2-0.047,0.299-0.077
                                            c0.149-0.044,0.294-0.098,0.439-0.152c0.08-0.029,0.162-0.056,0.241-0.088c0.142-0.058,0.28-0.124,0.417-0.19
                                            c0.081-0.039,0.164-0.075,0.243-0.117c0.123-0.065,0.241-0.137,0.36-0.208c0.091-0.055,0.184-0.107,0.273-0.166
                                            c0.1-0.066,0.194-0.138,0.291-0.208c0.102-0.075,0.205-0.147,0.304-0.227c0.079-0.064,0.153-0.134,0.23-0.201
                                            c0.106-0.094,0.214-0.187,0.315-0.287c0.068-0.067,0.131-0.139,0.196-0.208c0.1-0.106,0.2-0.21,0.293-0.323
                                            c0.072-0.086,0.136-0.177,0.204-0.265c0.078-0.102,0.157-0.201,0.23-0.307c0.092-0.135,0.175-0.275,0.258-0.416
                                            c0.04-0.067,0.083-0.13,0.121-0.198c0.36-0.652,0.628-1.362,0.782-2.114c0.104-0.503,0.152-1.01,0.152-1.512V86.313
                                            c0-7.681,6.249-13.93,13.931-13.93h0.433c7.682,0,13.931,6.249,13.931,13.93v72.025c0,0.277,0.018,0.551,0.047,0.82
                                            c-0.396,3.933,2.339,7.535,6.291,8.154l44.88,7.037c0.036,0.006,0.071,0.011,0.107,0.017c27.148,3.857,47.621,27.444,47.621,54.866
                                            v0.766c0,12.69-3.097,25.349-8.956,36.606l-20.345,39.088c-1.913,3.675-0.484,8.203,3.189,10.115c1.106,0.576,2.29,0.85,3.457,0.85
                                            c2.707,0,5.322-1.472,6.658-4.039l20.345-39.088c6.969-13.388,10.651-28.44,10.651-43.532v-0.766
                                            C274.828,212.275,268.706,195.883,257.591,183.075z"/>
                                                <path style={{ fill: "#222220" }} d="M146.735,37.79c4.143,0,7.5-3.357,7.5-7.5V7.5c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v22.79
                                            C139.235,34.433,142.593,37.79,146.735,37.79z"/>
                                                <path style={{ fill: "#222220" }} d="M193.189,98.897c0,4.143,3.357,7.5,7.5,7.5h22.79c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5
                                            h-22.79C196.547,91.397,193.189,94.755,193.189,98.897z"/>
                                                <path style={{ fill: "#222220" }} d="M194.744,56.468c1.919,0,3.839-0.732,5.304-2.196l16.115-16.115c2.929-2.93,2.929-7.678,0-10.607
                                            c-2.93-2.928-7.678-2.928-10.607,0L189.44,43.664c-2.929,2.93-2.929,7.678,0,10.607C190.905,55.735,192.825,56.468,194.744,56.468z
                                            "/>
                                                <path style={{ fill: "#222220" }} d="M87.521,54.271c1.465,1.464,3.385,2.196,5.304,2.196s3.839-0.732,5.304-2.196
                                            c2.929-2.93,2.929-7.678,0-10.607L82.013,27.549c-2.93-2.928-7.678-2.928-10.607,0c-2.929,2.93-2.929,7.678,0,10.607L87.521,54.271
                                            z"/>
                                                <path style={{ fill: "#222220" }} d="M64.419,106.397h22.79c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5h-22.79
                                            c-4.143,0-7.5,3.357-7.5,7.5S60.276,106.397,64.419,106.397z"/>
                                            </g>
                                        </svg>
                                        <h3 className="widget-title pb-0 line-height-26">Only Quality, Fresh Ingredients Go Into Our Food!</h3>
                                    </div>
                                    <a href="#" className="theme-btn gradient-btn w-100">Learn More<i className="la la-arrow-right ml-2"></i></a>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">General Information</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <ul className="list-items list-items-style-2">
                                        <li><i className="la la-external-link mr-2 text-color-2 font-size-18"></i><a href="#">www.techydevs.com</a></li>
                                        <li><i className="la la-phone mr-2 text-color-2 font-size-18"></i><a href="#">+(0) 880 222 4465</a></li>
                                        <li><i className="la la-map-signs mr-2 text-color-2 font-size-18"></i><a href="#">Get Directions</a></li>
                                        <li><i className="la la-cutlery mr-2 text-color-2 font-size-18"></i><a href="#">Full menu <i className="la la-external-link ml-1"></i></a></li>
                                        <li><i className="la la-comment mr-2 text-color-2 font-size-18"></i><a href="#" data-toggle="modal" data-target="#messageModal">Message the Business</a></li>
                                    </ul>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Opening Hours</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <ul className="list-items">
                                        <li className="d-flex justify-content-between">Monday <span>9am - 5pm</span></li>
                                        <li className="d-flex justify-content-between">Tuesday <span>9am - 5pm</span></li>
                                        <li className="d-flex justify-content-between">Wednesday <span>9am - 5pm</span></li>
                                        <li className="d-flex justify-content-between">Thursday <span>9am - 5pm</span></li>
                                        <li className="d-flex justify-content-between">Friday <span>9am - 5am</span></li>
                                        <li className="d-flex justify-content-between">Saturday <span>9am - 5am</span></li>
                                        <li className="d-flex justify-content-between">Sunday <span className="text-color-2">Closed</span></li>
                                    </ul>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="card-item card-item-layout-4">
                                    <a href="#" className="card-image d-block">
                                        <img src={SingleListingImg1} className="card__img" alt="" />
                                        <span className="badge gradient-btn font-size-16 font-weight-semi-bold">50% off</span>
                                        <div className="card-content">
                                            <h4 className="card-title pb-3">Order 1 burger and get 50% off on second!</h4>
                                            <span className="bg-white text-color py-1 px-2 rounded font-size-15 font-weight-medium">Expires 14/10/2020</span>
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- end card-item --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Booking</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <form method="post" className="form-box">
                                        <div className="form-group">
                                            <span className="la la-calendar-o form-icon"></span>
                                            <input className="date-dropper-input form-control" type="text" placeholder="Check in" />
                                        </div>
                                        <div className="user-chosen-select-container">
                                            <select className="user-chosen-select">
                                                <option value="0">Time Slots</option>
                                                <option value="1">8:00am - 8:30am</option>
                                                <option value="2">9:00am - 9:30am</option>
                                                <option value="3">10:00am - 10:30am</option>
                                                <option value="4">11:00am - 11:30am</option>
                                                <option value="5">12:00pm - 12:30pm</option>
                                                <option value="6">13:00pm - 13:30pm</option>
                                                <option value="7">14:00pm - 14:30pm</option>
                                                <option value="8">15:00pm - 15:30pm</option>
                                                <option value="8">16:00pm - 16:30pm</option>
                                            </select>
                                        </div>
                                        {/* <!-- end user-chosen-select-container --> */}
                                    </form>
                                    <div className="quantity-wrap d-flex align-items-center justify-content-between py-4">
                                        <span className="font-weight-semi-bold"><i className="la la-user-plus mr-1"></i>Persons:</span>
                                        <div className="quantity-item d-flex align-items-center justify-content-end">
                                            <button className="qtyDec"><i className="la la-minus"></i></button>
                                            <input className="qtyInput" type="text" name="qty-input" value="0" />
                                            <button className="qtyInc"><i className="la la-plus"></i></button>
                                        </div>
                                    </div>
                                    {/* <!-- end quantity-wrap --> */}
                                    <div className="btn-box">
                                        <a href="booking.html" className="theme-btn gradient-btn w-100">Request to Book<i className="la la-arrow-right ml-2"></i></a>
                                    </div>
                                    {/* <!-- end btn-box --> */}
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Categories</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <div className="category-list">
                                        <a href="#" className="generic-img-card d-block hover-y overflow-hidden mb-3">
                                            <img src={genericSmallImg} data-src={genericSmallImg} alt="image" className="generic-img-card-img lazy" />
                                            <div className="generic-img-card-content d-flex align-items-center justify-content-between">
                                                <span className="badge">Restaurants</span>
                                                <span className="generic-img-card-counter">238</span>
                                            </div>
                                        </a>
                                        <a href="#" className="generic-img-card d-block hover-y overflow-hidden mb-3">
                                            <img src={genericSmallImg2} data-src={genericSmallImg2} alt="image" className="generic-img-card-img lazy" />
                                            <div className="generic-img-card-content d-flex align-items-center justify-content-between">
                                                <span className="badge">Food</span>
                                                <span className="generic-img-card-counter">111</span>
                                            </div>
                                        </a>
                                        <a href="#" className="generic-img-card d-block hover-y overflow-hidden mb-3">
                                            <img src={genericSmallImg3} data-src={genericSmallImg3} alt="image" className="generic-img-card-img lazy" />
                                            <div className="generic-img-card-content d-flex align-items-center justify-content-between">
                                                <span className="badge">Hotel</span>
                                                <span className="generic-img-card-counter">222</span>
                                            </div>
                                        </a>
                                        <a href="#" className="generic-img-card d-block hover-y overflow-hidden mb-3">
                                            <img src={genericSmallImg4} data-src={genericSmallImg4} alt="image" className="generic-img-card-img lazy" />
                                            <div className="generic-img-card-content d-flex align-items-center justify-content-between">
                                                <span className="badge">Events</span>
                                                <span className="generic-img-card-counter">123</span>
                                            </div>
                                        </a>
                                        <div className="collapse collapse-content" id="showMoreOptionCollapse2">
                                            <a href="#" className="generic-img-card d-block hover-y overflow-hidden mb-3">
                                                <img src={genericSmallImg5} data-src={genericSmallImg5} alt="image" className="generic-img-card-img lazy" />
                                                <div className="generic-img-card-content d-flex align-items-center justify-content-between">
                                                    <span className="badge">Shopping</span>
                                                    <span className="generic-img-card-counter">321</span>
                                                </div>
                                            </a>
                                            <a href="#" className="generic-img-card d-block hover-y overflow-hidden mb-3">
                                                <img src={genericSmallImg6} data-src={genericSmallImg6} alt="image" className="generic-img-card-img lazy" />
                                                <div className="generic-img-card-content d-flex align-items-center justify-content-between">
                                                    <span className="badge">Travel</span>
                                                    <span className="generic-img-card-counter">12</span>
                                                </div>
                                            </a>
                                            <a href="#" className="generic-img-card d-block hover-y overflow-hidden mb-3">
                                                <img src={genericSmallImg7} data-src={genericSmallImg7} alt="image" className="generic-img-card-img lazy" />
                                                <div className="generic-img-card-content d-flex align-items-center justify-content-between">
                                                    <span className="badge">Jobs</span>
                                                    <span className="generic-img-card-counter">133</span>
                                                </div>
                                            </a>
                                        </div>
                                        <a className="collapse-btn" data-toggle="collapse" href="#showMoreOptionCollapse2" role="button" aria-expanded="false" aria-controls="showMoreOptionCollapse2">
                                            <span className="collapse-btn-hide">Show More <i className="la la-plus ml-1"></i></span>
                                            <span className="collapse-btn-show">Show Less <i className="la la-minus ml-1"></i></span>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Tag Clouds</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <ul className="tag-list">
                                        <li><a href="#">technology</a></li>
                                        <li><a href="#">fashion</a></li>
                                        <li><a href="#">art</a></li>
                                        <li><a href="#">design</a></li>
                                        <li><a href="#">food</a></li>
                                        <li><a href="#">development</a></li>
                                        <li><a href="#">marketing</a></li>
                                        <li><a href="#">video</a></li>
                                        <li><a href="#">music</a></li>
                                        <li><a href="#">lifestyle</a></li>
                                        <li><a href="#">adventure</a></li>
                                    </ul>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <div className="section-tab section-tab-layout-2 mb-4">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="popular-tab" data-toggle="tab" href="#popular" role="tab" aria-controls="popular" aria-selected="true">
                                                    Popular
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="recent-tab" data-toggle="tab" href="#recent" role="tab" aria-controls="recent" aria-selected="false">
                                                    Recent
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="popular" role="tabpanel" aria-labelledby="popular-tab">
                                            <div className="mini-list-card">
                                                <div className="mini-list-img">
                                                    <a href="listing-details.html" className="d-block">
                                                        <img src={SingleListingImg1} alt="similar listing image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end mini-list-img --> */}
                                                <div className="mini-list-body">
                                                    <h4 className="mini-list-title"><a href="listing-details.html">Mel’s Drive-In</a></h4>
                                                    <div className="star-rating-wrap d-flex align-items-center">
                                                        <div className="star-rating text-color-5 font-size-16">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                        </div>
                                                        <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                                    </div>
                                                    <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                                                        <a href="#">Dinner</a>,
                                                        <a href="#">Breakfast</a>
                                                    </span>
                                                </div>
                                                {/* <!-- end mini-list-body --> */}
                                            </div>
                                            {/* <!-- end mini-list-card --> */}
                                            <div className="mini-list-card">
                                                <div className="mini-list-img">
                                                    <a href="listing-details.html" className="d-block">
                                                        <img src={SingleListingImg2} alt="similar listing image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end mini-list-img --> */}
                                                <div className="mini-list-body">
                                                    <h4 className="mini-list-title"><a href="listing-details.html">Soma Pizza</a></h4>
                                                    <div className="star-rating-wrap d-flex align-items-center">
                                                        <div className="star-rating text-color-5 font-size-16">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                        </div>
                                                        <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                                    </div>
                                                    <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                                                        <a href="#">Pizza</a>,
                                                        <a href="#">Burgers</a>,
                                                        <a href="#">Fast food</a>
                                                    </span>
                                                </div>
                                                {/* <!-- end mini-list-body --> */}
                                            </div>
                                            {/* <!-- end mini-list-card --> */}
                                            <div className="mini-list-card">
                                                <div className="mini-list-img">
                                                    <a href="listing-details.html" className="d-block">
                                                        <img src={SingleListingImg3} alt="similar listing image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end mini-list-img --> */}
                                                <div className="mini-list-body">
                                                    <h4 className="mini-list-title"><a href="listing-details.html">Pearl’s Deluxe Burgers</a></h4>
                                                    <div className="star-rating-wrap d-flex align-items-center">
                                                        <div className="star-rating text-color-5 font-size-16">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                        </div>
                                                        <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                                    </div>
                                                    <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                                                        <a href="#">Breakfast</a>
                                                    </span>
                                                </div>
                                                {/* <!-- end mini-list-body --> */}
                                            </div>
                                            {/* <!-- end mini-list-card --> */}
                                            <div className="mini-list-card">
                                                <div className="mini-list-img">
                                                    <a href="listing-details.html" className="d-block">
                                                        <img src={SingleListingImg4} alt="similar listing image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end mini-list-img --> */}
                                                <div className="mini-list-body">
                                                    <h4 className="mini-list-title"><a href="listing-details.html">Box Kitchen</a></h4>
                                                    <div className="star-rating-wrap d-flex align-items-center">
                                                        <div className="star-rating text-color-5 font-size-16">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star-o"></i></span>
                                                            <span className="ml-n1"><i className="la la-star-o"></i></span>
                                                        </div>
                                                        <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                                    </div>
                                                    <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                                                        <a href="#">Food Stands</a>,
                                                        <a href="#">Burgers</a>
                                                    </span>
                                                </div>
                                                {/* <!-- end mini-list-body --> */}
                                            </div>
                                            {/* <!-- end mini-list-card --> */}
                                        </div>
                                        <div className="tab-pane fade" id="recent" role="tabpanel" aria-labelledby="recent-tab">
                                            <div className="mini-list-card">
                                                <div className="mini-list-img">
                                                    <a href="listing-details.html" className="d-block">
                                                        <img src={SingleListingImg3} alt="similar listing image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end mini-list-img --> */}
                                                <div className="mini-list-body">
                                                    <h4 className="mini-list-title"><a href="listing-details.html">Pearl’s Deluxe Burgers</a></h4>
                                                    <div className="star-rating-wrap d-flex align-items-center">
                                                        <div className="star-rating text-color-5 font-size-16">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                        </div>
                                                        <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                                    </div>
                                                    <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                                                        <a href="#">Breakfast</a>
                                                    </span>
                                                </div>
                                                {/* <!-- end mini-list-body --> */}
                                            </div>
                                            {/* <!-- end mini-list-card --> */}
                                            <div className="mini-list-card">
                                                <div className="mini-list-img">
                                                    <a href="listing-details.html" className="d-block">
                                                        <img src={SingleListingImg4} alt="similar listing image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end mini-list-img --> */}
                                                <div className="mini-list-body">
                                                    <h4 className="mini-list-title"><a href="listing-details.html">Box Kitchen</a></h4>
                                                    <div className="star-rating-wrap d-flex align-items-center">
                                                        <div className="star-rating text-color-5 font-size-16">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star-o"></i></span>
                                                            <span className="ml-n1"><i className="la la-star-o"></i></span>
                                                        </div>
                                                        <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                                    </div>
                                                    <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                                                        <a href="#">Food Stands</a>,
                                                        <a href="#">Burgers</a>
                                                    </span>
                                                </div>
                                                {/* <!-- end mini-list-body --> */}
                                            </div>
                                            {/* <!-- end mini-list-card --> */}
                                            <div className="mini-list-card">
                                                <div className="mini-list-img">
                                                    <a href="listing-details.html" className="d-block">
                                                        <img src={SingleListingImg1} alt="similar listing image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end mini-list-img --> */}
                                                <div className="mini-list-body">
                                                    <h4 className="mini-list-title"><a href="listing-details.html">Mel’s Drive-In</a></h4>
                                                    <div className="star-rating-wrap d-flex align-items-center">
                                                        <div className="star-rating text-color-5 font-size-16">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                        </div>
                                                        <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                                    </div>
                                                    <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                                                        <a href="#">Dinner</a>,
                                                        <a href="#">Breakfast</a>
                                                    </span>
                                                </div>
                                                {/* <!-- end mini-list-body --> */}
                                            </div>
                                            {/* <!-- end mini-list-card --> */}
                                            <div className="mini-list-card">
                                                <div className="mini-list-img">
                                                    <a href="listing-details.html" className="d-block">
                                                        <img src={SingleListingImg2} alt="similar listing image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end mini-list-img --> */}
                                                <div className="mini-list-body">
                                                    <h4 className="mini-list-title"><a href="listing-details.html">Soma Pizza</a></h4>
                                                    <div className="star-rating-wrap d-flex align-items-center">
                                                        <div className="star-rating text-color-5 font-size-16">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                        </div>
                                                        <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                                    </div>
                                                    <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                                                        <a href="#">Pizza</a>,
                                                        <a href="#">Burgers</a>,
                                                        <a href="#">Fast food</a>
                                                    </span>
                                                </div>
                                                {/* <!-- end mini-list-body --> */}
                                            </div>
                                            {/* <!-- end mini-list-card --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title pb-1">You Might Also Consider</h3>
                                    <div className="hover-tooltip-box mb-4 d-inline-block">
                                        <span className="text-gray">Sponsored <i className="la la-exclamation-circle"></i></span>
                                        <div className="hover-tooltip">
                                            <p>Business owners paid for these ads. For more information visit <a href="#">Listhub for Business</a>.</p>
                                        </div>
                                    </div>
                                    <div className="sponsor-list">
                                        <div className="sponsor-item mb-4">
                                            <div className="mini-list-card">
                                                <div className="mini-list-img">
                                                    <a href="listing-details.html" className="d-block">
                                                        <img src={SingleListingImg3} alt="similar listing image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end mini-list-img --> */}
                                                <div className="mini-list-body">
                                                    <h4 className="mini-list-title"><a href="listing-details.html">Lers Ros Thai</a></h4>
                                                    <div className="star-rating-wrap d-flex align-items-center">
                                                        <div className="star-rating text-color-5 font-size-16">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                        </div>
                                                        <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                                    </div>
                                                    <span className="category-link after-none pl-0 font-size-14 font-weight-bold text-color">
                                                        1.8 miles
                                                    </span>
                                                </div>
                                                {/* <!-- end mini-list-body --> */}
                                            </div>
                                            {/* <!-- end mini-list-card --> */}
                                            <p className="font-size-14 font-weight-medium pt-2">"I am taking away one star for terrible service. The rant first: We made a…"
                                                <a href="listing-details.html" className="text-color-2">Read more</a>
                                            </p>
                                        </div>
                                        {/* <!-- end sponsor-item --> */}
                                        <div className="sponsor-item">
                                            <div className="mini-list-card">
                                                <div className="mini-list-img">
                                                    <a href="listing-details.html" className="d-block">
                                                        <img src={SingleListingImg4} alt="similar listing image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end mini-list-img --> */}
                                                <div className="mini-list-body">
                                                    <h4 className="mini-list-title"><a href="listing-details.html">Kam Lok Restaurant</a></h4>
                                                    <div className="star-rating-wrap d-flex align-items-center">
                                                        <div className="star-rating text-color-5 font-size-16">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                        </div>
                                                        <p className="font-size-14 pl-2 font-weight-medium">1348 reviews</p>
                                                    </div>
                                                    <span className="category-link after-none pl-0 font-size-14 font-weight-bold text-color">
                                                        1.8 miles
                                                    </span>
                                                </div>
                                                {/* <!-- end mini-list-body --> */}
                                            </div>
                                            {/* <!-- end mini-list-card --> */}
                                            <p className="font-size-14 font-weight-medium pt-2">"This place seems to be a favorite among locals. I came here twice and was blown…"
                                                <a href="listing-details.html" className="text-color-2">Read more</a>
                                            </p>
                                        </div>
                                        {/* <!-- end sponsor-item --> */}
                                    </div>
                                    {/* <!-- end sponsor-list --> */}
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Subscribe</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <form method="post" className="form-box">
                                        <div className="form-group">
                                            <span className="la la-envelope-o form-icon"></span>
                                            <input className="form-control form-control-styled" type="text" name="email" placeholder="Enter your email" />
                                        </div>
                                    </form>
                                    <div className="btn-box">
                                        <button type="submit" className="theme-btn gradient-btn w-100 border-0">Subscribe Now<i className="la la-arrow-right ml-2"></i></button>
                                        <span className="font-size-13 font-weight-medium">You can unsubscribe at any time</span>
                                    </div>
                                    {/* <!-- end btn-box --> */}
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Follow & Connect</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <div className="icon-block-wrap d-flex flex-wrap align-items-center ml-n1">
                                        <a href="#" className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2">
                                            <span className="icon-element icon-element-sm f-bg-rgb">
                                                <i className="la la-facebook"></i>
                                            </span>
                                            <div className="pl-2 flex-grow-1">
                                                <span className="text-color font-weight-bold font-size-17 d-block line-height-20">9,809</span>
                                                <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">Followers</span>
                                            </div>
                                        </a>
                                        {/* <!-- end icon-block --> */}
                                        <a href="#" className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2">
                                            <span className="icon-element icon-element-sm t-bg-rgb">
                                                <i className="la la-twitter"></i>
                                            </span>
                                            <div className="pl-2 flex-grow-1">
                                                <span className="text-color font-weight-bold font-size-17 d-block line-height-20">789</span>
                                                <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">Followers</span>
                                            </div>
                                        </a>
                                        {/* <!-- end icon-block --> */}
                                        <a href="#" className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2">
                                            <span className="icon-element icon-element-sm i-bg-rgb">
                                                <i className="la la-instagram"></i>
                                            </span>
                                            <div className="pl-2 flex-grow-1">
                                                <span className="text-color font-weight-bold font-size-17 d-block line-height-20">12,809</span>
                                                <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">Followers</span>
                                            </div>
                                        </a>
                                        {/* <!-- end icon-block --> */}
                                        <a href="#" className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2">
                                            <span className="icon-element icon-element-sm y-bg-rgb">
                                                <i className="la la-youtube"></i>
                                            </span>
                                            <div className="pl-2 flex-grow-1">
                                                <span className="text-color font-weight-bold font-size-17 d-block line-height-20">20,876</span>
                                                <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">Subscriber</span>
                                            </div>
                                        </a>
                                        {/* <!-- end icon-block --> */}
                                    </div>
                                    {/* <!-- end icon-block-wrap --> */}
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Hosted by</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <div className="hosted-by d-flex align-items-center">
                                        <a href="user-profile.html" className="user-thumb user-thumb-md flex-shrink-0 mr-3">
                                            <img src={avatarImg} alt="author-img" />
                                        </a>
                                        <div>
                                            <h4 className="font-size-18"><a href="user-profile.html" className="text-color">Mark Hardson</a></h4>
                                            <span className="font-size-13 text-gray font-weight-medium d-block line-height-22">20 listing hosted</span>
                                        </div>
                                    </div>
                                    <ul className="list-items py-4">
                                        <li><i className="la la-phone mr-2 text-color-2 font-size-18"></i><a href="#" className="before-none">+ 61 23 8093 3400</a></li>
                                        <li><i className="la la-envelope mr-2 text-color-2 font-size-18"></i><a href="#" className="before-none">listhub@gmail.com</a></li>
                                    </ul>
                                    <div className="btn-box">
                                        <a href="user-profile.html" className="theme-btn gradient-btn w-100"><i className="la la-user mr-2"></i>View Profile</a>
                                    </div>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                            </div>
                            {/* <!-- end sidebar --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end listing-detail-area --> */}

            {/* <!-- ================================
    END LISTING DETAIL  AREA
================================= -->

<!-- ================================
    START CARD AREA
================================= --> */}
            <section className="card-area bg-gradient-gray section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2 className="sec__title font-size-24 line-height-30">People Also Viewed</h2>
                            </div>
                            {/* <!-- end section-heading --> */}
                        </div>
                        {/* <!-- end col-lg-8 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row pt-1">
                        <HomeCrousal />
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end card-area --> */}
            {/* <!-- ================================
    END CARD AREA
================================= -->

<!-- ================================
       START FOOTER AREA
================================= --> */}
            <section className="footer-area bg-dark pattern-bg before-none padding-top-30px padding-bottom-30px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-content d-flex align-items-center justify-content-between p-0">
                                <div className="section-heading">
                                    <h2 className="sec__title mb-0 font-size-24 line-height-30 text-white">Don't miss your monthly offer</h2>
                                    <p className="sec__desc font-size-16 text-white-50">Subscribe to get latest updates and information.</p>
                                </div>
                                {/* <!-- end section-heading --> */}
                                <form method="post" className="form-box">
                                    <div className="form-group mb-0">
                                        <span className="la la-envelope-o form-icon"></span>
                                        <input className="form-control form-control-styled form-control-long" type="email" placeholder="Enter your email" />
                                        <p className="font-size-12 font-weight-medium pt-1 text-white-50"><i className="la la-lock mr-1"></i>Your are 100% protected</p>
                                        <button className="theme-btn gradient-btn subscribe-btn input-btn-append border-0" type="submit">Subscribe <i className="la la-arrow-right ml-1"></i></button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- end cta-content --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="section-block-2 margin-top-30px margin-bottom-40px"></div>
                    <div className="row">
                        <div className="col-lg-3 responsive-column">
                            <div className="footer-item footer-item-2">
                                <div className="footer-logo">
                                    <a href="index.html" className="foot-logo"><img src={Logo} alt="logo" /></a>
                                </div>
                                {/* <!-- end footer-logo --> */}
                                <p className="footer__desc">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros culpa officia deserunt mollit.
                                </p>
                                <p className="footer__desc">
                                    <a href="#" className="btn-text">View on the map <i className="la la-arrow-right icon"></i></a>
                                </p>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="footer-item footer-item-2">
                                <h4 className="footer__title text-white">Quick Links</h4>
                                <div className="stroke-shape mb-3"></div>
                                <ul className="list-items">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#signUpModal">Sign Up</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#loginModal">Log In</a></li>
                                    <li><a href="add-listing.html">Add Listing</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                </ul>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="footer-item footer-item-2">
                                <h4 className="footer__title text-white">Categories</h4>
                                <div className="stroke-shape mb-3"></div>
                                <ul className="list-items">
                                    <li><a href="#">Shops</a></li>
                                    <li><a href="#">Hotels</a></li>
                                    <li><a href="#">Restaurants</a></li>
                                    <li><a href="#">Bars</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Fitness</a></li>
                                </ul>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="footer-item footer-item-2">
                                <h4 className="footer__title text-white">Contact with Us</h4>
                                <div className="stroke-shape mb-3"></div>
                                <ul className="list-items contact-links">
                                    <li><span className="d-block text-white mb-1"><i className="la la-map mr-1 text-color-2"></i>Address:</span> 12345 Little Baker St, Melbourne</li>
                                    <li><span className="d-block text-white mb-1"><i className="la la-phone mr-1 text-color-2"></i>Phone:</span><a href="#">+ 61 23 8093 3400</a></li>
                                    <li><span className="d-block text-white mb-1"><i className="la la-envelope mr-1 text-color-2"></i>Email:</span><a href="#">listhub@gmail.com</a></li>
                                </ul>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row pt-4 align-items-center">
                        <div className="col-lg-5">
                            <div className="footer-chosen-container footer-chosen-container-2 user-chosen-select-container d-flex align-items-center justify-content-start">
                                <div className="mr-2">
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
                                <div>
                                    <select className="user-chosen-select">
                                        <option value="1">Argentina</option>
                                        <option value="2">Australia</option>
                                        <option value="3">Canada</option>
                                        <option value="4">Chile</option>
                                        <option value="5">Czech Republic</option>
                                        <option value="6">France</option>
                                        <option value="7">Germany</option>
                                        <option value="8">Italy</option>
                                        <option value="9">Japan</option>
                                        <option value="10">Mexico</option>
                                        <option value="11">New Zealand</option>
                                        <option value="12">Spain</option>
                                        <option value="13">Turkey</option>
                                        <option value="14">United Kingdom</option>
                                        <option value="15" selected>United States</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <ul className="list-items term-list term-list-2 text-right">
                                <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-block-2 margin-top-30px margin-bottom-30px"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copy-right d-flex align-items-center justify-content-between">
                                <p className="copy__desc">
                                    &copy; Copyright Listhub <script> document.write(new Date().getFullYear()); </script>. Made with
                                    <span className="la la-heart-o"></span> by <a href="https://themeforest.net/user/techydevs/portfolio">TechyDevs</a>
                                </p>
                                <ul className="social-profile social-profile-colored">
                                    <li><a href="#" className="facebook-bg"><i className="lab la-facebook-f"></i></a></li>
                                    <li><a href="#" className="twitter-bg"><i className="lab la-twitter"></i></a></li>
                                    <li><a href="#" className="instagram-bg"><i className="lab la-instagram"></i></a></li>
                                </ul>
                            </div>
                            {/* <!-- end copy-right --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end footer-area --> */}
            {/* <!-- ================================
       START FOOTER AREA
================================= --> */}

            {/* <!-- start back-to-top --> */}
            <div id="back-to-top">
                <i className="la la-arrow-up" title="Go top"></i>
            </div>
            {/* <!-- end back-to-top --> */}

            {/* <!-- Modal --> */}
            <div className="modal fade modal-container login-form" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center mh-bg">
                            <h5 className="modal-title" id="loginModalTitle">Hey, Welcome back!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="la la-times-circle"></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form method="post" className="form-box">
                                <div className="input-box">
                                    <label className="label-text">Username or email</label>
                                    <div className="form-group">
                                        <span className="la la-user form-icon"></span>
                                        <input className="form-control form-control-styled" type="text" name="text" placeholder="Username or email address" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label className="label-text">Password</label>
                                    <div className="form-group">
                                        <span className="la la-lock form-icon"></span>
                                        <input className="form-control form-control-styled" type="text" name="text" placeholder="Enter password" />
                                    </div>
                                </div>
                                <div className="input-box d-flex align-items-center justify-content-between pb-4 user-action-meta">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="keepMeSignedChb" />
                                        <label for="keepMeSignedChb" className="font-size-14">Keep me signed in</label>
                                    </div>
                                    <a href="javascript:void(0)" className="margin-bottom-10px lost-pass-btn font-size-14">Lost Password?</a>
                                </div>
                                <div className="btn-box">
                                    <button type="submit" className="theme-btn gradient-btn w-100">
                                        <i className="la la-sign-in mr-1"></i> Login to Account
                                    </button>
                                    <p className="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                                        New to Listhub? <a className="text-color-2 signup-btn" href="javascript:void(0)">Create account</a>
                                    </p>
                                </div>
                                <div className="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
                                    OR
                                </div>
                                <div className="text-center">
                                    <p className="font-size-15 font-weight-medium">Login with your social network</p>
                                    <ul className="social-profile social-profile-colored py-3">
                                        <li>
                                            <a href="#" className="google-bg mx-1" data-toggle="tooltip" data-placement="top" title="Google">
                                                <i className="lab la-google"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="facebook-bg mx-1" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <i className="lab la-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="twitter-bg mx-1" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <i className="lab la-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="instagram-bg mx-1" data-toggle="tooltip" data-placement="top" title="Instagram">
                                                <i className="lab la-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade modal-container signup-form" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center mh-bg-2">
                            <h5 className="modal-title" id="signUpModalTitle">Welcome! create your listhub account</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="la la-times-circle"></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form method="post" className="form-box">
                                <div className="input-box">
                                    <label className="label-text">Username</label>
                                    <div className="form-group">
                                        <span className="la la-user form-icon"></span>
                                        <input className="form-control form-control-styled" type="text" name="text" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label className="label-text">Email</label>
                                    <div className="form-group">
                                        <span className="la la-envelope form-icon"></span>
                                        <input className="form-control form-control-styled" type="email" name="text" placeholder="Email address" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label className="label-text">Password</label>
                                    <div className="form-group">
                                        <span className="la la-lock form-icon"></span>
                                        <input className="form-control form-control-styled" type="text" name="text" placeholder="Enter password" />
                                    </div>
                                    <p className="font-size-14 mt-n2">Your password must be at least 6 characters long and must contain letters, numbers and special characters. Cannot contain whitespace.</p>
                                </div>
                                <div className="input-box py-4 user-action-meta">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="agreeChb" />
                                        <label for="agreeChb" className="font-size-14">By signing up, you agree to our <a href="privacy-policy.html" className="text-color-2">Privacy Policy.</a></label>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="submit" className="theme-btn gradient-btn w-100">
                                        <i className="la la-user-plus mr-1"></i> Register Account
                                    </button>
                                    <p className="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                                        Already on Listhub? <a className="text-color-2 login-btn" href="javascript:void(0)">Log in</a>
                                    </p>
                                </div>
                                <div className="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
                                    OR
                                </div>
                                <div className="text-center">
                                    <p className="font-size-15 font-weight-medium">Connect with social network</p>
                                    <ul className="social-profile social-profile-colored py-3">
                                        <li>
                                            <a href="#" className="google-bg mx-1" data-toggle="tooltip" data-placement="top" title="Google">
                                                <i className="lab la-google"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="facebook-bg mx-1" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <i className="lab la-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="twitter-bg mx-1" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <i className="lab la-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="instagram-bg mx-1" data-toggle="tooltip" data-placement="top" title="Instagram">
                                                <i className="lab la-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="font-size-15 pb-3">Don't worry, we never any post to your social profile.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade modal-container recover-form" id="recoverModal" tabindex="-1" role="dialog" aria-labelledby="recoverModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center mh-bg">
                            <h5 className="modal-title" id="recoverModalTitle">Reset password</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="la la-times-circle"></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="font-size-15 font-weight-medium pb-3">
                                Enter your username or email to reset your password.
                                You will receive an email with instructions on how to reset your password. If you are experiencing problems
                                resetting your password <a href="contact.html" className="text-color-2">contact us</a> or <a href="#" className="text-color-2">send us an email</a>
                            </p>
                            <form method="post" className="form-box">
                                <div className="input-box">
                                    <label className="label-text">Username or email</label>
                                    <div className="form-group">
                                        <span className="la la-user form-icon"></span>
                                        <input className="form-control form-control-styled" type="text" name="text" placeholder="Username or email address" />
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="submit" className="theme-btn gradient-btn w-100">
                                        Get New Password <i className="la la-arrow-right ml-1"></i>
                                    </button>
                                    <p className="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                                        Not a member? <a className="text-color-2 signup-btn" href="javascript:void(0)">Create account</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade modal-container" id="replayModal" tabindex="-1" role="dialog" aria-labelledby="replayModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center mh-bg-2">
                            <h5 className="modal-title" id="replayModalTitle">Replay to this comment</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="la la-times-circle"></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form method="post" className="form-box">
                                <div className="input-box">
                                    <label className="label-text">Message</label>
                                    <div className="form-group">
                                        <span className="la la-pencil form-icon"></span>
                                        <textarea className="message-control form-control" name="message" placeholder="Write Message"></textarea>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="submit" className="theme-btn gradient-btn w-100">
                                        Replay<i className="la la-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- end modal --> */}
            <div className="modal fade modal-container" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="shareModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center mh-bg">
                            <h5 className="modal-title" id="shareModalTitle">Share this listing</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="la la-times-circle"></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="copy-to-clipboard mb-3">
                                <form action="#" className="form-box d-flex align-items-center">
                                    <span className="text-success-message">Link Copied!</span>
                                    <input type="text" className="form-control copy-input pl-3" value="https://www.dirto.com/share/101WxMB0oac1hVQQ==/" />
                                    <div className="btn-box pl-2">
                                        <button type="button" className="theme-btn gradient-btn copy-text">Copy</button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- end copy-to-clipboard --> */}
                            <h3 className="widget-title">Share on</h3>
                            <ul className="social-profile social-profile-colored">
                                <li><a href="#" className="facebook-bg"><i className="la la-facebook-f"></i></a></li>
                                <li><a href="#" className="twitter-bg"><i className="la la-twitter"></i></a></li>
                                <li><a href="#" className="instagram-bg"><i className="la la-instagram"></i></a></li>
                                <li><a href="#" className="dribbble-bg"><i className="la la-dribbble"></i></a></li>
                                <li><a href="#" className="behance-bg"><i className="la la-behance"></i></a></li>
                                <li><a href="#" className="youtube-bg"><i className="la la-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade modal-container" id="reportModal" tabindex="-1" role="dialog" aria-labelledby="reportModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center mh-bg-2">
                            <h5 className="modal-title" id="reportModalTitle">Report this listing</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="la la-times-circle"></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="font-size-15 font-weight-medium pb-3">
                                Flagged content is reviewed by Dirto staff to determine whether it violates Terms of Service or Community Guidelines. If you have a question or technical issue, please contact our
                                <a href="contact.html" className="text-color-2">Support team here</a>
                            </p>
                            <form method="post" className="form-box">
                                <div className="input-box">
                                    <label className="label-text">Issue type</label>
                                    <div className="form-group user-chosen-select-container">
                                        <select className="user-chosen-select">
                                            <option value="0">Select an issue</option>
                                            <option value="1">Inappropriate listing Content</option>
                                            <option value="2">Inappropriate Behavior</option>
                                            <option value="3">Listhub Policy Violation</option>
                                            <option value="4">Spammy Content</option>
                                            <option value="5">Rude behavior with customer</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label className="label-text">Issue details</label>
                                    <div className="form-group">
                                        <span className="la la-pencil form-icon"></span>
                                        <textarea className="message-control form-control" name="message" placeholder="Explain report issue as clear as possible"></textarea>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="submit" className="theme-btn gradient-btn w-100">
                                        Report Listing<i className="la la-arrow-right ml-2"></i>
                                    </button>
                                    <p className="font-size-13 font-weight-medium pt-1 text-center"><span className="text-warning">Warning:</span> You can be banned for violent messages.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade modal-container message-form" id="messageModal" tabindex="-1" role="dialog" aria-labelledby="messageModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center mh-bg-2">
                            <h5 className="modal-title" id="messageModalTitle">Send a Message</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="la la-times-circle"></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="font-size-15 font-weight-medium pb-2">
                                <span className="text-color">To:</span> TechyDevs
                            </p>
                            <form method="post" className="form-box">
                                <div className="input-box">
                                    <label className="label-text">Share a few details so we can get you in touch with the business</label>
                                    <div className="form-group">
                                        <span className="la la-pencil form-icon"></span>
                                        <textarea className="message-control form-control" name="message" placeholder="Can you tell me about your services?"></textarea>
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label className="label-text d-block">Include your information
                                        <span className="text-gray">or</span> <a className="text-color-2 login-btn" href="javascript:void(0)">Log in</a>
                                    </label>
                                    <label className="label-text">Email Address</label>
                                    <div className="form-group">
                                        <span className="la la-envelope-o form-icon"></span>
                                        <input className="form-control form-control-styled" type="email" name="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label className="label-text">First Name</label>
                                    <div className="form-group">
                                        <span className="la la-user form-icon"></span>
                                        <input className="form-control form-control-styled" type="text" name="text" placeholder="First name" />
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <p className="font-size-13 font-weight-medium pb-2 line-height-16">We will send your information to the business to help get you a response.</p>
                                    <button type="submit" className="theme-btn gradient-btn w-100">
                                        Send a Message<i className="la la-arrow-right ml-2"></i>
                                    </button>
                                    <p className="font-size-13 font-weight-medium pt-1">By proceeding, you agree to our
                                        <a href="terms-and-conditions.html" className="text-color-2">Terms of Service</a> and
                                        <a href="privacy-policy.html" className="text-color-2">Privacy Policy</a>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListingDetails