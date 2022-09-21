import React from 'react'
import img10 from "../Assets/images/img10.jpg"
import img11 from "../Assets/images/img11.jpg"
import img12 from "../Assets/images/img12.jpg"
import img13 from "../Assets/images/img13.jpg"
import avatarImg from "../Assets/images/avatar-img.jpg"
import avatarImg2 from "../Assets/images/avatar-img2.jpg"
import avatarImg3 from "../Assets/images/avatar-img3.jpg"
import avatarImg4 from "../Assets/images/avatar-img4.jpg"
import Slider from "react-slick";
import { Link } from "react-router-dom"
function HomeCrousal3() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
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
        <div style={{ marginLeft: "15px" }} >
            <Slider {...settings}>
                <div>
                    <div style={{ width: "360px" }} className="card-item card-item-layout-2">
                        <div className="card-image">
                            <a href="blog-single.html" className="d-block">
                                <img
                                    src={img10}
                                    className="card__img"
                                    alt="blog image"
                                />
                                <span className="badge">January 15, 2020</span>
                            </a>
                            <div className="post-share">
                                <span className="la la-share-alt share-icon"></span>
                                <div className="post-share-social">
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-facebook-f"></i
                                    ></a>
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-twitter"></i
                                    ></a>
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-instagram"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end card-image --> */}
                        <div className="card-content">
                            <a
                                href="#"
                                className="user-thumb d-inline-block"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Kamran Adi"
                            >
                                <img src={avatarImg} alt="author-img" />
                            </a>
                            <ul
                                className="listing-meta d-flex justify-content-center align-items-center"
                            >
                                <li>
                                    <a href="#" className="listing-cat-link">Travel</a>,
                                    <a href="#" className="listing-cat-link">News</a>
                                </li>
                            </ul>
                            <h4 className="card-title pt-2">
                                <a href="blog-single.html"
                                >Five Of Nature’s Swimming Pools</a
                                >
                            </h4>
                            <p className="card-sub mt-3">
                                Have you ever seen an elephant fly? Early Wednesday morning,
                                Walt Disney Studios Motion Pictures released
                            </p>
                            <ul
                                className="listing-action d-flex justify-content-around align-items-center border-top border-top-color mt-4 pt-4"
                            >
                                <li className="pill"><i className="la la-share mr-1"></i>275</li>
                                <li className="pill"><i className="la la-eye mr-1"></i>319</li>
                                <li className="pill"><i className="la la-comment mr-1"></i>24</li>
                            </ul>
                        </div>
                        {/* <!-- end card-content --> */}
                    </div>
                </div>
                {/* <!-- end card-item --> */}
                <div>
                    <div style={{ width: "360px" }} className="card-item card-item-layout-2">
                        <div className="card-image">
                            <a href="blog-single.html" className="d-block">
                                <img
                                    src={img11}
                                    className="card__img"
                                    alt="blog image"
                                />
                                <span className="badge">March 15, 2020</span>
                            </a>
                            <div className="post-share">
                                <span className="la la-share-alt share-icon"></span>
                                <div className="post-share-social">
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-facebook-f"></i
                                    ></a>
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-twitter"></i
                                    ></a>
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-instagram"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end card-image --> */}
                        <div className="card-content">
                            <a
                                href="#"
                                className="user-thumb d-inline-block"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Kamran Adi"
                            >
                                <img src={avatarImg2} alt="author-img" />
                            </a>
                            <ul
                                className="listing-meta d-flex justify-content-center align-items-center"
                            >
                                <li>
                                    <a href="#" className="listing-cat-link">BusinessOwners</a>,
                                    <a href="#" className="listing-cat-link">Restaurants</a>
                                </li>
                            </ul>
                            <h4 className="card-title pt-2">
                                <a href="blog-single.html"
                                >The joyless side of happy hour</a
                                >
                            </h4>
                            <p className="card-sub mt-3">
                                Have you ever seen an elephant fly? Early Wednesday morning,
                                Walt Disney Studios Motion Pictures released
                            </p>
                            <ul
                                className="listing-action d-flex justify-content-around align-items-center border-top border-top-color mt-4 pt-4"
                            >
                                <li className="pill"><i className="la la-share mr-1"></i>275</li>
                                <li className="pill"><i className="la la-eye mr-1"></i>319</li>
                                <li className="pill"><i className="la la-comment mr-1"></i>24</li>
                            </ul>
                        </div>
                        {/* <!-- end card-content --> */}
                    </div>
                </div>
                {/* <!-- end card-item --> */}
                <div>
                    <div style={{ width: "360px" }} className="card-item card-item-layout-2">
                        <div className="card-image">
                            <a href="blog-single.html" className="d-block">
                                <img
                                    src={img12}
                                    className="card__img"
                                    alt="blog image"
                                />
                                <span className="badge">July 15, 2020</span>
                            </a>
                            <div className="post-share">
                                <span className="la la-share-alt share-icon"></span>
                                <div className="post-share-social">
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-facebook-f"></i
                                    ></a>
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-twitter"></i
                                    ></a>
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-instagram"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end card-image --> */}
                        <div className="card-content">
                            <a
                                href="#"
                                className="user-thumb d-inline-block"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Kamran Adi"
                            >
                                <img src={avatarImg3} alt="author-img" />
                            </a>
                            <ul
                                className="listing-meta d-flex justify-content-center align-items-center"
                            >
                                <li>
                                    <a href="#" className="listing-cat-link">Tour</a>,
                                    <a href="#" className="listing-cat-link">News</a>
                                </li>
                            </ul>
                            <h4 className="card-title pt-2">
                                <a href="blog-single.html">Top 5 Boat journey in london</a>
                            </h4>
                            <p className="card-sub mt-3">
                                Have you ever seen an elephant fly? Early Wednesday morning,
                                Walt Disney Studios Motion Pictures released
                            </p>
                            <ul
                                className="listing-action d-flex justify-content-around align-items-center border-top border-top-color mt-4 pt-4"
                            >
                                <li className="pill"><i className="la la-share mr-1"></i>275</li>
                                <li className="pill"><i className="la la-eye mr-1"></i>319</li>
                                <li className="pill"><i className="la la-comment mr-1"></i>24</li>
                            </ul>
                        </div>
                        {/* <!-- end card-content --> */}
                    </div>
                </div>
                {/* <!-- end card-item --> */}
                <div>
                    <div style={{ width: "360px" }} className="card-item card-item-layout-2">
                        <div className="card-image">
                            <a href="blog-single.html" className="d-block">
                                <img
                                    src={img13}
                                    className="card__img"
                                    alt="blog image"
                                />
                                <span className="badge">January 15, 2020</span>
                            </a>
                            <div className="post-share">
                                <span className="la la-share-alt share-icon"></span>
                                <div className="post-share-social">
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-facebook-f"></i
                                    ></a>
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-twitter"></i
                                    ></a>
                                    <a href="#" className="post-share-social-icon"
                                    ><i className="lab la-instagram"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end card-image --> */}
                        <div className="card-content">
                            <a
                                href="#"
                                className="user-thumb d-inline-block"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Kamran Adi"
                            >
                                <img src={avatarImg4} alt="author-img" />
                            </a>
                            <ul
                                className="listing-meta d-flex justify-content-center align-items-center"
                            >
                                <li>
                                    <a href="#" className="listing-cat-link">Shop</a>,
                                    <a href="#" className="listing-cat-link">Cloth</a>
                                </li>
                            </ul>
                            <h4 className="card-title pt-2">
                                <a href="blog-single.html"
                                >Top 5 Clothing shop in New York</a
                                >
                            </h4>
                            <p className="card-sub mt-3">
                                Have you ever seen an elephant fly? Early Wednesday morning,
                                Walt Disney Studios Motion Pictures released
                            </p>
                            <ul
                                className="listing-action d-flex justify-content-around align-items-center border-top border-top-color mt-4 pt-4"
                            >
                                <li className="pill"><i className="la la-share mr-1"></i>275</li>
                                <li className="pill"><i className="la la-eye mr-1"></i>319</li>
                                <li className="pill"><i className="la la-comment mr-1"></i>24</li>
                            </ul>
                        </div>
                        {/* <!-- end card-content --> */}
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default HomeCrousal3