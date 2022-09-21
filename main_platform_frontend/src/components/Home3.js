import React from 'react'
import img1 from "../Assets/images/img1.jpg"
import img2 from "../Assets/images/img2.jpg"
import img3 from "../Assets/images/img3.jpg"
import img4 from "../Assets/images/img4.jpg"
import img5 from "../Assets/images/img5.jpg"
import img6 from "../Assets/images/img6.jpg"
import img7 from "../Assets/images/img7.jpg"
import img10 from "../Assets/images/img10.jpg"
import img11 from "../Assets/images/img11.jpg"
import img12 from "../Assets/images/img12.jpg"
import photoShop from "../Assets/images/photoshop.png"
import sketch from "../Assets/images/sketch.png"
import listingLogo from "../Assets/images/listing-logo.jpg"
import listingLogo2 from "../Assets/images/listing-logo2.jpg"
import listingLogo3 from "../Assets/images/listing-logo3.jpg"
import avatarImg from "../Assets/images/avatar-img.jpg"
import avatarImg2 from "../Assets/images/avatar-img2.jpg"
import avatarImg3 from "../Assets/images/avatar-img3.jpg"
import logoWhite from "../Assets/images/logo-white.png"
import Header from './Header'

function Home3() {
  return (
    <div>
      <Header />
      {/* <!-- ================================
    START HERO-WRAPPER AREA
================================= --> */}
      <section className="hero-wrapper hero-bg-3 padding-bottom-150px">
        <div className="overlay"></div>
        {/* <!-- end overlay --> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-heading text-center">
                <div className="section-heading">
                  <h2 className="sec__title">What's Your Plan Today? Let's Explore</h2>
                  <p className="sec__desc">
                    All the top locations – from restaurants and clubs, to galleries, famous places and more...
                  </p>
                </div>
              </div>
              {/* <!-- end hero-heading --> */}
              <div className="section-tab section--tab padding-top-45px">
                <ul className="nav nav-tabs justify-content-center align-items-center" id="myTab" role="tablist">
                  <li className="nav-item mr-4">
                    <span className="circle-bg opacity-4"></span>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" id="place-tab" data-toggle="tab" href="#place" role="tab" aria-controls="place" aria-selected="true">
                      <i className="la la-map-marker mr-2"></i>Places
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="events-tab" data-toggle="tab" href="#event" role="tab" aria-controls="event" aria-selected="false">
                      <i className="la la-music mr-2"></i>Events
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="job-tab" data-toggle="tab" href="#job" role="tab" aria-controls="job" aria-selected="false">
                      <i className="la la-search-plus mr-2"></i>Jobs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="real-estate-tab" data-toggle="tab" href="#real-estate" role="tab" aria-controls="real-estate" aria-selected="false">
                      <i className="la la-home mr-2"></i>Real Estate
                    </a>
                  </li>
                  <li className="nav-item ml-4">
                    <span className="circle-bg opacity-4"></span>
                  </li>
                </ul>
              </div>
              {/* <!-- end section-tab --> */}
              <div className="tab-content">
                <div className="tab-pane fade show active" id="place" role="tabpanel" aria-labelledby="place-tab">
                  <div className="main-search-input mt-0">
                    <div className="main-search-input-item">
                      <form action="#" className="form-box">
                        <div className="form-group mb-0">
                          <span className="la la-search form-icon"></span>
                          <input className="form-control" type="search" placeholder="What are you looking for?" />
                        </div>
                      </form>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                    <div className="main-search-input-item user-chosen-select-container">
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
                      <button className="theme-btn gradient-btn border-0 w-100" type="submit"><i className="la la-search mr-2"></i>Search Now</button>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                  </div>
                  {/* <!-- end main-search-input --> */}
                </div>
                {/* <!-- end tab-pane --> */}
                <div className="tab-pane fade" id="event" role="tabpanel" aria-labelledby="events-tab">
                  <div className="main-search-input mt-0">
                    <div className="main-search-input-item">
                      <form action="#" className="form-box">
                        <div className="form-group mb-0">
                          <span className="la la-search form-icon"></span>
                          <input className="form-control" type="search" placeholder="Event name" />
                        </div>
                      </form>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                    <div className="main-search-input-item user-chosen-select-container">
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
                      <select className="user-chosen-select">
                        <option value="0">Select a Category</option>
                        <option value="1">Outdoor Activities</option>
                        <option value="2">Cinemas</option>
                        <option value="3">Nightlife</option>
                        <option value="4">Bars</option>
                        <option value="5">Clubs</option>
                      </select>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                    <div className="main-search-input-item">
                      <form action="#" className="form-box">
                        <div className="form-group mb-0">
                          <span className="la la-calendar form-icon"></span>
                          <input className="date-dropper-input form-control" type="text" placeholder="Check in" />
                        </div>
                      </form>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                    <div className="main-search-input-item">
                      <button className="theme-btn gradient-btn border-0 w-100" type="submit"><i className="la la-search mr-2"></i>Search Now</button>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                  </div>
                  {/* <!-- end main-search-input --> */}
                </div>
                {/* <!-- end tab-pane --> */}
                <div className="tab-pane fade" id="job" role="tabpanel" aria-labelledby="job-tab">
                  <div className="main-search-input mt-0">
                    <div className="main-search-input-item">
                      <form action="#" className="form-box">
                        <div className="form-group mb-0">
                          <span className="la la-search form-icon"></span>
                          <input className="form-control" type="search" placeholder="Search your job" />
                        </div>
                      </form>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                    <div className="main-search-input-item user-chosen-select-container">
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
                      <select className="user-chosen-select">
                        <option value="0">Select a Category</option>
                        <option value="1">Design</option>
                        <option value="2">Development</option>
                        <option value="3">Marketing</option>
                        <option value="4">Project Manager</option>
                        <option value="5">IT/Hardware</option>
                        <option value="6">IT/Hardware</option>
                        <option value="7">Sales</option>
                        <option value="8">Teachers/Lectures</option>
                      </select>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                    <div className="main-search-input-item">
                      <button className="theme-btn gradient-btn border-0 w-100" type="submit"><i className="la la-search mr-2"></i>Search Now</button>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                  </div>
                  {/* <!-- end main-search-input --> */}
                </div>
                {/* <!-- end tab-pane --> */}
                <div className="tab-pane fade" id="real-estate" role="tabpanel" aria-labelledby="real-estate-tab">
                  <div className="main-search-input mt-0">
                    <div className="main-search-input-item">
                      <form action="#" className="form-box">
                        <div className="form-group mb-0">
                          <span className="la la-search form-icon"></span>
                          <input className="form-control" type="search" placeholder="Property name" />
                        </div>
                      </form>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                    <div className="main-search-input-item user-chosen-select-container">
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
                      <select className="user-chosen-select">
                        <option value="0">Property Type</option>
                        <option value="1">All Category</option>
                        <option value="2">Apartments</option>
                        <option value="3">Deluxe Houses</option>
                        <option value="4">Modern Flats</option>
                        <option value="5">Stylish Houses</option>
                        <option value="6">Luxury Houses</option>
                        <option value="7">Nature Houses</option>
                        <option value="8">Cottage</option>
                        <option value="9">Flat</option>
                      </select>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                    <div className="main-search-input-item">
                      <form action="#" className="form-box">
                        <div className="form-group mb-0">
                          <span className="la la-dollar form-icon"></span>
                          <input type="number" className="form-control" placeholder="Filter by price" />
                        </div>
                      </form>
                    </div>
                    <div className="main-search-input-item">
                      <button className="theme-btn gradient-btn border-0 w-100" type="submit"><i className="la la-search mr-2"></i>Search Now</button>
                    </div>
                    {/* <!-- end main-search-input-item --> */}
                  </div>
                  {/* <!-- end main-search-input --> */}
                </div>
                {/* <!-- end tab-pane --> */}
              </div>
              {/* <!-- end tab-content --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
            <a className="scroll-down-arrow"><i className="la la-arrow-down"></i></a>
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end hero-wrapper --> */}

      {/* <!-- ================================
    END HERO-WRAPPER AREA
================================= -->

<!-- ================================
    START CATEGORY AREA
================================= --> */}
      <section className="category-area position-relative bg-gray section--padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-badge pb-3">
                  <span className="ribbon ribbon-2">Category</span>
                </div>
                <h2 className="sec__title">Browse By Categories</h2>
                <p className="sec__desc">
                  What kind of category are you looking for? Maecenas quis consequat libero, <br />
                  a feugiat eros. Nunc ut lacinia tortors.
                </p>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row highlighted-categories justify-content-center">
            <div className="col-lg-2 col-sm-6">
              <div className="hero-category-item hero-category-item-layout-2">
                <a href="#" className="d-block hero-cat-link">
                  <span className="icon-element bg-1 mx-auto"><i className="la la-building-o"></i></span>
                  apartments
                  <span className="ribbon d-block mt-3 font-size-14 py-1">10 Listings</span>
                </a>
              </div>
            </div>
            {/* <!-- end col-lg-2 --> */}
            <div className="col-lg-2 col-sm-6">
              <div className="hero-category-item hero-category-item-layout-2">
                <a href="#" className="d-block hero-cat-link">
                  <span className="icon-element bg-2 mx-auto"><i className="la la-cutlery"></i></span>
                  Restaurants
                  <span className="ribbon d-block mt-3 font-size-14 py-1">44 Listings</span>
                </a>
              </div>
            </div>
            {/* <!-- end col-lg-2 --> */}
            <div className="col-lg-2 col-sm-6">
              <div className="hero-category-item hero-category-item-layout-2">
                <a href="#" className="d-block hero-cat-link">
                  <span className="icon-element bg-3 mx-auto"><i className="la la-plane"></i></span>
                  travel
                  <span className="ribbon d-block mt-3 font-size-14 py-1">23 Listings</span>
                </a>
              </div>
            </div>
            {/* <!-- end col-lg-2 --> */}
            <div className="col-lg-2 col-sm-6">
              <div className="hero-category-item hero-category-item-layout-2">
                <a href="#" className="d-block hero-cat-link">
                  <span className="icon-element bg-4 mx-auto"><i className="la la-music"></i></span>
                  Events
                  <span className="ribbon d-block mt-3 font-size-14 py-1">55 Listings</span>
                </a>
              </div>
            </div>
            {/* <!-- end col-lg-2 --> */}
            <div className="col-lg-2 col-sm-6">
              <div className="hero-category-item hero-category-item-layout-2">
                <a href="#" className="d-block hero-cat-link">
                  <span className="icon-element bg-5 mx-auto"><i className="la la-gear"></i></span>
                  fitness
                  <span className="ribbon d-block mt-3 font-size-14 py-1">13 Listings</span>
                </a>
              </div>
            </div>
            {/* <!-- end col-lg-2 --> */}
            <div className="col-lg-2 col-sm-6">
              <div className="hero-category-item hero-category-item-layout-2">
                <a href="#" className="d-block hero-cat-link">
                  <span className="icon-element bg-6 mx-auto"><i className="la la-hotel"></i></span>
                  Hotels
                  <span className="ribbon d-block mt-3 font-size-14 py-1">66 Listings</span>
                </a>
              </div>
            </div>
            {/* <!-- end col-lg-2 --> */}
            <div className="col-lg-2 col-sm-6">
              <div className="hero-category-item hero-category-item-layout-2">
                <a href="#" className="d-block hero-cat-link">
                  <span className="icon-element bg-7 mx-auto"><i className="la la-search-plus"></i></span>
                  Jobs
                  <span className="ribbon d-block mt-3 font-size-14 py-1">8 Listings</span>
                </a>
              </div>
            </div>
            {/* <!-- end col-lg-2 --> */}
            <div className="col-lg-2 col-sm-6">
              <div className="hero-category-item hero-category-item-layout-2">
                <a href="#" className="d-block hero-cat-link">
                  <span className="icon-element bg-8 mx-auto"><i className="la la-home"></i></span>
                  Real Estate
                  <span className="ribbon d-block mt-3 font-size-14 py-1">0 Listings</span>
                </a>
              </div>
            </div>
            {/* <!-- end col-lg-2 --> */}
            <div className="col-lg-2 col-sm-6">
              <div className="hero-category-item hero-category-item-layout-2">
                <a href="#" className="d-block hero-cat-link">
                  <span className="icon-element bg-9 mx-auto"><i className="la la-shopping-cart"></i></span>
                  Shopping
                  <span className="ribbon d-block mt-3 font-size-14 py-1">22 Listings</span>
                </a>
              </div>
            </div>
            {/* <!-- end col-lg-2 --> */}
          </div>
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
      <section className="card-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-badge pb-3">
                  <span className="ribbon ribbon-2 bg-2 text-white">New Listing</span>
                </div>
                <h2 className="sec__title">New Listings Added</h2>
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
              <div className="card-item">
                <div className="card-image">
                  <a href="listing-details.html" className="d-block">
                    <img src={img1} data-src={img1} className="card__img lazy" alt="" />
                  </a>
                </div>
                <div className="card-content">
                  <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                    <img src={photoShop} alt="author-img" />
                  </a>
                  <h4 className="card-title pt-3">
                    <a href="listing-details.html">Roma’s Ristorante Italiano</a>
                    <i className="la la-check-circle ml-1" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                  </h4>
                  <p className="card-sub"><a href="#"><i className="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                  <ul className="listing-meta d-flex align-items-center">
                    <li className="d-flex align-items-center">
                      <span className="rate flex-shrink-0">4.7</span>
                      <span className="rate-text">5 reviews</span>
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
                    <li><span className="la la-calendar-check-o icon"></span>
                      Opened a few days ago
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item">
                <div className="card-image">
                  <a href="listing-details.html" className="d-block">
                    <img src={img2} data-src={img2} className="card__img lazy" alt="" />
                  </a>
                </div>
                <div className="card-content">
                  <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                    <img src={sketch} alt="author-img" />
                  </a>
                  <h4 className="card-title pt-3">
                    <a href="listing-details.html">Dumpling Baby China Bistro</a>
                  </h4>
                  <p className="card-sub"><a href="#"><i className="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                  <ul className="listing-meta d-flex align-items-center">
                    <li className="d-flex align-items-center">
                      <span className="rate flex-shrink-0">4.7</span>
                      <span className="rate-text">5 reviews</span>
                    </li>
                    <li>
                      <span className="price-range" data-toggle="tooltip" data-placement="top" title="Moderate">
                        <strong className="font-weight-medium">$</strong>
                        <strong className="font-weight-medium">$</strong>
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="la la-cutlery mr-1 listing-icon"></i><a href="#" className="listing-cat-link">Restaurant</a>
                    </li>
                  </ul>
                  <ul className="info-list padding-top-20px">
                    <li><span className="la la-calendar-check-o icon"></span>
                      Opened 5 weeks ago
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item">
                <div className="card-image">
                  <a href="listing-details.html" className="d-block">
                    <img src={img3} data-src={img3} className="card__img lazy" alt="" />
                  </a>
                </div>
                <div className="card-content">
                  <a href="#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                    <img src={listingLogo} alt="author-img" />
                  </a>
                  <h4 className="card-title pt-3">
                    <a href="listing-details.html">Yerba Buena Fresh Mex</a>
                    <i className="la la-check-circle ml-1" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                  </h4>
                  <p className="card-sub"><a href="#"><i className="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                  <ul className="listing-meta d-flex align-items-center">
                    <li className="d-flex align-items-center">
                      <span className="rate flex-shrink-0">4.7</span>
                      <span className="rate-text">5 reviews</span>
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
                    <li><span className="la la-calendar-check-o icon"></span>
                      Opened 3 weeks ago
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="more-btn-box pt-3 text-center">
            <a href="listing-grid.html" className="theme-btn gradient-btn"><i className="la la-list-alt mr-1"></i>View More New Listings</a>
          </div>
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end card-area --> */}

      {/* <!-- ================================
    END CARD AREA
================================= --> */}

      <div className="section-block"></div>

      {/* <!-- ================================
    START CARD AREA
================================= --> */}
      <section className="card-area position-relative section-padding overflow-hidden">
        <div className="svg-bg gradient-bg">
          <svg className="h-auto" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1200 415" preserveAspectRatio="none">
            <defs>
              <linearGradient id="svg-gradient-3">
                <stop offset="15%" stop-color="#ffc9c4" />
                <stop offset="95%" stop-color="#53ad96" />
              </linearGradient>
            </defs>
            <path opacity="0.1" d="M9.09494702e-13,373.771254 C80.6666667,298.406109 159.333333,260.723537 236,260.723537 C421,260.723537 525,344.759008 670,273.729027 C789.088175,215.392262 940.369069,48.85905 1200,74.7885669 C1200,148.788567 1200,262.192378 1200,415 L1.0227342e-12,414.788567 L9.09494702e-13,373.771254 Z"></path><defs></defs>
          </svg>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="card-heading-content mt-0">
                <div className="section-heading">
                  <div className="section-badge pb-3">
                    <span className="ribbon ribbon-2 bg-2 text-white">Featured Listing</span>
                  </div>
                  <h2 className="sec__title">Check out Our Featured Listings</h2>
                  <p className="sec__desc">
                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                    a feugiat eros. Nunc ut lacinia tortors.
                  </p>
                </div>
                {/* <!-- end section-heading --> */}
                <div className="more-btn-box pt-4">
                  <a href="listing-grid.html" className="theme-btn gradient-btn"><i className="la la-list-alt mr-1"></i>View All Featured Listings</a>
                </div>
              </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-8">
              <div className="card-carousel-3 owl-trigger-action">
                <div className="card-item border border-color">
                  <div className="card-image">
                    <a href="listing-details.html" className="d-block">
                      <img src={img4} data-src={img4} className="card__img lazy" alt="" />
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
                        <a href="#"> www.techydevs.com</a>
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
                      <img src={img5} data-src={img5} className="card__img lazy" alt="" />
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
                        <a href="#"> www.techydevs.com</a>
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
                      <img src={img6} data-src={img6} className="card__img lazy" alt="" />
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
                        <a href="#"> www.techydevs.com</a>
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
                      <img src={img7} data-src={img7} className="card__img lazy" alt="" />
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
                        <a href="#"> www.techydevs.com</a>
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

            {/* <!-- end col-lg-8 --> */}
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
    START CARD AREA
================================= --> */}
      <section className="card-area position-relative section-padding overflow-hidden">
        <div className="svg-bg svg-bg-3 gradient-bg-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 118" preserveAspectRatio="none">
            <defs>
              <linearGradient id="svg-gradient-4">
                <stop offset="15%" stop-color="#F8F9FA" />
                <stop offset="95%" stop-color="#b9caf1" />
              </linearGradient>
            </defs>
            <path opacity="0.2" d="M0,112 C400.666667,36 800.666667,-0.666666667 1200,2 C1200,41.3333333 1200,80 1200,118 L0,118 L0,112 Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="card-carousel-3 owl-trigger-action">
                <div className="card-item border border-color">
                  <div className="card-image">
                    <a href="listing-details.html" className="d-block">
                      <img src={img4} data-src={img4} className="card__img lazy" alt="" />
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
                        <a href="#"> www.techydevs.com</a>
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
                      <img src={img5} data-src={img5} className="card__img lazy" alt="" />
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
                        <a href="#"> www.techydevs.com</a>
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
                      <img src={img6} data-src={img6} className="card__img lazy" alt="" />
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
                        <a href="#"> www.techydevs.com</a>
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
                      <img src={img7} data-src={img7} className="card__img lazy" alt="" />
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
                        <a href="#"> www.techydevs.com</a>
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
            {/* <!-- end col-lg-8 --> */}
            <div className="col-lg-4">
              <div className="card-heading-content mb-0">
                <div className="section-heading">
                  <div className="section-badge pb-3">
                    <span className="ribbon ribbon-2 bg-2 text-white">Most Viewed Listing</span>
                  </div>
                  <h2 className="sec__title">Browse this Month's Most Viewed Listings</h2>
                  <p className="sec__desc">
                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                    a feugiat eros. Nunc ut lacinia tortors.
                  </p>
                </div>
                {/* <!-- end section-heading --> */}
                <div className="more-btn-box pt-4">
                  <a href="listing-grid.html" className="theme-btn gradient-btn"><i className="la la-list-alt mr-1"></i>View All Most Viewed Listings</a>
                </div>
              </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
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
    START CTA AREA
