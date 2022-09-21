import React from 'react'
import SingleListingImg1 from "../Assets/images/single-listing-img1.jpg"
import SingleListingImg2 from "../Assets/images/single-listing-img2.jpg"
import SingleListingImg3 from "../Assets/images/single-listing-img3.jpg"
import SingleListingImg4 from "../Assets/images/single-listing-img4.jpg"
import SingleListingImg5 from "../Assets/images/single-listing-img5.jpg"
import SingleListingImg6 from "../Assets/images/single-listing-img6.jpg"
import SingleListingImg7 from "../Assets/images/single-listing-img7.jpg"
import SingleListingImg8 from "../Assets/images/single-listing-img8.jpg"
import Slider from "react-slick";
function ListingdetailsCrosal() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        <div style={{ overflow: "hidden" }}>
            <Slider {...settings}>
                <div style={{ width: "300px", height: "200px", }}>
                    <img style={{ width: "300px", height: "200px" }} src={SingleListingImg1} />
                </div>
                <div style={{ width: "300px", height: "200px" }}>
                    <img style={{ width: "300px", height: "200px" }} src={SingleListingImg2} />
                </div>
                <div style={{ width: "300px", height: "200px" }}>
                    <img style={{ width: "300px", height: "200px" }} src={SingleListingImg3} />
                </div>
                <div style={{ width: "300px", height: "200px" }}>
                    <img style={{ width: "300px", height: "200px" }} src={SingleListingImg4} />
                </div>
                <div>
                    <img style={{ width: "300px", height: "200px" }} src={SingleListingImg5} />
                </div>
                <div>
                    <img style={{ width: "300px", height: "200px" }} src={SingleListingImg6} />
                </div>
                <div>
                    <img style={{ width: "300px", height: "200px" }} src={SingleListingImg7} />
                </div>
                <div>
                    <img style={{ width: "300px", height: "200px" }} src={SingleListingImg8} />
                </div>
            </Slider>

        </div>
    )
}

export default ListingdetailsCrosal