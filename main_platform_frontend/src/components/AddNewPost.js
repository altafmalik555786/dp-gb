import React from 'react'
import ListingHeader from './ListingHeader'

function AddNewPost() {
    return (
        <div>
            <ListingHeader />
            {/* <!-- ================================
    START BREADCRUMB AREA
================================= --> */}
            <section className="breadcrumb-area bread-bg bread-overlay overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                                <div className="section-heading">
                                    <h2 className="sec__title text-white font-size-40 mb-0">Submit Your Post</h2>
                                </div>
                                <ul className="list-items bread-list ">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Add New Post</li>
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
    START ADD-LISTING AREA
================================= --> */}
            <section className="add-listing-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="block-card mb-4">
                                <div className="block-card-header">
                                    <h2 className="widget-title">Add New Post</h2>
                                    <div className="stroke-shape"></div>
                                </div>
                                {/* <!-- end block-card-header --> */}
                                <div className="block-card-body">
                                    <form method="post" className="form-box row">
                                        <div className="col-lg-12">
                                            <div className="input-box">
                                                <label className="label-text">Listing Title</label>
                                                <div className="form-group">
                                                    <span className="la la-briefcase form-icon"></span>
                                                    <input className="form-control" type="text" name="text" placeholder="Example: Best Restaurants in London" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end col-lg-12 --> */}
                                        <div className="col-lg-12">
                                            <div className="input-box">
                                                <label className="label-text">Description</label>
                                                <div className="form-group">
                                                    <textarea className="message-control form-control user-text-editor" name="message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end col-lg-12 --> */}
                                    </form>
                                </div>
                                {/* <!-- end block-card-body --> */}
                            </div>
                            {/* <!-- end block-card --> */}
                            <div className="submit-wrap pt-4">
                                <div className="btn-box">
                                    <button type="submit" className="theme-btn gradient-btn border-0">Add New Post <i className="la la-arrow-right ml-1"></i></button>
                                </div>
                                {/* <!-- end btn-box --> */}
                            </div>
                            {/* <!-- end submit-wrap --> */}
                        </div>
                        {/* <!-- end col-lg-8 --> */}
                        <div className="col-lg-4">
                            <div className="block-card mb-4">
                                <div className="block-card-header">
                                    <h2 className="widget-title">Add Category</h2>
                                    <div className="stroke-shape"></div>
                                </div>
                                {/* <!-- end block-card-header --> */}
                                <div className="block-card-body">
                                    <form action="#" className="form-box">
                                        <div className="input-box">
                                            <label className="label-text">Category</label>
                                            <div className="form-group">
                                                <span className="la la-briefcase form-icon"></span>
                                                <input className="form-control" type="text" name="text" placeholder="Add category" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- end block-card-body --> */}
                            </div>
                            {/* <!-- end block-card --> */}
                            <div className="block-card mb-4">
                                <div className="block-card-header">
                                    <h2 className="widget-title">Add Tags</h2>
                                    <div className="stroke-shape"></div>
                                </div>
                                {/* <!-- end block-card-header --> */}
                                <div className="block-card-body">
                                    <form action="#" className="form-box">
                                        <div className="input-box">
                                            <label className="label-text">Tags (separate tags with commas)</label>
                                            <div className="form-group">
                                                <span className="la la-briefcase form-icon"></span>
                                                <input className="form-control" type="text" name="text" placeholder="Example: travel, nature" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- end block-card-body --> */}
                            </div>
                            {/* <!-- end block-card --> */}
                            <div className="block-card">
                                <div className="block-card-header">
                                    <h2 className="widget-title">Featured Image</h2>
                                    <div className="stroke-shape"></div>
                                </div>
                                {/* <!-- end block-card-header --> */}
                                <div className="block-card-body">
                                    <form method="post">
                                        <div className="file-upload-wrap file-upload-wrap-4">
                                            <input type="file" name="files[]" className="multi file-upload-input with-preview" multiple maxlength="3" />
                                            <span className="file-upload-text"><i className="la la-upload mr-2"></i>Upload image</span>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- end block-card-body --> */}
                            </div>
                            {/* <!-- end block-card --> */}

                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end add-listing-area --> */}
            {/* <!-- ================================
    END ADD-LISTING AREA
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
                                    <a href="index.html" className="foot-logo"><img src="images/logo-black.png" alt="logo" /></a>
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
================================= -->

<!-- start back-to-top --> */}
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

        </div>
    )
}

export default AddNewPost