================================= --> */}
      <section className="cta-area cta-bg bg-fixed section-padding text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content p-0">
                <div className="section-heading">
                  <div className="section-badge pb-3">
                    <span className="ribbon ribbon-2">Best Local Business Site</span>
                  </div>
                  <h2 className="sec__title mb-4 font-size-45 line-height-60 text-white">Listhub's Purpose is to Help People Find <br />
                    Great Local Businesses</h2>
                  <p className="sec__desc text-white line-height-35 mb-3">
                    Grow your marketing and be happy with your business Morbi convallis <br />
                    bibendum urna ut viverra. Maecenas quis consequat libero
                  </p>
                </div>
                {/* <!-- end section-heading --> */}
                <div className="btn-box pt-4">
                  <a href="#" className="theme-btn gradient-btn shadow-none" data-toggle="modal" data-target="#signUpModal"><i className="la la-user-plus mr-2"></i>I Want to Start</a>
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
    START PRICING AREA
================================= --> */}
      <section className="pricing-area position-relative section--padding overflow-hidden">
        <div className="svg-bg svg-bg-3 gradient-bg-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 118" preserveAspectRatio="none">
            <defs>
              <linearGradient>
                <stop offset="15%" stop-color="#F8F9FA" />
                <stop offset="95%" stop-color="#b9caf1" />
              </linearGradient>
            </defs>
            <path opacity="0.2" d="M0,112 C400.666667,36 800.666667,-0.666666667 1200,2 C1200,41.3333333 1200,80 1200,118 L0,118 L0,112 Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-badge pb-3">
                  <span className="ribbon ribbon-2 bg-2 text-white">Best Pricing We Offered</span>
                </div>
                <h2 className="sec__title">Post Your Listing Today!</h2>
                <p className="sec__desc">Find the plan that’s right for you. Mark your listing as an official.</p>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row padding-top-60px">
            <div className="col-lg-4 responsive-column">
              <div className="price-item">
                <div className="price-head bg-1">
                  <h3 className="price__title text-uppercase">Standard</h3>
                  <svg className="svg-bg h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><path fill="#fff" d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path></svg>
                </div>
                {/* <!-- end price-head --> */}
                <div className="price-box d-flex flex-column align-items-center justify-content-center mx-auto text-color-3">
                  <h3 className="price__text text-color-3">Free</h3>
                  <span className="price__text-meta">/ per month</span>
                </div>
                {/* <!-- end price-box --> */}
                <ul className="list-items price-list mt-4">
                  <li><i className="la la-check text-success mr-2"></i>One Listing</li>
                  <li><i className="la la-check text-success mr-2"></i>10 Days Availability</li>
                  <li><i className="la la-check text-success mr-2"></i>2 Tags Per Listing</li>
                  <li><i className="la la-check text-success mr-2"></i>Non-Featured</li>
                  <li><i className="la la-check text-success mr-2"></i>Limited Support</li>
                  <li><i className="la la-close text-danger mr-2"></i>Average Price Range</li>
                  <li><i className="la la-close text-danger mr-2"></i>Business Hours</li>
                  <li><i className="la la-close text-danger mr-2"></i>Lifetime Availability</li>
                  <li><i className="la la-close text-danger mr-2"></i>Featured In Search Results</li>
                </ul>
                <div className="price-btn-box text-center">
                  <a href="add-listing" className="theme-btn bg-1 text-white">Get Started <i className="la la-arrow-right ml-2"></i></a>
                </div>
              </div>
              {/* <!-- end price-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="price-item">
                <div className="price-head bg-2">
                  <span className="ribbon ribbon-2">Most Popular</span>
                  <h3 className="price__title text-uppercase">Professional</h3>
                  <svg className="svg-bg h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><path fill="#fff" d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path></svg>
                </div>
                {/* <!-- end price-head --> */}
                <div className="price-box d-flex flex-column align-items-center justify-content-center mx-auto text-color-4">
                  <h3 className="price__text text-color-4">$19.90</h3>
                  <span className="price__text-meta">/ per month</span>
                </div>
                {/* <!-- end price-box --> */}
                <ul className="list-items price-list mt-4">
                  <li><i className="la la-check text-success mr-2"></i>Ten Listing</li>
                  <li><i className="la la-check text-success mr-2"></i>30 Days Availability</li>
                  <li><i className="la la-check text-success mr-2"></i>5 Tags Per Listing</li>
                  <li><i className="la la-check text-success mr-2"></i>Non-Featured</li>
                  <li><i className="la la-check text-success mr-2"></i>Limited Support</li>
                  <li><i className="la la-close text-success mr-2"></i>Average Price Range</li>
                  <li><i className="la la-close text-success mr-2"></i>Business Hours</li>
                  <li><i className="la la-close text-danger mr-2"></i>Lifetime Availability</li>
                  <li><i className="la la-close text-danger mr-2"></i>Featured In Search Results</li>
                </ul>
                <div className="price-btn-box text-center">
                  <a href="add-listing" className="theme-btn bg-2 text-white">Get Started <i className="la la-arrow-right ml-2"></i></a>
                </div>
              </div>
              {/* <!-- end price-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="price-item">
                <div className="price-head bg-3">
                  <h3 className="price__title text-uppercase">Business</h3>
                  <svg className="svg-bg h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><path fill="#fff" d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path></svg>
                </div>
                {/* <!-- end price-head --> */}
                <div className="price-box d-flex flex-column align-items-center justify-content-center mx-auto text-color-5">
                  <h3 className="price__text text-color-5">$29.90 </h3>
                  <span className="price__text-meta">/ per month</span>
                </div>
                {/* <!-- end price-box --> */}
                <ul className="list-items price-list mt-4">
                  <li><i className="la la-check text-success mr-2"></i>Twenty Listing</li>
                  <li><i className="la la-check text-success mr-2"></i>90 Days Availability</li>
                  <li><i className="la la-check text-success mr-2"></i>15 Tags Per Listing</li>
                  <li><i className="la la-check text-success mr-2"></i>Non-Featured</li>
                  <li><i className="la la-check text-success mr-2"></i>Limited Support</li>
                  <li><i className="la la-close text-success mr-2"></i>Average Price Range</li>
                  <li><i className="la la-close text-success mr-2"></i>Business Hours</li>
                  <li><i className="la la-close text-success mr-2"></i>Lifetime Availability</li>
                  <li><i className="la la-close text-success mr-2"></i>Featured In Search Results</li>
                </ul>
                <div className="price-btn-box text-center">
                  <a href="add-listing" className="theme-btn bg-3 text-white">Get Started <i className="la la-arrow-right ml-2"></i></a>
                </div>
              </div>
              {/* <!-- end price-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end pricing-area --> */}


      {/* <!-- ================================
    END PRICING AREA
================================= -->

<!-- ================================
       START BLOG AREA
================================= --> */}
      <section className="blog-area section--padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-badge pb-3">
                  <span className="ribbon ribbon-2 bg-2 text-white">From Our Blog</span>
                </div>
                <h2 className="sec__title">What's on Our Mind</h2>
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
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
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
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item card-item-layout-2" >
                <div className="card-image">
                  <a href="blog-single.html" className="d-block">
                    <img src={img12} data-src={img12} className="card__img lazy" alt="blog image" />
                    <span className="badge">July 15, 2020</span>
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
                    <img src={avatarImg3} alt="author-img" />
                  </a>
                  <ul className="listing-meta d-flex justify-content-center align-items-center">
                    <li>
                      <a href="#" className="listing-cat-link">Tour</a>,
                      <a href="#" className="listing-cat-link">News</a>
                    </li>
                  </ul>
                  <h4 className="card-title pt-2">
                    <a href="blog-single.html">Top 5 Boat journey in london</a>
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
            {/* <!-- end col-lg-4 --> */}
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
       START FOOTER AREA
