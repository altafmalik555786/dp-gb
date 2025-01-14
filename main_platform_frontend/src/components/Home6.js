import React from 'react'
import img4 from "../Assets/images/img4.jpg"
import img5 from "../Assets/images/img5.jpg"
import img6 from "../Assets/images/img6.jpg"
import img7 from "../Assets/images/img7.jpg"
import img8 from "../Assets/images/img8.jpg"
import img9 from "../Assets/images/img9.jpg"
import img26 from "../Assets/images/img26.jpg"
import img27 from "../Assets/images/img27.jpg"
import img28 from "../Assets/images/img28.jpg"
import img29 from "../Assets/images/img29.jpg"
import img30 from "../Assets/images/img30.jpg"
import sketch from "../Assets/images/sketch.png"
import listingLogo from "../Assets/images/listing-logo.jpg"
import listingLogo2 from "../Assets/images/listing-logo2.jpg"
import listingLogo3 from "../Assets/images/listing-logo3.jpg"
import anywhere from "../Assets/images/anywhere.png"
import fillSign from "../Assets/images/fill-sign.png"
import avatarImg from "../Assets/images/avatar-img.jpg"
import avatarImg2 from "../Assets/images/avatar-img2.jpg"
import avatarImg3 from "../Assets/images/avatar-img3.jpg"
import avatarImg4 from "../Assets/images/avatar-img4.jpg"
import avatarImg5 from "../Assets/images/avatar-img5.jpg"
import logoBlack from "../Assets/images/logo-black.png"
import logoWhite from "../Assets/images/dpgb.png"
import Logo from '../Assets/images/dpgb.png'
import style from './logoStyle.module.scss'
import { Link } from 'react-router-dom'

function Home6() {
  return (
    <div>
      {/* <!-- ================================
            START HEADER AREA
================================= --> */}
      <header className="header-area">
        <div className="header-menu-wrapper padding-right-30px padding-left-30px">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="menu-full-width">
                  <div className="logo">
                    <Link to="/"><img src={logoWhite} alt="logo" /></Link>
                    <div className="d-flex align-items-center">
                      <Link to="/add-listing" className="btn-gray add-listing-btn-show font-size-24 mr-2 flex-shrink-0" data-toggle="tooltip" data-placement="left" title="Add Listing">
                        <i className="la la-plus"></i>
                      </Link>
                      <div className="menu-toggle">
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                      </div>
                      {/* <!-- end menu-toggle --> */}
                    </div>
                  </div>
                  {/* <!-- end logo --> */}
                  <div className="quick-search-form d-flex align-items-center">
                    <form action="#" className="w-100">
                      <div className="header-search position-relative">
                        <i className="la la-search form-icon"></i>
                        <input type="search" placeholder="What are you looking for?" />
                        <div className="instant-results">
                          <ul className="instant-results-list">
                            <li><a href="#" className="d-flex align-items-center"><span className="icon-element bg-1 mr-2"><i className="la la-glass"></i></span>Food & Drinks</a></li>
                            <li><a href="#" className="d-flex align-items-center"><span className="icon-element bg-2 mr-2"><i className="la la-hotel"></i></span>Travel & Hotel</a></li>
                            <li><a href="#" className="d-flex align-items-center"><span className="icon-element bg-3 mr-2"><i className="la la-cutlery"></i></span>Restaurants</a></li>
                            <li><a href="#" className="d-flex align-items-center"><span className="icon-element bg-4 mr-2"><i className="la la-television"></i></span>Entertainment</a></li>
                            <li><a href="#" className="d-flex align-items-center"><span className="icon-element bg-5 mr-2"><i className="la la-shopping-bag"></i></span> Shopping</a></li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!-- end quick-search-form --> */}
                  <div className="main-menu-content ml-auto">
                    <nav className="main-menu">
                      <ul>
                        <li>
                          <a href="#">home <span className="la la-angle-down"></span></a>
                          <ul className="dropdown-menu-item">
                            <li><Link to="/">home one</Link></li>
                            <li><Link to="/Home-two">home two</Link></li>
                            <li><Link to="/Home-three">home three</Link></li>
                            <li><Link to="/Home-four">home four</Link></li>
                            <li><Link to="/Home-five">home five</Link></li>
                            <li><Link to="/Home-six">home six</Link></li>
                            <li><Link to="/Home-seven">home seven</Link></li>
                            <li><a href="#">home (Airbnd) <span className="ribbon">Coming</span></a></li>
                            <li><a href="#">home (Vrbo) <span className="ribbon">Coming</span></a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">listings <span className="la la-angle-down"></span></a>
                          <ul className="dropdown-menu-item">
                            <li><Link to="/listing-grid">listing grid</Link></li>
                            <li><Link to="/listing-list">listing list</Link></li>
                            <li><Link to="/listing-fullwidth-map">fullwidth map</Link></li>
                            <li><Link to="/listing-halfmap-grid">half map grid</Link></li>
                            <li><Link to="/listing-halfmap-list">half map list</Link></li>
                            <li><Link to="/listing-Left-sidebar">listing left sidebar  </Link></li>
                            <li><Link to="/listing-Right-sidebar">listing right sidebar  </Link></li>
                            <li><Link to="/listing-details">listing details</Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">pages <span className="la la-angle-down"></span></a>
                          <div className="dropdown-menu-item mega-menu">
                            <ul className="row no-gutters">
                              <li className="col-lg-4 mega-menu-item">
                                <ul>
                                  <li><Link to="/dashboard">dashboard <span className="ribbon">Hot</span></Link></li>
                                  <li><a href="about.html">about</a></li>
                                  <li><a href="user-profile.html">user profile</a></li>
                                  <li><a href="career.html">career</a></li>
                                  <li><a href="career-details.html">career details</a></li>
                                  <li><a href="top-place.html">top places </a></li>
                                  <li><Link to="/add-listing">add listing </Link></li>
                                </ul>
                              </li>
                              <li className="col-lg-4 mega-menu-item">
                                <ul>
                                  <li><a href="top-author.html">top authors </a></li>
                                  <li><a href="booking.html">booking</a></li>
                                  <li><a href="booking-confirmation.html">booking confirmation </a></li>
                                  <li><a href="invoice.html">invoice</a></li>
                                  <li><a href="pricing.html">Pricing</a></li>
                                  <li><a href="all-categories.html">all categories</a></li>
                                  <li><a href="all-locations.html">all locations</a></li>
                                </ul>
                              </li>
                              <li className="col-lg-4 mega-menu-item">
                                <ul>
                                  <li><a href="add-new-post.html">add new post </a></li>
                                  <li><a href="contact.html">contact</a></li>
                                  <li><a href="faq.html">faq</a></li>
                                  <li><a href="page-404.html">404 page</a></li>
                                  <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
                                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                  <li><a href="coming-soon.html"> Coming Soon</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="#">blog <span className="la la-angle-down"></span></a>
                          <ul className="dropdown-menu-item">
                            <li><a href="blog-full-width.html">full width</a></li>
                            <li><a href="blog-grid.html">blog grid</a></li>
                            <li><a href="blog-left-sidebar.html">left sidebar </a></li>
                            <li><a href="blog-right-sidebar.html">right sidebar </a></li>
                            <li><a href="blog-single.html">blog detail</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* <!-- end main-menu-content --> */}
                  <div className="nav-right-content">
                    <Link to="/add-listing" className="theme-btn gradient-btn shadow-none add-listing-btn-hide">
                      <i className="la la-plus mr-2"></i>Add Listing
                    </Link>
                  </div>
                  {/* <!-- end nav-right-content --> */}
                </div>
                {/* <!-- end menu-full-width --> */}
              </div>
              {/* <!-- end col-lg-12 --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end container-fluid --> */}
        </div>
        {/* <!-- end header-menu-wrapper --> */}
        <div className="header-top-bar py-2 padding-right-30px padding-left-30px border-top border-top-color">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center header-top-info font-size-14">
                <p className="mr-3 pr-3 border-right border-right-color">
                  <span className="mr-1 text-white font-weight-semi-bold">Email:</span>
                  <a href="#" className="font-weight-medium">DPGB@gmail.com</a>
                </p>
                <p>
                  <span className="mr-1 text-white font-weight-semi-bold">Phone:</span>
                  <a href="#" className="font-weight-medium">+98 76543210</a>
                </p>
              </div>
              {/* <!-- end col-lg-6 --> */}
              <div className="col-lg-6 d-flex align-items-center justify-content-end header-top-info">
                <p className="login-and-signup-wrap">
                  <a href="#" data-toggle="modal" data-target="#loginModal">
                    <span className="mr-1 la la-sign-in"></span>Login
                  </a>
                  <span className="or-text px-2">or</span>
                  <a href="#" data-toggle="modal" data-target="#signUpModal">
                    <span className="mr-1 la la-user-plus"></span>Sign Up
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end container-fluid --> */}
        </div>
        {/* <!-- end header-top-bar --> */}
      </header>
      {/* <!-- ================================
         END HEADER AREA
================================= --> */}


      {/* <!-- ================================
    START HERO-WRAPPER AREA
================================= --> */}
      <section className="hero-wrapper hero-bg-4 pb-0">
        <div className="overlay opacity-9"></div>
        {/* <!-- end overlay --> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-heading">
                <div className="section-heading">
                  <h2 className="sec__title mb-3 line-height-60">DPGB helps you find out whats happening in your city, Let's explore.</h2>
                  <p className="sec__desc line-height-35">
                    Simple, Yet powerful local business directory where buyers and sellers engage
                    each others with trust.
                  </p>
                </div>
                <div className="btn-box padding-top-35px">
                  <a href="about.html" className="theme-btn gradient-btn shadow-none">Know More<i className="la la-arrow-right ml-2"></i></a>
                </div>
              </div>
              {/* <!-- end hero-heading --> */}
            </div>
            {/* <!-- end col-lg-6 --> */}
            <div className="col-lg-5 ml-auto">
              <div className="main-search-input flex-column mt-0">
                <div className="main-search-input-item w-100">
                  <form action="#" className="form-box">
                    <div className="input-box">
                      <label className="label-text">What are you</label>
                      <div className="form-group">
                        <span className="la la-search form-icon"></span>
                        <input className="form-control" type="search" placeholder="looking for?" />
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- end main-search-input-item --> */}
                <div className="main-search-input-item user-chosen-select-container w-100 mb-3 ml-0">
                  <label className="label-text">Where to look?</label>
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
                {/* <!-- end main-search-input-item --> */}
                <div className="main-search-input-item user-chosen-select-container w-100 mb-3 ml-0">
                  <label className="label-text">What Category?</label>
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
                {/* <!-- end main-search-input-item --> */}
                <div className="main-search-input-item w-100 ml-0">
                  <label className="label-text">Search Activities</label>
                  <button className="theme-btn gradient-btn border-0 w-100" type="submit"><i className="la la-search mr-2"></i>Search Now</button>
                </div>
                {/* <!-- end main-search-input-item --> */}
              </div>
              {/* <!-- end main-search-input --> */}
            </div>
            {/* <!-- end col-lg-6 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
        <div className="highlighted-categories bg-dark-opacity margin-top-130px">
          <div className="highlight-lists d-flex justify-content-center align-items-center">
            <h5 className="highlighted__title pr-5">Browse by Category <i className="la la-arrow-right ml-2"></i></h5>
            <div className="hero-category-item rounded-0">
              <a href="#" className="d-block hero-cat-link rounded-0">
                <span className="icon-element bg-1 mx-auto"><i className="la la-building-o"></i></span>
                apartments
              </a>
            </div>
            <div className="hero-category-item rounded-0">
              <a href="#" className="d-block hero-cat-link rounded-0">
                <span className="icon-element bg-2 mx-auto"><i className="la la-cutlery"></i></span>
                Restaurants
              </a>
            </div>
            <div className="hero-category-item rounded-0">
              <a href="#" className="d-block hero-cat-link rounded-0">
                <span className="icon-element bg-3 mx-auto"><i className="la la-plane"></i></span>
                travel
              </a>
            </div>
            <div className="hero-category-item rounded-0">
              <a href="#" className="d-block hero-cat-link rounded-0">
                <span className="icon-element bg-4 mx-auto"><i className="la la-music"></i></span>
                Events
              </a>
            </div>
            <div className="hero-category-item rounded-0">
              <a href="#" className="d-block hero-cat-link rounded-0">
                <span className="icon-element bg-5 mx-auto"><i className="la la-gear"></i></span>
                fitness
              </a>
            </div>
            <div className="hero-category-item rounded-0">
              <a href="#" className="d-block hero-cat-link rounded-0">
                <span className="icon-element bg-6 mx-auto"><i className="la la-hotel"></i></span>
                Hotels
              </a>
            </div>
          </div>
        </div>
        {/* <!-- end highlighted-categories --> */}
      </section>
      {/* <!-- end hero-wrapper --> */}
      {/* <!-- ================================
    END HERO-WRAPPER AREA
================================= -->

<!-- ================================
    START CARD AREA
================================= --> */}
      <section className="card-area section-padding">
        <div className="container-fluid padding-right-50px padding-left-50px">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-badge pb-3">
                  <span className="ribbon ribbon-lg">Popular Listing</span>
                </div>
                <h2 className="sec__title">Most Popular <span className="text-color-16">Listings.</span></h2>
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
            <div className="col-lg-12">
              <div className="card-carousel-2 owl-trigger-action">
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
                      <img src={img8} className="card__img" alt="" />
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
                      <a href="listing-details.html">Sena clothing shopping mall</a>
                    </h4>
                    <p className="card-sub"><a href="#"><i className="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                    <ul className="listing-meta d-flex align-items-center">
                      <li className="d-flex align-items-center">
                        <span className="rate flex-shrink-0">4.7</span>
                        <span className="rate-text">5 Ratings</span>
                      </li>
                      <li>
                        <span className="price-range" data-toggle="tooltip" data-placement="top" title="Ultra High">
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-shopping-cart mr-1 listing-icon"></i><a href="#" className="listing-cat-link">Shop</a>
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
                      <img src={img9} className="card__img" alt="" />
                      <span className="badge">Now open</span>
                    </a>
                    <span className="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                      <i className="la la-bookmark"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                      <img src={fillSign} alt="author-img" />
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
              {/* <!-- end card-carousel --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container-fluid --> */}
      </section>
      {/* <!-- end card-area --> */}
      {/* <!-- ================================
    END CARD AREA
================================= --> */}


      <div className="section-block"></div>

      {/* <!-- ================================
    START CAT AREA
================================= --> */}
      <section className="cat-area position-relative section--padding overflow-hidden">
        <span className="circle-bg position-absolute circle-bg-1"></span>
        <span className="circle-bg position-absolute circle-bg-2"></span>
        <span className="circle-bg position-absolute circle-bg-3"></span>
        <div className="svg-bg svg-bg-3 gradient-bg-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 118" preserveAspectRatio="none">
            <defs>
              <linearGradient id="svg-gradient-4">
                <stop offset="15%" stop-color="#F8F9FA"></stop>
                <stop offset="95%" stop-color="#b9caf1"></stop>
              </linearGradient>
            </defs>
            <path opacity="0.2" d="M0,112 C400.666667,36 800.666667,-0.666666667 1200,2 C1200,41.3333333 1200,80 1200,118 L0,118 L0,112 Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="card-heading-content mt-0">
                <div className="section-heading">
                  <div className="section-badge pb-3">
                    <span className="ribbon ribbon-lg">Destinations</span>
                  </div>
                  <h2 className="sec__title">Check out Our Trending <span className="text-color-16">Destinations.</span></h2>
                  <p className="sec__desc">
                    Explore most popular destination and places, Morbi convallis
                    bibendum urna ut viverra. Maecenas, quis consequat libero,
                    a feugiat eros.
                  </p>
                </div>
                {/* <!-- end section-heading --> */}
                <div className="more-btn-box pt-4">
                  <a href="all-locations.html" className="theme-btn gradient-btn">View All Destination <i className="la la-arrow-right ml-2"></i></a>
                </div>
                {/* <!-- end more-btn-box --> */}
              </div>
            </div>
            {/* <!-- end col-lg-5 --> */}
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 responsive-column">
                  <div className="category-item category-item-layout-2 category-item-layout--2 js-tilt-2 ">
                    <img src={img4} data-src={img4} alt="category-image" className="cat-img lazy" />
                    <div className="category-content">
                      <a href="#" className="category-link d-flex align-items-end w-100 h-100 text-left">
                        <div className="category-content-inner d-flex align-items-center justify-content-between">
                          <div>
                            <h4 className="cat__title mb-1">Canada</h4>
                            <span className="font-weight-medium font-size-15">72 Listings</span>
                          </div>
                          <i className="la la-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* <!-- end category-item --> */}
                  <div className="category-item category-item-layout-2 category-item-layout--2 js-tilt-2 ">
                    <img src={img5} data-src={img5} alt="category-image" className="cat-img lazy cat-img-height" />
                    <div className="category-content">
                      <a href="#" className="category-link d-flex align-items-end w-100 h-100 text-left">
                        <div className="category-content-inner d-flex align-items-center justify-content-between">
                          <div>
                            <h4 className="cat__title mb-1">New York</h4>
                            <span className="font-weight-medium font-size-15">44 Listings</span>
                          </div>
                          <i className="la la-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* <!-- end category-item --> */}
                </div>
                {/* <!-- end col-lg-6 --> */}
                <div className="col-lg-6 responsive-column">
                  <div className="category-item category-item-layout-2 category-item-layout--2 js-tilt-2 ">
                    <img src={img6} data-src={img6} alt="category-image" className="cat-img lazy cat-img-height" />
                    <div className="category-content">
                      <a href="#" className="category-link d-flex align-items-end w-100 h-100 text-left">
                        <div className="category-content-inner d-flex align-items-center justify-content-between">
                          <div>
                            <h4 className="cat__title mb-1">United Kingdom</h4>
                            <span className="font-weight-medium font-size-15">22 Listings</span>
                          </div>
                          <i className="la la-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* <!-- end category-item --> */}
                  <div className="category-item category-item-layout-2 category-item-layout--2 js-tilt-2 ">
                    <img src={img7} data-src={img7} alt="category-image" className="cat-img lazy" />
                    <div className="category-content">
                      <a href="#" className="category-link d-flex align-items-end w-100 h-100 text-left">
                        <div className="category-content-inner d-flex align-items-center justify-content-between">
                          <div>
                            <h4 className="cat__title mb-1">Italy</h4>
                            <span className="font-weight-medium font-size-15">55 Listings</span>
                          </div>
                          <i className="la la-arrow-right"></i>
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
            {/* <!-- end col-lg-7 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end cat-area --> */}
      {/* <!-- ================================
    END CAT AREA
================================= -->

<!-- ================================
    START HIW AREA
================================= --> */}
      <section className="hiw-area bg-dark pattern-bg padding-top-100px pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hiw-content">
                <div className="section-heading">
                  <div className="section-badge pb-3">
                    <span className="ribbon ribbon-lg">Working Process</span>
                  </div>
                  <h2 className="sec__title line-height-50 text-white">
                    Get Started With <span className="text-color-16">DPGB</span> It's Very Easy to Start.
                  </h2>
                  <p className="sec__desc text-white-50">
                    Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet dolor sit amet.
                  </p>
                </div>
                {/* <!-- end section-heading --> */}
              </div>
            </div>
            {/* <!-- end col-lg-6 --> */}
            <div className="col-lg-6">
              <div className="single-video-btn-box text-center">
                <a className="icon-element icon-element-lg icon-element-white hover-scale mx-auto" href="https://www.youtube.com/watch?v=GlrxcuEDyF8" data-fancybox="" title="Play Video">
                  <i className="la la-play"></i>
                </a>
                <p className="font-size-14 font-weight-medium pt-2">Video Tutorial</p>
              </div>
            </div>
            {/* <!-- end col-lg-6 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row hiw-info-box-wrap">
            <div className="col-lg-3 responsive-column">
              <div className="info-box info--box">
                <div className="info-icon gradient-icon">
                  <svg id="_x31_" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="svg-gradient">
                        <stop offset="5%" stop-color="#ff6b6b"></stop>
                        <stop offset="95%" stop-color="#ffbb3d"></stop>
                      </linearGradient>
                    </defs>
                    <path d="m17 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path><path d="m23.5 24c-.128 0-.256-.049-.354-.146l-3.318-3.318c-.195-.195-.195-.512 0-.707s.512-.195.707 0l3.318 3.318c.195.195.195.512 0 .707-.097.097-.225.146-.353.146z"></path><path d="m10.5 21h-8c-1.378 0-2.5-1.121-2.5-2.5v-13c0-1.379 1.122-2.5 2.5-2.5h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.827 0-1.5.673-1.5 1.5v13c0 .827.673 1.5 1.5 1.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z"></path><path d="m11.5 6h-6c-.827 0-1.5-.673-1.5-1.5v-2c0-.276.224-.5.5-.5h1.55c.233-1.14 1.242-2 2.45-2s2.217.86 2.45 2h1.55c.276 0 .5.224.5.5v2c0 .827-.673 1.5-1.5 1.5zm-6.5-3v1.5c0 .275.224.5.5.5h6c.276 0 .5-.225.5-.5v-1.5h-1.5c-.276 0-.5-.224-.5-.5 0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 .276-.224.5-.5.5z"></path><path d="m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path><path d="m12.5 12h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"></path><path d="m10 15h-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6.5c.276 0 .5.224.5.5s-.224.5-.5.5z"></path><path d="m16.5 10c-.276 0-.5-.224-.5-.5v-4c0-.827-.673-1.5-1.5-1.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c1.378 0 2.5 1.121 2.5 2.5v4c0 .276-.224.5-.5.5z"></path>
                  </svg>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">Pick a Keyword</h4>
                  <p className="info__desc">
                    Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="info-box info--box">
                <div className="info-icon gradient-icon">
                  <svg width="40" version="1.1" id="Capa_221" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 480" >
                    <defs>
                      <linearGradient id="svg-gradient2">
                        <stop offset="5%" stop-color="#ff6b6b"></stop>
                        <stop offset="95%" stop-color="#ffbb3d"></stop>
                      </linearGradient>
                    </defs>
                    <g>
                      <path d="M240,0C156.053,0,88,68.053,88,152c0,40.448,26.16,102.096,77.744,183.2l67.504,106.184
                                        c2.37,3.729,7.314,4.831,11.043,2.461c0.991-0.63,1.831-1.47,2.461-2.461L314.256,335.2C365.84,254.096,392,192.448,392,152
                                        C392,68.053,323.947,0,240,0z M300.76,326.632L240,422.184l-60.76-95.552C129.312,248.112,104,189.36,104,152
                                        c0.084-75.076,60.924-135.916,136-136c75.076,0.084,135.916,60.924,136,136C376,189.36,350.688,248.112,300.76,326.632z"/>
                    </g>
                    <g>
                      <path d="M240,80c-39.764,0-72,32.235-72,72c0,36.616,58.568,129.792,65.248,140.296c1.469,2.308,4.016,3.705,6.752,3.704
                                        c2.736,0.001,5.283-1.396,6.752-3.704C253.432,281.792,312,188.616,312,152C312,112.235,279.765,80,240,80z M240,272.848
                                        c-20.208-33.128-56-96.8-56-120.848c0.035-30.913,25.087-55.965,56-56c30.913,0.035,55.965,25.087,56,56
                                        C296,176.064,260.208,239.72,240,272.848z"/>
                    </g>
                    <g>
                      <path d="M272.48,408.896l-0.912,16c59.112,3.328,84.656,14.16,88.224,19.136C354.776,451.448,312.104,464,240,464
                                        s-114.776-12.544-119.792-20c3.568-4.968,29.08-15.792,88.104-19.128l-0.904-16C176.312,410.664,104,417.6,104,444
                                        c0,28.416,85.488,36,136,36c50.512,0,136-7.584,136-36C376,417.6,303.6,410.648,272.48,408.896z"/>
                    </g>
                    <g>
                      <path d="M240,112c-22.091,0-40,17.909-40,40s17.909,40,40,40c22.08-0.026,39.974-17.92,40-40C280,129.909,262.091,112,240,112z
                                         M240,176c-13.255,0-24-10.745-24-24s10.745-24,24-24s24,10.745,24,24S253.255,176,240,176z"/>
                    </g>
                  </svg>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">Select Location</h4>
                  <p className="info__desc">
                    Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="info-box info--box">
                <div className="info-icon gradient-icon">
                  <svg width="40" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" >
                    <defs>
                      <linearGradient id="svg-gradient3">
                        <stop offset="5%" stop-color="#ff6b6b"></stop>
                        <stop offset="95%" stop-color="#ffbb3d"></stop>
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
                                        C311.372,263.77,296.099,248.499,277.326,248.499z M492,316.984c0,15.991-13.009,29-29,29H311.371v-36H492V316.984z"></path>
                    </g>
                    <g>
                      <path d="M355.22,248.939c-1.869-1.86-4.44-2.93-7.07-2.93c-2.64,0-5.21,1.07-7.07,2.93c-1.87,1.86-2.93,4.44-2.93,7.07
                                        c0,2.64,1.06,5.21,2.93,7.07c1.86,1.87,4.43,2.93,7.07,2.93c2.63,0,5.21-1.06,7.07-2.93c1.86-1.86,2.93-4.43,2.93-7.07
                                        C358.15,253.378,357.08,250.799,355.22,248.939z"></path>
                    </g>
                    <g>
                      <path d="M179.231,112.929c-1.86-1.86-4.439-2.93-7.07-2.93c-2.64,0-5.21,1.07-7.07,2.93c-1.87,1.86-2.93,4.44-2.93,7.07
                                        c0,2.63,1.06,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93c2.63,0,5.2-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07
                                        C182.161,117.369,181.091,114.789,179.231,112.929z"></path>
                    </g>
                    <g>
                      <path d="M135.958,109.999H63.999c-5.523,0-10,4.477-10,10c0,5.523,4.477,10,10,10h71.959c5.523,0,10-4.477,10-10
                                        C145.958,114.476,141.481,109.999,135.958,109.999z"></path>
                    </g>
                    <g>
                      <path d="M227.644,54H64.052c-5.523,0-10,4.477-10,10s4.477,10,10,10h163.592c5.523,0,10-4.477,10-10S233.167,54,227.644,54z"></path>
                    </g>
                    <g>
                      <path d="M428,125.571v-15.072c0-11.028-8.972-20-20-20h-35.167c-3.645,0-7.054,0.996-10,2.706c-2.946-1.71-6.355-2.706-10-2.706
                                        h-35.167c-11.028,0-20,8.972-20,20v14.694c-18.012,4.423-31.417,20.7-31.417,40.056v32.75c0,5.523,4.477,10,10,10h171.749
                                        c5.524,0,10.001-4.477,10.001-10v-32.75C458,146.404,445.292,130.482,428,125.571z M372.833,110.499H408v13.5h-35.167V110.499z
                                         M317.668,110.499h35.167v13.5h-35.167V110.499z M438.001,187.999L438.001,187.999h-151.75v-22.75
                                        c0-11.717,9.533-21.25,21.25-21.25h0.167h55.167h53.917c11.717,0,21.25,9.533,21.25,21.25V187.999z"></path>
                    </g>
                  </svg>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">Select Category</h4>
                  <p className="info__desc">
                    Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="info-box info--box">
                <div className="info-icon gradient-icon">
                  <svg width="40" version="1.1" id="Capa_1211" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" >
                    <defs>
                      <linearGradient id="svg-gradient4">
                        <stop offset="5%" stop-color="#ff6b6b"></stop>
                        <stop offset="95%" stop-color="#ffbb3d"></stop>
                      </linearGradient>
                    </defs>
                    <g>
                      <path d="M251.328,196.704c-6.24-6.24-16.384-6.272-22.656-0.032L176,249.376l-20.672-20.704c-6.24-6.24-16.384-6.24-22.624,0
                                            s-6.24,16.384,0,22.624l32,32c3.104,3.136,7.2,4.704,11.296,4.704s8.192-1.568,11.328-4.672l64-64
                                            C257.568,213.088,257.568,202.944,251.328,196.704z"/>
                    </g>
                    <g>
                      <path d="M251.328,324.704c-6.24-6.24-16.384-6.272-22.656-0.032L176,377.376l-20.672-20.672c-6.24-6.24-16.384-6.24-22.624,0
                                            s-6.24,16.384,0,22.624l32,32c3.104,3.104,7.2,4.672,11.296,4.672s8.192-1.568,11.328-4.672l64-64
                                            C257.568,341.088,257.568,330.944,251.328,324.704z"/>
                    </g>
                    <g>
                      <path d="M368,224h-64c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16C384,231.168,376.832,224,368,224
                                            z"/>
                    </g>
                    <g>
                      <path d="M368,352h-64c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16C384,359.168,376.832,352,368,352
                                            z"/>
                    </g>
                    <g>
                      <path d="M416,64h-64V48c0-8.832-7.168-16-16-16h-34.72C294.656,13.376,276.864,0,256,0s-38.656,13.376-45.28,32H176
                                            c-8.832,0-16,7.168-16,16v16H96c-17.632,0-32,14.368-32,32v384c0,17.632,14.368,32,32,32h320c17.632,0,32-14.368,32-32V96
                                            C448,78.368,433.632,64,416,64z M192,64h32c8.832,0,16-7.168,16-16c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16
                                            c0,8.832,7.168,16,16,16h32v32H192V64z M416,480H96V96h64v16c0,8.832,7.168,16,16,16h160c8.832,0,16-7.168,16-16V96h64V480z"/>
                    </g>
                  </svg>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">View Results</h4>
                  <p className="info__desc">
                    Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end hiw-area --> */}
      {/* <!-- ================================
    END HIW AREA
================================= -->

<!-- ================================
    START FUN-FACT AREA
================================= --> */}
      <section className="funfact-area bg-gradient-gray padding-top-150px padding-bottom-70px hiw-bottom-right-round">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 responsive-column">
              <div className="counter-item d-flex align-items-center">
                <div className="counter-icon section-icon flex-shrink-0 bg-opacity-1">
                  <svg className="svg-icon-color" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 438.891 438.891" >
                    <g>
                      <path d="M347.968,57.503h-39.706V39.74c0-5.747-6.269-8.359-12.016-8.359h-30.824c-7.314-20.898-25.6-31.347-46.498-31.347
                                                c-20.668-0.777-39.467,11.896-46.498,31.347h-30.302c-5.747,0-11.494,2.612-11.494,8.359v17.763H90.923
                                                c-23.53,0.251-42.78,18.813-43.886,42.318v299.363c0,22.988,20.898,39.706,43.886,39.706h257.045
                                                c22.988,0,43.886-16.718,43.886-39.706V99.822C390.748,76.316,371.498,57.754,347.968,57.503z M151.527,52.279h28.735
                                                c5.016-0.612,9.045-4.428,9.927-9.404c3.094-13.474,14.915-23.146,28.735-23.51c13.692,0.415,25.335,10.117,28.212,23.51
                                                c0.937,5.148,5.232,9.013,10.449,9.404h29.78v41.796H151.527V52.279z M370.956,399.185c0,11.494-11.494,18.808-22.988,18.808
                                                H90.923c-11.494,0-22.988-7.314-22.988-18.808V99.822c1.066-11.964,10.978-21.201,22.988-21.42h39.706v26.645
                                                c0.552,5.854,5.622,10.233,11.494,9.927h154.122c5.98,0.327,11.209-3.992,12.016-9.927V78.401h39.706
                                                c12.009,0.22,21.922,9.456,22.988,21.42V399.185z"></path>
                      <path d="M179.217,233.569c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                                                c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                                                c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                                                C179.628,233.962,179.427,233.761,179.217,233.569z"></path>
                      <path d="M329.16,256.034H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                                                c5.771,0,10.449-4.678,10.449-10.449S334.931,256.034,329.16,256.034z"></path>
                      <path d="M179.217,149.977c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                                                c-3.919-4.131-10.425-4.364-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                                                c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                                                C179.628,150.37,179.427,150.169,179.217,149.977z"></path>
                      <path d="M329.16,172.442H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                                                c5.771,0,10.449-4.678,10.449-10.449S334.931,172.442,329.16,172.442z"></path>
                      <path d="M179.217,317.16c-3.919-4.131-10.425-4.363-14.629-0.522l-33.437,31.869l-14.106-14.629
                                                c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                                                c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                                                C179.628,317.554,179.427,317.353,179.217,317.16z"></path>
                      <path d="M329.16,339.626H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                                                c5.771,0,10.449-4.678,10.449-10.449S334.931,339.626,329.16,339.626z"></path>
                    </g>
                  </svg>
                </div>
                <div className="counter-content pl-3">
                  <h3 className="counter__number text-color-3 mb-2">
                    <span className="counter">40,000</span>
                    <span className="count-symbol">+</span>
                  </h3>
                  <p className="counter__title">Listings Pages</p>
                </div>
                {/* <!-- end counter-content --> */}
              </div>
              {/* <!-- end counter-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="counter-item d-flex align-items-center">
                <div className="counter-icon section-icon flex-shrink-0 bg-opacity-2">
                  <svg className="svg-icon-color-2" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 490.667 490.667">
                    <g>
                      <path d="M245.333,85.333c-41.173,0-74.667,33.493-74.667,74.667s33.493,74.667,74.667,74.667S320,201.173,320,160
                                            C320,118.827,286.507,85.333,245.333,85.333z M245.333,213.333C215.936,213.333,192,189.397,192,160
                                            c0-29.397,23.936-53.333,53.333-53.333s53.333,23.936,53.333,53.333S274.731,213.333,245.333,213.333z"></path>
                    </g>
                    <g>
                      <path d="M394.667,170.667c-29.397,0-53.333,23.936-53.333,53.333s23.936,53.333,53.333,53.333S448,253.397,448,224
                                            S424.064,170.667,394.667,170.667z M394.667,256c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32
                                            C426.667,241.643,412.309,256,394.667,256z"></path>
                    </g>
                    <g>
                      <path d="M97.515,170.667c-29.419,0-53.333,23.936-53.333,53.333s23.936,53.333,53.333,53.333s53.333-23.936,53.333-53.333
                                            S126.933,170.667,97.515,170.667z M97.515,256c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32
                                            C129.515,241.643,115.157,256,97.515,256z"></path>
                    </g>
                    <g>
                      <path d="M245.333,256c-76.459,0-138.667,62.208-138.667,138.667c0,5.888,4.779,10.667,10.667,10.667S128,400.555,128,394.667
                                            c0-64.704,52.629-117.333,117.333-117.333s117.333,52.629,117.333,117.333c0,5.888,4.779,10.667,10.667,10.667
                                            c5.888,0,10.667-4.779,10.667-10.667C384,318.208,321.792,256,245.333,256z"></path>
                    </g>
                    <g>
                      <path d="M394.667,298.667c-17.557,0-34.752,4.8-49.728,13.867c-5.013,3.072-6.635,9.621-3.584,14.656
                                            c3.093,5.035,9.621,6.635,14.656,3.584C367.637,323.712,380.992,320,394.667,320c41.173,0,74.667,33.493,74.667,74.667
                                            c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667C490.667,341.739,447.595,298.667,394.667,298.667z"></path>
                    </g>
                    <g>
                      <path d="M145.707,312.512c-14.955-9.045-32.149-13.845-49.707-13.845c-52.928,0-96,43.072-96,96
                                            c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667C21.333,353.493,54.827,320,96,320
                                            c13.675,0,27.029,3.712,38.635,10.752c5.013,3.051,11.584,1.451,14.656-3.584C152.363,322.133,150.741,315.584,145.707,312.512z"></path>
                    </g>
                  </svg>
                </div>
                <div className="counter-content pl-3">
                  <h3 className="counter__number text-color-4 mb-2">
                    <span className="counter">25,100</span>
                    <span className="count-symbol">+</span>
                  </h3>
                  <p className="counter__title">Happy Clients</p>
                </div>
                {/* <!-- end counter-content --> */}
              </div>
              {/* <!-- end counter-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="counter-item d-flex align-items-center">
                <div className="counter-icon section-icon flex-shrink-0 bg-opacity-3">
                  <svg className="svg-icon-color-3" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g><g><path d="m475.571 189.773c-.912-.912-1.839-1.802-2.774-2.682v-28.821c0-28.659-23.316-51.975-51.975-51.975h-91.169v-26.12c0-27.886-22.687-50.572-50.572-50.572h-85.363c-27.886 0-50.572 22.686-50.572 50.572v26.12h-91.171c-28.659 0-51.975 23.316-51.975 51.975v231.351c0 28.659 23.316 51.975 51.975 51.975h108.516c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-108.516c-20.389 0-36.976-16.587-36.976-36.976v-151.3c14.686 21.784 38.844 36.677 66.519 38.728v27.306c0 15.595 12.688 28.283 28.283 28.283 15.596 0 28.284-12.688 28.284-28.283v-27.061h125.329c0 .12-.004.239-.004.359 0 25.539 7.659 49.898 21.877 70.467l-15.922 15.922c-5.56-1.573-11.79-.184-16.157 4.185l-61.159 61.159c-12.106 12.106-12.106 31.804 0 43.91 12.134 12.134 31.775 12.136 43.91 0l61.159-61.159c4.368-4.368 5.758-10.597 4.185-16.157l15.936-15.936c42.143 29.025 98.319 29.117 140.56.235v9.343c0 20.389-16.587 36.976-36.976 36.976h-118.464c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h118.463c28.659 0 51.975-23.316 51.975-51.975v-21.407c.934-.878 1.861-1.768 2.774-2.681 48.569-48.569 48.575-127.186 0-175.761zm-317.427-109.598c0-19.615 15.958-35.573 35.573-35.573h85.363c19.615 0 35.573 15.958 35.573 35.573v26.12h-15.999v-26.12c0-10.793-8.781-19.574-19.574-19.574h-85.363c-10.793 0-19.574 8.781-19.574 19.574v26.12h-15.999zm30.998 26.12v-26.12c0-2.522 2.052-4.574 4.575-4.574h85.363c2.523 0 4.575 2.052 4.575 4.574v26.12zm-66.056 175.007h-26.568v-25.248c0-7.325 5.959-13.284 13.284-13.284s13.284 5.959 13.284 13.284zm-13.284 36.337c-7.325 0-13.284-5.959-13.284-13.284v-8.054h26.568v8.054c0 7.325-5.959 13.284-13.284 13.284zm28.283-55.344v-6.241c0-15.595-12.688-28.283-28.284-28.283-15.595 0-28.283 12.688-28.283 28.283v5.931c-37.233-3.336-66.519-34.696-66.519-72.782v-30.933c0-20.389 16.587-36.976 36.976-36.976h368.847c20.389 0 36.976 16.587 36.976 36.976v16.731c-47.425-32.537-114.229-28.988-157.987 14.771-19.815 19.814-32.114 45.141-35.467 72.522h-126.259zm87.267 200.395c-6.272 6.272-16.425 6.273-22.698 0-3.032-3.032-4.701-7.062-4.701-11.349s1.669-8.318 4.701-11.349l42.369-42.369 22.698 22.698zm61.159-61.159-8.184 8.184-22.698-22.698 8.184-8.184c.288-.287.665-.431 1.042-.431s.754.144 1.041.43c.002.001.003.003.005.004l20.61 20.61c.574.575.574 1.51 0 2.085zm5.662-17.635-10.726-10.726 13.167-13.167c1.672 1.885 3.4 3.733 5.197 5.529 1.801 1.801 3.649 3.527 5.531 5.194zm18.244-28.969c-20.641-20.64-32.008-48.084-32.008-77.274s11.367-56.634 32.008-77.274c42.706-42.707 111.836-42.713 154.548 0 42.707 42.706 42.713 111.836 0 154.548-42.708 42.708-111.836 42.713-154.548 0z"></path><path d="m469.969 287.951c-4.047-.88-8.043 1.686-8.922 5.735-3.052 14.034-10.06 26.848-20.268 37.055-29.341 29.34-76.832 29.343-106.176 0-29.273-29.273-29.273-76.903 0-106.176 29.341-29.341 76.832-29.344 106.176 0 10.197 10.197 17.203 22.997 20.26 37.016.882 4.047 4.879 6.616 8.925 5.73 4.047-.882 6.612-4.878 5.73-8.925-3.67-16.832-12.076-32.194-24.308-44.427-35.203-35.203-92.181-35.207-127.388 0-35.121 35.121-35.121 92.267 0 127.388 35.12 35.12 92.265 35.122 127.388 0 12.245-12.245 20.654-27.624 24.318-44.474.879-4.047-1.688-8.041-5.735-8.922z"></path></g></g>
                  </svg>
                </div>
                <div className="counter-content pl-3">
                  <h3 className="counter__number text-color-5 mb-2">
                    <span className="counter">12,100</span>
                    <span className="count-symbol">+</span>
                  </h3>
                  <p className="counter__title">Company Joined</p>
                </div>
                {/* <!-- end counter-content --> */}
              </div>
              {/* <!-- end counter-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="counter-item d-flex align-items-center">
                <div className="counter-icon section-icon flex-shrink-0 bg-opacity-4">
                  <svg className="svg-icon-color-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g id="outline12"><path d="M344,273.992H320a23.865,23.865,0,0,0-5.14.585A7.919,7.919,0,0,0,312,274H280V222.641A36.684,36.684,0,0,0,243.359,186H232a8,8,0,0,0-8,8v28.562a62.323,62.323,0,0,1-8.859,32.032l-12.616,20.979-36.048,14.419H120a8,8,0,0,0-8,8v104a8,8,0,0,0,8,8h47.961c.014,0,.025.008.039.008h31.016l31.046,7.758A7.71,7.71,0,0,0,232,418h72a7.924,7.924,0,0,0,2.89-.583,23.916,23.916,0,0,0,5.11.575h24a24.026,24.026,0,0,0,24-24,23.708,23.708,0,0,0-3.211-11.766,23.767,23.767,0,0,0,4.969-36.234,23.627,23.627,0,0,0,0-32,23.9,23.9,0,0,0-17.758-40Zm-184,120H128v-88h32Zm142.242-48a23.438,23.438,0,0,0-3.031,27.767A23.948,23.948,0,0,0,288,393.992,23.7,23.7,0,0,0,289.477,402H232.984l-31.046-7.758A7.71,7.71,0,0,0,200,394H176V303.414l34.969-13.984c.105-.042.17-.133.273-.179a7.9,7.9,0,0,0,2.342-1.534c.061-.06.1-.134.158-.2a7.967,7.967,0,0,0,1.117-1.4l14.008-23.3A78.464,78.464,0,0,0,240,222.562V202h3.359A20.662,20.662,0,0,1,264,222.641v64.273a55.368,55.368,0,0,1-34.969,51.648,8,8,0,0,0,5.938,14.86A71.156,71.156,0,0,0,279.769,290h17.7a23.244,23.244,0,0,0,4.77,23.992,23.627,23.627,0,0,0,0,32Zm33.758,56H312a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm8-32H320a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-32H320a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-32H320a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z"></path><path d="M206.609,113.969l15.282,11.093-5.836,17.954a16,16,0,0,0,24.625,17.89l15.273-11.1,15.281,11.1a15.756,15.756,0,0,0,18.805.008,15.767,15.767,0,0,0,5.813-17.891l-5.836-17.961L305.3,113.969a16.006,16.006,0,0,0-9.406-28.953l-18.883.007-5.836-17.961v-.007a16,16,0,0,0-30.438.007L234.9,85.016H216.016a16.008,16.008,0,0,0-9.407,28.953ZM234.9,101.016a15.965,15.965,0,0,0,15.219-11.055l5.8-18.055a.843.843,0,0,1,.039.1l5.836,17.953a15.967,15.967,0,0,0,15.219,11.055h18.883L280.6,112.125A15.964,15.964,0,0,0,274.8,130l5.844,17.969-15.289-11.11a15.984,15.984,0,0,0-18.8.008l-15.274,11.094L237.109,130a15.968,15.968,0,0,0-5.812-17.891l-15.281-11.093Z"></path><path d="M136.047,205.805l15.273,11.109a16,16,0,0,0,24.625-17.891l-5.836-17.961,15.282-11.1a16,16,0,0,0-9.407-28.945l-18.882.007-5.836-17.961v-.007a16,16,0,0,0-30.438.007l-5.836,17.954H96.109A16.006,16.006,0,0,0,86.7,169.969l15.281,11.093-5.836,17.954a15.774,15.774,0,0,0,5.813,17.9,15.756,15.756,0,0,0,18.805-.008Zm-24.656-37.7L96.109,157.016h18.883a15.967,15.967,0,0,0,15.219-11.055l5.8-18.055s.015.032.039.1l5.836,17.953A15.965,15.965,0,0,0,157.1,157.016h18.882l-15.281,11.1A15.953,15.953,0,0,0,154.891,186l5.836,17.969-15.282-11.11a15.983,15.983,0,0,0-18.8.008l-15.274,11.094L117.2,186A15.988,15.988,0,0,0,111.391,168.109Z"></path><path d="M391.266,123.062v-.007a16,16,0,0,0-30.438.007l-5.836,17.954H336.109a16.006,16.006,0,0,0-9.406,28.953l15.281,11.093-5.836,17.954a15.774,15.774,0,0,0,5.813,17.9,15.756,15.756,0,0,0,18.805-.008l15.281-11.1,15.273,11.109a16,16,0,0,0,24.625-17.891l-5.836-17.961,15.282-11.1a16,16,0,0,0-9.407-28.945l-18.882.007Zm9.437,45.055A15.953,15.953,0,0,0,394.891,186l5.836,17.969-15.282-11.11a15.983,15.983,0,0,0-18.8.008l-15.274,11.094L357.2,186a15.988,15.988,0,0,0-5.812-17.891l-15.282-11.093h18.883a15.967,15.967,0,0,0,15.219-11.055l5.8-18.055s.015.032.039.1l5.836,17.953A15.965,15.965,0,0,0,397.1,157.016h18.882Z"></path><path d="M256,16C123.664,16,16,123.664,16,256S123.664,496,256,496,496,388.336,496,256,388.336,16,256,16Zm0,464C132.484,480,32,379.516,32,256S132.484,32,256,32,480,132.484,480,256,379.516,480,256,480Z"></path><path d="M432,256a175.64,175.64,0,0,1-25.82,91.82,8,8,0,1,0,13.64,8.36A191.6,191.6,0,0,0,448,256a193.977,193.977,0,0,0-1.625-25.031,8,8,0,1,0-15.859,2.062A179.013,179.013,0,0,1,432,256Z"></path><path d="M80,256a179.013,179.013,0,0,1,1.484-22.969,8,8,0,1,0-15.859-2.062A193.977,193.977,0,0,0,64,256a190.874,190.874,0,0,0,15.258,75.133,8,8,0,0,0,14.719-6.266A175,175,0,0,1,80,256Z"></path></g>
                  </svg>
                </div>
                <div className="counter-content pl-3">
                  <h3 className="counter__number text-color-6 mb-2">
                    <span className="counter">18,200</span>
                    <span className="count-symbol">+</span>
                  </h3>
                  <p className="counter__title">Five Star Ratings</p>
                </div>
                {/* <!-- end counter-content --> */}
              </div>
              {/* <!-- end counter-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end funfact-area --> */}
      {/* <!-- ================================
    END FUN-FACT AREA
================================= --> */}

      {/* <!-- ================================
       START BLOG AREA
================================= --> */}
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-badge pb-3">
                  <span className="ribbon ribbon-lg">From Our Blog</span>
                </div>
                <h2 className="sec__title">Articles You Might <span className="text-color-16">Like.</span></h2>
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
            <div className="col-lg-8">
              <div className="card-item card-item-layout-5 js-tilt">
                <div className="card-image">
                  <img src={img26} data-src={img26} className="card__img lazy" alt="blog image" />
                  <span className="badge">July 3, 2020</span>
                </div>
                {/* <!-- end card-image --> */}
                <div className="card-content">
                  <ul className="listing-meta d-flex align-items-center pt-0">
                    <li>
                      <a href="#" className="listing-cat-link">Health</a>,
                      <a href="#" className="listing-cat-link">Salon</a>
                    </li>
                  </ul>
                  <h4 className="card-title pt-2">
                    <a href="blog-single.html">The Best SPA Salons For Your Relaxation</a>
                  </h4>
                  <div className="avatar-photos pt-4">
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="Alex Smith">
                      <img src={avatarImg} alt="Avatar image" />
                    </a>
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="John Doe">
                      <img src={avatarImg2} alt="Avatar image" />
                    </a>
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="Aron Finch">
                      <img src={avatarImg3} alt="Avatar image" />
                    </a>
                  </div>
                </div>
                {/* <!-- end card-content --> */}
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-8 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item card-item-layout-5 js-tilt">
                <div className="card-image">
                  <img src={img27} data-src={img27} className="card__img lazy" alt="blog image" />
                  <span className="badge">June 25, 2020</span>
                </div>
                {/* <!-- end card-image --> */}
                <div className="card-content">
                  <ul className="listing-meta d-flex align-items-center pt-0">
                    <li>
                      <a href="#" className="listing-cat-link">Music</a>,
                      <a href="#" className="listing-cat-link">Club</a>
                    </li>
                  </ul>
                  <h4 className="card-title pt-2">
                    <a href="blog-single.html">Rocko Band in Marquee Club</a>
                  </h4>
                  <div className="avatar-photos pt-4">
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="Kamran Adi">
                      <img src={avatarImg4} alt="Avatar image" />
                    </a>
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="Wes Boss">
                      <img src={avatarImg5} alt="Avatar image" />
                    </a>
                  </div>
                </div>
                {/* <!-- end card-content --> */}
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item card-item-layout-5 js-tilt">
                <div className="card-image">
                  <img src={img28} data-src={img28} className="card__img lazy" alt="blog image" />
                  <span className="badge">May 12, 2020</span>
                </div>
                {/* <!-- end card-image --> */}
                <div className="card-content">
                  <ul className="listing-meta d-flex align-items-center pt-0">
                    <li>
                      <a href="#" className="listing-cat-link">Business</a>,
                      <a href="#" className="listing-cat-link">Tips</a>
                    </li>
                  </ul>
                  <h4 className="card-title pt-2">
                    <a href="blog-single.html">5 things to know about advertising on Dirto</a>
                  </h4>
                  <div className="avatar-photos pt-4">
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="Alex Smith">
                      <img src={avatarImg} alt="Avatar image" />
                    </a>
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="John Doe">
                      <img src={avatarImg2} alt="Avatar image" />
                    </a>
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="Aron Finch">
                      <img src={avatarImg3} alt="Avatar image" />
                    </a>
                  </div>
                </div>
                {/* <!-- end card-content --> */}
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item card-item-layout-5 js-tilt">
                <div className="card-image">
                  <img src={img29} data-src={img29} className="card__img lazy" alt="blog image" />
                  <span className="badge">April 22, 2020</span>
                </div>
                {/* <!-- end card-image --> */}
                <div className="card-content">
                  <ul className="listing-meta d-flex align-items-center pt-0">
                    <li>
                      <a href="#" className="listing-cat-link">Yoga</a>,
                      <a href="#" className="listing-cat-link">Tips</a>
                    </li>
                  </ul>
                  <h4 className="card-title pt-2">
                    <a href="blog-single.html">The top yoga studio in every state offering virtual classes</a>
                  </h4>
                  <div className="avatar-photos pt-4">
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="Alex Smith">
                      <img src={avatarImg} alt="Avatar image" />
                    </a>
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="John Doe">
                      <img src={avatarImg2} alt="Avatar image" />
                    </a>
                  </div>
                </div>
                {/* <!-- end card-content --> */}
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item card-item-layout-5 js-tilt">
                <div className="card-image">
                  <img src={img30} data-src={img30} className="card__img lazy" alt="blog image" />
                  <span className="badge">March 15, 2020</span>
                </div>
                {/* <!-- end card-image --> */}
                <div className="card-content">
                  <ul className="listing-meta d-flex align-items-center pt-0">
                    <li>
                      <a href="#" className="listing-cat-link">Travel</a>,
                      <a href="#" className="listing-cat-link">Restaurants</a>
                    </li>
                  </ul>
                  <h4 className="card-title pt-2">
                    <a href="blog-single.html">Latin Street Food Tour Across North America</a>
                  </h4>
                  <div className="avatar-photos pt-4">
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="Alex Smith">
                      <img src={avatarImg} alt="Avatar image" />
                    </a>
                    <a href="#" className="user-thumb" data-toggle="tooltip" data-placement="top" title="John Doe">
                      <img src={avatarImg2} alt="Avatar image" />
                    </a>
                  </div>
                </div>
                {/* <!-- end card-content --> */}
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="more-btn-box d-flex flex-wrap align-items-center justify-content-between pt-4">
            <div>
              <h4 className="pb-2 font-weight-semi-bold">Stay in the loop.</h4>
              <p>View all blog posts and read more about topics you care about</p>
            </div>
            <a href="blog-grid.html" className="theme-btn gradient-btn">Read More Post<i className="la la-arrow-right ml-2"></i></a>
          </div>
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
      <section className="cta-area cta-bg bg-fixed section-padding text-center">
        <div className="overlay opacity-9"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content p-0">
                <div className="section-heading">
                  <div className="section-badge pb-3">
                    <span className="ribbon ribbon-lg">Join with us</span>
                  </div>
                  <h2 className="sec__title mb-4 font-size-45 line-height-60 text-white">
                    Grow Your Marketing With <span className="text-color-16">DPGB</span> and <br />
                    Be Happy With Your Business.
                  </h2>
                  <p className="sec__desc text-white line-height-35 mb-3">
                    Your business deserves efficiently unleash cross-media information without cross-media value <br />
                    Quickly maximize timely deliverables for real-time schemas.
                  </p>
                </div>
                {/* <!-- end section-heading --> */}
                <div className="btn-box pt-4">
                  <a href="#" className="theme-btn gradient-btn" data-toggle="modal" data-target="#signUpModal"><i className="la la-user-plus mr-2"></i>Click Me to Start</a>
                </div>
                {/* <!-- end btn-box --> */}
              </div>
            </div>
            {/* <!-- end col-lg-12 --> */}
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
      <section className="footer-area bg-gradient-gray pattern-bg-2 padding-top-30px padding-bottom-30px">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <ul className="social-profile social-profile-styled">
                <li><a href="#" className="facebook-bg" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="lab la-facebook-f"></i></a></li>
                <li><a href="#" className="twitter-bg" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="lab la-twitter"></i></a></li>
                <li><a href="#" className="instagram-bg" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="lab la-instagram"></i></a></li>
                <li><a href="#" className="youtube-bg" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="lab la-youtube"></i></a></li>
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
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <div className="footer-logo">
                  <Link to="/" className="foot-logo"><img src={Logo} className={style.logoSize} alt="logo" /></Link>
                </div>
                {/* <!-- end footer-logo --> */}
                <ul className="list-items contact-links pt-3">
                  <li><span className="d-block text-color mb-1"><i className="la la-map mr-1 text-color-2"></i>Address:</span> 12345 Little Baker St, Melbourne</li>
                  <li><span className="d-block text-color mb-1"><i className="la la-phone mr-1 text-color-2"></i>Phone:</span><a href="#">923013109562</a></li>
                  <li><span className="d-block text-color mb-1"><i className="la la-envelope mr-1 text-color-2"></i>Email:</span><a href="#">DPGB@gmail.com</a></li>
                </ul>
              </div>
              {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4 className="footer__title">Company</h4>
                <div className="stroke-shape mb-3"></div>
                <ul className="list-items">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="career.html">Careers</a></li>
                  <li><a href="blog-grid.html">Press</a></li>
                  <li><a href="#">Investor Relations</a></li>
                  <li><a href="#">Content Guidelines</a></li>
                  <li><a href="#">Ad Choices</a></li>
                </ul>
              </div>
              {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4 className="footer__title">Discover</h4>
                <div className="stroke-shape mb-3"></div>
                <ul className="list-items">
                  <li><a href="#">DPGB Project Cost Guides</a></li>
                  <li><a href="#">The Local DPGB</a></li>
                  <li><a href="#">Collections</a></li>
                  <li><a href="#">DPGB Mobile</a></li>
                  <li><a href="blog-grid.html">DPGB Blog</a></li>
                  <li><a href="contact.html">Support</a></li>
                </ul>
              </div>
              {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4 className="footer__title">DPGB for Business</h4>
                <div className="stroke-shape mb-3"></div>
                <ul className="list-items">
                  <li><a href="#">Claim your Business</a></li>
                  <li><a href="#">Advertise on Dirto</a></li>
                  <li><a href="#">Add Restaurant</a></li>
                  <li><a href="#">Business Support</a></li>
                  <li><a href="#">Products for Businesses</a></li>
                  <li><a href="#">Business Success Stories</a></li>
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
                  <h2 className="sec__title mb-0 font-size-24 line-height-30">Dont't miss your monthly offer</h2>
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
          <div className="section-block-2 margin-top-30px margin-bottom-30px"></div>
          <div className="row">
            <div className="col-lg-12">
              <div className="copy-right d-flex align-items-center justify-content-between">
                <p className="copy__desc">
                  &copy; Copyright DPGB <script> document.write(new Date().getFullYear()); </script>. Made with
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
                    New to DPGB? <a className="text-color-2 signup-btn" href="javascript:void(0)">Create account</a>
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
              <h5 className="modal-title" id="signUpModalTitle">Welcome! create your DPGB account</h5>
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
                    Already on DPGB? <a className="text-color-2 login-btn" href="javascript:void(0)">Log in</a>
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

export default Home6