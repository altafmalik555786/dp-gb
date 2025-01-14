import React from 'react'
import arrowShape2 from "../Assets/images/arrow-shape2.png"
import img16 from "../Assets/images/img16.jpg"
import img4 from "../Assets/images/img4.jpg"
import img5 from "../Assets/images/img5.jpg"
import img6 from "../Assets/images/img6.jpg"
import img7 from "../Assets/images/img7.jpg"
import img8 from "../Assets/images/img8.jpg"
import img9 from "../Assets/images/img9.jpg"
import img25 from "../Assets/images/img25.jpg"
import img17 from "../Assets/images/img17.jpg"
import img18 from "../Assets/images/img18.jpg"
import img19 from "../Assets/images/img19.jpg"
import img22 from "../Assets/images/img22.jpg"
import img23 from "../Assets/images/img23.jpg"
import img24 from "../Assets/images/img24.jpg"
import img31 from "../Assets/images/img31.jpg"
import shopLogo from "../Assets/images/shop-logo.png"
import listingLogo from "../Assets/images/listing-logo.jpg"
import listingLogo2 from "../Assets/images/listing-logo2.jpg"
import listingLogo3 from "../Assets/images/listing-logo3.jpg"
import avatarImg from "../Assets/images/avatar-img.jpg"
import avatarImg2 from "../Assets/images/avatar-img2.jpg"
import avatarImg3 from "../Assets/images/avatar-img3.jpg"
import logoBlack from "../Assets/images/logo-black.png"
import Header from './Header'
import Logo from '../Assets/images/dpgb.png'
import style from './logoStyle.module.scss'
import { Link } from 'react-router-dom'


function Home2() {
  return (
    <div>
        <Header />
        <section className="hero-wrapper hero-bg-2 pb-0 overflow-hidden">
    <div className="overlay"></div>  
     {/* <!-- end overlay --> */}
    <span className="line-bg line-bg1"></span>
    <span className="line-bg line-bg2"></span>
    <span className="line-bg line-bg3"></span>
    <span className="line-bg line-bg4"></span>
    <span className="line-bg line-bg5"></span>
    <span className="line-bg line-bg6"></span>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="hero-heading text-center">
                    <div className="section-heading">
                        <h2 className="sec__title">Find The Best Places in your city</h2>
                        <p className="sec__desc">DPGB  helps you find out whats happening in your city, Let's explore.</p>
                    </div>
                </div>
                {/* <!-- end hero-heading --> */}
                <div className="main-search-input main-search-input-2 position-relative z-index-2">
                    <div className="main-search-input-item">
                        <form action="#" className="form-box">
                            <div className="input-box">
                                <label className="label-text">What are you</label>
                                <div className="form-group mb-0">
                                    <span className="la la-search form-icon"></span>
                                    <input className="form-control" type="search" placeholder="looking for?"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                    <div className="main-search-input-item user-chosen-select-container">
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
                    <div className="main-search-input-item user-chosen-select-container">
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
                    <div className="main-search-input-item">
                        <label className="label-text">Search Activities</label>
                        <button className="theme-btn gradient-btn border-0 w-100" type="submit"><i className="la la-search mr-2"></i>Search Now</button>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                </div>
                {/* <!-- end main-search-input --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
    <div className="bg-white position-relative z-index-1 pb-4">
        <div className="container">
            <div className="row">
                <div className="highlighted-categories highlighted-categories-2 pb-5 mx-auto mt-0 padding-top-130px">
                    <div className="d-flex align-items-end justify-content-center highlight-search-desc pb-5 text-center">
                        <h5 className="highlighted__title text-color">Just looking around ? Use quick <br/> search by category :</h5>
                        <img src={arrowShape2} alt="" className="ml-5 cat-arrow-icon"/>
                    </div>
                    <div className="highlight-lists d-flex justify-content-center mt-4">
                        <div className="hero-category-item hero-category--item">
                            <a href="#" className="d-block hero-cat-link hover-y">
                                <span className="icon-element bg-1 mx-auto"><i className="la la-building-o"></i></span>
                                apartadadadadments
                            </a>
                        </div>
                        <div className="hero-category-item hero-category--item">
                            <a href="#" className="d-block hero-cat-link hover-y">
                                <span className="icon-element bg-2 mx-auto"><i className="la la-cutlery"></i></span>
                                Restaurants
                            </a>
                        </div>
                        <div className="hero-category-item hero-category--item">
                            <a href="#" className="d-block hero-cat-link hover-y">
                                <span className="icon-element bg-3 mx-auto"><i className="la la-plane"></i></span>
                                travel
                            </a>
                        </div>
                        <div className="hero-category-item hero-category--item">
                            <a href="#" className="d-block hero-cat-link hover-y">
                                <span className="icon-element bg-4 mx-auto"><i className="la la-music"></i></span>
                                Events
                            </a>
                        </div>
                        <div className="hero-category-item hero-category--item">
                            <a href="#" className="d-block hero-cat-link hover-y">
                                <span className="icon-element bg-5 mx-auto"><i className="la la-gear"></i></span>
                                fitness
                            </a>
                        </div>
                        <div className="hero-category-item hero-category--item">
                            <a href="#" className="d-block hero-cat-link hover-y">
                                <span className="icon-element bg-6 mx-auto"><i className="la la-hotel"></i></span>
                                Hotels
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- end highlighted-categories --> */}
            </div>
        </div>
    </div>
</section>
{/* <!-- end hero-wrapper --> */}

{/* <!-- ================================
    END HERO-WRAPPER AREA
================================= -->

<!-- ================================
    START DESTINATION AREA
================================= --> */}
<section className="destination-area bg-gradient-gray section--padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="destination-content d-flex flex-wrap align-items-center justify-content-between">
                    <div className="section-heading">
                        <div className="gradient-icon mb-3">
                            <svg width="50" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511.999 511.999" 
                            // xml:space="preserve"
                            >
                               <defs>
                                <linearGradient id="svg-gradient">
                                  <stop offset="5%" stop-color="#28d5a7" />
                                    <stop offset="95%" stop-color="#53ad96" />
                                </linearGradient>
                              </defs>
                                <g>
                                    <g>
                                        <path d="M125.768,153.902c-69.22,0-125.535,56.315-125.535,125.535c0,42.977,20.444,89.185,60.765,137.341
                                            c5.991,7.155,11.961,13.785,17.69,19.834c-26.034,7.106-41.665,19.873-41.665,34.774c0,26.379,45.722,40.613,88.741,40.613
                                            c43.02,0,88.741-14.235,88.741-40.613c0-14.889-15.626-27.659-41.643-34.768c10.394-10.973,21.578-23.883,32.19-38.283
                                            c2.46-3.339,1.748-8.038-1.59-10.498c-3.336-2.457-8.038-1.747-10.498,1.591c-12.812,17.387-26.68,32.667-38.781,44.804
                                            c-1.387,0.708-2.547,1.832-3.274,3.249c-10.84,10.653-19.962,18.556-25.138,22.874c-5.119-4.276-14.102-12.072-24.803-22.586
                                            c-0.768-1.683-2.117-3.003-3.763-3.739c-34.007-34.205-81.957-93.301-81.957-154.591c0-60.94,49.579-110.519,110.519-110.519
                                            s110.519,49.579,110.519,110.519c0,26.613-9.068,55.353-26.952,85.422c-2.119,3.565-0.949,8.172,2.615,10.291
                                            s8.172,0.949,10.291-2.615c19.284-32.424,29.062-63.746,29.062-93.098C251.303,210.217,194.988,153.902,125.768,153.902z
                                             M121.173,475.971c1.352,1.047,2.974,1.57,4.595,1.57c1.621,0,3.242-0.523,4.595-1.57c0.921-0.713,13.467-10.497,30.19-26.848
                                            c25.322,5.164,38.938,15.107,38.938,22.264c0,5.345-7.326,11.651-19.119,16.456c-14.464,5.895-33.857,9.142-54.607,9.142
                                            c-45.006,0-73.726-15.162-73.726-25.598c0-7.167,13.62-17.105,38.956-22.269C107.811,465.566,120.375,475.353,121.173,475.971z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M125.768,224.854c-11.875,0-23.167,3.749-32.655,10.842c-3.32,2.483-4,7.188-1.518,10.509
                                            c2.484,3.32,7.189,3.999,10.509,1.518c6.871-5.137,15.054-7.853,23.663-7.853c21.817,0,39.566,17.749,39.566,39.567
                                            c0,21.817-17.749,39.566-39.566,39.566s-39.566-17.75-39.566-39.566c0-3.723,0.515-7.404,1.53-10.938
                                            c1.144-3.985-1.159-8.143-5.144-9.288c-3.984-1.14-8.143,1.16-9.288,5.145c-1.401,4.883-2.112,9.956-2.112,15.081
                                            c0,30.096,24.485,54.582,54.582,54.582c30.096,0,54.582-24.485,54.582-54.582C180.35,249.34,155.864,224.854,125.768,224.854z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M452.958,218.121c3.82-4.099,7.755-8.515,11.701-13.229c31.258-37.333,47.107-73.222,47.107-106.673
                                            C511.766,44.062,467.705,0,413.547,0c-39.563,0-75.086,23.546-90.497,59.986c-1.616,3.819,0.171,8.225,3.989,9.839
                                            c3.818,1.614,8.225-0.171,9.839-3.989c13.058-30.872,43.152-50.821,76.669-50.821c45.879,0,83.204,37.326,83.204,83.205
                                            c0,62.043-65.138,121.484-83.207,136.775c-3.982-3.365-10.25-8.873-17.599-16.077c-0.733-1.453-1.917-2.605-3.339-3.318
                                            c-25.923-26.101-62.263-70.968-62.263-117.38c0-4.147-3.36-7.508-7.508-7.508c-4.146,0-7.508,3.361-7.508,7.508
                                            c0,33.45,15.849,69.339,47.108,106.673c3.945,4.711,7.877,9.125,11.695,13.223c-19.354,5.815-30.527,15.713-30.527,27.632
                                            c0,10.052,8.154,18.911,22.962,24.944c12.67,5.163,29.355,8.007,46.981,8.007c17.625,0,34.31-2.844,46.981-8.007
                                            c14.805-6.034,22.959-14.893,22.959-24.945C483.485,233.85,472.304,223.943,452.958,218.121z M413.545,263.682
                                            c-35.539,0-54.926-11.848-54.926-17.936c0-3.966,8.819-11.224,27.651-15.228c12.671,12.329,22.076,19.655,22.683,20.126
                                            c1.353,1.047,2.974,1.57,4.595,1.57c1.621,0,3.241-0.523,4.595-1.57c0.607-0.469,10.01-7.796,22.681-20.124
                                            c8.39,1.789,15.658,4.41,20.744,7.506c4.323,2.634,6.904,5.52,6.904,7.72C468.47,251.834,449.083,263.682,413.545,263.682z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M413.547,54.532c-24.089,0-43.688,19.598-43.688,43.689c0,24.089,19.598,43.687,43.688,43.687
                                            s43.688-19.597,43.688-43.687C457.235,74.131,437.637,54.532,413.547,54.532z M413.548,126.892
                                            c-15.812,0-28.673-12.862-28.673-28.672c0-15.81,12.862-28.673,28.673-28.673c15.81,0,28.673,12.862,28.673,28.673
                                            C442.22,114.03,429.358,126.892,413.548,126.892z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M316.157,238.239h-3.428c-2.496,0-5.004,0.165-7.458,0.492c-4.109,0.547-6.998,4.321-6.452,8.433
                                            c0.503,3.775,3.727,6.519,7.433,6.519c0.33,0,0.664-0.021,1-0.066c1.799-0.239,3.642-0.36,5.478-0.36h3.427v-0.001
                                            c4.147,0,7.508-3.36,7.508-7.508S320.304,238.239,316.157,238.239z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M291.336,463.496c-0.012,0-0.023,0-0.035,0l-9.916,0.045c-4.146,0.019-7.492,3.396-7.474,7.542
                                            c0.018,4.135,3.377,7.474,7.507,7.474c0.012,0,0.023,0,0.035,0l9.916-0.045c4.146-0.019,7.492-3.396,7.474-7.542
                                            C298.825,466.834,295.467,463.496,291.336,463.496z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M325.066,335.489h-9.916c-4.147,0-7.508,3.362-7.508,7.508c0,4.147,3.36,7.508,7.508,7.508h9.916
                                            c4.147,0,7.508-3.36,7.508-7.508C332.574,338.851,329.214,335.489,325.066,335.489z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M285.284,253.536c-2.811-3.046-7.559-3.238-10.609-0.428c-2.799,2.581-5.345,5.458-7.567,8.552
                                            c-2.419,3.369-1.649,8.06,1.719,10.479c1.325,0.952,2.857,1.41,4.374,1.41c2.335,0,4.637-1.087,6.104-3.129
                                            c1.63-2.269,3.498-4.381,5.551-6.275C287.904,261.334,288.095,256.584,285.284,253.536z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M331.002,463.314c-0.012,0-0.023,0-0.035,0l-9.915,0.045c-4.146,0.018-7.492,3.396-7.474,7.542
                                            c0.018,4.135,3.377,7.474,7.507,7.474c0.012,0,0.023,0,0.035,0l9.915-0.045c4.146-0.018,7.492-3.396,7.474-7.542
                                            C338.49,466.653,335.132,463.314,331.002,463.314z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M251.671,463.675c-0.012,0-0.023,0-0.035,0l-9.916,0.045c-4.146,0.019-7.492,3.396-7.474,7.542
                                            c0.019,4.135,3.375,7.474,7.507,7.474c0.012,0,0.023,0,0.035,0l9.916-0.045c4.146-0.019,7.492-3.396,7.474-7.542
                                            C259.16,467.013,255.802,463.675,251.671,463.675z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M290.829,329.178c-2.359-1.488-4.578-3.226-6.593-5.163c-2.989-2.875-7.743-2.78-10.616,0.206
                                            c-2.875,2.988-2.782,7.741,0.206,10.615c2.748,2.643,5.773,5.012,8.991,7.042c1.244,0.785,2.629,1.159,3.999,1.159
                                            c2.492,0,4.929-1.239,6.358-3.504C295.387,336.027,294.336,331.39,290.829,329.178z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M272.373,302.287c-0.504-2.588-0.76-5.25-0.76-7.914l0.002-0.417c0.049-4.146-3.273-7.546-7.42-7.594
                                            c-0.029-0.001-0.059-0.001-0.089-0.001c-4.106,0-7.458,3.304-7.506,7.421l-0.003,0.592c0,3.626,0.349,7.255,1.037,10.786
                                            c0.698,3.585,3.84,6.072,7.361,6.072c0.475,0,0.959-0.045,1.443-0.14C270.509,310.299,273.165,306.357,272.373,302.287z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M364.733,335.489h-9.916c-4.147,0-7.508,3.362-7.508,7.508c0,4.147,3.361,7.508,7.508,7.508h9.916
                                            c4.147,0,7.508-3.36,7.508-7.508C372.241,338.851,368.88,335.489,364.733,335.489z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M485.274,350.775c-2.893-2.283-5.985-4.357-9.192-6.162c-3.609-2.036-8.19-0.757-10.226,2.856
                                            c-2.035,3.612-0.757,8.192,2.856,10.226c2.53,1.427,4.972,3.063,7.255,4.866c1.38,1.089,3.018,1.616,4.648,1.616
                                            c2.218,0,4.416-0.98,5.898-2.856C489.083,358.066,488.529,353.344,485.274,350.775z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M457.405,468.694c-0.57-4.107-4.366-6.982-8.465-6.41c-2.459,0.34-4.977,0.519-7.488,0.529l-1.405,0.007
                                            c-4.147,0.021-7.492,3.399-7.472,7.544c0.021,4.134,3.378,7.472,7.507,7.472c0.013,0,0.025,0,0.037,0l1.402-0.007
                                            c3.171-0.014,6.359-0.239,9.474-0.67C455.104,476.591,457.973,472.8,457.405,468.694z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M490.54,447.581c-2.861-3.004-7.614-3.119-10.614-0.258c-2.107,2.007-4.387,3.865-6.778,5.523
                                            c-3.407,2.362-4.254,7.04-1.893,10.449c1.459,2.103,3.798,3.231,6.177,3.231c1.476,0,2.966-0.434,4.271-1.338
                                            c3.026-2.099,5.913-4.451,8.58-6.992C493.286,455.335,493.4,450.582,490.54,447.581z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M505.152,411.118c-4.069-0.767-7.999,1.913-8.767,5.988c-0.539,2.857-1.305,5.692-2.28,8.428
                                            c-1.392,3.905,0.645,8.2,4.551,9.593c0.833,0.297,1.685,0.438,2.522,0.438c3.084,0,5.976-1.916,7.072-4.988
                                            c1.237-3.47,2.21-7.067,2.893-10.692C511.908,415.81,509.226,411.884,505.152,411.118z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M509.612,386.984c-1.018-3.545-2.324-7.037-3.886-10.384c-1.754-3.758-6.218-5.382-9.979-3.63
                                            c-3.757,1.754-5.382,6.221-3.629,9.979c1.23,2.635,2.26,5.387,3.061,8.177c0.945,3.293,3.949,5.439,7.213,5.439
                                            c0.687,0,1.383-0.095,2.075-0.293C508.452,395.127,510.755,390.969,509.612,386.984z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M404.399,335.489h-9.916c-4.147,0-7.508,3.362-7.508,7.508c0,4.147,3.36,7.508,7.508,7.508h9.916
                                            c4.147,0,7.508-3.36,7.508-7.508C411.907,338.851,408.546,335.489,404.399,335.489z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M370.668,463.134c-0.012,0-0.023,0-0.035,0l-9.916,0.045c-4.146,0.018-7.492,3.396-7.474,7.542
                                            c0.019,4.135,3.377,7.474,7.507,7.474c0.012,0,0.023,0,0.035,0l9.916-0.045c4.146-0.019,7.492-3.396,7.474-7.542
                                            C378.157,466.473,374.798,463.134,370.668,463.134z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M444.395,335.561c-1.062-0.048-2.138-0.071-3.196-0.071h-7.051c-4.147,0-7.508,3.362-7.508,7.508
                                            c0,4.147,3.36,7.508,7.508,7.508h7.051v-0.001c0.849,0,1.693,0.019,2.532,0.056c0.113,0.006,0.226,0.008,0.338,0.008
                                            c3.993,0,7.317-3.146,7.494-7.175C451.746,339.25,448.537,335.744,444.395,335.561z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M410.333,462.955c-0.012,0-0.023,0-0.035,0L400.382,463c-4.146,0.018-7.492,3.396-7.474,7.542
                                            c0.019,4.135,3.377,7.474,7.507,7.474c0.012,0,0.024,0,0.035,0l9.916-0.045c4.146-0.019,7.492-3.396,7.474-7.542
                                            C417.822,466.293,414.464,462.955,410.333,462.955z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h2 className="sec__title">Discover Popular Destination</h2>
                        <p className="sec__desc">
                            Explore most popular destination and places, Morbi convallis <br/>
                            bibendum urna ut viverra. Maecenas,
                        </p>
                    </div>
                    {/* <!-- end section-heading --> */}
                    <div className="btn-box">
                        <a href="all-locations.html" className="theme-btn gradient-btn">View All Destination <i className="la la-arrow-right ml-1"></i></a>
                    </div>
                    {/* <!-- end btn-box --> */}
                </div>
            </div>
            {/* <!-- end col-lg-12 --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="row mt-5">
            <div className="col-lg-4 responsive-column">
                <div className="flip-box">
                    <div className="flip-box-front">
                        <img src={img16} data-src={img16} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-end justify-content-start">
                            <div>
                                <h3 className="flip-title mb-1">Canada</h3>
                                <p className="flip-subtitle">72 Listings</p>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-front --> */}
                    <div className="flip-box-back">
                        <img src={img16} data-src={img16} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-center justify-content-center">
                            <div>
                                <div className="icon-element mx-auto mb-3 bg-white text-color-2">
                                    <i className="la la-map-marker"></i>
                                </div>
                                <h3 className="flip-title">Explore Places</h3>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-back --> */}
                </div>
                {/* <!-- end flip-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="flip-box">
                    <div className="flip-box-front">
                        <img src={img4} data-src={img4}  alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-end justify-content-start">
                            <div>
                                <h3 className="flip-title mb-1">United States</h3>
                                <p className="flip-subtitle">34 Listings</p>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-front --> */}
                    <div className="flip-box-back">
                        <img src={img4}  data-src={img4}  alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-center justify-content-center">
                            <div>
                                <div className="icon-element mx-auto mb-3 bg-white text-color-2">
                                    <i className="la la-map-marker"></i>
                                </div>
                                <h3 className="flip-title">Explore Places</h3>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-back --> */}
                </div>
                {/* <!-- end flip-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="flip-box">
                    <div className="flip-box-front">
                        <img src={img5} data-src={img5} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-end justify-content-start">
                            <div>
                                <h3 className="flip-title mb-1">United Kingdom</h3>
                                <p className="flip-subtitle">56 Listings</p>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-front --> */}
                    <div className="flip-box-back">
                        <img src={img5} data-src={img5} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-center justify-content-center">
                            <div>
                                <div className="icon-element mx-auto mb-3 bg-white text-color-2">
                                    <i className="la la-map-marker"></i>
                                </div>
                                <h3 className="flip-title">Explore Places</h3>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-back --> */}
                </div>
                {/* <!-- end flip-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-3 responsive-column">
                <div className="flip-box">
                    <div className="flip-box-front">
                        <img src={img6} data-src={img6} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-end justify-content-start">
                            <div>
                                <h3 className="flip-title mb-1">Mexico</h3>
                                <p className="flip-subtitle">22 Listings</p>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-front --> */}
                    <div className="flip-box-back">
                        <img src={img6} data-src={img6} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-center justify-content-center">
                            <div>
                                <div className="icon-element mx-auto mb-3 bg-white text-color-2">
                                    <i className="la la-map-marker"></i>
                                </div>
                                <h3 className="flip-title">Explore Places</h3>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-back --> */}
                </div>
                {/* <!-- end flip-box --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
                <div className="flip-box">
                    <div className="flip-box-front">
                        <img src={img7} data-src={img7} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-end justify-content-start">
                            <div>
                                <h3 className="flip-title mb-1">Costa Rica</h3>
                                <p className="flip-subtitle">34 Listings</p>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-front --> */}
                    <div className="flip-box-back">
                        <img src={img7} data-src={img7} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-center justify-content-center">
                            <div>
                                <div className="icon-element mx-auto mb-3 bg-white text-color-2">
                                    <i className="la la-map-marker"></i>
                                </div>
                                <h3 className="flip-title">Explore Places</h3>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-back --> */}
                </div>
                {/* <!-- end flip-box --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
                <div className="flip-box">
                    <div className="flip-box-front">
                        <img src={img8} data-src={img8} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-end justify-content-start">
                            <div>
                                <h3 className="flip-title mb-1">Australia</h3>
                                <p className="flip-subtitle">67 Listings</p>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-front --> */}
                    <div className="flip-box-back">
                        <img src={img8} data-src={img8} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-center justify-content-center">
                            <div>
                                <div className="icon-element mx-auto mb-3 bg-white text-color-2">
                                    <i className="la la-map-marker"></i>
                                </div>
                                <h3 className="flip-title">Explore Places</h3>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-back --> */}
                </div>
                {/* <!-- end flip-box --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
                <div className="flip-box">
                    <div className="flip-box-front">
                        <img src={img9} data-src={img9} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-end justify-content-start">
                            <div>
                                <h3 className="flip-title mb-1">New Zealand</h3>
                                <p className="flip-subtitle">12 Listings</p>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-front --> */}
                    <div className="flip-box-back">
                        <img src={img9} data-src={img9} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-center justify-content-center">
                            <div>
                                <div className="icon-element mx-auto mb-3 bg-white text-color-2">
                                    <i className="la la-map-marker"></i>
                                </div>
                                <h3 className="flip-title">Explore Places</h3>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-back --> */}
                </div>
                {/* <!-- end flip-box --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="flip-box">
                    <div className="flip-box-front">
                        <img src={img17} data-src={img17} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-end justify-content-start">
                            <div>
                                <h3 className="flip-title mb-1">Switzerland</h3>
                                <p className="flip-subtitle">22 Listings</p>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-front --> */}
                    <div className="flip-box-back">
                        <img src={img17} data-src={img17} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-center justify-content-center">
                            <div>
                                <div className="icon-element mx-auto mb-3 bg-white text-color-2">
                                    <i className="la la-map-marker"></i>
                                </div>
                                <h3 className="flip-title">Explore Places</h3>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-back --> */}
                </div>
                {/* <!-- end flip-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="flip-box">
                    <div className="flip-box-front">
                        <img src={img18} data-src={img18} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-end justify-content-start">
                            <div>
                                <h3 className="flip-title mb-1">Italy</h3>
                                <p className="flip-subtitle">98 Listings</p>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-front --> */}
                    <div className="flip-box-back">
                        <img src={img18} data-src={img18} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-center justify-content-center">
                            <div>
                                <div className="icon-element mx-auto mb-3 bg-white text-color-2">
                                    <i className="la la-map-marker"></i>
                                </div>
                                <h3 className="flip-title">Explore Places</h3>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-back --> */}
                </div>
                {/* <!-- end flip-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="flip-box">
                    <div className="flip-box-front">
                        <img src={img19} data-src={img19} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-end justify-content-start">
                            <div>
                                <h3 className="flip-title mb-1">Thailand</h3>
                                <p className="flip-subtitle">13 Listings</p>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-front --> */}
                    <div className="flip-box-back">
                        <img src={img19} data-src={img19} alt="" className="flip-img lazy"/>
                        <a href="#" className="flip-content d-flex align-items-center justify-content-center">
                            <div>
                                <div className="icon-element mx-auto mb-3 bg-white text-color-2">
                                    <i className="la la-map-marker"></i>
                                </div>
                                <h3 className="flip-title">Explore Places</h3>
                            </div>
                        </a>
                        {/* <!-- end flip-content --> */}
                    </div>
                    {/* <!-- end flip-box-back --> */}
                </div>
                {/* <!-- end flip-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- end destination-area --> */}

{/* <!-- ================================
    END DESTINATION AREA
================================= -->

<!-- ================================
    START HIW AREA
================================= --> */}
<section className="hiw-area hiw-bottom-right-round bg-gray section-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading text-center">
                    <div className="gradient-icon mb-3 mx-auto">
                        <svg width="50" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480.003 480.003" 
                        // xml:space="preserve"
                        >
                            <defs>
                                <linearGradient id="svg-gradient2">
                                  <stop offset="5%" stop-color="#28d5a7" />
                                    <stop offset="95%" stop-color="#53ad96" />
                                </linearGradient>
                            </defs>
                            <g>
                                <g>
                                    <path d="M296,160.002c-0.035,30.913-25.087,55.965-56,56v16c39.746-0.044,71.956-32.254,72-72H296z"/>
                                </g>
                            </g>
                                                        <g>
                                <g>
                                    <path d="M168,160.002h16c0.035-30.913,25.087-55.965,56-56v-16C200.254,88.046,168.044,120.255,168,160.002z"/>
                                </g>
                            </g>
                                                        <g>
                                <g>
                                    <path d="M254.456,158.298l-26.28-4.376c-2.722-0.44-4.571-3.003-4.131-5.725c0.391-2.419,2.481-4.197,4.931-4.195h22.016
                                        c2.755,0.004,4.988,2.237,4.992,4.992v3.008h16v-3.008c-0.013-11.582-9.394-20.97-20.976-20.992H248v-8h-16v8h-3.008
                                        c-11.594-0.017-21.006,9.367-21.023,20.961c-0.015,10.286,7.426,19.068,17.575,20.743l26.28,4.376
                                        c2.722,0.44,4.571,3.003,4.131,5.725c-0.391,2.419-2.481,4.197-4.931,4.195h-22.032c-2.755-0.004-4.988-2.237-4.992-4.992v-3.008
                                        h-16v3.008c0.013,11.588,9.404,20.979,20.992,20.992H232v8h16v-8h3.008c11.594,0.017,21.006-9.367,21.023-20.961
                                        C272.046,168.754,264.605,159.972,254.456,158.298z"/>
                                </g>
                            </g>
                                                        <g>
                                <g>
                                    <path d="M336,120.002v-64h-16v37.64c-4.77-5.702-10.134-10.881-16-15.448V32.002h-16v35.832
                                        c-14.805-7.775-31.278-11.835-48-11.832c-2.704,0-5.352,0.2-8,0.408V0.002h-16v58.904c-5.462,1.264-10.813,2.968-16,5.096v-16h-16
                                        v24h0.8c-9.355,5.862-17.725,13.165-24.8,21.64v-61.64h-16v88c-22.091,53.019,2.981,113.909,56,136s113.909-2.981,136-56
                                        C346.667,174.402,346.667,145.602,336,120.002z M299.87,223.82c-35.378,33.097-90.889,31.248-123.986-4.13
                                        s-31.249-90.889,4.13-123.986C209.553,68.069,254.16,64.216,288,86.378v41.624h16V99.834
                                        C337.097,135.212,335.249,190.722,299.87,223.82z"/>
                                </g>
                            </g>
                                                        <g>
                                <g>
                                    <rect x="288" y="0.002" width="16" height="16"/>
                                </g>
                            </g>
                                                        <g>
                                <g>
                                    <rect x="184" y="16.002" width="16" height="16"/>
                                </g>
                            </g>
                                                        <g>
                                <g>
                                    <path d="M431.874,54.668c-0.568-3.357-3.197-5.986-6.554-6.554c-13.037-2.174-23.254-12.388-25.432-25.424
                                        c-0.737-4.356-4.866-7.291-9.222-6.554c-3.357,0.568-5.986,3.197-6.554,6.554c-2.178,13.036-12.395,23.25-25.432,25.424
                                        c-4.356,0.737-7.291,4.866-6.554,9.222c0.568,3.357,3.197,5.986,6.554,6.554c13.037,2.174,23.254,12.388,25.432,25.424
                                        c0.737,4.356,4.866,7.291,9.222,6.554c3.357-0.568,5.986-3.197,6.554-6.554c2.178-13.036,12.395-23.25,25.432-25.424
                                        C429.676,63.153,432.611,59.024,431.874,54.668z M392,67.426c-3.119-4.439-6.985-8.305-11.424-11.424
                                        c4.439-3.119,8.305-6.985,11.424-11.424c3.119,4.439,6.985,8.305,11.424,11.424C398.985,59.121,395.119,62.986,392,67.426z"/>
                                </g>
                            </g>
                                                        <g>
                                <g>
                                    <path d="M474.132,342.942c-6.239-9.201-16.576-14.778-27.692-14.94c-5.55,0.004-11.013,1.378-15.904,4L339.8,380.866
                                        c9.314-17.566,2.624-39.356-14.942-48.67c-5.193-2.753-10.981-4.193-16.858-4.194h-89.112c-34.287-27.755-83.313-27.755-117.6,0H0
                                        v16h96v120H0v16h318.312c7.898,0.011,15.62-2.328,22.184-6.72l124.56-83.04C480.624,379.686,484.687,358.51,474.132,342.942z
                                         M456.184,376.93l-124.56,83.072c-3.942,2.624-8.576,4.017-13.312,4H112V339.794c29.223-23.013,70.666-22.054,98.792,2.288
                                        c1.451,1.241,3.299,1.922,5.208,1.92h92c11.046,0,20,8.954,20,20c0,11.046-8.954,20-20,20h-84c-4.418,0-8,3.582-8,8s3.582,8,8,8
                                        h112c1.323,0.001,2.626-0.326,3.792-0.952l98.336-52.952c8.844-4.423,19.599-0.839,24.022,8.004
                                        C466.165,362.131,463.614,371.892,456.184,376.93z"/>
                                </g>
                            </g>
                                                        <g>
                                <g>
                                    <path d="M56,400.002c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S69.255,400.002,56,400.002z M56,432.002
                                        c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S60.418,432.002,56,432.002z"/>
                                </g>
                            </g>
                            </svg>
                    </div>
                    <h2 className="sec__title">How Can I Earn Money with DPGB?</h2>
                    <p className="sec__desc">
                        DPGB provides the various ways that help you can earn money from your site. <br/>
                        Morbi convallis bibendum urna ut viverra.
                    </p>
                </div>
                {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="row mt-5">
            <div className="col-lg-12">
                <div className="section-tab">
                    <ul className="nav nav-tabs justify-content-center align-items-center" id="myTab" role="tablist">
                        <li className="nav-item mr-4">
                            <span className="circle-bg"></span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-gradient active" id="paid-listing-tab" data-toggle="tab" href="#paid-listing" role="tab" aria-controls="paid-listing" aria-selected="true">
                               <i className="la la-money mr-2"></i>Paid Listings
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-gradient" id="promoted-listing-tab" data-toggle="tab" href="#promoted-listing" role="tab" aria-controls="promoted-listing" aria-selected="false">
                                <i className="la la-line-chart mr-2"></i>Promoted Listings
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-gradient" id="paid-claim-listing-tab" data-toggle="tab" href="#paid-claim-listing" role="tab" aria-controls="paid-claim-listing" aria-selected="false">
                                <i className="la la-heart mr-2"></i>Paid Claim Listings
                            </a>
                        </li>
                        <li className="nav-item ml-4">
                            <span className="circle-bg"></span>
                        </li>
                    </ul>
                    <div className="tab-content hiw-tab-content margin-top-60px" id="myTabContent">
                        <div className="tab-pane fade show active" id="paid-listing" role="tabpanel" aria-labelledby="paid-listing-tab">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="card-item card-item-layout-3">
                                        <div className="card-image">
                                            <div className="video-box after-none">
                                                <img src={img31} data-src={img31} className="card__img lazy" alt="video-img"/>
                                                <div className="video-content">
                                                    <a className="icon-element icon-element-lg icon-element-white mx-auto hover-scale" href="https://www.youtube.com/watch?v=GlrxcuEDyF8" data-fancybox title="Play Video">
                                                        <i className="la la-play"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- end video-box --> */}
                                        </div>
                                        {/* <!-- end card-image --> */}
                                        <div className="card-content">
                                            <div className="gradient-icon">
                                                <svg id="Layer_3" viewBox="0 0 64 64" width="60" xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                        <linearGradient id="svg-gradient4">
                                                            <stop offset="5%" stop-color="#28d5a7" />
                                                            <stop offset="95%" stop-color="#53ad96" />
                                                        </linearGradient>
                                                    </defs>
                                                    <g><path d="m62 31h-8.586l9.293-9.293c.391-.391.391-1.023 0-1.414l-19-19c-.391-.391-1.023-.391-1.414 0l-29.707 29.707h-10.586c-.553 0-1 .448-1 1v26c0 .552.447 1 1 1h14.586l3.707 3.707c.195.195.451.293.707.293s.512-.098.707-.293l3.708-3.707h36.585c.553 0 1-.448 1-1v-26c0-.552-.447-1-1-1zm-19-27.586 17.586 17.586-10 10h-7.635c-.229-2.56-1.333-4.938-3.173-6.778-4.288-4.288-11.267-4.289-15.557 0-1.839 1.84-2.943 4.218-3.173 6.778h-5.635zm-15.773 27.586c-.136-.65.046-1.345.53-1.828l1.829 1.828zm10.788 0c-.11-.145-.228-.285-.358-.414-1.561-1.559-4.097-1.56-5.657 0l-2.829-2.828c.756-.755 2.072-.755 2.828 0l1.414-1.414c-.756-.755-1.76-1.171-2.828-1.171s-2.073.416-2.828 1.171l-.001.001-.707-.707-1.414 1.414.707.707c-.879.879-1.268 2.07-1.143 3.243h-2.141c.223-2.025 1.115-3.902 2.576-5.364 3.51-3.509 9.219-3.508 12.729 0 1.461 1.462 2.354 3.339 2.576 5.364h-2.924zm-17.015 29.586-1.586-1.586h3.172zm40-3.586h-58v-24h58z"/><path d="m29 48h-2c0 2.206 1.794 4 4 4v1h2v-1c2.206 0 4-1.794 4-4s-1.794-4-4-4v-4c1.103 0 2 .897 2 2h2c0-2.206-1.794-4-4-4v-1h-2v1c-2.206 0-4 1.794-4 4s1.794 4 4 4v4c-1.103 0-2-.897-2-2zm0-6c0-1.103.897-2 2-2v4c-1.103 0-2-.897-2-2zm4 4c1.103 0 2 .897 2 2s-.897 2-2 2z"/><path d="m32 56c6.065 0 11-4.935 11-11s-4.935-11-11-11-11 4.935-11 11 4.935 11 11 11zm0-20c4.963 0 9 4.038 9 9s-4.037 9-9 9-9-4.038-9-9 4.037-9 9-9z"/><path d="m59 54v-18c0-.552-.447-1-1-1h-12v2h11v16h-11v2h12c.553 0 1-.448 1-1z"/><path d="m6 55h12v-2h-11v-16h11v-2h-12c-.553 0-1 .448-1 1v18c0 .552.447 1 1 1z"/><path d="m46 49h2v2h-2z"/><path d="m50 49h2v2h-2z"/><path d="m46 39h2v2h-2z"/><path d="m50 39h2v2h-2z"/><path d="m43.272 9.414 11.313 11.314-7.778 7.778 1.414 1.414 8.485-8.485c.391-.391.391-1.023 0-1.414l-12.727-12.728c-.375-.375-1.039-.375-1.414 0l-8.485 8.485 1.414 1.414z"/><path d="m44.394 24.678h2v2h-2z" transform="matrix(.707 -.707 .707 .707 -4.861 39.619)"/><path d="m47.222 21.849h2v2h-2z" transform="matrix(.707 -.707 .707 .707 -2.033 40.79)"/><path d="m37.322 17.607h2v2h-2z" transform="matrix(.707 -.707 .707 .707 -1.932 32.548)"/><path d="m40.15 14.778h2v2h-2z" transform="matrix(.707 -.707 .707 .707 .896 33.719)"/><path d="m12 39h2v2h-2z"/><path d="m16 39h2v2h-2z"/><path d="m12 49h2v2h-2z"/><path d="m16 49h2v2h-2z"/></g>
                                                </svg>
                                            </div>
                                            <h4 className="card-title py-4 font-size-28 line-height-40">
                                                Without a doubt, DPGB is the best way to find & discover the greatest places in the city.
                                            </h4>
                                            <div className="btn-box">
                                                <a href="#" className="theme-btn btn-transparent" data-toggle="modal" data-target="#signUpModal"><i className="la la-user-plus mr-1"></i> Get Started</a>
                                            </div>
                                        </div>
                                        {/* <!-- end card-content --> */}
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                        </div>
                        <div className="tab-pane fade" id="promoted-listing" role="tabpanel" aria-labelledby="promoted-listing-tab">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="card-item card-item-layout-3">
                                        <div className="card-content">
                                            <div className="gradient-icon">
                                                <svg width="60" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" 
                                                // xml:space="preserve"
                                                >
                                                        <defs>
                                                        <linearGradient id="svg-gradient5">
                                                            <stop offset="5%" stop-color="#28d5a7" />
                                                            <stop offset="95%" stop-color="#53ad96" />
                                                        </linearGradient>
                                                    </defs>
                                                    <g>
                                                        <path d="M301.676,195.469c-5.487,0-9.938,4.45-9.938,9.937v0.142c0,5.487,4.45,9.937,9.938,9.937c5.487,0,9.937-4.45,9.937-9.937
                                                                 v-0.142C311.613,199.918,307.164,195.469,301.676,195.469z"/>
                                                    </g>
                                                    <g>
                                                                <path d="M358.981,239.257v-81.566c0-3.151-1.495-6.116-4.029-7.99c-2.533-1.873-5.806-2.436-8.819-1.511l-222.865,68.251H66.392
                                                                    C29.784,216.441,0,246.223,0,282.832c0,34.638,26.668,63.148,60.548,66.119l21.873,104.867
                                                                    c3.595,17.238,18.986,29.75,36.595,29.75c11.304,0,21.877-5.031,29.007-13.802c7.13-8.772,9.896-20.148,7.587-31.215
                                                                    l-4.793-22.976c20.962-6.47,36.843-23.876,41.464-45.217l153.85,47.115c0.954,0.292,1.934,0.435,2.909,0.435
                                                                    c2.103,0,4.179-0.668,5.91-1.948c2.534-1.874,4.029-4.839,4.029-7.99v-81.566c19.881-4.532,34.766-22.341,34.766-43.574
                                                                    C393.745,261.599,378.86,243.79,358.981,239.257z M66.392,329.346c-25.65,0-46.517-20.867-46.517-46.515
                                                                    c0-25.65,20.868-46.516,46.517-46.516h48.425v93.032H68.683H66.392z M132.603,457.229c-3.339,4.108-8.292,6.464-13.586,6.464
                                                                    c-8.247,0-15.455-5.859-17.139-13.933L80.907,349.221h35.77l12.697,60.873c0.002,0.007,0.003,0.015,0.005,0.022l6.777,32.493
                                                                    C137.237,447.792,135.942,453.121,132.603,457.229z M146.735,395.992l-8.82-42.285l35.27,10.801
                                                                    C170.668,379,160.483,391.043,146.735,395.992z M339.106,394.534L339.106,394.534l-27.492-8.419V245.255
                                                                    c0-5.487-4.45-9.938-9.937-9.938s-9.937,4.45-9.937,9.938v134.774L188.166,348.31c-0.964-0.482-2.016-0.812-3.127-0.958
                                                                    l-50.345-15.418v-98.206l204.413-62.6V394.534z M358.98,305.575v-45.488c8.756,3.84,14.889,12.587,14.889,22.744
                                                                    C373.869,292.988,367.736,301.735,358.98,305.575z"/>
                                                    </g>
                                                    <g>
                                                                <path d="M466.785,272.894h-44.322c-5.487,0-9.938,4.45-9.938,9.938c0,5.487,4.45,9.937,9.938,9.937h44.322
                                                                    c5.487,0,9.937-4.45,9.937-9.937C476.722,277.344,472.272,272.894,466.785,272.894z"/>
                                                    </g>
                                                    <g>
                                                                <path d="M438.442,196.233c-3.234-4.435-9.453-5.406-13.885-2.172l-22.303,16.267c-4.434,3.234-5.407,9.451-2.173,13.885
                                                                    c1.945,2.668,4.97,4.082,8.036,4.082c2.031,0,4.081-0.621,5.848-1.91l22.303-16.267
                                                                    C440.703,206.884,441.676,200.667,438.442,196.233z"/>
                                                    </g>
                                                    <g>
                                                                <path d="M436.27,355.546l-22.167-16.168c-4.433-3.233-10.651-2.262-13.885,2.173c-3.235,4.434-2.261,10.651,2.173,13.885
                                                                    l22.167,16.167c1.767,1.289,3.816,1.91,5.848,1.91c3.066,0,6.092-1.416,8.036-4.082
                                                                    C441.678,364.996,440.704,358.779,436.27,355.546z"/>
                                                    </g>
                                                    <g>
                                                                <path d="M452.763,64.207H246.495c-5.487,0-9.937,4.45-9.937,9.937s4.45,9.937,9.937,9.937h206.268c5.487,0,9.938-4.45,9.938-9.937
                                                                    S458.251,64.207,452.763,64.207z"/>
                                                    </g>
                                                    <g>
                                                                <path d="M145.734,67.119c-1.849-1.848-4.411-2.912-7.026-2.912c-2.614,0-5.177,1.062-7.025,2.912
                                                                    c-1.858,1.848-2.913,4.412-2.913,7.026s1.054,5.177,2.913,7.025c1.847,1.848,4.411,2.913,7.025,2.913
                                                                    c2.615,0,5.177-1.063,7.026-2.913c1.848-1.847,2.912-4.411,2.912-7.025S147.583,68.967,145.734,67.119z"/>
                                                    </g>
                                                    <g>
                                                                <path d="M109.214,67.119c-1.849-1.848-4.411-2.912-7.026-2.912c-2.614,0-5.177,1.062-7.025,2.912
                                                                    c-1.848,1.848-2.913,4.412-2.913,7.026s1.063,5.177,2.913,7.025c1.847,1.848,4.411,2.913,7.025,2.913
                                                                    c2.615,0,5.177-1.063,7.026-2.913c1.848-1.847,2.912-4.411,2.912-7.025S111.063,68.967,109.214,67.119z"/>
                                                    </g>
                                                    <g>
                                                                <path d="M182.254,67.119c-1.858-1.849-4.411-2.912-7.026-2.912c-2.623,0-5.177,1.062-7.035,2.912
                                                                    c-1.848,1.848-2.903,4.412-2.903,7.026s1.054,5.177,2.903,7.025c1.857,1.848,4.411,2.913,7.035,2.913
                                                                    c2.615,0,5.167-1.063,7.026-2.913c1.848-1.847,2.912-4.411,2.912-7.025S184.103,68.967,182.254,67.119z"/>
                                                    </g>
                                                    <g>
                                                                <path d="M470.263,28.432H84.689c-23.014,0-41.737,18.723-41.737,41.737v136.143c0,5.487,4.45,9.937,9.937,9.937
                                                                    s9.937-4.45,9.937-9.937v-38.684h61.928c5.487,0,9.938-4.45,9.938-9.937s-4.45-9.938-9.938-9.938H62.827v-27.903
                                                                    c0.037,0,0.073,0.006,0.108,0.006h429.19v258.374c0,12.055-9.807,21.862-21.862,21.862h-79.169c-5.487,0-9.938,4.45-9.938,9.938
                                                                    s4.45,9.937,9.938,9.937h79.169c23.014,0,41.737-18.723,41.737-41.737V70.169C512,47.155,493.277,28.432,470.263,28.432z
                                                                     M492.125,99.982H62.935c-0.037,0-0.073,0.005-0.108,0.006V70.169c0-12.055,9.807-21.862,21.862-21.862h385.574
                                                                    c12.055,0,21.862,9.807,21.862,21.862V99.982z"/>
                                                    </g>
                                                    <g>
                                                                <path d="M164.009,150.663c-1.847-1.848-4.411-2.913-7.025-2.913c-2.614,0-5.177,1.063-7.026,2.913
                                                                    c-1.848,1.847-2.912,4.411-2.912,7.025c0,2.615,1.062,5.178,2.912,7.026c1.848,1.858,4.412,2.912,7.026,2.912
                                                                    c2.614,0,5.177-1.052,7.025-2.912c1.848-1.847,2.913-4.411,2.913-7.026C166.922,155.074,165.858,152.51,164.009,150.663z"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h4 className="card-title py-4 font-size-28 line-height-40">
                                                Without a doubt, DPGB is the best way to find & discover the greatest places in the city.
                                            </h4>
                                            <div className="btn-box">
                                                <a href="#" className="theme-btn btn-transparent" data-toggle="modal" data-target="#signUpModal"><i className="la la-user-plus mr-1"></i> Get Started</a>
                                            </div>
                                        </div>
                                        {/* <!-- end card-content --> */}
                                        <div className="card-image card-image-round-right">
                                            <div className="video-box after-none">
                                                <img src="images/img-loading.png" data-src="images/img32.jpg" className="card__img lazy" alt="video-img"/>
                                                <div className="video-content">
                                                    <a className="icon-element icon-element-lg icon-element-white mx-auto hover-scale" href="https://www.youtube.com/watch?v=GlrxcuEDyF8" data-fancybox title="Play Video">
                                                        <i className="la la-play"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- end video-box --> */}
                                        </div>
                                        {/* <!-- end card-image --> */}
                                    </div>
                                    {/* <!-- end card-item--> */}
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                        </div>
                        <div className="tab-pane fade" id="paid-claim-listing" role="tabpanel" aria-labelledby="paid-claim-listing-tab">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="card-item card-item-layout-3">
                                        <div className="card-image">
                                            <div className="video-box after-none">
                                                <img src="images/img-loading.png" data-src="images/img33.jpg" className="card__img lazy" alt="video-img"/>
                                                <div className="video-content">
                                                    <a className="icon-element icon-element-lg icon-element-white mx-auto hover-scale" href="https://www.youtube.com/watch?v=GlrxcuEDyF8" data-fancybox title="Play Video">
                                                        <i className="la la-play"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- end video-box --> */}
                                        </div>
                                        {/* <!-- end card-image --> */}
                                        <div className="card-content">
                                            <div className="gradient-icon">
                                                <svg  viewBox="0 0 512 512" width="60" xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                        <linearGradient id="svg-gradient6">
                                                            <stop offset="5%" stop-color="#28d5a7" />
                                                            <stop offset="95%" stop-color="#53ad96" />
                                                        </linearGradient>
                                                    </defs>
                                                    <g><path d="m320 432a7.99977 7.99977 0 0 0 8-8v-64a7.99977 7.99977 0 0 0 -8-8h-144a7.99977 7.99977 0 0 0 -8 8v56h-24a7.99977 7.99977 0 0 0 -8 8v64a7.99977 7.99977 0 0 0 8 8h144a7.99977 7.99977 0 0 0 8-8v-56zm-8-16h-40v-48h40zm-88 16v48h-16v-48zm16-16v-48h16v48zm-56-48h40v48h-40zm-32 64h40v48h-40zm128 48h-40v-48h40z"/><path d="m32 160h208v176h16v-184a7.99977 7.99977 0 0 0 -8-8h-224a7.99977 7.99977 0 0 0 -8 8v336a7.99977 7.99977 0 0 0 8 8h96v-16h-88z"/><path d="m96 200a24 24 0 1 0 -24 24 24.02687 24.02687 0 0 0 24-24zm-32 0a8 8 0 1 1 8 8 8.00917 8.00917 0 0 1 -8-8z"/><path d="m104 176h104v16h-104z"/><path d="m104 200h72v16h-72z"/><path d="m48 240h56v16h-56z"/><path d="m128 240h96v16h-96z"/><path d="m224 336v-56a7.99977 7.99977 0 0 0 -8-8h-160a7.99977 7.99977 0 0 0 -8 8v104a7.99977 7.99977 0 0 0 8 8h88a7.99977 7.99977 0 0 0 8-8v-64h56v16zm-88-48v16h-72v-16zm0 88h-72v-56h72zm16-72v-16h56v16z"/><path d="m64 400h32v16h-32z"/><path d="m112 400h16v16h-16z"/><path d="m48 424h72v16h-72z"/><path d="m496.291 416.26123-14.5337-134.43555a141.72943 141.72943 0 0 0 -86.42777-115.62068 23.9409 23.9409 0 0 0 -1.46027-30.20514 23.94451 23.94451 0 0 0 2.06751-29.34473 40.01472 40.01472 0 0 0 20.06323-34.65513v-32a24.02687 24.02687 0 0 0 -24-24h-32a39.96344 39.96344 0 0 0 -32 16.02777 39.98613 39.98613 0 0 0 -72 23.97223v16a40.01472 40.01472 0 0 0 20.06323 34.65509 23.94451 23.94451 0 0 0 2.06751 29.34473 23.94064 23.94064 0 0 0 -1.46387 30.20007q-4.16474 1.73337-8.20544 3.71564l7.07714 14.34961a126.23858 126.23858 0 0 1 21.54981-8.26514h77.82373a125.77852 125.77852 0 0 1 90.938 107.54541l14.53368 134.43559a56.00044 56.00044 0 0 1 -55.67579 62.019h-112.708v16h112.708a72.00017 72.00017 0 0 0 71.583-79.73877zm-136.291-384.26123h9.3761a23.88505 23.88505 0 0 0 -1.3761 8v16a16 16 0 0 1 -32 0 24.0275 24.0275 0 0 1 24-24zm-88 24a24 24 0 0 1 48 0 32 32 0 0 0 64 0v-16a8 8 0 0 1 16 0v32a24.02687 24.02687 0 0 1 -24 24h-40a32.036 32.036 0 0 1 -32-32v-8h-16v8a47.80155 47.80155 0 0 0 12.26141 32h-4.26141a24.02687 24.02687 0 0 1 -24-24zm104 56a8 8 0 0 1 0 16h-80a8 8 0 0 1 0-16zm-80 48a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16z"/></g>
                                                </svg>
                                            </div>
                                            <h4 className="card-title py-4 font-size-28 line-height-40">
                                                Without a doubt, DPGB is the best way to find & discover the greatest places in the city.
                                            </h4>
                                            <div className="btn-box">
                                                <a href="#" className="theme-btn btn-transparent" data-toggle="modal" data-target="#signUpModal"><i className="la la-user-plus mr-1"></i> Get Started</a>
                                            </div>
                                        </div>
                                        {/* <!-- end card-content --> */}
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- end section-tab --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
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
    START CARD AREA
================================= --> */}
<section className="card-area section--padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading text-center">
                    <div className="gradient-icon mb-3 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50">
                            <defs>
                                <linearGradient id="svg-gradient3">
                                    <stop offset="5%" stop-color="#28d5a7" />
                                    <stop offset="95%" stop-color="#53ad96" />
                                </linearGradient>
                            </defs>
                            <g id="outline"><path d="M344,273.992H320a23.865,23.865,0,0,0-5.14.585A7.919,7.919,0,0,0,312,274H280V222.641A36.684,36.684,0,0,0,243.359,186H232a8,8,0,0,0-8,8v28.562a62.323,62.323,0,0,1-8.859,32.032l-12.616,20.979-36.048,14.419H120a8,8,0,0,0-8,8v104a8,8,0,0,0,8,8h47.961c.014,0,.025.008.039.008h31.016l31.046,7.758A7.71,7.71,0,0,0,232,418h72a7.924,7.924,0,0,0,2.89-.583,23.916,23.916,0,0,0,5.11.575h24a24.026,24.026,0,0,0,24-24,23.708,23.708,0,0,0-3.211-11.766,23.767,23.767,0,0,0,4.969-36.234,23.627,23.627,0,0,0,0-32,23.9,23.9,0,0,0-17.758-40Zm-184,120H128v-88h32Zm142.242-48a23.438,23.438,0,0,0-3.031,27.767A23.948,23.948,0,0,0,288,393.992,23.7,23.7,0,0,0,289.477,402H232.984l-31.046-7.758A7.71,7.71,0,0,0,200,394H176V303.414l34.969-13.984c.105-.042.17-.133.273-.179a7.9,7.9,0,0,0,2.342-1.534c.061-.06.1-.134.158-.2a7.967,7.967,0,0,0,1.117-1.4l14.008-23.3A78.464,78.464,0,0,0,240,222.562V202h3.359A20.662,20.662,0,0,1,264,222.641v64.273a55.368,55.368,0,0,1-34.969,51.648,8,8,0,0,0,5.938,14.86A71.156,71.156,0,0,0,279.769,290h17.7a23.244,23.244,0,0,0,4.77,23.992,23.627,23.627,0,0,0,0,32Zm33.758,56H312a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm8-32H320a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-32H320a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-32H320a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z"/><path d="M206.609,113.969l15.282,11.093-5.836,17.954a16,16,0,0,0,24.625,17.89l15.273-11.1,15.281,11.1a15.756,15.756,0,0,0,18.805.008,15.767,15.767,0,0,0,5.813-17.891l-5.836-17.961L305.3,113.969a16.006,16.006,0,0,0-9.406-28.953l-18.883.007-5.836-17.961v-.007a16,16,0,0,0-30.438.007L234.9,85.016H216.016a16.008,16.008,0,0,0-9.407,28.953ZM234.9,101.016a15.965,15.965,0,0,0,15.219-11.055l5.8-18.055a.843.843,0,0,1,.039.1l5.836,17.953a15.967,15.967,0,0,0,15.219,11.055h18.883L280.6,112.125A15.964,15.964,0,0,0,274.8,130l5.844,17.969-15.289-11.11a15.984,15.984,0,0,0-18.8.008l-15.274,11.094L237.109,130a15.968,15.968,0,0,0-5.812-17.891l-15.281-11.093Z"/><path d="M136.047,205.805l15.273,11.109a16,16,0,0,0,24.625-17.891l-5.836-17.961,15.282-11.1a16,16,0,0,0-9.407-28.945l-18.882.007-5.836-17.961v-.007a16,16,0,0,0-30.438.007l-5.836,17.954H96.109A16.006,16.006,0,0,0,86.7,169.969l15.281,11.093-5.836,17.954a15.774,15.774,0,0,0,5.813,17.9,15.756,15.756,0,0,0,18.805-.008Zm-24.656-37.7L96.109,157.016h18.883a15.967,15.967,0,0,0,15.219-11.055l5.8-18.055s.015.032.039.1l5.836,17.953A15.965,15.965,0,0,0,157.1,157.016h18.882l-15.281,11.1A15.953,15.953,0,0,0,154.891,186l5.836,17.969-15.282-11.11a15.983,15.983,0,0,0-18.8.008l-15.274,11.094L117.2,186A15.988,15.988,0,0,0,111.391,168.109Z"/><path d="M391.266,123.062v-.007a16,16,0,0,0-30.438.007l-5.836,17.954H336.109a16.006,16.006,0,0,0-9.406,28.953l15.281,11.093-5.836,17.954a15.774,15.774,0,0,0,5.813,17.9,15.756,15.756,0,0,0,18.805-.008l15.281-11.1,15.273,11.109a16,16,0,0,0,24.625-17.891l-5.836-17.961,15.282-11.1a16,16,0,0,0-9.407-28.945l-18.882.007Zm9.437,45.055A15.953,15.953,0,0,0,394.891,186l5.836,17.969-15.282-11.11a15.983,15.983,0,0,0-18.8.008l-15.274,11.094L357.2,186a15.988,15.988,0,0,0-5.812-17.891l-15.282-11.093h18.883a15.967,15.967,0,0,0,15.219-11.055l5.8-18.055s.015.032.039.1l5.836,17.953A15.965,15.965,0,0,0,397.1,157.016h18.882Z"/><path d="M256,16C123.664,16,16,123.664,16,256S123.664,496,256,496,496,388.336,496,256,388.336,16,256,16Zm0,464C132.484,480,32,379.516,32,256S132.484,32,256,32,480,132.484,480,256,379.516,480,256,480Z"/><path d="M432,256a175.64,175.64,0,0,1-25.82,91.82,8,8,0,1,0,13.64,8.36A191.6,191.6,0,0,0,448,256a193.977,193.977,0,0,0-1.625-25.031,8,8,0,1,0-15.859,2.062A179.013,179.013,0,0,1,432,256Z"/><path d="M80,256a179.013,179.013,0,0,1,1.484-22.969,8,8,0,1,0-15.859-2.062A193.977,193.977,0,0,0,64,256a190.874,190.874,0,0,0,15.258,75.133,8,8,0,0,0,14.719-6.266A175,175,0,0,1,80,256Z"/></g>
                        </svg>
                    </div>
                    <h2 className="sec__title">Places We Recommend You Visit</h2>
                    <p className="sec__desc">
                        Handpicked places by our team, Morbi convallis bibendum urna ut viverra. <br/>
                        Maecenas quis consequat libero,
                    </p>
                </div>
                {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="row padding-top-60px">
            <div className="col-lg-4 responsive-column">
                <div className="card-item">
                    <div className="card-image">
                        <a href="listing-details.html" className="d-block">
                            <img src={img7} data-src={img7} className="card__img lazy" alt=""/>
                            <span className="badge">open</span>
                            <span className="price-range" data-toggle="tooltip" data-placement="top" title="Ultra High">
                                <strong className="font-weight-medium">$</strong>
                                <strong className="font-weight-medium">$</strong>
                                <strong className="font-weight-medium">$</strong>
                                <strong className="font-weight-medium">$</strong>
                            </span>
                            <div className="card-image-shape">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50px" viewBox="0 0 1200 150" preserveAspectRatio="none">
                                    <g><path fill="#fff" fill-opacity="0.2" d="M0,150 C600,100 1000,50 1200,-1.13686838e-13 C1200,6.8027294 1200,56.8027294 1200,150 L0,150 Z"></path></g><g className="pix-waiting animated" data-anim-type="fade-in-up" data-anim-delay="300"><path fill="rgba(255,255,255,0.8)" d="M0,150 C600,120 1000,80 1200,30 C1200,36.8027294 1200,76.8027294 1200,150 L0,150 Z"></path></g><path fill="#fff" d="M0,150 C600,136.666667 1000,106.666667 1200,60 C1200,74 1200,104 1200,150 L0,150 Z"></path><defs></defs>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="card-content">
                        <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                            <img src={listingLogo} alt="author-img"/>
                        </a>
                        <h4 className="card-title pt-3"><a href="listing-details.html">Favorite Place Food Bank</a></h4>
                        <p className="card-sub">Excepteur sint occaecat cupidatat non  proident sunt in culpa</p>
                        <ul className="info-list pt-3">
                            <li><span className="la la-map-marker mr-2 text-color-2"></span><a href="#">Los Angeles, United States</a></li>
                            <li><span className="la la-phone mr-2 text-color-2"></span><a href="#">(416) 551-0589</a></li>
                        </ul>
                        <div className="d-flex justify-content-between align-items-center border-top border-top-color mt-4 pt-4">
                            <div className="listing-meta pt-0">
                                <i className="la la-cutlery mr-2 listing-icon listing--icon bg-1 text-white"></i>
                                <a href="#" className="listing-cat-link">Restaurants</a>
                            </div>
                            <ul className="listing-action d-flex align-items-center">
                                <li>
                                    <a href="#" className="pill mr-2"
                                       data-toggle="tooltip"
                                       data-placement="top" title="Quick view"
                                       data-src="images/img28.jpg"
                                       data-fancybox="gallery"
                                       data-caption="Showing image - 01"
                                       data-speed="700"><i className="la la-search-plus"></i>
                                     </a>
                                </li>
                                <li><a href="#" className="pill" data-toggle="tooltip" data-placement="top" title="Bookmark"><i className="la la-heart-o"></i></a></li>
                            </ul>
                        </div>
                        <a className="d-none"
                           data-fancybox="gallery"
                           data-src="images/img29.jpg"
                           data-caption="Showing image - 02"
                           data-speed="700"></a>
                        <a className="d-none"
                           data-fancybox="gallery"
                           data-src="images/img30.jpg"
                           data-caption="Showing image - 03"
                           data-speed="700"></a>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="card-item">
                    <div className="card-image">
                        <a href="listing-details.html" className="d-block">
                            <img src={img8} data-src={img8}  className="card__img lazy" alt=""/>
                            <span className="badge">open</span>
                            <span className="price-range" data-toggle="tooltip" data-placement="top" title="Pricey">
                                <strong className="font-weight-medium">$</strong>
                                <strong className="font-weight-medium">$</strong>
                                <strong className="font-weight-medium">$</strong>
                            </span>
                            <div className="card-image-shape">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50px" viewBox="0 0 1200 150" preserveAspectRatio="none">
                                    <g><path fill="#fff" fill-opacity="0.2" d="M0,150 C600,100 1000,50 1200,-1.13686838e-13 C1200,6.8027294 1200,56.8027294 1200,150 L0,150 Z"></path></g><g className="pix-waiting animated" data-anim-type="fade-in-up" data-anim-delay="300"><path fill="rgba(255,255,255,0.8)" d="M0,150 C600,120 1000,80 1200,30 C1200,36.8027294 1200,76.8027294 1200,150 L0,150 Z"></path></g><path fill="#fff" d="M0,150 C600,136.666667 1000,106.666667 1200,60 C1200,74 1200,104 1200,150 L0,150 Z"></path><defs></defs>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="card-content">
                        <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                            <img src={listingLogo2} alt="author-img"/>
                        </a>
                        <h4 className="card-title pt-3"><a href="listing-details.html">Beach Blue Boardwalk</a></h4>
                        <p className="card-sub">Excepteur sint occaecat cupidatat non  proident sunt in culpa</p>
                        <ul className="info-list pt-3">
                            <li><span className="la la-map-marker mr-2 text-color-2"></span><a href="#">Los Angeles, United States</a></li>
                            <li><span className="la la-phone mr-2 text-color-2"></span><a href="#">(416) 551-0589</a></li>
                        </ul>
                        <div className="d-flex justify-content-between align-items-center border-top border-top-color mt-4 pt-4">
                            <div className="listing-meta pt-0">
                                <i className="la la-plane mr-2 listing-icon listing--icon bg-2 text-white"></i>
                                <a href="#" className="listing-cat-link">Travels</a>
                            </div>
                            <ul className="listing-action d-flex align-items-center">
                                <li>
                                    <a href="#" className="pill mr-2"
                                       data-toggle="tooltip"
                                       data-placement="top" title="Quick view"
                                       data-src="images/img28.jpg"
                                       data-fancybox="gallery"
                                       data-caption="Showing image - 01"
                                       data-speed="700"><i className="la la-search-plus"></i>
                                    </a>
                                </li>
                                <li><a href="#" className="pill" data-toggle="tooltip" data-placement="top" title="Bookmark"><i className="la la-heart-o"></i></a></li>
                            </ul>
                        </div>
                        <a className="d-none"
                           data-fancybox="gallery"
                           data-src="images/img29.jpg"
                           data-caption="Showing image - 02"
                           data-speed="700"></a>
                        <a className="d-none"
                           data-fancybox="gallery"
                           data-src="images/img30.jpg"
                           data-caption="Showing image - 03"
                           data-speed="700"></a>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="card-item">
                    <div className="card-image">
                        <a href="listing-details.html" className="d-block">
                            <img src={img9}  data-src={img9}  className="card__img lazy" alt=""/>
                            <span className="badge">open</span>
                            <span className="price-range" data-toggle="tooltip" data-placement="top" title="Moderate">
                                <strong className="font-weight-medium">$</strong>
                                <strong className="font-weight-medium">$</strong>
                            </span>
                            <div className="card-image-shape">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50px" viewBox="0 0 1200 150" preserveAspectRatio="none">
                                    <g><path fill="#fff" fill-opacity="0.2" d="M0,150 C600,100 1000,50 1200,-1.13686838e-13 C1200,6.8027294 1200,56.8027294 1200,150 L0,150 Z"></path></g><g className="pix-waiting animated" data-anim-type="fade-in-up" data-anim-delay="300"><path fill="rgba(255,255,255,0.8)" d="M0,150 C600,120 1000,80 1200,30 C1200,36.8027294 1200,76.8027294 1200,150 L0,150 Z"></path></g><path fill="#fff" d="M0,150 C600,136.666667 1000,106.666667 1200,60 C1200,74 1200,104 1200,150 L0,150 Z"></path><defs></defs>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="card-content">
                        <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                            <img src={listingLogo3} alt="author-img"/>
                        </a>
                        <h4 className="card-title pt-3"><a href="listing-details.html">Hotel Govendor</a></h4>
                        <p className="card-sub">Excepteur sint occaecat cupidatat non  proident sunt in culpa</p>
                        <ul className="info-list pt-3">
                            <li><span className="la la-map-marker mr-2 text-color-2"></span><a href="#">Los Angeles, United States</a></li>
                            <li><span className="la la-phone mr-2 text-color-2"></span><a href="#">(416) 551-0589</a></li>
                        </ul>
                        <div className="d-flex justify-content-between align-items-center border-top border-top-color mt-4 pt-4">
                            <div className="listing-meta pt-0">
                                <i className="la la-hotel mr-2 listing-icon listing--icon bg-3 text-white"></i>
                                <a href="#" className="listing-cat-link">Hotels</a>
                            </div>
                            <ul className="listing-action d-flex align-items-center">
                                <li>
                                    <a href="#" className="pill mr-2"
                                       data-toggle="tooltip"
                                       data-placement="top" title="Quick view"
                                       data-src="images/img28.jpg"
                                       data-fancybox="gallery"
                                       data-caption="Showing image - 01"
                                       data-speed="700"><i className="la la-search-plus"></i>
                                    </a>
                                </li>
                                <li><a href="#" className="pill" data-toggle="tooltip" data-placement="top" title="Bookmark"><i className="la la-heart-o"></i></a></li>
                            </ul>
                        </div>
                        <a className="d-none"
                           data-fancybox="gallery"
                           data-src="images/img29.jpg"
                           data-caption="Showing image - 02"
                           data-speed="700"></a>
                        <a className="d-none"
                           data-fancybox="gallery"
                           data-src="images/img30.jpg"
                           data-caption="Showing image - 03"
                           data-speed="700"></a>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- end most-visited-area --> */}

{/* <!-- ================================
    END CARD AREA
================================= --> */}

<div className="section-block"></div>

{/* <!-- ================================
    START CARD AREA
================================= --> */}
<section className="card-area section--padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading text-center">
                    <div className="gradient-icon mb-3 mx-auto">
                        <svg viewBox="0 0 512.002 512.002" width="50" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="svg-gradient4">
                                    <stop offset="5%" stop-color="#28d5a7" />
                                    <stop offset="95%" stop-color="#53ad96" />
                                </linearGradient>
                            </defs>
                            <g><path d="m168.544 153.008c-5.721-.165-10.854 2.826-13.551 7.542-.58 1.011 5.349-11.655-153.594 330.125-2.668 5.736-1.45 12.53 3.045 16.982 4.455 4.414 11.252 5.629 17.01 2.884 344.59-164.244 321.442-153.16 322.622-153.914 3.339-2.139 5.648-5.444 6.531-9.263.545-2.38.392-3.86.392-11.364.001-100.724-81.798-182.697-182.455-182.992zm-9.475 69.771c16.389 61.937 64.512 111.098 125.843 128.957l-238.73 113.786zm24.125-39.029c74.721 7.403 133.814 68.794 137.612 144.503-74.72-7.403-133.814-68.794-137.612-144.503z"/><path d="m150.71 373.071c-1.88-9.017-10.864-13.917-19.06-11.42-8.398 2.677-12.27 11.103-10 18.71 2.796 8.579 11.253 12.205 18.71 9.99 7.95-2.599 11.706-10.039 10.35-17.28z"/><path d="m174.71 301.071c-1.842-8.831-10.618-13.939-19.07-11.42-8.496 2.769-12.229 11.205-9.99 18.71 2.797 8.583 11.254 12.205 18.71 9.99 7.902-2.583 11.715-9.992 10.35-17.28z"/><path d="m214.93 350.521c-.889-8.567-8.79-14.937-17.86-13.23-8.106 1.69-13.341 9.343-11.78 17.64 1.672 8.058 9.292 13.343 17.64 11.78 7.955-1.658 12.749-8.901 12-16.19z"/><path d="m492.362 129.449-12.007 3.002c-18.461 4.615-31.355 21.13-31.355 40.159v16.399c0 7.571-7.24 13.041-14.525 10.956-19.986-5.71-41.232 4.391-49.42 23.496l-14.842 34.631c-3.263 7.614.264 16.433 7.878 19.696 7.615 3.263 16.433-.264 19.696-7.878l14.842-34.631c2.254-5.259 8.104-8.04 13.604-6.468 26.456 7.557 52.767-12.272 52.767-39.802v-16.399c0-5.238 3.549-9.784 8.631-11.054l12.007-3.002c8.037-2.01 12.923-10.154 10.914-18.19-2.009-8.037-10.152-12.924-18.19-10.915z"/><path d="m416.653 88.237 19.034-38.067c3.845-7.689 11.233-12.917 19.764-13.983 3.024-.376-11.141 1.62 43.705-6.341 8.198-1.19 13.88-8.801 12.689-16.999-1.189-8.198-8.8-13.878-16.999-12.689l-43.277 6.282c-18.439 2.358-34.398 13.681-42.715 30.314l-19.034 38.066c-4.374 8.747-13.166 14.181-22.945 14.181-33.873 0-59.879 30.031-55.095 63.525l1.371 9.597c1.069 7.481 7.486 12.88 14.831 12.88 9.166 0 16.156-8.105 14.868-17.124l-1.371-9.596c-2.208-15.457 9.8-29.282 25.396-29.282 21.216 0 40.291-11.788 49.778-30.764z"/><path d="m210.073 117.572c2.346 5.865 7.979 9.433 13.932 9.433 10.567 0 17.869-10.709 13.923-20.575-3.706-9.263 3.061-19.429 13.154-19.429h3.622c21.838 0 40.635-16.303 43.724-37.921l4.422-30.958c1.172-8.201-4.527-15.799-12.728-16.97-8.193-1.171-15.798 4.526-16.97 12.728l-4.422 30.958c-.991 6.934-7.021 12.164-14.025 12.164h-3.622c-31.183-.001-52.623 31.536-41.01 60.57z"/><path d="m337.291 26.931c1.669 8.044 9.279 13.345 17.64 11.78 8.182-1.706 13.321-9.41 11.78-17.64-1.852-8.882-10.659-13.927-19.07-11.42-7.942 2.588-11.711 10.049-10.35 17.28z"/><path d="m398.35 155.642c-2.969-9.119-12.496-12.694-20.09-9.49-8.007 3.382-11.172 12.34-8.11 19.59 3.393 8.042 12.375 11.158 19.59 8.11 7.161-3.029 10.835-10.754 8.61-18.21z"/><path d="m486.35 83.642c-2.965-9.108-12.491-12.696-20.09-9.49-7.992 3.375-11.177 12.327-8.11 19.59 3.359 7.96 12.296 11.191 19.59 8.11 7.198-3.045 10.823-10.795 8.61-18.21z"/><path d="m454.71 285.071c-1.842-8.831-10.618-13.939-19.07-11.42-8.52 2.777-12.221 11.232-9.99 18.71 2.815 8.637 11.385 12.211 18.7 9.99 7.733-2.473 11.756-9.826 10.36-17.28z"/><path d="m286.35 131.642c-2.982-9.159-12.545-12.673-20.09-9.49-8.062 3.405-11.149 12.394-8.11 19.59 3.393 8.042 12.375 11.158 19.59 8.11 7.147-3.024 10.839-10.739 8.61-18.21z"/><path d="m193.291 18.931c1.681 8.102 9.337 13.334 17.64 11.78 8.121-1.694 13.332-9.35 11.78-17.64-1.839-8.817-10.605-13.943-19.07-11.42-7.912 2.579-11.717 10.018-10.35 17.28z"/></g>
                        </svg>
                    </div>
                    <h2 className="sec__title">What's happening?</h2>
                    <p className="sec__desc">
                        Discover events throughout the city, Morbi convallis bibendum urna ut viverra. <br/>
                        Maecenas quis consequat libero,
                    </p>
                </div>
                {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="row mt-5">
            <div className="col-lg-4 responsive-column">
                <div className="card-item card-item-layout-4">
                    <div className="card-image">
                        <a href="listing-details.html" className="d-block">
                            <img src={img22} data-src={img22} className="card__img lazy" alt=""/>
                            <span className="badge badge-transparent">Ongoing</span>
                        </a>
                        <div className="card-content">
                            <h4 className="card-title"><a href="listing-details.html">London Grammar live</a></h4>
                            <ul className="info-list pt-2">
                                <li><span className="la la-map-marker mr-2 text-white"></span><a href="#">Los Angeles, United States</a></li>
                                <li><span className="la la-calendar mr-2 text-white"></span>September 20, 2020 12:00 AM - September 22, 2020 12:00 AM</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-4">
                        <div className="listing-meta pt-0">
                           <span className="user-thumb user-thumb-sm d-inline-block mr-1">
                               <img src={listingLogo} alt="author-img"/>
                           </span>
                            <a href="#" className="listing-cat-link">TechyDevs</a>
                        </div>
                        <ul className="listing-action d-flex align-items-center">
                            <li>
                                <a href="#" className="pill mr-2" data-toggle="tooltip" data-placement="top" title="Go to map"><i className="la la-map-marker"></i></a>
                            </li>
                            <li><a href="#" className="pill" data-toggle="tooltip" data-placement="top" title="Bookmark"><i className="la la-heart-o"></i></a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="card-item card-item-layout-4">
                    <div className="card-image">
                        <a href="listing-details.html" className="d-block">
                            <img src={img23} data-src={img23} className="card__img lazy" alt=""/>
                            <span className="badge badge-transparent">Ongoing</span>
                        </a>
                        <div className="card-content">
                            <h4 className="card-title"><a href="listing-details.html"> Skydiving</a></h4>
                            <ul className="info-list pt-2">
                                <li><span className="la la-map-marker mr-2 text-white"></span><a href="#">Los Angeles, United States</a></li>
                                <li><span className="la la-calendar mr-2 text-white"></span>September 20, 2020 12:00 AM - September 22, 2020 12:00 AM</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-4">
                        <div className="listing-meta pt-0">
                           <span className="user-thumb user-thumb-sm d-inline-block mr-1">
                               <img src={listingLogo2} alt="author-img"/>
                           </span>
                            <a href="#" className="listing-cat-link">TechyDevs</a>
                        </div>
                        <ul className="listing-action d-flex align-items-center">
                            <li>
                                <a href="#" className="pill mr-2" data-toggle="tooltip" title="Go to map"><i className="la la-map-marker"></i></a>
                            </li>
                            <li><a href="#" className="pill" data-toggle="tooltip" data-placement="top" title="Bookmark"><i className="la la-heart-o"></i></a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="card-item card-item-layout-4">
                    <div className="card-image">
                        <a href="listing-details.html" className="d-block">
                            <img src={img24} data-src={img24} className="card__img lazy" alt=""/>
                            <span className="badge badge-transparent">Upcoming</span>
                        </a>
                        <div className="card-content">
                            <h4 className="card-title"><a href="listing-details.html"> Blade Runner 2049</a></h4>
                            <ul className="info-list pt-2">
                                <li><span className="la la-map-marker mr-2 text-white"></span><a href="#">Los Angeles, United States</a></li>
                                <li><span className="la la-calendar mr-2 text-white"></span>September 20, 2020 12:00 AM - September 22, 2020 12:00 AM</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-4">
                        <div className="listing-meta pt-0">
                           <span className="user-thumb user-thumb-sm d-inline-block mr-1">
                               <img src={listingLogo3} alt="author-img"/>
                           </span>
                            <a href="#" className="listing-cat-link">TechyDevs</a>
                        </div>
                        <ul className="listing-action d-flex align-items-center">
                            <li>
                                <a href="#" className="pill mr-2" data-toggle="tooltip" data-placement="top" title="Go to map"><i className="la la-map-marker"></i></a>
                            </li>
                            <li><a href="#" className="pill" data-toggle="tooltip" data-placement="top" title="Bookmark"><i className="la la-heart-o"></i></a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- end most-visited-area --> */}

