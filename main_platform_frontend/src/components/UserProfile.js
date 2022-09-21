import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../Assets/images/logo-white.png'
import logoBlack from "../Assets/images/logo-black.png"
import listingLogo from "../Assets/images/listing-logo.jpg"
import listingLogo2 from "../Assets/images/listing-logo2.jpg"
import listingLogo3 from "../Assets/images/listing-logo3.jpg"
import img4 from "../Assets/images/img4.jpg"
import img5 from "../Assets/images/img5.jpg"
import img6 from "../Assets/images/img6.jpg"
import img7 from "../Assets/images/img7.jpg"
import anywhere from "../Assets/images/anywhere.png"
import avatarImg from "../Assets/images/avatar-img.jpg"
import avatarImg8 from "../Assets/images/avatar-img8.jpg"
import SingleListingImg1 from "../Assets/images/single-listing-img1.jpg"
import SingleListingImg2 from "../Assets/images/single-listing-img2.jpg"
import SingleListingImg3 from "../Assets/images/single-listing-img3.jpg"
import Header4 from './Header4'


function UserProfile() {
    return (
        <div>
            <Header4 />
            <section className="breadcrumb-area bg-gray user-bread-bg pt-3 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content d-flex flex-wrap align-items-end justify-content-between">
                                <div className="d-flex align-items-end">
                                    <div className="user-thumb user-thumb-xl bread-thumb mr-3 flex-shrink-0">
                                        <img src={avatarImg8} alt="avatar" />
                                    </div>
                                    <div className="section-heading pb-3">
                                        <h2 className="sec__title mb-0 font-size-28 line-height-30">
                                            <span>Mark Hardson</span>
                                            <i className="la la-check-circle ml-1 font-size-24 text-success" data-toggle="tooltip" data-placement="top" title="Verified Account"></i>
                                        </h2>
                                        <p className="sec__desc pt-1 font-size-16 line-height-22">Member Since July 2018</p>
                                        <p className="sec__desc pt-1 font-size-16 line-height-22"><i className="la la-map-marker mr-1"></i>San Francisco, CA</p>
                                    </div>
                                </div>
                                <div className="btn-box bread-btns d-flex align-items-center pb-3">
                                    <span className="btn-gray mr-2"><i className="la la-file-text-o mr-1"></i><span className="text-color font-weight-semi-bold mr-1">12</span>Places</span>
                                    <span className="btn-gray mr-2"><i className="la la-star-o mr-1"></i><span className="text-color font-weight-semi-bold mr-1">34</span>Reviews</span>
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
================================= -->

<!-- ================================
    START USER-DETAILS AREA
================================= --> */}
            <section className="user-detail-area padding-top-60px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="user-listing-detail-wrap">
                                <div className="block-card mb-5">
                                    <div className="block-card-header">
                                        <h2 className="widget-title pb-0">About Me</h2>
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
                                <div className="section-heading pb-1">
                                    <h2 className="sec__title font-size-24 line-height-30">Mark Hardson's Listings</h2>
                                </div>
                                {/* <!-- end section-heading --> */}
                                <div className="row pb-3">
                                    <div className="col-lg-6 responsive-column">
                                        <div className="card-item border border-color">
                                            <div className="card-image">
                                                <a href="listing-details.html" className="d-block">
                                                    <img src={img4} data-src={img4} className="card__img lazy" alt="" />
                                                    <span className="badge">now open</span>
                                                </a>
                                                <span className="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                    <i className="la la-bookmark"></i>
                                                </span>
                                            </div>
                                            <div className="card-content">
                                                <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                    <img src={listingLogo} alt="author-img" />
                                                </a>
                                                <h4 className="card-title pt-3">
                                                    <a href="listing-details.html">Favorite Place Food Bank</a>
                                                    <i className="la la-check-circle ml-1" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                                </h4>
                                                <p className="card-sub"><a href="#"><i className="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                                <ul className="listing-meta d-flex align-items-center">
                                                    <li className="d-flex align-items-center">
                                                        <span className="rate flex-shrink-0">4.7</span>
                                                        <span className="rate-text">5 Ratings</span>
                                                    </li>
                                                    <li>
                                                        <span className="price-range" data-toggle="tooltip" data-placement="top" title="Pricey">
                                                            <strong className="font-weight-medium">$</strong>
                                                            <strong className="font-weight-medium">$</strong>
                                                            <strong className="font-weight-medium">$</strong>
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <i className="la la-cutlery mr-1 listing-icon"></i><a href="#" className="listing-cat-link">Restaurant</a>
                                                    </li>
                                                </ul>
                                                <ul className="info-list padding-top-20px">
                                                    <li><span className="la la-link icon"></span>
                                                        <a href="#"> www.techydevs.com</a>
                                                    </li>
                                                    <li><span className="la la-calendar-check-o icon"></span>
                                                        Opened 1 month ago
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- end card-item --> */}
                                    </div>
                                    {/* <!-- end col-lg-6 --> */}
                                    <div className="col-lg-6 responsive-column">
                                        <div className="card-item border border-color">
                                            <div className="card-image">
                                                <a href="listing-details.html" className="d-block">
                                                    <img src={img5} data-src={img5} className="card__img lazy" alt="" />
                                                    <span className="badge bg-10">closed</span>
                                                </a>
                                                <span className="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                    <i className="la la-bookmark"></i>
                                                </span>
                                            </div>
                                            <div className="card-content">
                                                <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                    <img src={listingLogo2} alt="author-img" />
                                                </a>
                                                <h4 className="card-title pt-3">
                                                    <a href="listing-details.html">Beach Blue Boardwalk</a>
                                                </h4>
                                                <p className="card-sub"><a href="#"><i className="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                                <ul className="listing-meta d-flex align-items-center">
                                                    <li className="d-flex align-items-center">
                                                        <span className="rate flex-shrink-0">4.7</span>
                                                        <span className="rate-text">5 Ratings</span>
                                                    </li>
                                                    <li>
                                                        <span className="price-range" data-toggle="tooltip" data-placement="top" title="Moderate">
                                                            <strong className="font-weight-medium">$</strong>
                                                            <strong className="font-weight-medium">$</strong>
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <i className="la la-plane mr-1 listing-icon"></i><a href="#" className="listing-cat-link">Travel</a>
                                                    </li>
                                                </ul>
                                                <ul className="info-list padding-top-20px">
                                                    <li><span className="la la-link icon"></span>
                                                        <a href="#"> www.techydevs.com</a>
                                                    </li>
                                                    <li><span className="la la-calendar-check-o icon"></span>
                                                        Opened 1 month ago
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- end card-item --> */}
                                    </div>
                                    {/* <!-- end col-lg-6 --> */}
                                    <div className="col-lg-6 responsive-column">
                                        <div className="card-item border border-color">
                                            <div className="card-image">
                                                <a href="listing-details.html" className="d-block">
                                                    <img src={img6} data-src={img6} className="card__img lazy" alt="" />
                                                    <span className="badge">Now Open</span>
                                                </a>
                                                <span className="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                    <i className="la la-bookmark"></i>
                                                </span>
                                            </div>
                                            <div className="card-content">
                                                <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                    <img src={listingLogo3} alt="author-img" />
                                                </a>
                                                <h4 className="card-title pt-3">
                                                    <a href="listing-details.html">Hotel Govendor</a>
                                                </h4>
                                                <p className="card-sub"><a href="#"><i className="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                                <ul className="listing-meta d-flex align-items-center">
                                                    <li className="d-flex align-items-center">
                                                        <span className="rate flex-shrink-0">4.7</span>
                                                        <span className="rate-text">5 Ratings</span>
                                                    </li>
                                                    <li>
                                                        <span className="price-range" data-toggle="tooltip" data-placement="top" title="Inexpensive">
                                                            <strong className="font-weight-medium">$</strong>
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <i className="la la-hotel mr-1 listing-icon"></i><a href="#" className="listing-cat-link">Hotels</a>
                                                    </li>
                                                </ul>
                                                <ul className="info-list padding-top-20px">
                                                    <li><span className="la la-link icon"></span>
                                                        <a href="#"> www.techydevs.com</a>
                                                    </li>
                                                    <li><span className="la la-calendar-check-o icon"></span>
                                                        Opened 1 month ago
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- end card-item --> */}
                                    </div>
                                    {/* <!-- end col-lg-6 --> */}
                                    <div className="col-lg-6 responsive-column">
                                        <div className="card-item border border-color">
                                            <div className="card-image">
                                                <a href="listing-details.html" className="d-block">
                                                    <img src={img7} data-src={img7} className="card__img lazy" alt="" />
                                                    <span className="badge">now open</span>
                                                </a>
                                                <span className="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                    <i className="la la-bookmark"></i>
                                                </span>
                                            </div>
                                            <div className="card-content">
                                                <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                    <img src={anywhere} alt="author-img" />
                                                </a>
                                                <h4 className="card-title pt-3">
                                                    <a href="listing-details.html">Sticky band party</a>
                                                    <i className="la la-check-circle ml-1" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                                </h4>
                                                <p className="card-sub"><a href="#"><i className="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                                <ul className="listing-meta d-flex align-items-center">
                                                    <li className="d-flex align-items-center">
                                                        <span className="rate flex-shrink-0">4.7</span>
                                                        <span className="rate-text">5 Ratings</span>
                                                    </li>
                                                    <li>
                                                        <span className="price-range" data-toggle="tooltip" data-placement="top" title="Pricey">
                                                            <strong className="font-weight-medium">$</strong>
                                                            <strong className="font-weight-medium">$</strong>
                                                            <strong className="font-weight-medium">$</strong>
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <i className="la la-music mr-1 listing-icon"></i><a href="#" className="listing-cat-link">Event</a>
                                                    </li>
                                                </ul>
                                                <ul className="info-list padding-top-20px">
                                                    <li><span className="la la-link icon"></span>
                                                        <a href="#"> www.techydevs.com</a>
                                                    </li>
                                                    <li><span className="la la-calendar-check-o icon"></span>
                                                        Opened 1 month ago
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- end card-item --> */}
                                    </div>
                                    {/* <!-- end col-lg-6 --> */}
                                </div>
                                {/* <!-- end row --> */}
                                <div className="user-reviews">
                                    <div className="section-heading pb-1">
                                        <h2 className="sec__title font-size-24 line-height-30">Reviews</h2>
                                    </div>
                                    {/* <!-- end section-heading --> */}
                                    <div className="comments-list reviews-list">
                                        <div className="comment">
                                            <div className="user-thumb user-thumb-lg flex-shrink-0">
                                                <img src={avatarImg} alt="author-img" />
                                            </div>
                                            <div className="comment-body">
                                                <div className="meta-data d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <h4 className="comment__title"><a href="listing-details.html">Kam Lok Restaurant</a></h4>
                                                        <span className="comment__meta">Mark Hardson</span>
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
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut consequuntur debitis dicta dolor ducimus eaque eum, illo ipsa labore,
                                                </p>
                                                <div className="review-photos d-flex flex-wrap align-items-center ml-n1">
                                                    <a href="images/single-listing-img1.jpg" className="d-inline-block" data-fancybox="gallery">
                                                        <img className="lazy" src={SingleListingImg1} data-src={SingleListingImg1} alt="review image" />
                                                    </a>
                                                    <a href="images/single-listing-img2.jpg" className="d-inline-block" data-fancybox="gallery">
                                                        <img className="lazy" src={SingleListingImg2} data-src={SingleListingImg2} alt="review image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end review-photos --> */}
                                            </div>
                                        </div>
                                        {/* <!-- end comment --> */}
                                        <div className="comment">
                                            <div className="user-thumb user-thumb-lg flex-shrink-0">
                                                <img src={avatarImg} alt="author-img" />
                                            </div>
                                            <div className="comment-body">
                                                <div className="meta-data d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <h4 className="comment__title"><a href="listing-details.html">Mel’s Drive-In</a></h4>
                                                        <span className="comment__meta">Mark Hardson</span>
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
                                                <p className="comment-desc mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut consequuntur debitis dicta dolor ducimus eaque eum, illo ipsa labore,
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- end comment --> */}
                                        <div className="comment">
                                            <div className="user-thumb user-thumb-lg flex-shrink-0">
                                                <img src={avatarImg} alt="author-img" />
                                            </div>
                                            <div className="comment-body">
                                                <div className="meta-data d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <h4 className="comment__title"><a href="listing-details.html">Pearl’s Deluxe Burgers</a></h4>
                                                        <span className="comment__meta">Mark Hardson</span>
                                                    </div>
                                                    <div className="star-rating-wrap text-center">
                                                        <div className="star-rating text-color-5 font-size-18">
                                                            <span><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star"></i></span>
                                                            <span className="ml-n1"><i className="la la-star-o"></i></span>
                                                        </div>
                                                        <p className="font-size-13 font-weight-medium">04/10/2020</p>
                                                    </div>
                                                </div>
                                                <p className="comment-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut consequuntur debitis dicta dolor ducimus eaque eum, illo ipsa labore,
                                                </p>
                                                <div className="review-photos d-flex flex-wrap align-items-center ml-n1 mb-3">
                                                    <a href="images/single-listing-img1.jpg" className="d-inline-block" data-fancybox="gallery">
                                                        <img className="lazy" src={SingleListingImg1} data-src={SingleListingImg1} alt="review image" />
                                                    </a>
                                                    <a href="images/single-listing-img2.jpg" className="d-inline-block" data-fancybox="gallery">
                                                        <img className="lazy" src={SingleListingImg2} data-src={SingleListingImg2} alt="review image" />
                                                    </a>
                                                    <a href="images/single-listing-img3.jpg" className="d-inline-block" data-fancybox="gallery">
                                                        <img className="lazy" src={SingleListingImg3} data-src={SingleListingImg3} alt="review image" />
                                                    </a>
                                                </div>
                                                {/* <!-- end review-photos --> */}
                                            </div>
                                        </div>
                                        {/* <!-- end comment --> */}
                                    </div>
                                    {/* <!-- end comment-list --> */}
                                    <div className="pt-3 text-center">
                                        <div className="section-pagination">
                                            <nav aria-label="Page navigation">
                                                <ul className="pagination flex-wrap justify-content-center">
                                                    <li className="page-item">
                                                        <a className="page-link" href="#" aria-label="Previous">
                                                            <span aria-hidden="true"><i className="la la-arrow-left"></i></span>
                                                            <span className="sr-only">Previous</span>
                                                        </a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link page-link-active" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#" aria-label="Next">
                                                            <span aria-hidden="true"><i className="la la-arrow-right"></i></span>
                                                            <span className="sr-only">Next</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        {/* <!-- end section-pagination --> */}
                                    </div>
                                </div>
                                {/* <!-- end user-reviews --> */}
                            </div>
                            {/* <!-- end listing-detail-wrap --> */}
                        </div>
                        {/* <!-- end col-lg-8 --> */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">User Contact</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <ul className="list-items list--items list--items-2 list-items-style-2">
                                        <li><span className="text-color mr-1"><i className="la la-map-marker mr-2 text-color-2 font-size-18"></i>Address:</span>USA 27TH Brooklyn NY</li>
                                        <li><span className="text-color mr-1"><i className="la la-phone mr-2 text-color-2 font-size-18"></i>Phone:</span><a href="tel:+7(123)987654">+7(123)987654</a></li>
                                        <li><span className="text-color mr-1"><i className="la la-envelope mr-2 text-color-2 font-size-18"></i>Mail:</span><a href="mailto:markhardson@gmail.com">markhardson@gmail.com</a></li>
                                        <li><span className="text-color mr-1"><i className="la la-globe mr-2 text-color-2 font-size-18"></i>Website:</span><a href="#">www.techydevs.com</a></li>
                                    </ul>
                                    <ul className="social-profile social-profile-colored border-top border-top-color py-4 mt-4">
                                        <li><a href="#" className="facebook-bg"><i className="lab la-facebook-f"></i></a></li>
                                        <li><a href="#" className="twitter-bg"><i className="lab la-twitter"></i></a></li>
                                        <li><a href="#" className="instagram-bg"><i className="lab la-instagram"></i></a></li>
                                        <li><a href="#" className="behance-bg"><i className="lab la-behance"></i></a></li>
                                        <li><a href="#" className="dribbble-bg"><i className="lab la-dribbble"></i></a></li>
                                    </ul>
                                    <a href="#" className="btn-gray" data-toggle="modal" data-target="#sendMessageModal"><i className="la la-envelope mr-1"></i> Send Message</a>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Get in Touch</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <form method="post" className="form-box">
                                        <div className="input-box">
                                            <label className="label-text">Your Name</label>
                                            <div className="form-group">
                                                <span className="la la-user form-icon"></span>
                                                <input className="form-control" type="text" name="text" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="input-box">
                                            <label className="label-text">Your Email</label>
                                            <div className="form-group">
                                                <span className="la la-envelope form-icon"></span>
                                                <input className="form-control" type="email" name="email" placeholder="Your email" />
                                            </div>
                                        </div>
                                        <div className="input-box">
                                            <label className="label-text">Message</label>
                                            <div className="form-group">
                                                <span className="la la-pencil form-icon"></span>
                                                <textarea className="message-control form-control" name="message" placeholder="Write Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <button type="submit" className="theme-btn gradient-btn w-100 border-0">
                                                Send Message <i className="la la-arrow-right ml-1"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Rating Distribution</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <ul className="list-items">
                                        <li><span className="ribbon ribbon-lg mr-1">5 stars</span> <span className="text-color font-weight-semi-bold">18</span></li>
                                        <li><span className="ribbon ribbon-lg mr-1">4 stars</span> <span className="text-color font-weight-semi-bold">10</span></li>
                                        <li><span className="ribbon ribbon-lg mr-1">3 stars</span> <span className="text-color font-weight-semi-bold">2</span></li>
                                        <li><span className="ribbon ribbon-lg mr-1">2 stars</span> <span className="text-color font-weight-semi-bold">2</span></li>
                                        <li><span className="ribbon ribbon-lg mr-1">1 star</span> <span className="text-color font-weight-semi-bold">2</span></li>
                                    </ul>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Review Votes</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <ul className="list-items list--items list-items-style-2">
                                        <li><i className="la la-thumbs-up mr-1 font-size-18"></i>Useful: <span className="text-color font-weight-semi-bold ml-2">28</span></li>
                                        <li><i className="la la-smile mr-1 font-size-18"></i>Funny: <span className="text-color font-weight-semi-bold ml-2">20</span></li>
                                    </ul>
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
            {/* <!-- ================================
    END USER-DETAILS AREA
================================= -->

<!-- ================================
       START FOOTER AREA
================================= --> */}
            <section className="footer-area bg-gradient-gray padding-top-30px padding-bottom-30px position-relative">
                <span className="circle-bg circle-bg-3 position-absolute"></span>
                <span className="circle-bg circle-bg-4 position-absolute"></span>
                <span className="circle-bg circle-bg-5 position-absolute"></span>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-content d-flex align-items-center justify-content-between p-0">
                                <div className="section-heading">
                                    <h2 className="sec__title mb-0 font-size-24 line-height-30">Don't miss your monthly offer</h2>
                                    <p className="sec__desc font-size-16">Subscribe to get latest updates and information.</p>
                                </div>
                                {/* <!-- end section-heading --> */}
                                <form method="post" className="form-box">
                                    <div className="form-group mb-0">
                                        <span className="la la-envelope-o form-icon"></span>
                                        <input className="form-control form-control-styled form-control-long" type="email" placeholder="Enter your email" />
                                        <p className="font-size-12 font-weight-medium pt-1"><i className="la la-lock mr-1"></i>Your are 100% protected</p>
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
                            <div className="footer-item">
                                <div className="footer-logo">
                                    <a href="index.html" className="foot-logo"><img src={logoBlack} alt="logo" /></a>
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
                            <div className="footer-item">
                                <h4 className="footer__title">Quick Links</h4>
                                <div className="stroke-shape mb-3"></div>
                                <ul className="list-items">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#signUpModal">Sign Up</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#loginModal">Log In</a></li>
                                    <li><a href="add-listing">Add Listing</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                </ul>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="footer-item">
                                <h4 className="footer__title">Categories</h4>
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
                            <div className="footer-item">
                                <h4 className="footer__title">Contact with Us</h4>
                                <div className="stroke-shape mb-3"></div>
                                <ul className="list-items contact-links">
                                    <li><span className="d-block text-color mb-1"><i className="la la-map mr-1 text-color-2"></i>Address:</span> 12345 Little Baker St, Melbourne</li>
                                    <li><span className="d-block text-color mb-1"><i className="la la-phone mr-1 text-color-2"></i>Phone:</span><a href="#">+ 61 23 8093 3400</a></li>
                                    <li><span className="d-block text-color mb-1"><i className="la la-envelope mr-1 text-color-2"></i>Email:</span><a href="#">listhub@gmail.com</a></li>
                                </ul>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row pt-4 align-items-center footer-action-wrap">
                        <div className="col-lg-4">
                            <ul className="social-profile social-profile-colored">
                                <li><a href="#" className="facebook-bg"><i className="lab la-facebook-f"></i></a></li>
                                <li><a href="#" className="twitter-bg"><i className="lab la-twitter"></i></a></li>
                                <li><a href="#" className="instagram-bg"><i className="lab la-instagram"></i></a></li>
                                <li><a href="#" className="dribbble-bg"><i className="la la-dribbble"></i></a></li>
                                <li><a href="#" className="behance-bg"><i className="lab la-behance"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <ul className="list-items term-list text-right">
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
                                <div className="footer-chosen-container user-chosen-select-container d-flex align-items-center justify-content-end">
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
            <div className="modal fade modal-container" id="sendMessageModal" tabindex="-1" role="dialog" aria-labelledby="sendMessageModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center mh-bg-2">
                            <h5 className="modal-title" id="sendMessageModalTitle">Send Message</h5>
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
                                        Send Message<i className="la la-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile