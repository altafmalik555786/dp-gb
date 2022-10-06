import React from 'react'
import Logo from '../../Assets/images/dpgb.png'
import avatarImg from "../../Assets/images/avatar-img.jpg"
import avatarImg2 from "../../Assets/images/avatar-img2.jpg"
import avatarImg3 from "../../Assets/images/avatar-img3.jpg"
import avatarImg4 from "../../Assets/images/avatar-img4.jpg"
import avatarImg5 from "../../Assets/images/avatar-img5.jpg"
import SingleListingImg1 from "../../Assets/images/single-listing-img1.jpg"
import SingleListingImg2 from "../../Assets/images/single-listing-img2.jpg"
import SingleListingImg3 from "../../Assets/images/single-listing-img3.jpg"
import { Link } from "react-router-dom"
function DashboardReviews() {
    return (
        <div>
            <section className="dashboard-wrap d-flex">
                <ul className="navbar-nav dashboard-sidebar">
                    <li>
                        <span id="sidebar-close">
                            <i className="la la-times"></i>
                        </span>
                    </li>
                    <li>
                        <a className="sidebar-brand" href="index.html">
                            <img src={Logo} alt="logo" width="78px"  />
                        </a>
                    </li>
                    <li className="sidebar-heading pt-3">Main</li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/dashboard">
                            <i className="la la-dashboard font-size-18 mr-1"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard-booking">
                            <i className="la la-shopping-bag font-size-18 mr-1"></i>
                            <span>Bookings</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard-bookmark">
                            <i className="la la-bookmark font-size-18 mr-1"></i>
                            <span>Bookmarks</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard-messages">
                            <i className="la la-envelope font-size-18 mr-1"></i>
                            <span>Messages <span className="badge badge-success">3</span></span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard-wallet">
                            <i className="la la-wallet font-size-18 mr-1"></i>
                            <span>Wallet</span>
                        </Link>
                    </li>
                    <li><hr className="sidebar-divider border-top-color" /></li>
                    <li className="sidebar-heading">Listings</li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard-my-listings">
                            <i className="la la-file-text-o font-size-18 mr-1"></i>
                            <span>My listings</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard-reviews">
                            <i className="la la-star-o font-size-18 mr-1"></i>
                            <span>Reviews</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-listing">
                            <i className="la la-plus-circle font-size-18 mr-1"></i>
                            <span>Add Listing</span>
                        </Link>
                    </li>
                    <li><hr className="sidebar-divider border-top-color" /></li>
                    <li className="sidebar-heading">Account</li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard-my-profile">
                            <i className="la la-user font-size-18 mr-1"></i>
                            <span>My Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="la la-power-off font-size-18 mr-1"></i>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
                <div className="dashboard-body d-flex flex-column">
                    <div className="dashboard-inner-body flex-grow-1">
                        <nav className="navbar navbar-expand bg-navbar dashboard-topbar mb-4">
                            <button id="sidebarToggleTop" className="btn rounded-circle mr-3">
                                <i className="la la-bars"></i>
                            </button>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle after-none" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="la la-search"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                        <form className="search-box">
                                            <div className="input-group">
                                                <label className="input-label mb-0">
                                                    <input type="text" className="form-control" placeholder="Search here..." />
                                                </label>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="la la-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle after-none" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="la la-bell"></i>
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right animated--grow-in" aria-labelledby="alertsDropdown">
                                        <h6 className="generic-list-header">Alerts Center</h6>
                                        <div className="generic-list scrollable-content scrollbar-hidden">
                                            <a className="generic-list-item d-flex align-items-center" href="#">
                                                <div className="icon-element flex-shrink-0 bg-1">
                                                    <i className="la la-file-alt text-white"></i>
                                                </div>
                                                <div className="ml-2">
                                                    <p className="small text-gray">December 12, 2019</p>
                                                    <p className="text-truncate text-color font-size-14 font-weight-medium">A new monthly report is ready to download!</p>
                                                </div>
                                            </a>
                                            <a className="generic-list-item d-flex align-items-center" href="#">
                                                <div className="icon-element flex-shrink-0 bg-2">
                                                    <i className="la la-donate"></i>
                                                </div>
                                                <div className="ml-2">
                                                    <p className="small text-gray">December 7, 2019</p>
                                                    <p className="text-truncate text-color font-size-14 font-weight-medium">$290.29 has been deposited into your account!</p>
                                                </div>
                                            </a>
                                            <a className="generic-list-item d-flex align-items-center" href="#">
                                                <div className="icon-element flex-shrink-0 bg-3">
                                                    <i className="la la-exclamation-triangle"></i>
                                                </div>
                                                <div className="ml-2">
                                                    <p className="small text-gray">December 4, 2019</p>
                                                    <p className="text-truncate text-color font-size-14 font-weight-medium">Spending Alert: We've noticed unusually high spending for your account.</p>
                                                </div>
                                            </a>
                                            <a className="generic-list-item d-flex align-items-center" href="#">
                                                <div className="icon-element flex-shrink-0 bg-4">
                                                    <i className="la la-check-circle"></i>
                                                </div>
                                                <div className="ml-2">
                                                    <p className="small text-gray">December 1, 2019</p>
                                                    <p className="text-truncate text-color font-size-14 font-weight-medium">Your listing Hotel Govendor has been approved! </p>
                                                </div>
                                            </a>
                                            <a className="generic-list-item d-flex align-items-center" href="#">
                                                <div className="icon-element flex-shrink-0 bg-5">
                                                    <i className="la la-check-circle"></i>
                                                </div>
                                                <div className="ml-2">
                                                    <p className="small text-gray">December 1, 2019</p>
                                                    <p className="text-truncate text-color font-size-14 font-weight-medium">Your listing Burger House has been approved! </p>
                                                </div>
                                            </a>
                                        </div>
                                        {/* <!-- end generic-list --> */}
                                        <a className="dropdown-item text-center small text-gray font-weight-medium py-2" href="#">Show All Alerts</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle after-none" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="la la-envelope"></i>
                                        <span className="badge badge-warning badge-counter">2</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right animated--grow-in" aria-labelledby="messagesDropdown">
                                        <h6 className="generic-list-header">Messages Center</h6>
                                        <div className="generic-list scrollable-content scrollbar-hidden">
                                            <a className="generic-list-item d-flex align-items-center" href="dashboard-messages.html">
                                                <div className="user-thumb user-thumb-sm flex-shrink-0 position-relative">
                                                    <img src={avatarImg} alt="author-image" />
                                                    <div className="status-indicator bg-success"></div>
                                                </div>
                                                <div className="ml-2">
                                                    <p className="text-truncate text-color font-size-14 font-weight-medium">Hi there! I am wondering if you can help me with a problem I've been having.</p>
                                                    <p className="small text-gray">Udin Cilok · 1m</p>
                                                </div>
                                            </a>
                                            <a className="generic-list-item d-flex align-items-center" href="dashboard-messages.html">
                                                <div className="user-thumb user-thumb-sm flex-shrink-0 position-relative">
                                                    <img src={avatarImg2} alt="author-image" />
                                                    <div className="status-indicator"></div>
                                                </div>
                                                <div className="ml-2">
                                                    <p className="text-truncate text-color font-size-14 font-weight-medium">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good</p>
                                                    <p className="small text-gray">Joynal Ali · 4m</p>
                                                </div>
                                            </a>
                                            <a className="generic-list-item d-flex align-items-center" href="dashboard-messages.html">
                                                <div className="user-thumb user-thumb-sm flex-shrink-0 position-relative">
                                                    <img src={avatarImg3} alt="author-image" />
                                                    <div className="status-indicator bg-success"></div>
                                                </div>
                                                <div className="ml-2">
                                                    <p className="text-truncate text-color font-size-14 font-weight-medium">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good</p>
                                                    <p className="small text-gray">Colin Smith · 10m</p>
                                                </div>
                                            </a>
                                            <a className="generic-list-item d-flex align-items-center" href="dashboard-messages.html">
                                                <div className="user-thumb user-thumb-sm flex-shrink-0 position-relative">
                                                    <img src={avatarImg4} alt="author-image" />
                                                    <div className="status-indicator bg-success"></div>
                                                </div>
                                                <div className="ml-2">
                                                    <p className="text-truncate text-color font-size-14 font-weight-medium">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good</p>
                                                    <p className="small text-gray">Alex Smith · 1h</p>
                                                </div>
                                            </a>
                                            <a className="generic-list-item d-flex align-items-center" href="dashboard-messages.html">
                                                <div className="user-thumb user-thumb-sm flex-shrink-0 position-relative">
                                                    <img src={avatarImg5} alt="author-image" />
                                                    <div className="status-indicator"></div>
                                                </div>
                                                <div className="ml-2">
                                                    <p className="text-truncate text-color font-size-14 font-weight-medium">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good</p>
                                                    <p className="small text-gray">Kamran adi · Yesterday</p>
                                                </div>
                                            </a>
                                        </div>
                                        {/* <!-- end generic-list --> */}
                                        <a className="dropdown-item text-center small text-gray font-weight-medium py-2" href="#">Read More Messages</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown border-left pl-3 ml-4">
                                    <a className="nav-link dropdown-toggle after-none" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="user-thumb user-thumb-sm position-relative">
                                            <img src={avatarImg} alt="author-image" />
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <span className="ml-2 small font-weight-medium d-none d-lg-inline">Kamran Ahmed</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right animated--grow-in py-2" aria-labelledby="userDropdown">
                                        <a className="dropdown-item text-color font-size-15" href="dashboard-my-profile.html">
                                            <i className="la la-user mr-2 text-gray font-size-18"></i>
                                            Profile
                                        </a>
                                        <a className="dropdown-item text-color font-size-15" href="dashboard-messages.html">
                                            <i className="la la-envelope mr-2 text-gray font-size-18"></i>
                                            Messages
                                        </a>
                                        <a className="dropdown-item text-color font-size-15" href="dashboard-booking.html">
                                            <i className="la la-shopping-bag mr-2 text-gray font-size-18"></i>
                                            Bookings
                                        </a>
                                        <a className="dropdown-item text-color font-size-15" href="dashboard-bookmark.html">
                                            <i className="la la-bookmark mr-2 text-gray font-size-18"></i>
                                            Bookmarks
                                        </a>
                                        <Link className="dropdown-item text-color font-size-15" to="/add-listing">
                                            <i className="la la-plus-circle mr-2 text-gray font-size-18"></i>
                                            Add Listing
                                        </Link>
                                        <a className="dropdown-item text-color font-size-15" href="index.html">
                                            <i className="la la-power-off mr-2 text-gray font-size-18"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- end dashboard-topbar --> */}
                        <div className="container-fluid dashboard-inner-body-container">
                            <div className="breadcrumb-content d-sm-flex align-items-center justify-content-between mb-4">
                                <div className="section-heading">
                                    <h2 className="sec__title font-size-24 mb-0">Reviews</h2>
                                </div>
                                <ul className="list-items bread-list bread-list-2">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Dashboard</li>
                                    <li>Reviews</li>
                                </ul>
                            </div>
                            {/* <!-- end breadcrumb-content --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="block-card dashboard-card mb-4">
                                        <div className="block-card-header">
                                            <h2 className="widget-title pb-0">Your Reviews</h2>
                                        </div>
                                        <div className="block-card-body">
                                            <div className="comments-list reviews-list">
                                                <div className="comment">
                                                    <div className="user-thumb user-thumb-lg flex-shrink-0">
                                                        <img src={avatarImg} alt="author-img" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <div className="meta-data d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h4 className="comment__title"><a href="listing-details.html">Kam Lok Restaurant</a></h4>
                                                                <span className="comment__meta">Alex Smith</span>
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
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate distinctio earum enim et laboriosam molestias necessitatibus quod quos. A ab alias aliquam amet animi aspernatur corporis culpa deserunt dolorem ea eum, iste laudantium maxime minus mollitia nam neque nobis non nostrum odio pariatur perspiciatis placeat quae quasi, quia quod reiciendis repellat repellendus saepe suscipit tenetur veritatis vero voluptas voluptatum.
                                                        </p>
                                                        <div className="review-photos review-photos-2 d-flex flex-wrap align-items-center ml-n1 mb-3">
                                                            <a href="images/single-listing-img1.jpg" className="d-inline-block" data-fancybox="gallery">
                                                                <img className="lazy" src={SingleListingImg1} data-src={SingleListingImg1} alt="review image" />
                                                            </a>
                                                            <a href="images/single-listing-img2.jpg" className="d-inline-block" data-fancybox="gallery">
                                                                <img className="lazy" src={SingleListingImg2} data-src={SingleListingImg2} alt="review image" />
                                                            </a>
                                                        </div>
                                                        {/* <!-- end review-photos --> */}
                                                        <div className="comment-action">
                                                            <a className="btn-gray btn-gray-sm" href="#" data-toggle="modal" data-target="#replayModal">
                                                                <i className="la la-reply mr-1"></i>Reply to this review
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end comment --> */}
                                                <div className="comment">
                                                    <div className="user-thumb user-thumb-lg flex-shrink-0">
                                                        <img src={avatarImg2} alt="author-img" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <div className="meta-data d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h4 className="comment__title"><a href="listing-details.html">Mel’s Drive-In</a></h4>
                                                                <span className="comment__meta">Alex Smith</span>
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
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate distinctio earum enim et laboriosam molestias necessitatibus quod quos. A ab alias aliquam amet animi aspernatur corporis culpa deserunt dolorem ea eum, iste laudantium maxime minus mollitia nam neque nobis non nostrum odio pariatur perspiciatis placeat quae quasi, quia quod reiciendis repellat repellendus saepe suscipit tenetur veritatis vero voluptas voluptatum.
                                                        </p>
                                                        <div className="comment-action mt-3">
                                                            <a className="btn-gray btn-gray-sm" href="#" data-toggle="modal" data-target="#replayModal">
                                                                <i className="la la-reply mr-1"></i>Reply to this review
                                                            </a>
                                                        </div>
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
                                                                <h4 className="comment__title"><a href="listing-details.html">Pearl’s Deluxe Burgers</a></h4>
                                                                <span className="comment__meta">Alex Smith</span>
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
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate distinctio earum enim et laboriosam molestias necessitatibus quod quos. A ab alias aliquam amet animi aspernatur corporis culpa deserunt dolorem ea eum, iste laudantium maxime minus mollitia nam neque nobis non nostrum odio pariatur perspiciatis placeat quae quasi, quia quod reiciendis repellat repellendus saepe suscipit tenetur veritatis vero voluptas voluptatum.
                                                        </p>
                                                        <div className="review-photos review-photos-2 d-flex flex-wrap align-items-center ml-n1 mb-3">
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
                                                        <div className="comment-action">
                                                            <a className="btn-gray btn-gray-sm" href="#" data-toggle="modal" data-target="#replayModal">
                                                                <i className="la la-reply mr-1"></i>Reply to this review
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end comment --> */}
                                            </div>
                                            {/* <!-- end comments-list--> */}
                                        </div>
                                        {/* <!-- end block-card-body --> */}
                                    </div>
                                    {/* <!-- end block-card --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                                <div className="col-lg-12 pb-4">
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
                                {/* <!-- end col-lg-12 --> */}
                            </div>
                            {/* <!-- end row --> */}
                        </div>
                        {/* <!-- end dashboard-inner-body-container --> */}
                    </div>
                    {/* <!-- end dashboard-inner-body --> */}
                    <div className="dashboard-footer bg-white">
                        <div className="container-fluid">
                            <div className="copy-right d-flex align-items-center justify-content-between">
                                <p className="copy__desc">
                                    &copy; Copyright DPGB <script> document.write(new Date().getFullYear()); </script>. Made with
                                    <span className="la la-heart-o"></span> by <a href="https://themeforest.net/user/techydevs/portfolio">TechyDevs</a>
                                </p>
                                <ul className="list-items term-list text-right">
                                    <li><Link to="/">Home</Link></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end dashboard-body --> */}
            </section>
            {/* <!-- ================================
    START DASHBOARD AREA
================================= -->

<!-- Modal --> */}
            <div className="modal fade modal-container" id="replayModal" tabindex="-1" role="dialog" aria-labelledby="replayModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center mh-bg-2">
                            <h5 className="modal-title" id="replayModalTitle">Replay to this review</h5>
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
        </div>
    )
}

export default DashboardReviews