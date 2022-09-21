import React from 'react'
import Logo from '../../Assets/images/logo-white.png'
import avatarImg from "../../Assets/images/avatar-img.jpg"
import avatarImg2 from "../../Assets/images/avatar-img2.jpg"
import avatarImg3 from "../../Assets/images/avatar-img3.jpg"
import avatarImg4 from "../../Assets/images/avatar-img4.jpg"
import avatarImg5 from "../../Assets/images/avatar-img5.jpg"

import { Link } from "react-router-dom"
function DashboardWallet() {
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
                            <img src={Logo} alt="logo" />
                        </a>
                    </li>
                    <li className="sidebar-heading pt-3">Main</li>
                    <li className="nav-item">
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
                    <li className="nav-item active">
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
                                        <a className="dropdown-item text-color font-size-15" href="add-listing.html">
                                            <i className="la la-plus-circle mr-2 text-gray font-size-18"></i>
                                            Add Listing
                                        </a>
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
                                    <h2 className="sec__title font-size-24 mb-0">Wallet</h2>
                                </div>
                                <ul className="list-items bread-list bread-list-2">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Dashboard</li>
                                    <li>Wallet</li>
                                </ul>
                            </div>
                            {/* <!-- end breadcrumb-content --> */}
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="card-item dashboard-stat">
                                        <div className="card-content">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h2 className="card-title font-size-40">94.50</h2>
                                                    <p className="card-sub font-size-18 line-height-24">Withdrawal Balance</p>
                                                </div>
                                                <div className="col-auto font-size-60">
                                                    <i className="la la-money text-primary"></i>
                                                </div>
                                            </div>
                                            {/* <!-- end row --> */}
                                        </div>
                                        {/* <!-- end card-content --> */}
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-4 --> */}
                                <div className="col-lg-4 col-md-4">
                                    <div className="card-item dashboard-stat">
                                        <div className="card-content">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h2 className="card-title font-size-40">314.11</h2>
                                                    <p className="card-sub font-size-18 line-height-24">Total Earnings</p>
                                                </div>
                                                <div className="col-auto font-size-60">
                                                    <i className="la la-shopping-bag text-success"></i>
                                                </div>
                                            </div>
                                            {/* <!-- end row --> */}
                                        </div>
                                        {/* <!-- end card-content --> */}
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-4 --> */}
                                <div className="col-lg-4 col-md-4">
                                    <div className="card-item dashboard-stat">
                                        <div className="card-content">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h2 className="card-title font-size-40">5</h2>
                                                    <p className="card-sub font-size-18 line-height-24">Total Orders</p>
                                                </div>
                                                <div className="col-auto font-size-60">
                                                    <i className="la la-shopping-cart text-info"></i>
                                                </div>
                                            </div>
                                            {/* <!-- end row --> */}
                                        </div>
                                        {/* <!-- end card-content --> */}
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-4 --> */}
                                <div className="col-lg-6">
                                    <div className="block-card dashboard-card mb-4 px-0">
                                        <div className="block-card-header d-flex flex-wrap align-items-center justify-content-between px-4 border-bottom-0 pb-0">
                                            <h2 className="widget-title pb-0">Earnings</h2>
                                            <span className="btn-gray btn-gray-sm">Fee: <span className="text-color font-weight-semi-bold">10%</span></span>
                                        </div>
                                        <div className="block-card-body">
                                            <div className="my-table table-responsive">
                                                <table className="table align-items-center table-flush mb-0">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th>Order ID</th>
                                                            <th>Price</th>
                                                            <th>Fee</th>
                                                            <th>Net Earning</th>
                                                            <th>Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><a href="#" className="order-id">RA0449</a></td>
                                                            <td className="text-color">$89</td>
                                                            <td className="text-danger">$11.50</td>
                                                            <td className="text-success">$80.50</td>
                                                            <td>05/01/2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#" className="order-id">RA0449</a></td>
                                                            <td className="text-color">$89</td>
                                                            <td className="text-danger">$11.50</td>
                                                            <td className="text-success">$80.50</td>
                                                            <td>05/01/2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#" className="order-id">RA0449</a></td>
                                                            <td className="text-color">$89</td>
                                                            <td className="text-danger">$11.50</td>
                                                            <td className="text-success">$80.50</td>
                                                            <td>05/01/2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#" className="order-id">RA5324</a></td>
                                                            <td className="text-color">$89</td>
                                                            <td className="text-danger">$11.50</td>
                                                            <td className="text-success">$80.50</td>
                                                            <td>05/01/2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#" className="order-id">RA8568</a></td>
                                                            <td className="text-color">$89</td>
                                                            <td className="text-danger">$11.50</td>
                                                            <td className="text-success">$80.50</td>
                                                            <td>05/01/2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#" className="order-id">RA1453</a></td>
                                                            <td className="text-color">$89</td>
                                                            <td className="text-danger">$11.50</td>
                                                            <td className="text-success">$80.50</td>
                                                            <td>05/01/2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#" className="order-id">RA1998</a></td>
                                                            <td className="text-color">$89</td>
                                                            <td className="text-danger">$11.50</td>
                                                            <td className="text-success">$80.50</td>
                                                            <td>05/01/2020</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* <!-- end block-card-body --> */}
                                    </div>
                                    {/* <!-- end block-card --> */}
                                </div>
                                {/* <!-- end col-lg-6 --> */}
                                <div className="col-lg-6">
                                    <div className="block-card dashboard-card mb-4 px-0">
                                        <div className="block-card-header px-4 border-bottom-0 pb-0">
                                            <h2 className="widget-title pb-0">Payout History</h2>
                                        </div>
                                        <div className="block-card-body">
                                            <div className="my-table table-responsive">
                                                <table className="table align-items-center table-flush mb-0">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th>Customer</th>
                                                            <th>Item</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Udin Wayang</td>
                                                            <td>Nasi Padang</td>
                                                            <td>20/02/2020</td>
                                                            <td><span className="badge badge-success">Paid</span></td>
                                                            <td><a href="invoice.html" className="btn btn-sm theme-btn-primary">Invoice</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jaenab Bajigur</td>
                                                            <td>Gundam 90' Edition</td>
                                                            <td>20/02/2020</td>
                                                            <td><span className="badge badge-warning text-white">Shipping</span></td>
                                                            <td><a href="invoice.html" className="btn btn-sm theme-btn-primary">Invoice</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rivat Mahesa</td>
                                                            <td>Oblong T-Shirt</td>
                                                            <td>20/02/2020</td>
                                                            <td><span className="badge badge-danger">Unpaid</span></td>
                                                            <td><a href="invoice.html" className="btn btn-sm theme-btn-primary">Invoice</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Indri Junanda</td>
                                                            <td>Hat Rounded</td>
                                                            <td>20/02/2020</td>
                                                            <td><span className="badge badge-info">Processing</span></td>
                                                            <td><a href="invoice.html" className="btn btn-sm theme-btn-primary">Invoice</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Udin Cilok</td>
                                                            <td>Baby Powder</td>
                                                            <td>20/02/2020</td>
                                                            <td><span className="badge badge-success">Paid</span></td>
                                                            <td><a href="invoice.html" className="btn btn-sm theme-btn-primary">Invoice</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Udin Cilok</td>
                                                            <td>Baby Powder</td>
                                                            <td>20/02/2020</td>
                                                            <td><span className="badge badge-success">Paid</span></td>
                                                            <td><a href="invoice.html" className="btn btn-sm theme-btn-primary">Invoice</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* <!-- end block-card-body --> */}
                                    </div>
                                    {/* <!-- end block-card --> */}
                                </div>
                                {/* <!-- end col-lg-6 --> */}
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
                                    &copy; Copyright Listhub <script> document.write(new Date().getFullYear()); </script>. Made with
                                    <span className="la la-heart-o"></span> by <a href="https://themeforest.net/user/techydevs/portfolio">TechyDevs</a>
                                </p>
                                <ul className="list-items term-list text-right">
                                    <li><a href="index.html">Home</a></li>
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
            <div className="modal fade modal-container" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <i className="la la-exclamation-circle font-size-70 text-warning"></i>
                            <h4 className="modal-title mt-2 mb-1 text-color font-size-20" id="deleteModalTitle">Your item ill be deleted permanently!</h4>
                            <p className="modal-sub font-weight-medium">Are you sure to proceed.</p>
                        </div>
                        <div className="modal-footer border-top-color">
                            <button type="button" className="btn font-weight-medium line-height-20 bg-rgb-success" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn font-weight-medium line-height-20 bg-rgb-danger">Delete</button>
                        </div>
                    </div>
                    {/* <!-- end modal-content --> */}
                </div>
            </div>
            {/* <!-- end modal-form --> */}
        </div>
    )
}

export default DashboardWallet