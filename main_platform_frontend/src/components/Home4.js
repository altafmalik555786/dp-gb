import React from 'react'
import Header2 from './Header2'
import img1 from "../Assets/images/img1.jpg"
import img4 from "../Assets/images/img4.jpg"
import img5 from "../Assets/images/img5.jpg"
import img6 from "../Assets/images/img6.jpg"
import img7 from "../Assets/images/img7.jpg"
import img8 from "../Assets/images/img8.jpg"
import img10 from "../Assets/images/img10.jpg"
import img11 from "../Assets/images/img11.jpg"
import sketch from "../Assets/images/sketch.png"
import avatarImg from "../Assets/images/avatar-img.jpg"
import avatarImg2 from "../Assets/images/avatar-img2.jpg"
import listingLogo from "../Assets/images/listing-logo.jpg"
import listingLogo2 from "../Assets/images/listing-logo2.jpg"
import listingLogo3 from "../Assets/images/listing-logo3.jpg"
import cofeeVideo from "../Assets/video/coffee-shop.mp4"
import logoWhite from "../Assets/images/dpgb.png"
import Logo from '../Assets/images/dpgb.png'
import style from './logoStyle.module.scss'
import { Link } from 'react-router-dom'
function Home4() {
    return (
        <div>
            <Header2 />
            {/* <!-- ================================
    START HERO-WRAPPER AREA
================================= --> */}
            <section className="hero-wrapper hero-wrapper-4 pb-0">
                <div className="overlay opacity-5"></div>
                {/* <!-- end overlay --> */}
                <div className="video-bg">
                    <video controls autoplay loop>
                        <source src={cofeeVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-heading text-center">
                                <div className="section-heading">
                                    <p className="sec__desc pb-1">Your Guide to Awesome Italy merchants</p>
                                    <h2 className="sec__title">What's Happening in Italy Today?</h2>
                                </div>
                            </div>
                            {/* <!-- end hero-heading --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <div className="main-search-input main-search-input-2 d-block pb-4">
                                <form action="#" className="form-box row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">What are you</label>
                                            <div className="form-group">
                                                <span className="la la-search form-icon"></span>
                                                <input className="form-control" type="search" placeholder="looking for?" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Where to look?</label>
                                            <div className="form-group user-chosen-select-container">
                                                <select className="user-chosen-select">
                                                    <option value="0">Select a Location</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AX">Åland Islands</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AD">Andorra</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarctica</option>
                                                    <option value="AG">Antigua &amp; Barbuda</option>
                                                    <option value="AR">Argentina</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="AW">Aruba</option>
                                                    <option value="AC">Ascension Island</option>
                                                    <option value="AU">Australia</option>
                                                    <option value="AT">Austria</option>
                                                    <option value="AZ">Azerbaijan</option>
                                                    <option value="BS">Bahamas</option>
                                                    <option value="BH">Bahrain</option>
                                                    <option value="BD">Bangladesh</option>
                                                    <option value="BB">Barbados</option>
                                                    <option value="BY">Belarus</option>
                                                    <option value="BE">Belgium</option>
                                                    <option value="BZ">Belize</option>
                                                    <option value="BJ">Benin</option>
                                                    <option value="BM">Bermuda</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="BO">Bolivia</option>
                                                    <option value="BA">Bosnia &amp; Herzegovina</option>
                                                    <option value="BW">Botswana</option>
                                                    <option value="BV">Bouvet Island</option>
                                                    <option value="BR">Brazil</option>
                                                    <option value="IO">British Indian Ocean Territory</option>
                                                    <option value="VG">British Virgin Islands</option>
                                                    <option value="BN">Brunei</option>
                                                    <option value="BG">Bulgaria</option>
                                                    <option value="BF">Burkina Faso</option>
                                                    <option value="BI">Burundi</option>
                                                    <option value="KH">Cambodia</option>
                                                    <option value="CM">Cameroon</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="CV">Cape Verde</option>
                                                    <option value="BQ">Caribbean Netherlands</option>
                                                    <option value="KY">Cayman Islands</option>
                                                    <option value="CF">Central African Republic</option>
                                                    <option value="TD">Chad</option>
                                                    <option value="CL">Chile</option>
                                                    <option value="CN">China</option>
                                                    <option value="CO">Colombia</option>
                                                    <option value="KM">Comoros</option>
                                                    <option value="CG">Congo - Brazzaville</option>
                                                    <option value="CD">Congo - Kinshasa</option>
                                                    <option value="CK">Cook Islands</option>
                                                    <option value="CR">Costa Rica</option>
                                                    <option value="CI">Côte d’Ivoire</option>
                                                    <option value="HR">Croatia</option>
                                                    <option value="CW">Curaçao</option>
                                                    <option value="CY">Cyprus</option>
                                                    <option value="CZ">Czechia</option>
                                                    <option value="DK">Denmark</option>
                                                    <option value="DJ">Djibouti</option>
                                                    <option value="DM">Dominica</option>
                                                    <option value="DO">Dominican Republic</option>
                                                    <option value="EC">Ecuador</option>
                                                    <option value="EG">Egypt</option>
                                                    <option value="SV">El Salvador</option>
                                                    <option value="GQ">Equatorial Guinea</option>
                                                    <option value="ER">Eritrea</option>
                                                    <option value="EE">Estonia</option>
                                                    <option value="SZ">Eswatini</option>
                                                    <option value="ET">Ethiopia</option>
                                                    <option value="FK">Falkland Islands</option>
                                                    <option value="FO">Faroe Islands</option>
                                                    <option value="FJ">Fiji</option>
                                                    <option value="FI">Finland</option>
                                                    <option value="FR">France</option>
                                                    <option value="GF">French Guiana</option>
                                                    <option value="PF">French Polynesia</option>
                                                    <option value="TF">French Southern Territories</option>
                                                    <option value="GA">Gabon</option>
                                                    <option value="GM">Gambia</option>
                                                    <option value="GE">Georgia</option>
                                                    <option value="DE">Germany</option>
                                                    <option value="GH">Ghana</option>
                                                    <option value="GI">Gibraltar</option>
                                                    <option value="GR">Greece</option>
                                                    <option value="GL">Greenland</option>
                                                    <option value="GD">Grenada</option>
                                                    <option value="GP">Guadeloupe</option>
                                                    <option value="GU">Guam</option>
                                                    <option value="GT">Guatemala</option>
                                                    <option value="GG">Guernsey</option>
                                                    <option value="GN">Guinea</option>
                                                    <option value="GW">Guinea-Bissau</option>
                                                    <option value="GY">Guyana</option>
                                                    <option value="HT">Haiti</option>
                                                    <option value="HN">Honduras</option>
                                                    <option value="HK">Hong Kong SAR China</option>
                                                    <option value="HU">Hungary</option>
                                                    <option value="IS">Iceland</option>
                                                    <option value="IN">India</option>
                                                    <option value="ID">Indonesia</option>
                                                    <option value="IR">Iran</option>
                                                    <option value="IQ">Iraq</option>
                                                    <option value="IE">Ireland</option>
                                                    <option value="IM">Isle of Man</option>
                                                    <option value="IL">Israel</option>
                                                    <option value="IT">Italy</option>
                                                    <option value="JM">Jamaica</option>
                                                    <option value="JP">Japan</option>
                                                    <option value="JE">Jersey</option>
                                                    <option value="JO">Jordan</option>
                                                    <option value="KZ">Kazakhstan</option>
                                                    <option value="KE">Kenya</option>
                                                    <option value="KI">Kiribati</option>
                                                    <option value="XK">Kosovo</option>
                                                    <option value="KW">Kuwait</option>
                                                    <option value="KG">Kyrgyzstan</option>
                                                    <option value="LA">Laos</option>
                                                    <option value="LV">Latvia</option>
                                                    <option value="LB">Lebanon</option>
                                                    <option value="LS">Lesotho</option>
                                                    <option value="LR">Liberia</option>
                                                    <option value="LY">Libya</option>
                                                    <option value="LI">Liechtenstein</option>
                                                    <option value="LT">Lithuania</option>
                                                    <option value="LU">Luxembourg</option>
                                                    <option value="MO">Macao SAR China</option>
                                                    <option value="MG">Madagascar</option>
                                                    <option value="MW">Malawi</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="MV">Maldives</option>
                                                    <option value="ML">Mali</option>
                                                    <option value="MT">Malta</option>
                                                    <option value="MQ">Martinique</option>
                                                    <option value="MR">Mauritania</option>
                                                    <option value="MU">Mauritius</option>
                                                    <option value="YT">Mayotte</option>
                                                    <option value="MX">Mexico</option>
                                                    <option value="MD">Moldova</option>
                                                    <option value="MC">Monaco</option>
                                                    <option value="MN">Mongolia</option>
                                                    <option value="ME">Montenegro</option>
                                                    <option value="MS">Montserrat</option>
                                                    <option value="MA">Morocco</option>
                                                    <option value="MZ">Mozambique</option>
                                                    <option value="MM">Myanmar (Burma)</option>
                                                    <option value="NA">Namibia</option>
                                                    <option value="NR">Nauru</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="NL">Netherlands</option>
                                                    <option value="NC">New Caledonia</option>
                                                    <option value="NZ">New Zealand</option>
                                                    <option value="NI">Nicaragua</option>
                                                    <option value="NE">Niger</option>
                                                    <option value="NG">Nigeria</option>
                                                    <option value="NU">Niue</option>
                                                    <option value="MK">North Macedonia</option>
                                                    <option value="NO">Norway</option>
                                                    <option value="OM">Oman</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PS">Palestinian Territories</option>
                                                    <option value="PA">Panama</option>
                                                    <option value="PG">Papua New Guinea</option>
                                                    <option value="PY">Paraguay</option>
                                                    <option value="PE">Peru</option>
                                                    <option value="PH">Philippines</option>
                                                    <option value="PN">Pitcairn Islands</option>
                                                    <option value="PL">Poland</option>
                                                    <option value="PT">Portugal</option>
                                                    <option value="PR">Puerto Rico</option>
                                                    <option value="QA">Qatar</option>
                                                    <option value="RE">Réunion</option>
                                                    <option value="RO">Romania</option>
                                                    <option value="RU">Russia</option>
                                                    <option value="RW">Rwanda</option>
                                                    <option value="WS">Samoa</option>
                                                    <option value="SM">San Marino</option>
                                                    <option value="ST">São Tomé &amp; Príncipe</option>
                                                    <option value="SA">Saudi Arabia</option>
                                                    <option value="SN">Senegal</option>
                                                    <option value="RS">Serbia</option>
                                                    <option value="SC">Seychelles</option>
                                                    <option value="SL">Sierra Leone</option>
                                                    <option value="SG">Singapore</option>
                                                    <option value="SX">Sint Maarten</option>
                                                    <option value="SK">Slovakia</option>
                                                    <option value="SI">Slovenia</option>
                                                    <option value="SB">Solomon Islands</option>
                                                    <option value="SO">Somalia</option>
                                                    <option value="ZA">South Africa</option>
                                                    <option value="GS">South Georgia &amp; South Sandwich Islands</option>
                                                    <option value="KR">South Korea</option>
                                                    <option value="SS">South Sudan</option>
                                                    <option value="ES">Spain</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="BL">St. Barthélemy</option>
                                                    <option value="SH">St. Helena</option>
                                                    <option value="KN">St. Kitts &amp; Nevis</option>
                                                    <option value="LC">St. Lucia</option>
                                                    <option value="MF">St. Martin</option>
                                                    <option value="PM">St. Pierre &amp; Miquelon</option>
                                                    <option value="VC">St. Vincent &amp; Grenadines</option>
                                                    <option value="SR">Suriname</option>
                                                    <option value="SJ">Svalbard &amp; Jan Mayen</option>
                                                    <option value="SE">Sweden</option>
                                                    <option value="CH">Switzerland</option>
                                                    <option value="TW">Taiwan</option>
                                                    <option value="TJ">Tajikistan</option>
                                                    <option value="TZ">Tanzania</option>
                                                    <option value="TH">Thailand</option>
                                                    <option value="TL">Timor-Leste</option>
                                                    <option value="TG">Togo</option>
                                                    <option value="TK">Tokelau</option>
                                                    <option value="TO">Tonga</option>
                                                    <option value="TT">Trinidad &amp; Tobago</option>
                                                    <option value="TA">Tristan da Cunha</option>
                                                    <option value="TN">Tunisia</option>
                                                    <option value="TR">Turkey</option>
                                                    <option value="TM">Turkmenistan</option>
                                                    <option value="TC">Turks &amp; Caicos Islands</option>
                                                    <option value="TV">Tuvalu</option>
                                                    <option value="UG">Uganda</option>
                                                    <option value="UA">Ukraine</option>
                                                    <option value="AE">United Arab Emirates</option>
                                                    <option value="GB">United Kingdom</option>
                                                    <option value="US">United States</option>
                                                    <option value="UY">Uruguay</option>
                                                    <option value="UZ">Uzbekistan</option>
                                                    <option value="VU">Vanuatu</option>
                                                    <option value="VA">Vatican City</option>
                                                    <option value="VE">Venezuela</option>
                                                    <option value="VN">Vietnam</option>
                                                    <option value="WF">Wallis &amp; Futuna</option>
                                                    <option value="EH">Western Sahara</option>
                                                    <option value="YE">Yemen</option>
                                                    <option value="ZM">Zambia</option>
                                                    <option value="ZW">Zimbabwe</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">What Category?</label>
                                            <div className="form-group user-chosen-select-container">
                                                <select className="user-chosen-select">
                                                    <option value="0">Select a Category</option>
                                                    <option value="1">Shops</option>
                                                    <option value="2">Hotels</option>
                                                    <option value="3">Foods & Restaurants</option>
                                                    <option value="4">Fitness</option>
                                                    <option value="5">Travel</option>
                                                    <option value="6">Salons</option>
                                                    <option value="7">Event</option>
                                                    <option value="8">Business</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Search Activities</label>
                                            <div className="form-group">
                                                <button className="theme-btn gradient-btn border-0 w-100" type="submit"><i className="la la-search mr-2"></i>Search Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- end main-search-input --> */}
                        </div>
                        {/* <!-- end col-lg-9 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end hero-wrapper -->  */}

            {/* <!-- ================================
    END HERO-WRAPPER AREA
================================= -->

<!-- ================================
    START CATEGORY AREA
================================= --> */}
            <section className="category-area padding-top-180px padding-bottom-90px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Find Activities Around Italy</h2>
                                <p className="sec__desc">Browse by category</p>
                            </div>
                            {/* <!-- end section-heading --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row mt-5">
                        <div className="col-lg-6 responsive-column">
                            <div className="category-item category-item-layout-3 overflow-hidden">
                                <img src={img1} data-src={img1} alt="category-image" className="cat-img lazy" />
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
                        {/* <!-- end col-lg-6 --> */}
                        <div className="col-lg-3 responsive-column">
                            <div className="category-item category-item-layout-3 overflow-hidden">
                                <img src={img4} data-src={img4} alt="category-image" className="cat-img lazy" />
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
                            <div className="category-item category-item-layout-3 overflow-hidden">
                                <img src={img5} data-src={img5} alt="category-image" className="cat-img lazy" />
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
                            <div className="category-item category-item-layout-3 overflow-hidden">
                                <img src={img6} data-src={img6} alt="category-image" className="cat-img lazy" />
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
                            <div className="category-item category-item-layout-3 overflow-hidden">
                                <img src={img7} data-src={img7} alt="category-image" className="cat-img lazy" />
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
                        <div className="col-lg-6 responsive-column">
                            <div className="category-item category-item-layout-3 overflow-hidden">
                                <img src={img8} data-src={img8} alt="category-image" className="cat-img lazy" />
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
                        {/* <!-- end col-lg-6 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end category-area --> */}
            {/* <!-- ================================
    END CATEGORY AREA
================================= -->

<!-- ================================
    START CARD AREA
================================= --> */}
            <section className="card-area section-padding bg-gradient-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Popular Listings Around Italy</h2>
                                <p className="sec__desc">
                                    Explore the greatest listing in the city. You won’t be disappointed.
                                </p>
                            </div>
                            {/* <!-- end section-heading --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row padding-top-60px">
                        <div className="col-lg-12">
                            <div className="card-carousel owl-trigger-action">
                                <div className="card-item border border-color">
                                    <div className="card-image">
                                        <a href="listing-details.html" className="d-block">
                                            <img src={img4} className="card__img" alt="" />
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
                                                <a href="#"> www.altafgroupofcompanies.com</a>
                                            </li>
                                            <li><span className="la la-calendar-check-o icon"></span>
                                                Opened 1 month ago
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- end card-item --> */}
                                <div className="card-item border border-color">
                                    <div className="card-image">
                                        <a href="listing-details.html" className="d-block">
                                            <img src={img5} className="card__img" alt="" />
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
                                                <a href="#"> www.altafgroupofcompanies.com</a>
                                            </li>
                                            <li><span className="la la-calendar-check-o icon"></span>
                                                Opened 1 month ago
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- end card-item --> */}
                                <div className="card-item border border-color">
                                    <div className="card-image">
                                        <a href="listing-details.html" className="d-block">
                                            <img src={img6} className="card__img" alt="" />
                                            <span className="badge">now open</span>
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
                                            <a href="listing-details.html">Kennedy Space Center</a>
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
                                                <a href="#"> www.altafgroupofcompanies.com</a>
                                            </li>
                                            <li><span className="la la-calendar-check-o icon"></span>
                                                Opened 1 month ago
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- end card-item --> */}
                                <div className="card-item border border-color">
                                    <div className="card-image">
                                        <a href="listing-details.html" className="d-block">
                                            <img src={img7} className="card__img" alt="" />
                                            <span className="badge bg-10">closed</span>
                                        </a>
                                        <span className="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                            <i className="la la-bookmark"></i>
                                        </span>
                                    </div>
                                    <div className="card-content">
                                        <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                            <img src={sketch} alt="author-img" />
                                        </a>
                                        <h4 className="card-title pt-3">
                                            <a href="listing-details.html">National Gallery of Art</a>
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
                                                <a href="#"> www.altafgroupofcompanies.com</a>
                                            </li>
                                            <li><span className="la la-calendar-check-o icon"></span>
                                                Opened 1 month ago
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- end card-item --> */}
                            </div>
                            {/* <!-- end card-carousel-3 --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
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
    START HIW AREA
================================= --> */}
            <section className="hiw-area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">See How it Works</h2>
                                <p className="sec__desc">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, <br />
                                    a feugiat eros. Nunc ut lacinia tortors.
                                </p>
                            </div>
                            {/* <!-- end section-heading --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row padding-top-60px">
                        <div className="col-lg-4 responsive-column">
                            <div className="info-box info--box">
                                <div className="info-icon gradient-icon">
                                    <svg id="_x31_" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="svg-gradient">
                                                <stop offset="5%" stop-color="#ff6b6b" />
                                                <stop offset="95%" stop-color="#ffbb3d" />
                                            </linearGradient>
                                        </defs>
                                        <path d="m17 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z" /><path d="m23.5 24c-.128 0-.256-.049-.354-.146l-3.318-3.318c-.195-.195-.195-.512 0-.707s.512-.195.707 0l3.318 3.318c.195.195.195.512 0 .707-.097.097-.225.146-.353.146z" /><path d="m10.5 21h-8c-1.378 0-2.5-1.121-2.5-2.5v-13c0-1.379 1.122-2.5 2.5-2.5h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.827 0-1.5.673-1.5 1.5v13c0 .827.673 1.5 1.5 1.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z" /><path d="m11.5 6h-6c-.827 0-1.5-.673-1.5-1.5v-2c0-.276.224-.5.5-.5h1.55c.233-1.14 1.242-2 2.45-2s2.217.86 2.45 2h1.55c.276 0 .5.224.5.5v2c0 .827-.673 1.5-1.5 1.5zm-6.5-3v1.5c0 .275.224.5.5.5h6c.276 0 .5-.225.5-.5v-1.5h-1.5c-.276 0-.5-.224-.5-.5 0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 .276-.224.5-.5.5z" /><path d="m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z" /><path d="m12.5 12h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z" /><path d="m10 15h-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6.5c.276 0 .5.224.5.5s-.224.5-.5.5z" /><path d="m16.5 10c-.276 0-.5-.224-.5-.5v-4c0-.827-.673-1.5-1.5-1.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c1.378 0 2.5 1.121 2.5 2.5v4c0 .276-.224.5-.5.5z" />
                                    </svg>
                                </div>
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title">Find Businesses</h4>
                                    <p className="info__desc">
                                        Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                                        luctus, finibus tellus ut, convallis eros.
                                    </p>
                                </div>
                                {/* <!-- end info-content --> */}
                            </div>
                            {/* <!-- end info-box --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div className="col-lg-4 responsive-column">
                            <div className="info-box info--box">
                                <div className="info-icon gradient-icon">
                                    <svg id="Capa_222" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="svg-gradient2">
                                                <stop offset="5%" stop-color="#ff6b6b" />
                                                <stop offset="95%" stop-color="#ffbb3d" />
                                            </linearGradient>
                                        </defs>
                                        <g><path d="m494.47 24.725h-476.94c-9.666 0-17.53 7.864-17.53 17.53v323.678c0 9.666 7.864 17.53 17.53 17.53h98.577l2.023 9.414c2.152 10.021 10.293 17.639 20.14 19.397-4.048 7.262-6.365 15.616-6.365 24.504 0 27.844 22.653 50.497 50.497 50.497s50.497-22.653 50.497-50.497c0-8.729-2.228-16.947-6.143-24.118h41.938c-3.915 7.171-6.143 15.389-6.143 24.118 0 27.844 22.653 50.497 50.497 50.497s50.497-22.653 50.497-50.497c0-8.788-2.261-17.056-6.225-24.261 10.649-1.096 19.673-9.011 21.957-19.641l54.564-253.956h63.132v227.013c0 1.381-1.123 2.504-2.504 2.504h-81.859c-4.15 0-7.513 3.363-7.513 7.513s3.363 7.513 7.513 7.513h81.859c9.666 0 17.53-7.864 17.53-17.53v-323.678c.001-9.666-7.863-17.53-17.529-17.53zm-312.068 447.524c-19.559 0-35.472-15.913-35.472-35.472s15.912-35.472 35.472-35.472 35.472 15.913 35.472 35.472c0 19.56-15.913 35.472-35.472 35.472zm130.647 0c-19.559 0-35.472-15.913-35.472-35.472s15.913-35.472 35.472-35.472 35.472 15.913 35.472 35.472c-.001 19.56-15.914 35.472-35.472 35.472zm162.559-348.355c5.038-4.584 8.204-11.19 8.204-18.521 0-13.809-11.234-25.043-25.043-25.043h-23.634c-23.138 0-43.46 16.42-48.322 39.042l-.971 4.521h-70.945c-4.15 0-7.513 3.363-7.513 7.513s3.363 7.513 7.513 7.513h67.718l-7.625 35.491h-272.805c-7.602 0-14.702 3.392-19.48 9.305-4.777 5.912-6.601 13.566-5.004 20.999l18.524 86.217c.872 4.058 4.865 6.633 8.923 5.768 4.056-.872 6.638-4.867 5.767-8.923l-18.524-86.217c-.638-2.974.091-6.036 2.002-8.401 1.911-2.364 4.751-3.721 7.792-3.721h278.875c3.541 0 6.601-2.473 7.346-5.935l13.1-60.973c3.383-15.745 17.527-27.172 33.631-27.172h23.634c5.523 0 10.017 4.494 10.017 10.017s-4.494 10.017-10.017 10.017h-23.634c-6.724 0-12.631 4.772-14.045 11.348l-56.504 262.983c-.985 4.585-5.103 7.913-9.793 7.913h-9.887c-8.697-7.091-19.788-11.353-31.858-11.353s-23.161 4.262-31.858 11.353h-66.93c-8.697-7.091-19.788-11.353-31.858-11.353s-23.161 4.262-31.858 11.353h-7.93c-4.69 0-8.809-3.328-9.794-7.913l-15.419-71.761c-.871-4.058-4.862-6.63-8.923-5.768-4.057.872-6.638 4.867-5.767 8.923l10.168 47.322h-95.351c-1.381 0-2.504-1.123-2.504-2.504v-227.014h265.121c4.15 0 7.513-3.363 7.513-7.513s-3.363-7.513-7.513-7.513h-265.121v-81.64c0-1.381 1.124-2.504 2.504-2.504h476.94c1.381 0 2.504 1.123 2.504 2.504v81.64z" /><circle cx="55.532" cy="81.541" r="14.65" /><circle cx="100.084" cy="81.541" r="14.65" /><circle cx="144.636" cy="81.541" r="14.65" /><path d="m269.819 334.913h-44.186c-2.1 0-4.104.878-5.526 2.423s-2.134 3.614-1.961 5.706l2.278 27.661c.321 3.897 3.577 6.897 7.487 6.897h39.631c3.91 0 7.167-2.999 7.487-6.897l2.277-27.661c.172-2.092-.539-4.161-1.961-5.706-1.423-1.544-3.427-2.423-5.526-2.423zm-9.198 27.661h-25.791l-1.04-12.635h27.873z" /><path d="m122.479 246.223c.744 3.462 3.804 5.935 7.345 5.935h52.577c4.268.093 7.93-3.884 7.487-8.129l-2.277-27.661c-.321-3.897-3.577-6.897-7.487-6.897h-56.243c-4.643-.116-8.434 4.577-7.345 9.091zm50.726-21.726 1.04 12.635h-38.35l-2.715-12.635z" /><path d="m150.834 334.913c-2.27 0-4.418 1.026-5.844 2.791-1.426 1.766-1.978 4.081-1.501 6.3l5.943 27.661c.744 3.462 3.804 5.935 7.345 5.935h35.954c2.1 0 4.104-.878 5.526-2.423s2.134-3.614 1.961-5.706l-2.278-27.661c-.321-3.897-3.577-6.897-7.487-6.897zm12.013 27.661-2.715-12.635h23.401l1.04 12.635z" /><path d="m137.357 272.192c-2.27 0-4.417 1.026-5.844 2.791-1.426 1.766-1.978 4.081-1.501 6.3l5.943 27.662c.743 3.462 3.804 5.935 7.345 5.935h44.266c2.1 0 4.104-.878 5.526-2.423s2.134-3.614 1.961-5.706l-2.278-27.662c-.321-3.897-3.577-6.897-7.487-6.897zm12.013 27.661-2.715-12.636h31.713l1.04 12.636z" /><path d="m210.094 245.261c.321 3.897 3.577 6.897 7.487 6.897h60.288c3.91 0 7.167-2.999 7.487-6.897l2.277-27.661c.44-4.245-3.218-8.222-7.488-8.129h-64.843c-4.265-.093-7.932 3.884-7.487 8.129zm61.896-20.764-1.041 12.635h-46.449l-1.04-12.635z" /><path d="m307.885 314.879h46.223c3.541 0 6.601-2.473 7.346-5.935l5.943-27.662c.476-2.219-.075-4.534-1.502-6.3-1.426-1.765-3.574-2.791-5.844-2.791h-49.888c-3.91 0-7.167 2.999-7.487 6.897l-2.277 27.662c-.172 2.092.539 4.161 1.961 5.706 1.421 1.544 3.425 2.423 5.525 2.423zm9.197-27.662h33.67l-2.715 12.636h-31.996z" /><path d="m313.049 252.158h54.535c3.541 0 6.601-2.473 7.346-5.935l5.943-27.661c1.088-4.514-2.703-9.206-7.346-9.091h-58.2c-3.91 0-7.167 2.999-7.487 6.897l-2.277 27.661c-.445 4.245 3.218 8.222 7.486 8.129zm9.197-27.661h41.982l-2.715 12.635h-40.308z" /><path d="m274.983 272.192h-54.515c-2.1 0-4.104.878-5.526 2.423s-2.134 3.614-1.961 5.706l2.277 27.662c.321 3.897 3.577 6.897 7.487 6.897h49.96c3.91 0 7.167-2.999 7.487-6.897l2.277-27.662c.172-2.092-.539-4.161-1.961-5.706s-3.426-2.423-5.525-2.423zm-9.198 27.661h-36.12l-1.04-12.636h38.201z" /><path d="m302.72 377.599h37.91c3.541 0 6.601-2.473 7.346-5.935l5.944-27.661c.476-2.219-.075-4.534-1.502-6.3-1.426-1.765-3.574-2.791-5.844-2.791h-41.576c-3.91 0-7.167 2.999-7.487 6.897l-2.277 27.661c-.172 2.092.539 4.161 1.961 5.706s3.426 2.423 5.525 2.423zm9.198-27.66h25.357l-2.715 12.635h-23.683z" /><path d="m182.402 423.882c-7.122 0-12.895 5.774-12.895 12.895 0 7.122 5.773 12.896 12.895 12.896s12.895-5.774 12.895-12.896c0-7.121-5.773-12.895-12.895-12.895z" /><path d="m313.049 423.882c-7.122 0-12.895 5.774-12.895 12.895 0 7.122 5.773 12.896 12.895 12.896s12.895-5.774 12.895-12.896c0-7.121-5.773-12.895-12.895-12.895z" /></g>
                                    </svg>
                                </div>
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title">Review Listings</h4>
                                    <p className="info__desc">
                                        Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                                        luctus, finibus tellus ut, convallis eros.
                                    </p>
                                </div>
                                {/* <!-- end info-content --> */}
                            </div>
                            {/* <!-- end info-box --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div className="col-lg-4 responsive-column">
                            <div className="info-box info--box">
                                <div className="info-icon gradient-icon">
                                    <svg width="40" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" >
                                        <defs>
                                            <linearGradient id="svg-gradient3">
                                                <stop offset="5%" stop-color="#ff6b6b" />
                                                <stop offset="95%" stop-color="#ffbb3d" />
                                            </linearGradient>
                                        </defs>
                                        <g>
                                            <path d="M502,289.984h-8V50c0-27.57-22.43-50-50-50H68.002c-27.57,0-50,22.43-50,50v239.985h-8c-5.523,0-10,4.477-10,10v17
                                        c0,27.019,21.981,49,49,49h11.56c-7.945,16.915-8.736,36.501-1.844,54.216l33.231,85.424c1.539,3.956,5.318,6.377,9.322,6.377
                                        c1.206,0,2.432-0.22,3.623-0.683c5.147-2.002,7.696-7.798,5.694-12.945l-33.231-85.424c-5.842-15.017-3.909-31.929,5.172-45.24
                                        l16.481-24.16v19.385c0,5.523,4.477,10,10,10s10-4.477,10-10v-164.89c0-7.745,6.301-14.045,14.045-14.045
                                        s14.045,6.3,14.045,14.045v131.709c0,5.523,4.477,10,10,10s10-4.477,10-10v-47.067c0-7.745,6.3-14.045,14.045-14.045
                                        s14.045,6.3,14.045,14.045v47.067c0,5.523,4.477,10,10,10s10-4.477,10-10v-47.067c0-7.745,6.301-14.045,14.045-14.045
                                        s14.045,6.3,14.045,14.045v47.067c0,5.523,4.477,10,10,10s10-4.477,10-10v-47.067v-0.143c0-7.745,6.3-14.045,14.045-14.045
                                        s14.045,6.3,14.045,14.045v89.299c0,29.935-5.95,59.076-17.686,86.614l-16.884,39.62c-2.165,5.081,0.199,10.955,5.279,13.12
                                        c1.279,0.545,2.608,0.803,3.916,0.803c3.887,0,7.584-2.281,9.204-6.082l16.884-39.62c12.797-30.032,19.287-61.811,19.287-94.454
                                        v-5.859h151.629c27.019,0,49-21.981,49-49v-17C511.999,294.461,507.522,289.984,502,289.984z M73.14,345.984H49.002
                                        c-15.99,0-29-13.009-29-29v-7h77.696L73.14,345.984z M99.012,198.044v21.955h-7.013c-9.925,0-18-8.075-18-18
                                        c0-9.925,8.075-18,18-18h10.058C100.107,188.284,99.012,193.037,99.012,198.044z M164.057,183.999h35.588c9.925,0,18,8.075,18,18
                                        c0,9.925-8.075,18-18,18h-32.543v-21.955C167.102,193.037,166.006,188.284,164.057,183.999z M277.326,248.499
                                        c-9.415,0-17.948,3.843-24.117,10.04c-6.158-6.114-14.631-9.898-23.973-9.898c-9.378,0-17.882,3.812-24.045,9.966
                                        c-6.163-6.155-14.667-9.966-24.045-9.966c-5.007,0-9.76,1.095-14.045,3.044v-11.686h32.543c20.953,0,38-17.047,38-38
                                        s-17.047-38-38-38H91.999c-20.953,0-38,17.047-38,38s17.047,38,38,38h7.013v49.986h-61.01V50c0-16.542,13.458-30,30-30H444
                                        c16.542,0,30,13.458,30,30v196.013h-86.011c-5.523,0-10,4.477-10,10s4.477,10,10,10H474v23.972H311.371v-7.441
                                        C311.372,263.77,296.099,248.499,277.326,248.499z M492,316.984c0,15.991-13.009,29-29,29H311.371v-36H492V316.984z"/>
                                        </g>
                                        <g>
                                            <path d="M355.22,248.939c-1.869-1.86-4.44-2.93-7.07-2.93c-2.64,0-5.21,1.07-7.07,2.93c-1.87,1.86-2.93,4.44-2.93,7.07
                                        c0,2.64,1.06,5.21,2.93,7.07c1.86,1.87,4.43,2.93,7.07,2.93c2.63,0,5.21-1.06,7.07-2.93c1.86-1.86,2.93-4.43,2.93-7.07
                                        C358.15,253.378,357.08,250.799,355.22,248.939z"/>
                                        </g>
                                        <g>
                                            <path d="M179.231,112.929c-1.86-1.86-4.439-2.93-7.07-2.93c-2.64,0-5.21,1.07-7.07,2.93c-1.87,1.86-2.93,4.44-2.93,7.07
                                        c0,2.63,1.06,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93c2.63,0,5.2-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07
                                        C182.161,117.369,181.091,114.789,179.231,112.929z"/>
                                        </g>
                                        <g>
                                            <path d="M135.958,109.999H63.999c-5.523,0-10,4.477-10,10c0,5.523,4.477,10,10,10h71.959c5.523,0,10-4.477,10-10
                                        C145.958,114.476,141.481,109.999,135.958,109.999z"/>
                                        </g>
                                        <g>
                                            <path d="M227.644,54H64.052c-5.523,0-10,4.477-10,10s4.477,10,10,10h163.592c5.523,0,10-4.477,10-10S233.167,54,227.644,54z" />
                                        </g>
                                        <g>
                                            <path d="M428,125.571v-15.072c0-11.028-8.972-20-20-20h-35.167c-3.645,0-7.054,0.996-10,2.706c-2.946-1.71-6.355-2.706-10-2.706
                                        h-35.167c-11.028,0-20,8.972-20,20v14.694c-18.012,4.423-31.417,20.7-31.417,40.056v32.75c0,5.523,4.477,10,10,10h171.749
                                        c5.524,0,10.001-4.477,10.001-10v-32.75C458,146.404,445.292,130.482,428,125.571z M372.833,110.499H408v13.5h-35.167V110.499z
                                         M317.668,110.499h35.167v13.5h-35.167V110.499z M438.001,187.999L438.001,187.999h-151.75v-22.75
                                        c0-11.717,9.533-21.25,21.25-21.25h0.167h55.167h53.917c11.717,0,21.25,9.533,21.25,21.25V187.999z"/>
                                        </g>
                                    </svg>
                                </div>
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title">Make a Reservation</h4>
                                    <p className="info__desc">
                                        Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                                        luctus, finibus tellus ut, convallis eros.
                                    </p>
                                </div>
                                {/* <!-- end info-content --> */}
                            </div>
                            {/* <!-- end info-box --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end hiw-area --> */}
            {/* <!-- ================================
    END HIW AREA
================================= --> */}

            <div className="section-block"></div>

            {/* <!-- ================================
       START BLOG AREA
================================= --> */}
            <section className="blog-area section--padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="section-heading">
                                    <h2 className="sec__title">Read Our Latest Tips & Articles</h2>
                                    <p className="sec__desc">
                                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, <br />
                                        a feugiat eros. Nunc ut lacinia tortors.
                                    </p>
                                </div>
                                {/* <!-- end section-heading --> */}
                                <div className="more-btn-box pt-4">
                                    <a href="blog-grid.html" className="theme-btn gradient-btn"><i className="la la-list-alt mr-1"></i>View All Post</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 responsive-column">
                                    <div className="card-item card-item-layout-2">
                                        <div className="card-image">
                                            <a href="blog-single.html" className="d-block">
                                                <img src={img10} data-src={img10} className="card__img lazy" alt="blog image" />
                                                <span className="badge">January 15, 2020</span>
                                            </a>
                                            <div className="post-share">
                                                <span className="la la-share-alt share-icon"></span>
                                                <div className="post-share-social">
                                                    <a href="#" className="post-share-social-icon"><i className="lab la-facebook-f"></i></a>
                                                    <a href="#" className="post-share-social-icon"><i className="lab la-twitter"></i></a>
                                                    <a href="#" className="post-share-social-icon"><i className="lab la-instagram"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card-image --> */}
                                        <div className="card-content">
                                            <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="Kamran Adi">
                                                <img src={avatarImg} alt="author-img" />
                                            </a>
                                            <ul className="listing-meta d-flex justify-content-center align-items-center">
                                                <li>
                                                    <a href="#" className="listing-cat-link">Travel</a>,
                                                    <a href="#" className="listing-cat-link">News</a>
                                                </li>
                                            </ul>
                                            <h4 className="card-title pt-2">
                                                <a href="blog-single.html">Five Of Nature’s Swimming Pools</a>
                                            </h4>
                                            <p className="card-sub mt-3">
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem eaque ipsam
                                            </p>
                                            <ul className="listing-action d-flex justify-content-around align-items-center border-top border-top-color mt-4 pt-4">
                                                <li className="pill"><i className="la la-share mr-1"></i>275</li>
                                                <li className="pill"><i className="la la-eye mr-1"></i>319</li>
                                                <li className="pill"><i className="la la-comment mr-1"></i>24</li>
                                            </ul>
                                        </div>
                                        {/* <!-- end card-content --> */}
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-6 --> */}
                                <div className="col-lg-6 responsive-column">
                                    <div className="card-item card-item-layout-2" >
                                        <div className="card-image">
                                            <a href="blog-single.html" className="d-block">
                                                <img src={img11} data-src={img11} className="card__img lazy" alt="blog image" />
                                                <span className="badge">March 15, 2020</span>
                                            </a>
                                            <div className="post-share">
                                                <span className="la la-share-alt share-icon"></span>
                                                <div className="post-share-social">
                                                    <a href="#" className="post-share-social-icon"><i className="lab la-facebook-f"></i></a>
                                                    <a href="#" className="post-share-social-icon"><i className="lab la-twitter"></i></a>
                                                    <a href="#" className="post-share-social-icon"><i className="lab la-instagram"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card-image --> */}
                                        <div className="card-content">
                                            <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="Kamran Adi">
                                                <img src={avatarImg2} alt="author-img" />
                                            </a>
                                            <ul className="listing-meta d-flex justify-content-center align-items-center">
                                                <li>
                                                    <a href="#" className="listing-cat-link">BusinessOwners</a>,
                                                    <a href="#" className="listing-cat-link">Restaurants</a>
                                                </li>
                                            </ul>
                                            <h4 className="card-title pt-2">
                                                <a href="blog-single.html">The joyless side of happy hour</a>
                                            </h4>
                                            <p className="card-sub mt-3">
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem eaque ipsam
                                            </p>
                                            <ul className="listing-action d-flex justify-content-around align-items-center border-top border-top-color mt-4 pt-4">
                                                <li className="pill"><i className="la la-share mr-1"></i>275</li>
                                                <li className="pill"><i className="la la-eye mr-1"></i>319</li>
                                                <li className="pill"><i className="la la-comment mr-1"></i>24</li>
                                            </ul>
                                        </div>
                                        {/* <!-- end card-content --> */}
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-6 --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end blog-area --> */}
            {/* <!-- ================================
       START BLOG AREA
================================= -->

<!-- ================================
    START CTA AREA
================================= --> */}
            <section className="cta-area bg-gradient-gray responsive-text-center padding-top-80px padding-bottom-80px">
                <span className="circle-bg position-absolute circle-bg-1"></span>
                <span className="circle-bg position-absolute circle-bg-2"></span>
                <span className="circle-bg position-absolute circle-bg-3"></span>
                <span className="circle-bg position-absolute circle-bg-4"></span>
                <span className="circle-bg position-absolute circle-bg-5"></span>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="section-heading">
                                <h2 className="sec__title font-size-30 line-height-40 mb-2">Curious about the DPGB? <br /> Join now</h2>
                                <p className="sec__desc">Grow your marketing and be happy with your business</p>
                            </div>
                            {/* <!-- end section-heading --> */}
                        </div>
                        {/* <!-- end col-lg-9 --> */}
                        <div className="col-lg-3">
                            <div className="btn-box text-right">
                                <a href="#" className="theme-btn gradient-btn" data-toggle="modal" data-target="#signUpModal"><i className="la la-user-plus mr-2"></i>Get Started</a>
                            </div>
                            {/* <!-- end btn-box --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end cta-area --> */}
            {/* <!-- ================================
    END CTA AREA
================================= -->

<!-- ================================
       START FOOTER AREA
================================= --> */}
            <section className="footer-area bg-dark pattern-bg before-none padding-top-30px padding-bottom-30px">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <ul className="list-items term-list term-list-2">
                                <li>
                                    <a href="#" className="before-none">
                                        <svg className="mr-1" width="18" viewBox="-23 0 512 512.00011" xmlns="http://www.w3.org/2000/svg"><path d="m367.664062 34.136719c2.789063-5.683594 3.195313-12.113281 1.148438-18.101563-2.046875-5.988281-6.300781-10.824218-11.984375-13.613281-11.734375-5.753906-25.957031-.894531-31.714844 10.835937l-23.90625 48.722657c-20.226562-10.765625-43.289062-16.878907-67.757812-16.878907s-47.53125 6.113282-67.757813 16.878907l-23.90625-48.722657c-5.757812-11.730468-19.984375-16.59375-31.714844-10.835937-5.683593 2.789063-9.9375 7.621094-11.984374 13.613281-2.046876 5.988282-1.640626 12.417969 1.148437 18.097656l28.144531 57.355469c-23.964844 25.832031-38.640625 60.390625-38.640625 98.320313 0 4.179687 3.386719 7.566406 7.566407 7.566406h274.289062c4.175781 0 7.5625-3.386719 7.5625-7.566406 0-37.929688-14.675781-72.488282-38.636719-98.320313zm-28.96875-14.21875c2.078126-4.238281 7.226563-6 11.46875-3.917969 4.242188 2.082031 6 7.226562 3.917969 11.472656l-25.988281 52.957032c-4.398438-3.8125-9.035156-7.367188-13.875-10.632813zm-221.960937-3.917969c4.242187-2.082031 9.390625-.324219 11.46875 3.917969l24.476563 49.878906c-4.839844 3.269531-9.476563 6.820313-13.878907 10.636719l-25.984375-52.960938c-2.085937-4.246094-.324218-9.390625 3.917969-11.472656zm-12.648437 166.246094c3.929687-67.945313 60.449218-122.019532 129.363281-122.019532 68.914062 0 125.433593 54.074219 129.363281 122.019532zm0 0" /><path d="m431.097656 214.515625c-19.738281 0-35.796875 16.058594-35.796875 35.800781v121.007813c0 19.742187 16.058594 35.800781 35.796875 35.800781 19.742188 0 35.800782-16.058594 35.800782-35.800781v-121.007813c0-19.742187-16.058594-35.800781-35.800782-35.800781zm20.675782 156.808594c0 11.402343-9.273438 20.675781-20.675782 20.675781-11.398437 0-20.671875-9.273438-20.671875-20.675781v-121.007813c0-11.402344 9.273438-20.675781 20.671875-20.675781 11.402344 0 20.675782 9.273437 20.675782 20.675781zm0 0" /><path d="m370.59375 214.515625h-39.328125c-4.175781 0-7.5625 3.386719-7.5625 7.5625 0 4.179687 3.386719 7.5625 7.5625 7.5625h31.765625v178.492187h-32.773438c-4.179687 0-7.5625 3.386719-7.5625 7.5625v60.507813c0 11.398437-9.273437 20.671875-20.671874 20.671875-11.402344 0-20.675782-9.273438-20.675782-20.671875v-60.507813c0-4.175781-3.382812-7.5625-7.5625-7.5625h-80.671875c-4.179687 0-7.5625 3.386719-7.5625 7.5625v60.507813c0 11.398437-9.273437 20.671875-20.675781 20.671875-11.398438 0-20.671875-9.273438-20.671875-20.671875v-60.507813c0-4.175781-3.382813-7.5625-7.5625-7.5625h-32.773437v-178.492187h190.589843c4.179688 0 7.566407-3.382813 7.566407-7.5625 0-4.175781-3.386719-7.5625-7.566407-7.5625h-198.152343c-4.179688 0-7.5625 3.386719-7.5625 7.5625v193.617187c0 4.179688 3.382812 7.5625 7.5625 7.5625h32.773437v52.945313c0 19.738281 16.058594 35.796875 35.796875 35.796875 19.742188 0 35.800781-16.058594 35.800781-35.796875v-52.945313h65.546875v52.945313c0 19.738281 16.058594 35.796875 35.800782 35.796875 19.738281 0 35.796874-16.058594 35.796874-35.796875v-52.945313h32.773438c4.179688 0 7.5625-3.382812 7.5625-7.5625v-193.617187c0-4.175781-3.386719-7.5625-7.5625-7.5625zm0 0" /><path d="m35.800781 214.515625c-19.742187 0-35.800781 16.058594-35.800781 35.800781v121.007813c0 19.742187 16.058594 35.800781 35.800781 35.800781 19.738281 0 35.796875-16.058594 35.796875-35.800781v-121.007813c0-19.742187-16.058594-35.800781-35.796875-35.800781zm20.671875 156.808594c0 11.402343-9.273437 20.675781-20.671875 20.675781-11.402343 0-20.675781-9.273438-20.675781-20.675781v-121.007813c0-11.402344 9.273438-20.675781 20.675781-20.675781 11.398438 0 20.671875 9.273437 20.671875 20.675781zm0 0" /><path d="m168.910156 117.707031c-13.066406 0-23.699218 10.632813-23.699218 23.699219s10.632812 23.699219 23.699218 23.699219 23.699219-10.632813 23.699219-23.699219-10.632813-23.699219-23.699219-23.699219zm0 32.269531c-4.726562 0-8.570312-3.84375-8.570312-8.570312s3.84375-8.570312 8.570312-8.570312c4.726563 0 8.570313 3.84375 8.570313 8.570312s-3.84375 8.570312-8.570313 8.570312zm0 0" /><path d="m297.988281 117.707031c-13.066406 0-23.699219 10.632813-23.699219 23.699219s10.632813 23.699219 23.699219 23.699219c13.066407 0 23.699219-10.632813 23.699219-23.699219s-10.632812-23.699219-23.699219-23.699219zm0 32.269531c-4.726562 0-8.570312-3.84375-8.570312-8.570312s3.84375-8.570312 8.570312-8.570312c4.726563 0 8.570313 3.84375 8.570313 8.570312s-3.84375 8.570312-8.570313 8.570312zm0 0" /></svg>
                                        Google Play
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="before-none">
                                        <svg className="mr-1" width="18" viewBox="-71 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265.679688 0h-160.679688c-57.898438 0-105 47.101562-105 105v302c0 57.898438 47.101562 105 105 105h160.679688c57.898437 0 105-47.101562 105-105v-302c0-57.898438-47.101563-105-105-105zm75 407c0 41.355469-33.644532 75-75 75h-160.679688c-41.355469 0-75-33.644531-75-75v-302c0-41.355469 33.644531-75 75-75h160.679688c41.355468 0 75 33.644531 75 75zm0 0" /><path d="m286.476562 309.609375c3.320313-2.75 5.433594-6.90625 5.433594-11.554687 0-8.28125-6.714844-15-15-15h-11.851562l-60.449219-74.957032 25.882813-32.097656c5.203124-6.449219 4.191406-15.890625-2.257813-21.09375-6.449219-5.199219-15.894531-4.1875-21.09375 2.261719l-21.800781 27.035156-21.804688-27.035156c-5.199218-6.449219-14.644531-7.460938-21.089844-2.261719-6.449218 5.203125-7.460937 14.644531-2.261718 21.09375l25.886718 32.097656-60.453124 74.957032h-11.847657c-8.285156 0-15 6.71875-15 15 0 4.648437 2.113281 8.804687 5.433594 11.554687l-6.5625 8.140625c-5.203125 6.445312-4.191406 15.890625 2.257813 21.089844 2.773437 2.238281 6.101562 3.324218 9.410156 3.324218 4.378906 0 8.71875-1.90625 11.683594-5.582031l18.972656-23.527343h130.75l18.972656 23.527343c2.964844 3.675781 7.304688 5.582031 11.683594 5.582031 3.308594 0 6.636718-1.085937 9.40625-3.324218 6.449218-5.199219 7.460937-14.644532 2.261718-21.089844zm-142.320312-26.554687 41.183594-51.0625 41.183594 51.0625zm0 0" /></svg>
                                        App Store
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <ul className="list-items term-list term-list-2 text-right">
                                <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-block-2 margin-top-30px margin-bottom-30px"></div>
                    <div className="row">
                        <div className="col-lg-3 responsive-column">
                            <div className="footer-item footer-item-2">
                                <div className="footer-logo">
                                    <Link to="/" className="foot-logo"><img src={logoWhite} alt="logo" /></Link>
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
                                    <li><Link to="/add-listing">Add Listing</Link></li>
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
                                    <li><span className="d-block text-white mb-1"><i className="la la-phone mr-1 text-color-2"></i>Phone:</span><a href="#">923013109562</a></li>
                                    <li><span className="d-block text-white mb-1"><i className="la la-envelope mr-1 text-color-2"></i>Email:</span><a href="#">DPGB@gmail.com</a></li>
                                </ul>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row pt-4">
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
                    <div className="section-block-2 margin-top-30px margin-bottom-30px"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copy-right d-flex align-items-center justify-content-between">
                                <p className="copy__desc">
                                    &copy; Copyright DPGB <script> document.write(new Date().getFullYear()); </script>. Made with
                                    <span className="la la-heart-o"></span> by <a href="https://themeforest.net/user/techydevs/portfolio">TechyDevs</a>
                                </p>
                                <div className="footer-chosen-container footer-chosen-container-2 user-chosen-select-container d-flex align-items-center justify-content-end">
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
                <i class="la la-arrow-up" title="Go top"></i>
            </div>
            {/* <!-- end back-to-top --> */}

            {/* <!-- Modal --> */}
            <div class="modal fade modal-container login-form" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header align-items-center mh-bg">
                            <h5 class="modal-title" id="loginModalTitle">Hey, Welcome back!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="la la-times-circle"></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method="post" class="form-box">
                                <div class="input-box">
                                    <label class="label-text">Username or email</label>
                                    <div class="form-group">
                                        <span class="la la-user form-icon"></span>
                                        <input class="form-control form-control-styled" type="text" name="text" placeholder="Username or email address" />
                                    </div>
                                </div>
                                <div class="input-box">
                                    <label class="label-text">Password</label>
                                    <div class="form-group">
                                        <span class="la la-lock form-icon"></span>
                                        <input class="form-control form-control-styled" type="text" name="text" placeholder="Enter password" />
                                    </div>
                                </div>
                                <div class="input-box d-flex align-items-center justify-content-between pb-4 user-action-meta">
                                    <div class="custom-checkbox">
                                        <input type="checkbox" id="keepMeSignedChb" />
                                        <label for="keepMeSignedChb" class="font-size-14">Keep me signed in</label>
                                    </div>
                                    <a href="javascript:void(0)" class="margin-bottom-10px lost-pass-btn font-size-14">Lost Password?</a>
                                </div>
                                <div class="btn-box">
                                    <button type="submit" class="theme-btn gradient-btn w-100">
                                        <i class="la la-sign-in mr-1"></i> Login to Account
                                    </button>
                                    <p class="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                                        New to DPGB? <a class="text-color-2 signup-btn" href="javascript:void(0)">Create account</a>
                                    </p>
                                </div>
                                <div class="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
                                    OR
                                </div>
                                <div class="text-center">
                                    <p class="font-size-15 font-weight-medium">Login with your social network</p>
                                    <ul class="social-profile social-profile-colored py-3">
                                        <li>
                                            <a href="#" class="google-bg mx-1" data-toggle="tooltip" data-placement="top" title="Google">
                                                <i class="lab la-google"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="facebook-bg mx-1" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <i class="lab la-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="twitter-bg mx-1" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <i class="lab la-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="instagram-bg mx-1" data-toggle="tooltip" data-placement="top" title="Instagram">
                                                <i class="lab la-instagram"></i>
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
            <div class="modal fade modal-container signup-form" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header align-items-center mh-bg-2">
                            <h5 class="modal-title" id="signUpModalTitle">Welcome! create your DPGB account</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="la la-times-circle"></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method="post" class="form-box">
                                <div class="input-box">
                                    <label class="label-text">Username</label>
                                    <div class="form-group">
                                        <span class="la la-user form-icon"></span>
                                        <input class="form-control form-control-styled" type="text" name="text" placeholder="Username" />
                                    </div>
                                </div>
                                <div class="input-box">
                                    <label class="label-text">Email</label>
                                    <div class="form-group">
                                        <span class="la la-envelope form-icon"></span>
                                        <input class="form-control form-control-styled" type="email" name="text" placeholder="Email address" />
                                    </div>
                                </div>
                                <div class="input-box">
                                    <label class="label-text">Password</label>
                                    <div class="form-group">
                                        <span class="la la-lock form-icon"></span>
                                        <input class="form-control form-control-styled" type="text" name="text" placeholder="Enter password" />
                                    </div>
                                    <p class="font-size-14 mt-n2">Your password must be at least 6 characters long and must contain letters, numbers and special characters. Cannot contain whitespace.</p>
                                </div>
                                <div class="input-box py-4 user-action-meta">
                                    <div class="custom-checkbox">
                                        <input type="checkbox" id="agreeChb" />
                                        <label for="agreeChb" class="font-size-14">By signing up, you agree to our <a href="privacy-policy.html" class="text-color-2">Privacy Policy.</a></label>
                                    </div>
                                </div>
                                <div class="btn-box">
                                    <button type="submit" class="theme-btn gradient-btn w-100">
                                        <i class="la la-user-plus mr-1"></i> Register Account
                                    </button>
                                    <p class="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                                        Already on DPGB? <a class="text-color-2 login-btn" href="javascript:void(0)">Log in</a>
                                    </p>
                                </div>
                                <div class="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
                                    OR
                                </div>
                                <div class="text-center">
                                    <p class="font-size-15 font-weight-medium">Connect with social network</p>
                                    <ul class="social-profile social-profile-colored py-3">
                                        <li>
                                            <a href="#" class="google-bg mx-1" data-toggle="tooltip" data-placement="top" title="Google">
                                                <i class="lab la-google"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="facebook-bg mx-1" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <i class="lab la-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="twitter-bg mx-1" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <i class="lab la-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="instagram-bg mx-1" data-toggle="tooltip" data-placement="top" title="Instagram">
                                                <i class="lab la-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="font-size-15 pb-3">Don't worry, we never any post to your social profile.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade modal-container recover-form" id="recoverModal" tabindex="-1" role="dialog" aria-labelledby="recoverModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header align-items-center mh-bg">
                            <h5 class="modal-title" id="recoverModalTitle">Reset password</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="la la-times-circle"></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p class="font-size-15 font-weight-medium pb-3">
                                Enter your username or email to reset your password.
                                You will receive an email with instructions on how to reset your password. If you are experiencing problems
                                resetting your password <a href="contact.html" class="text-color-2">contact us</a> or <a href="#" class="text-color-2">send us an email</a>
                            </p>
                            <form method="post" class="form-box">
                                <div class="input-box">
                                    <label class="label-text">Username or email</label>
                                    <div class="form-group">
                                        <span class="la la-user form-icon"></span>
                                        <input class="form-control form-control-styled" type="text" name="text" placeholder="Username or email address" />
                                    </div>
                                </div>
                                <div class="btn-box">
                                    <button type="submit" class="theme-btn gradient-btn w-100">
                                        Get New Password <i class="la la-arrow-right ml-1"></i>
                                    </button>
                                    <p class="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                                        Not a member? <a class="text-color-2 signup-btn" href="javascript:void(0)">Create account</a>
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

export default Home4