================================= --> */}
      <section className="footer-area bg-dark pattern-bg before-none padding-top-30px padding-bottom-30px">
        <div className="container">
          <div className="row">
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
          <div className="section-block-2 margin-top-30px margin-bottom-40px"></div>
          <div className="row">
            <div className="col-lg-3 responsive-column">
              <div className="footer-item footer-item-2">
                <div className="footer-logo">
                  <a href="index.html" className="foot-logo"><img src={logoWhite} alt="logo" /></a>
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
                  <li><a href="add-listing">Add Listing</a></li>
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
                  <li><span className="d-block text-white mb-1"><i className="la la-phone mr-1 text-color-2"></i>Phone:</span><a href="#">+ 61 23 8093 3400</a></li>
                  <li><span className="d-block text-white mb-1"><i className="la la-envelope mr-1 text-color-2"></i>Email:</span><a href="#">listhub@gmail.com</a></li>
                </ul>
              </div>
              {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row pt-4 align-items-center">
            <div className="col-lg-5">
              <div className="footer-chosen-container footer-chosen-container-2 user-chosen-select-container d-flex align-items-center justify-content-start">
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
            <div className="col-lg-7">
              <ul className="list-items term-list term-list-2 text-right">
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
                <ul className="social-profile social-profile-colored">
                  <li><a href="#" className="facebook-bg"><i className="lab la-facebook-f"></i></a></li>
                  <li><a href="#" className="twitter-bg"><i className="lab la-twitter"></i></a></li>
                  <li><a href="#" className="instagram-bg"><i className="lab la-instagram"></i></a></li>
                </ul>
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

export default Home3