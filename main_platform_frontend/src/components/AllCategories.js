import React from 'react'
import Footer from './Footer'
import ListingHeader from './ListingHeader'
import catImg from "../Assets/images/cat-img.jpg"
import catImg2 from "../Assets/images/cat-img-2.jpg"
import catImg3 from "../Assets/images/cat-img-3.jpg"
import catImg4 from "../Assets/images/cat-img-4.jpg"
import catImg5 from "../Assets/images/cat-img-5.jpg"
import catImg6 from "../Assets/images/cat-img-6.jpg"
import catImg7 from "../Assets/images/cat-img-7.jpg"
import catImg8 from "../Assets/images/cat-img-8.jpg"

function AllCategories() {
    return (
        <div>
            <ListingHeader />
            <section className="breadcrumb-area bread-bg bread-overlay overflow-hidden">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="section-heading">
                                        <h2 className="sec__title text-white font-size-40 mb-0">All Categories</h2>
                                    </div>
                                    <ul className="list-items bread-list ">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Categories</li>
                                        <li>All Categories</li>
                                    </ul>
                                </div>
                                {/* <!-- end breadcrumb-content --> */}
                            </div>
                            {/* <!-- end col-lg-12 --> */}
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container --> */}
                </div>
                {/* <!-- end breadcrumb-wrap --> */}
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
    START CATEGORY AREA
================================= --> */}
            <section className="category-area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg} data-src={catImg} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-cutlery"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Restaurants</h4>
                                            <span className="badge">12 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg2} data-src={catImg2} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-plane"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Travels</h4>
                                            <span className="badge">55 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg3} data-src={catImg3} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-hotel"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Hotels</h4>
                                            <span className="badge">44 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg4} data-src={catImg4} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-music"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Events</h4>
                                            <span className="badge">33 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg} data-src={catImg} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-cutlery"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Restaurants</h4>
                                            <span className="badge">12 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg2} data-src={catImg2} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-plane"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Travels</h4>
                                            <span className="badge">55 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg3} data-src={catImg3} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-hotel"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Hotels</h4>
                                            <span className="badge">44 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg4} data-src={catImg4} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-music"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Events</h4>
                                            <span className="badge">33 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg5} data-src={catImg5} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-shopping-cart"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Shops</h4>
                                            <span className="badge">66 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg6} data-src={catImg6} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-dumbbell"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Fitness</h4>
                                            <span className="badge">33 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg7} data-src={catImg7} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-glass"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Food & Drink</h4>
                                            <span className="badge">44 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item overflow-hidden">
                                <img src={catImg8} data-src={catImg8} alt="category-image" className="cat-img lazy" />
                                <div className="category-content d-flex align-items-center justify-content-center">
                                    <a href="#" className="category-link d-flex flex-column justify-content-center w-100 h-100">
                                        <div className="icon-element mb-3 mx-auto">
                                            <span className="la la-paint-brush"></span>
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">Art & Design</h4>
                                            <span className="badge">11 Listings</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- end category-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            <Footer />
        </div>
    )
}

export default AllCategories