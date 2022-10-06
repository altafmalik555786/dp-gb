import React from 'react'
import img4 from "../Assets/images/img4.jpg"
import img5 from "../Assets/images/img5.jpg"
import img6 from "../Assets/images/img6.jpg"
import img7 from "../Assets/images/img7.jpg"
import img8 from "../Assets/images/img8.jpg"
import img9 from "../Assets/images/img9.jpg"
import listingLogo from "../Assets/images/listing-logo.jpg"
import listingLogo2 from "../Assets/images/listing-logo2.jpg"
import listingLogo3 from "../Assets/images/listing-logo3.jpg"
import anywhere from "../Assets/images/anywhere.png"
import fillSign from "../Assets/images/fill-sign.png"
import sketch from "../Assets/images/sketch.png"
import Slider from "react-slick";
import { Link } from "react-router-dom"

function HomeCrousal() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", overflow: "Hidden" }}>
            <Slider {...settings}>
                <div >
                    <div style={{ width: "375px" }} className="card-item border border-color">
                        <div className="card-image">
                            <Link to="/listing-details" className="d-block">
                                <img src={img4} className="card__img" alt="" />
                                <span className="badge">now open</span>
                            </Link>
                            <span
                                className="bookmark-btn"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Save"
                            >
                                <i className="la la-bookmark"></i>
                            </span>
                        </div>
                        <div className="card-content">
                            <a
                                href="#"
                                className="user-thumb d-inline-block"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="TechyDevs"
                            >
                                <img src={listingLogo} alt="author-img" />
                            </a>
                            <h4 className="card-title pt-3">
                                <Link to="/listing-details">Favorite Place Food Bank</Link>
                                <i
                                    className="la la-check-circle ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Claimed"
                                ></i>
                            </h4>
                            <p className="card-sub">
                                <a href="#"
                                ><i className="la la-map-marker mr-1 text-color-2"></i>Bishop
                                    Avenue, New York</a
                                >
                            </p>
                            <ul className="listing-meta d-flex align-items-center">
                                <li className="d-flex align-items-center">
                                    <span className="rate flex-shrink-0">4.7</span>
                                    <span className="rate-text">5 Ratings</span>
                                </li>
                                <li>
                                    <span
                                        className="price-range"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Pricey"
                                    >
                                        <strong className="font-weight-medium">$</strong>
                                        <strong className="font-weight-medium">$</strong>
                                        <strong className="font-weight-medium">$</strong>
                                    </span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="la la-cutlery mr-1 listing-icon"></i
                                    ><a href="#" className="listing-cat-link">Restaurant</a>
                                </li>
                            </ul>
                            <ul className="info-list padding-top-20px">
                                <li>
                                    <span className="la la-link icon"></span>
                                    <a href="#"> www.altafgroupofcompanies.com</a>
                                </li>
                                <li>
                                    <span className="la la-calendar-check-o icon"></span>
                                    Opened 1 month ago
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
                <div>
                    <div style={{ width: "375px" }} className="card-item border border-color">
                        <div className="card-image">
                            <Link to="/listing-details" className="d-block">
                                <img src={img5} className="card__img" alt="" />
                                <span className="badge bg-10">closed</span>
                            </Link>
                            <span
                                className="bookmark-btn"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Save"
                            >
                                <i className="la la-bookmark"></i>
                            </span>
                        </div>
                        <div className="card-content">
                            <a
                                href="#"
                                className="user-thumb d-inline-block"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="TechyDevs"
                            >
                                <img src={listingLogo2} alt="author-img" />
                            </a>
                            <h4 className="card-title pt-3">
                                <Link to="/listing-details">Beach Blue Boardwalk</Link>
                            </h4>
                            <p className="card-sub">
                                <a href="#"
                                ><i className="la la-map-marker mr-1 text-color-2"></i>Bishop
                                    Avenue, New York</a
                                >
                            </p>
                            <ul className="listing-meta d-flex align-items-center">
                                <li className="d-flex align-items-center">
                                    <span className="rate flex-shrink-0">4.7</span>
                                    <span className="rate-text">5 Ratings</span>
                                </li>
                                <li>
                                    <span
                                        className="price-range"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Moderate"
                                    >
                                        <strong className="font-weight-medium">$</strong>
                                        <strong className="font-weight-medium">$</strong>
                                    </span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="la la-plane mr-1 listing-icon"></i
                                    ><a href="#" className="listing-cat-link">Travel</a>
                                </li>
                            </ul>
                            <ul className="info-list padding-top-20px">
                                <li>
                                    <span className="la la-link icon"></span>
                                    <a href="#"> www.altafgroupofcompanies.com</a>
                                </li>
                                <li>
                                    <span className="la la-calendar-check-o icon"></span>
                                    Opened 1 month ago
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
                <div>
                    <div style={{ width: "375px" }} className="card-item border border-color">
                        <div className="card-image">
                            <Link to="/listing-details" className="d-block">
                                <img src={img6} className="card__img" alt="" />
                                <span className="badge">Now Open</span>
                            </Link>
                            <span
                                className="bookmark-btn"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Save"
                            >
                                <i className="la la-bookmark"></i>
                            </span>
                        </div>
                        <div className="card-content">
                            <a
                                href="#"
                                className="user-thumb d-inline-block"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="TechyDevs"
                            >
                                <img src={listingLogo3} alt="author-img" />
                            </a>
                            <h4 className="card-title pt-3">
                                <Link to="/listing-details">Hotel Govendor</Link>
                            </h4>
                            <p className="card-sub">
                                <a href="#"
                                ><i className="la la-map-marker mr-1 text-color-2"></i>Bishop
                                    Avenue, New York</a
                                >
                            </p>
                            <ul className="listing-meta d-flex align-items-center">
                                <li className="d-flex align-items-center">
                                    <span className="rate flex-shrink-0">4.7</span>
                                    <span className="rate-text">5 Ratings</span>
                                </li>
                                <li>
                                    <span
                                        className="price-range"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Inexpensive"
                                    >
                                        <strong className="font-weight-medium">$</strong>
                                    </span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="la la-hotel mr-1 listing-icon"></i
                                    ><a href="#" className="listing-cat-link">Hotels</a>
                                </li>
                            </ul>
                            <ul className="info-list padding-top-20px">
                                <li>
                                    <span className="la la-link icon"></span>
                                    <a href="#"> www.altafgroupofcompanies.com</a>
                                </li>
                                <li>
                                    <span className="la la-calendar-check-o icon"></span>
                                    Opened 1 month ago
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
                <div>
                    <div style={{ width: "375px" }} className="card-item border border-color">
                        <div className="card-image">
                            <Link to="/listing-details" className="d-block">
                                <img src={img7} className="card__img" alt="" />
                                <span className="badge">now open</span>
                            </Link>
                            <span
                                className="bookmark-btn"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Save"
                            >
                                <i className="la la-bookmark"></i>
                            </span>
                        </div>
                        <div className="card-content">
                            <a
                                href="#"
                                className="user-thumb d-inline-block"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="TechyDevs"
                            >
                                <img src={anywhere} alt="author-img" />
                            </a>
                            <h4 className="card-title pt-3">
                                <Link to="/listing-details">Sticky band party</Link>
                                <i
                                    className="la la-check-circle ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Claimed"
                                ></i>
                            </h4>
                            <p className="card-sub">
                                <a href="#"
                                ><i className="la la-map-marker mr-1 text-color-2"></i>Bishop
                                    Avenue, New York</a
                                >
                            </p>
                            <ul className="listing-meta d-flex align-items-center">
                                <li className="d-flex align-items-center">
                                    <span className="rate flex-shrink-0">4.7</span>
                                    <span className="rate-text">5 Ratings</span>
                                </li>
                                <li>
                                    <span
                                        className="price-range"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Pricey"
                                    >
                                        <strong className="font-weight-medium">$</strong>
                                        <strong className="font-weight-medium">$</strong>
                                        <strong className="font-weight-medium">$</strong>
                                    </span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="la la-music mr-1 listing-icon"></i
                                    ><a href="#" className="listing-cat-link">Event</a>
                                </li>
                            </ul>
                            <ul className="info-list padding-top-20px">
                                <li>
                                    <span className="la la-link icon"></span>
                                    <a href="#"> www.altafgroupofcompanies.com</a>
                                </li>
                                <li>
                                    <span className="la la-calendar-check-o icon"></span>
                                    Opened 1 month ago
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
                <div>
                    <div style={{ width: "375px" }} className="card-item border border-color">
                        <div className="card-image">
                            <Link to="/listing-details" className="d-block">
                                <img src={img8} className="card__img" alt="" />
                                <span className="badge bg-10">closed</span>
                            </Link>
                            <span
                                className="bookmark-btn"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Save"
                            >
                                <i className="la la-bookmark"></i>
                            </span>
                        </div>
                        <div className="card-content">
                            <a
                                href="#"
                                className="user-thumb d-inline-block"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="TechyDevs"
                            >
                                <img src={sketch} alt="author-img" />
                            </a>
                            <h4 className="card-title pt-3">
                                <Link to="/listing-details"
                                >Sena clothing shopping mall</Link
                                >
                            </h4>
                            <p className="card-sub">
                                <a href="#"
                                ><i className="la la-map-marker mr-1 text-color-2"></i>Bishop
                                    Avenue, New York</a
                                >
                            </p>
                            <ul className="listing-meta d-flex align-items-center">
                                <li className="d-flex align-items-center">
                                    <span className="rate flex-shrink-0">4.7</span>
                                    <span className="rate-text">5 Ratings</span>
                                </li>
                                <li>
                                    <span
                                        className="price-range"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Ultra High"
                                    >
                                        <strong className="font-weight-medium">$</strong>
                                        <strong className="font-weight-medium">$</strong>
                                        <strong className="font-weight-medium">$</strong>
                                        <strong className="font-weight-medium">$</strong>
                                    </span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="la la-shopping-cart mr-1 listing-icon"></i
                                    ><a href="#" className="listing-cat-link">Shop</a>
                                </li>
                            </ul>
                            <ul className="info-list padding-top-20px">
                                <li>
                                    <span className="la la-link icon"></span>
                                    <a href="#"> www.altafgroupofcompanies.com</a>
                                </li>
                                <li>
                                    <span className="la la-calendar-check-o icon"></span>
                                    Opened 1 month ago
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
                <div>
                    <div style={{ width: "375px" }} className="card-item border border-color">
                        <div className="card-image">
                            <Link to="/listing-details" className="d-block">
                                <img src={img9} className="card__img" alt="" />
                                <span className="badge">Now open</span>
                            </Link>
                            <span
                                className="bookmark-btn"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Save"
                            >
                                <i className="la la-bookmark"></i>
                            </span>
                        </div>
                        <div className="card-content">
                            <a
                                href="#"
                                className="user-thumb d-inline-block"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="TechyDevs"
                            >
                                <img src={fillSign} alt="author-img" />
                            </a>
                            <h4 className="card-title pt-3">
                                <Link to="/listing-details">Hotel Govendor</Link>
                            </h4>
                            <p className="card-sub">
                                <a href="#"
                                ><i className="la la-map-marker mr-1 text-color-2"></i>Bishop
                                    Avenue, New York</a
                                >
                            </p>
                            <ul className="listing-meta d-flex align-items-center">
                                <li className="d-flex align-items-center">
                                    <span className="rate flex-shrink-0">4.7</span>
                                    <span className="rate-text">5 Ratings</span>
                                </li>
                                <li>
                                    <span
                                        className="price-range"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Inexpensive"
                                    >
                                        <strong className="font-weight-medium">$</strong>
                                    </span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="la la-hotel mr-1 listing-icon"></i
                                    ><a href="#" className="listing-cat-link">Hotels</a>
                                </li>
                            </ul>
                            <ul className="info-list padding-top-20px">
                                <li>
                                    <span className="la la-link icon"></span>
                                    <a href="#"> www.altafgroupofcompanies.com</a>
                                </li>
                                <li>
                                    <span className="la la-calendar-check-o icon"></span>
                                    Opened 1 month ago
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default HomeCrousal