{/* <!-- ================================
    END CARD AREA
================================= -->

<!-- ================================
    START DISCOUNT AREA
================================= --> */}
<section className="discount-area position-relative padding-top-30px padding-bottom-100px overflow-hidden">
    <div className="svg-bg gradient-bg ">
        <svg className="h-auto" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1200 415" preserveAspectRatio="none">
            <defs>
                <linearGradient id="svg-gradient-3">
                    <stop offset="15%" stop-color="#ffc9c4" />
                    <stop offset="95%" stop-color="#53ad96" />
                </linearGradient>
            </defs>
            <path opacity="0.1"  d="M9.09494702e-13,373.771254 C80.6666667,298.406109 159.333333,260.723537 236,260.723537 C421,260.723537 525,344.759008 670,273.729027 C789.088175,215.392262 940.369069,48.85905 1200,74.7885669 C1200,148.788567 1200,262.192378 1200,415 L1.0227342e-12,414.788567 L9.09494702e-13,373.771254 Z"></path><defs></defs>
        </svg>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-10 mx-auto">
                <div className="card-item card-item-layout-3">
                    <div className="card-content">
                        <div className="btn-box">
                            <span className="theme-btn offer-btn gradient-text">50% Discount*</span>
                        </div>
                        <h4 className="card-title padding-top-35px pb-3 font-size-40 line-height-50 font-weight-bold">
                            Kids Day :)
                        </h4>
                        <p className="card-sub font-size-18 line-height-30">
                            Keep calm and get a special discount for all orders over $50 from The Mountains Coffee. Hurry up! <span className="text-color-2 font-weight-semi-bold">Only 3 days left.</span>
                        </p>
                        <div className="btn-box padding-top-35px">
                            <a href="#" className="theme-btn btn-transparent">Claim this Offer<i className="la la-arrow-right ml-2"></i></a>
                        </div>
                    </div>
                    {/* <!-- end card-content --> */}
                    <div className="card-image card-image-lg card-image-round-right">
                        <img src={img25} data-src={img25} className="card__img lazy" alt="Coffee shop img"/>
                        <div className="shop-logo">
                            <img src={shopLogo} alt=""/>
                        </div>
                        {/* <!-- end shop-logo --> */}
                    </div>
                    {/* <!-- end card-image --> */}
                </div>
            </div>
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- end discount-area --> */}


{/* <!-- ================================
    END DISCOUNT AREA
================================= -->

<!-- ================================
    START AUTHOR AREA
================================= --> */}
<section className="author-area position-relative section-padding">
    <span className="circle-bg circle-bg-1 position-absolute"></span>
    <span className="circle-bg circle-bg-2 position-absolute"></span>
    <span className="circle-bg circle-bg-3 position-absolute"></span>
    <span className="circle-bg circle-bg-4 position-absolute"></span>
    <span className="circle-bg circle-bg-5 position-absolute"></span>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading text-center">
                    <div className="gradient-icon mb-3 mx-auto">
                        <svg width="50" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 490.667 490.667" 
                        // xml:space="preserve"
                        >
                            <defs>
                                <linearGradient id="svg-gradient9">
                                    <stop offset="5%" stop-color="#28d5a7" />
                                    <stop offset="95%" stop-color="#53ad96" />
                                </linearGradient>
                            </defs>
                            <g>
                                        <path d="M245.333,85.333c-41.173,0-74.667,33.493-74.667,74.667s33.493,74.667,74.667,74.667S320,201.173,320,160
                                            C320,118.827,286.507,85.333,245.333,85.333z M245.333,213.333C215.936,213.333,192,189.397,192,160
                                            c0-29.397,23.936-53.333,53.333-53.333s53.333,23.936,53.333,53.333S274.731,213.333,245.333,213.333z"/>
                                </g>
                            <g>
                                        <path d="M394.667,170.667c-29.397,0-53.333,23.936-53.333,53.333s23.936,53.333,53.333,53.333S448,253.397,448,224
                                            S424.064,170.667,394.667,170.667z M394.667,256c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32
                                            C426.667,241.643,412.309,256,394.667,256z"/>
                            </g>
                            <g>
                                        <path d="M97.515,170.667c-29.419,0-53.333,23.936-53.333,53.333s23.936,53.333,53.333,53.333s53.333-23.936,53.333-53.333
                                            S126.933,170.667,97.515,170.667z M97.515,256c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32
                                            C129.515,241.643,115.157,256,97.515,256z"/>
                            </g>
                            <g>
                                        <path d="M245.333,256c-76.459,0-138.667,62.208-138.667,138.667c0,5.888,4.779,10.667,10.667,10.667S128,400.555,128,394.667
                                            c0-64.704,52.629-117.333,117.333-117.333s117.333,52.629,117.333,117.333c0,5.888,4.779,10.667,10.667,10.667
                                            c5.888,0,10.667-4.779,10.667-10.667C384,318.208,321.792,256,245.333,256z"/>
                            </g>
                            <g>
                                        <path d="M394.667,298.667c-17.557,0-34.752,4.8-49.728,13.867c-5.013,3.072-6.635,9.621-3.584,14.656
                                            c3.093,5.035,9.621,6.635,14.656,3.584C367.637,323.712,380.992,320,394.667,320c41.173,0,74.667,33.493,74.667,74.667
                                            c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667C490.667,341.739,447.595,298.667,394.667,298.667z"/>
                            </g>
                            <g>
                                        <path d="M145.707,312.512c-14.955-9.045-32.149-13.845-49.707-13.845c-52.928,0-96,43.072-96,96
                                            c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667C21.333,353.493,54.827,320,96,320
                                            c13.675,0,27.029,3.712,38.635,10.752c5.013,3.051,11.584,1.451,14.656-3.584C152.363,322.133,150.741,315.584,145.707,312.512z"
                                        />
                            </g>
                        </svg>
                    </div>
                    <h2 className="sec__title">Meet Top Authors</h2>
                    <p className="sec__desc">
                        Top 700+ famous authors on the DPGB. consectetur adipisicing elit <br/>
                        Adipisci culpa possimus quis  voluptatibus!
                    </p>
                </div>
                {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="row padding-top-60px">
            <div className="col-lg-4 responsive-column">
                <div className="user-card">
                    <div className="user-bio margin-bottom-30px">
                        <a href="#" className="d-flex align-items-center">
                            <div className="user-thumb user-thumb-md mr-3">
                                <img src={avatarImg} alt="author-image"/>
                            </div>
                            <div className="user-inner-bio">
                                <h4 className="author__title">Alex Smith</h4>
                                <p className="author__meta">Australia</p>
                            </div>
                        </a>
                    </div>
                    {/* <!-- end user-bio --> */}
                    <div className="user-module text-center">
                        <ul className="user-module-list d-flex align-items-center justify-content-between">
                            <li className="flex-grow-1"><span className="user-module-text">Listings</span>120</li>
                            <li className="flex-grow-1"><span className="user-module-text">Followers</span>46</li>
                            <li className="flex-grow-1"><span className="user-module-text">Following</span>25</li>
                        </ul>
                    </div>
                    {/* <!-- end user-module --> */}
                    <div className="btn-box padding-top-35px">
                        <button type="button" className="theme-btn btn-transparent border-0 w-100"><i className="la la-plus mr-2"></i>Follow</button>
                    </div>
                    {/* <!-- end btn-box --> */}
                </div>
                {/* <!-- end user-card --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="user-card">
                    <div className="user-bio margin-bottom-30px">
                        <a href="#" className="d-flex align-items-center">
                            <div className="user-thumb user-thumb-md mr-3">
                                <img src={avatarImg2} alt="author-image"/>
                            </div>
                            <div className="user-inner-bio">
                                <h4 className="author__title">Mark Hardson</h4>
                                <p className="author__meta">Italy</p>
                            </div>
                        </a>
                    </div>
                    {/* <!-- end user-bio --> */}
                    <div className="user-module text-center">
                        <ul className="user-module-list d-flex align-items-center justify-content-between">
                            <li className="flex-grow-1"><span className="user-module-text">Listings</span>120</li>
                            <li className="flex-grow-1"><span className="user-module-text">Followers</span>46</li>
                            <li className="flex-grow-1"><span className="user-module-text">Following</span>25</li>
                        </ul>
                    </div>
                    {/* <!-- end user-module --> */}
                    <div className="btn-box padding-top-35px">
                        <button type="button" className="theme-btn btn-transparent border-0 w-100"><i className="la la-plus mr-2"></i>Follow</button>
                    </div>
                    {/* <!-- end btn-box --> */}
                </div>
                {/* <!-- end user-card --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="user-card">
                    <div className="user-bio margin-bottom-30px">
                        <a href="#" className="d-flex align-items-center">
                            <div className="user-thumb user-thumb-md mr-3">
                                <img src={avatarImg3} alt="author-image"/>
                            </div>
                            <div className="user-inner-bio">
                                <h4 className="author__title">David Hardson</h4>
                                <p className="author__meta">Thailand</p>
                            </div>
                        </a>
                    </div>
                    {/* <!-- end user-bio --> */}
                    <div className="user-module text-center">
                        <ul className="user-module-list d-flex align-items-center justify-content-between">
                            <li className="flex-grow-1"><span className="user-module-text">Listings</span>120</li>
                            <li className="flex-grow-1"><span className="user-module-text">Followers</span>46</li>
                            <li className="flex-grow-1"><span className="user-module-text">Following</span>25</li>
                        </ul>
                    </div>
                    {/* <!-- end user-module --> */}
                    <div className="btn-box padding-top-35px">
                        <button type="button" className="theme-btn btn-transparent border-0 w-100"><i className="la la-plus mr-2"></i>Follow</button>
                    </div>
                    {/* <!-- end btn-box --> */}
                </div>
                {/* <!-- end user-card --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="more-btn-box pt-4 text-center">
            <a href="top-author.html" className="theme-btn gradient-btn"><i className="la la-users mr-2"></i>View All Authors</a>
        </div>
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- end author-area --> */}


{/* <!-- ================================
    END AUTHOR AREA
================================= --> */}

<div className="section-block"></div>

{/* <!-- ================================
       START JOB AREA
================================= --> */}
<section className="job-area section-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading text-center">
                    <div className="gradient-icon mb-3 mx-auto">
                        <svg id="Capa_1" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="svg-gradient10">
                                    <stop offset="5%" stop-color="#ff6b6b" />
                                    <stop offset="95%" stop-color="#ffbb3d" />
                                </linearGradient>
                            </defs>
                            <g><g><path d="m475.571 189.773c-.912-.912-1.839-1.802-2.774-2.682v-28.821c0-28.659-23.316-51.975-51.975-51.975h-91.169v-26.12c0-27.886-22.687-50.572-50.572-50.572h-85.363c-27.886 0-50.572 22.686-50.572 50.572v26.12h-91.171c-28.659 0-51.975 23.316-51.975 51.975v231.351c0 28.659 23.316 51.975 51.975 51.975h108.516c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-108.516c-20.389 0-36.976-16.587-36.976-36.976v-151.3c14.686 21.784 38.844 36.677 66.519 38.728v27.306c0 15.595 12.688 28.283 28.283 28.283 15.596 0 28.284-12.688 28.284-28.283v-27.061h125.329c0 .12-.004.239-.004.359 0 25.539 7.659 49.898 21.877 70.467l-15.922 15.922c-5.56-1.573-11.79-.184-16.157 4.185l-61.159 61.159c-12.106 12.106-12.106 31.804 0 43.91 12.134 12.134 31.775 12.136 43.91 0l61.159-61.159c4.368-4.368 5.758-10.597 4.185-16.157l15.936-15.936c42.143 29.025 98.319 29.117 140.56.235v9.343c0 20.389-16.587 36.976-36.976 36.976h-118.464c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h118.463c28.659 0 51.975-23.316 51.975-51.975v-21.407c.934-.878 1.861-1.768 2.774-2.681 48.569-48.569 48.575-127.186 0-175.761zm-317.427-109.598c0-19.615 15.958-35.573 35.573-35.573h85.363c19.615 0 35.573 15.958 35.573 35.573v26.12h-15.999v-26.12c0-10.793-8.781-19.574-19.574-19.574h-85.363c-10.793 0-19.574 8.781-19.574 19.574v26.12h-15.999zm30.998 26.12v-26.12c0-2.522 2.052-4.574 4.575-4.574h85.363c2.523 0 4.575 2.052 4.575 4.574v26.12zm-66.056 175.007h-26.568v-25.248c0-7.325 5.959-13.284 13.284-13.284s13.284 5.959 13.284 13.284zm-13.284 36.337c-7.325 0-13.284-5.959-13.284-13.284v-8.054h26.568v8.054c0 7.325-5.959 13.284-13.284 13.284zm28.283-55.344v-6.241c0-15.595-12.688-28.283-28.284-28.283-15.595 0-28.283 12.688-28.283 28.283v5.931c-37.233-3.336-66.519-34.696-66.519-72.782v-30.933c0-20.389 16.587-36.976 36.976-36.976h368.847c20.389 0 36.976 16.587 36.976 36.976v16.731c-47.425-32.537-114.229-28.988-157.987 14.771-19.815 19.814-32.114 45.141-35.467 72.522h-126.259zm87.267 200.395c-6.272 6.272-16.425 6.273-22.698 0-3.032-3.032-4.701-7.062-4.701-11.349s1.669-8.318 4.701-11.349l42.369-42.369 22.698 22.698zm61.159-61.159-8.184 8.184-22.698-22.698 8.184-8.184c.288-.287.665-.431 1.042-.431s.754.144 1.041.43c.002.001.003.003.005.004l20.61 20.61c.574.575.574 1.51 0 2.085zm5.662-17.635-10.726-10.726 13.167-13.167c1.672 1.885 3.4 3.733 5.197 5.529 1.801 1.801 3.649 3.527 5.531 5.194zm18.244-28.969c-20.641-20.64-32.008-48.084-32.008-77.274s11.367-56.634 32.008-77.274c42.706-42.707 111.836-42.713 154.548 0 42.707 42.706 42.713 111.836 0 154.548-42.708 42.708-111.836 42.713-154.548 0z"/><path d="m469.969 287.951c-4.047-.88-8.043 1.686-8.922 5.735-3.052 14.034-10.06 26.848-20.268 37.055-29.341 29.34-76.832 29.343-106.176 0-29.273-29.273-29.273-76.903 0-106.176 29.341-29.341 76.832-29.344 106.176 0 10.197 10.197 17.203 22.997 20.26 37.016.882 4.047 4.879 6.616 8.925 5.73 4.047-.882 6.612-4.878 5.73-8.925-3.67-16.832-12.076-32.194-24.308-44.427-35.203-35.203-92.181-35.207-127.388 0-35.121 35.121-35.121 92.267 0 127.388 35.12 35.12 92.265 35.122 127.388 0 12.245-12.245 20.654-27.624 24.318-44.474.879-4.047-1.688-8.041-5.735-8.922z"/></g></g>
                        </svg>
                    </div>
                    <h2 className="sec__title">Jop Openings</h2>
                    <p className="sec__desc">
                        Find job openings in London. Maecenas quis consequat libero, <br/>
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
                <h3 className="font-size-24 text-color padding-bottom-40px"><span className="circle-bg mr-3"></span>Engineering</h3>
            </div>
            {/* <!-- end col-lg-12 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="card-item">
                    <div className="card-content">
                        <a href="#" className="pill font-size-14 font-weight-semi-bold radius-round">Remote</a>
                        <h4 className="card-title pt-3"><a href="career-details.html">Senior Software Engineer</a></h4>
                        <p className="card-sub pb-3">Los Angeles, United States</p>
                        <a href="career-details.html" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="card-item">
                    <div className="card-content">
                        <a href="#" className="pill font-size-14 font-weight-semi-bold radius-round">Full time</a>
                        <h4 className="card-title pt-3"><a href="career-details.html">Senior Security Engineer</a></h4>
                        <p className="card-sub pb-3">Los Angeles, United States</p>
                        <a href="career-details.html" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="card-item">
                    <div className="card-content">
                        <a href="#" className="pill font-size-14 font-weight-semi-bold radius-round">Internship</a>
                        <h4 className="card-title pt-3"><a href="career-details.html">Senior Data Engineer</a></h4>
                        <p className="card-sub pb-3">Los Angeles, United States</p>
                        <a href="career-details.html" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="row padding-top-60px">
            <div className="col-lg-12">
                <h3 className="font-size-24 text-color padding-bottom-40px"><span className="circle-bg mr-3"></span>Product Design</h3>
            </div>
            {/* <!-- end col-lg-12 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="card-item">
                    <div className="card-content">
                        <a href="#" className="pill font-size-14 font-weight-semi-bold radius-round">Remote</a>
                        <h4 className="card-title pt-3"><a href="career-details.html">Lead Product Designer</a></h4>
                        <p className="card-sub pb-3">Los Angeles, United States</p>
                        <a href="career-details.html" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="card-item">
                    <div className="card-content">
                        <a href="#" className="pill font-size-14 font-weight-semi-bold radius-round">Full time</a>
                        <h4 className="card-title pt-3"><a href="career-details.html">Mobile Engineer – iOS</a></h4>
                        <p className="card-sub pb-3">Los Angeles, United States</p>
                        <a href="career-details.html" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
                <div className="card-item">
                    <div className="card-content">
                        <a href="#" className="pill font-size-14 font-weight-semi-bold radius-round">Internship</a>
                        <h4 className="card-title pt-3"><a href="career-details.html">Senior Data Engineer</a></h4>
                        <p className="card-sub pb-3">Los Angeles, United States</p>
                        <a href="career-details.html" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="more-btn-box pt-4 text-center">
            <a href="career.html" className="theme-btn gradient-btn"><i className="la la-search-plus mr-2"></i>View All Open Positions</a>
        </div>
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- end job-area --> */}


{/* <!-- ================================
       START JOB AREA
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
                            <input className="form-control form-control-styled form-control-long" type="email" placeholder="Enter your email"/>
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
                        <Link to="/" className="foot-logo"><img src={Logo} className={style.logoSize} alt="logo"/></Link>
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
                        <li><Link to="/add-listing">Add Listing</Link></li>
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
                        <li><span className="d-block text-color mb-1"><i className="la la-phone mr-1 text-color-2"></i>Phone:</span><a href="#">923013109562</a></li>
                        <li><span className="d-block text-color mb-1"><i className="la la-envelope mr-1 text-color-2"></i>Email:</span><a href="#">DPGB@gmail.com</a></li>
                    </ul>
                </div>
                {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="row pt-4 align-items-center footer-action-wrap">
            <div className="col-lg-4 responsive-column">
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
                            <input className="form-control form-control-styled" type="text" name="text" placeholder="Username or email address"/>
                        </div>
                    </div>
                    <div className="input-box">
                        <label className="label-text">Password</label>
                        <div className="form-group">
                            <span className="la la-lock form-icon"></span>
                            <input className="form-control form-control-styled" type="text" name="text" placeholder="Enter password"/>
                        </div>
                    </div>
                    <div className="input-box d-flex align-items-center justify-content-between pb-4 user-action-meta">
                        <div className="custom-checkbox">
                            <input type="checkbox" id="keepMeSignedChb"/>
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
                            <input className="form-control form-control-styled" type="text" name="text" placeholder="Username"/>
                        </div>
                    </div>
                    <div className="input-box">
                        <label className="label-text">Email</label>
                        <div className="form-group">
                            <span className="la la-envelope form-icon"></span>
                            <input className="form-control form-control-styled" type="email" name="text" placeholder="Email address"/>
                        </div>
                    </div>
                    <div className="input-box">
                        <label className="label-text">Password</label>
                        <div className="form-group">
                            <span className="la la-lock form-icon"></span>
                            <input className="form-control form-control-styled" type="text" name="text" placeholder="Enter password"/>
                        </div>
                        <p className="font-size-14 mt-n2">Your password must be at least 6 characters long and must contain letters, numbers and special characters. Cannot contain whitespace.</p>
                    </div>
                    <div className="input-box py-4 user-action-meta">
                        <div className="custom-checkbox">
                            <input type="checkbox" id="agreeChb"/>
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
                            <input className="form-control form-control-styled" type="text" name="text" placeholder="Username or email address"/>
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

export default Home2