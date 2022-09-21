import React from 'react'
import img20 from "../Assets/images/img20.jpg"
import img21 from "../Assets/images/img21.jpg"
import img38 from "../Assets/images/img38.jpg"
import Footer from './Footer'
import ListingHeader from './ListingHeader'
import { Link } from "react-router-dom"

function Career() {
    return (
        <div>
            <ListingHeader />
            {/* <!-- ================================
    START BREADCRUMB AREA
================================= --> */}
            <section className="breadcrumb-area breadcrumb--area bread-bg-3 bread-overlay overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content text-center">
                                <div className="section-heading">
                                    <h2 className="sec__title text-white font-size-60 line-height-75">Work with purpose. <br />
                                        Grow from the experience.
                                    </h2>
                                    <p className="sec__desc text-white font-size-22">Listhub is powered by people with big ideas and unique perspectives.</p>
                                </div>
                            </div>
                            {/* <!-- end breadcrumb-content --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
                <div className="bread-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1200 415" preserveAspectRatio="none"><g className="pix-waiting animated" data-anim-type="fade-in-up" data-anim-delay="700"><path className="bg-gray-1" fill-opacity="0.2" d="M5.68434189e-13,292.788567 C80.6666667,271.41188 159.333333,260.723537 236,260.723537 C421,260.723537 525,344.759008 670,273.729027 C788.879994,215.494242 940.849865,-5.02123357 1200,0.788566864 C1200,33.4552335 1200,171.525711 1200,415 L9.19819776e-13,414.788567 L5.68434189e-13,292.788567 Z"></path></g><g className="pix-waiting animated" data-anim-type="fade-in-up" data-anim-delay="500"><path className="bg-gray-1" fill-opacity="0.6" d="M2.08355555e-12,332.788567 C80.6666667,284.745214 159.333333,260.723537 236,260.723537 C421,260.723537 525,344.759008 670,273.729027 C789.08369,215.39446 940.387018,21.5609115 1200,37.7885669 C1200,55.7885669 1200,181.525711 1200,415 L1.8189894e-12,414.788567 L2.08355555e-12,332.788567 Z"></path></g><path className="bg-gray-1" d="M9.09494702e-13,373.771254 C80.6666667,298.406109 159.333333,260.723537 236,260.723537 C421,260.723537 525,344.759008 670,273.729027 C789.088175,215.392262 940.369069,48.85905 1200,74.7885669 C1200,148.788567 1200,262.192378 1200,415 L1.0227342e-12,414.788567 L9.09494702e-13,373.771254 Z"></path><defs></defs></svg>
                </div>
                {/* <!-- end bread-svg --> */}
            </section>
            {/* <!-- end breadcrumb-area --> */}
            {/* <!-- ================================
    END BREADCRUMB AREA
================================= -->

<!-- ================================
    START CTA AREA
================================= --> */}
            <section className="cta-area section-padding text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2 className="sec__title mb-3">You're in good company</h2>
                                <p className="sec__desc mb-2">
                                    We're a diverse team of problem solvers and innovators. <br />
                                    Our work fuels consumers, businesses, and our teams.
                                </p>
                            </div>
                            {/* <!-- end section-heading --> */}
                            <div className="btn-box pt-4">
                                <a href="#" className="theme-btn gradient-btn hover-scale">Explore Corporate Careers <i className="la la-arrow-right ml-2"></i></a>
                            </div>
                            {/* <!-- end btn-box --> */}
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
    START ABOUT AREA
================================= --> */}
            <section className="about-area padding-bottom-100px position-relative">
                <span className="circle-bg circle-bg-1 position-absolute"></span>
                <span className="circle-bg circle-bg-2 position-absolute"></span>
                <span className="circle-bg circle-bg-3 position-absolute"></span>
                <span className="circle-bg circle-bg-4 position-absolute"></span>
                <span className="circle-bg circle-bg-5 position-absolute"></span>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content mt-0">
                                <div className="section-heading">
                                    <h2 className="sec__title">Come as you are and ​​​​​​​become who you want to be</h2>
                                    <p className="sec__desc pb-3">
                                        Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla.
                                        Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis
                                        libero sodales eleifend.
                                    </p>
                                    <p className="sec__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
                                        pulvinar neque.
                                    </p>
                                </div>
                                {/* <!-- end section-heading --> */}
                                <div className="btn-box padding-top-30px">
                                    <Link to="/about" className="theme-btn gradient-btn">Learn More<i className="la la-arrow-right ml-2"></i></Link>
                                </div>
                                {/* <!-- end btn-box --> */}
                            </div>
                        </div>
                        {/* <!-- end col-lg-6 --> */}
                        <div className="col-lg-6">
                            <div className="img-boxes row">
                                <div className="col-lg-6 responsive-column">
                                    <div className="img-box-item js-tilt-2">
                                        <img className="lazy" src={img38} data-src={img38} alt="about-img" />
                                    </div>
                                </div>
                                <div className="col-lg-6 responsive-column">
                                    <div className="img-box-item mb-4 js-tilt-2">
                                        <img className="lazy" src={img20} data-src={img20} alt="about-img" />
                                    </div>
                                    <div className="img-box-item js-tilt-2">
                                        <img className="lazy" src={img21} data-src={img21} alt="about-img" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end img-boxes --> */}
                        </div>
                        {/* <!-- end col-lg-6 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end about-area --> */}
            {/* <!-- ================================
    END ABOUT AREA
================================= --> */}

            <div className="section-block"></div>

            {/* <!-- ================================
       START JOB AREA
================================= --> */}
            <section className="job-area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Explore Your Future</h2>
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
                                    <h4 className="card-title pt-3"><Link to="/career-details">Senior Software Engineer</Link></h4>
                                    <p className="card-sub pb-3">Los Angeles, United States</p>
                                    <Link to="/career-details" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></Link>
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
                                    <h4 className="card-title pt-3"><Link to="/career-details">Senior Data Engineer</Link></h4>
                                    <p className="card-sub pb-3">Los Angeles, United States</p>
                                    <Link to="/career-details" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></Link>
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
                                    <h4 className="card-title pt-3"><Link to="/career-details">Lead Product Designer</Link></h4>
                                    <p className="card-sub pb-3">Los Angeles, United States</p>
                                    <Link to="/career-details" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></Link>
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
                                    <Link to="/career-details" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></Link>
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
                                    <Link to="/career-details" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row padding-top-60px">
                        <div className="col-lg-12">
                            <h3 className="font-size-24 text-color padding-bottom-40px"><span className="circle-bg mr-3"></span>Marketing</h3>
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-content">
                                    <a href="#" className="pill font-size-14 font-weight-semi-bold radius-round">Remote</a>
                                    <h4 className="card-title pt-3"><a href="career-details.html">Head of Global Marketing</a></h4>
                                    <p className="card-sub pb-3">Los Angeles, United States</p>
                                    <Link to="/career-details" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-content">
                                    <a href="#" className="pill font-size-14 font-weight-semi-bold radius-round">Full time</a>
                                    <h4 className="card-title pt-3"><a href="career-details.html">Account Executive</a></h4>
                                    <p className="card-sub pb-3">Los Angeles, United States</p>
                                    <Link to="/career-details" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-content">
                                    <a href="#" className="pill font-size-14 font-weight-semi-bold radius-round">Internship</a>
                                    <h4 className="card-title pt-3"><a href="career-details.html">Director of Demand Generation</a></h4>
                                    <p className="card-sub pb-3">Los Angeles, United States</p>
                                    <Link to="/career-details" className="btn-text">Learn More<i className="la la-arrow-right icon"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end job-area --> */}
            {/* <!-- ================================
       START JOB AREA
================================= --> */}

            <div className="section-block"></div>

            {/* <!-- ================================
    START BENEFIT AREA
================================= --> */}
            <section className="benefits-area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Live Your Best Life with <br /> five-star Benefits</h2>
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
                    <div className="row padding-top-60px justify-content-center">
                        <div className="col-lg-4 responsive-column">
                            <div className="info-box info--box js-tilt-2">
                                <div className="info-icon gradient-icon">
                                    <svg width="40" viewBox="0 0 511.996 511.996" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="svg-gradient">
                                                <stop offset="5%" stop-color="#ff6b6b" />
                                                <stop offset="95%" stop-color="#ffbb3d" />
                                            </linearGradient>
                                        </defs>
                                        <g><path d="m223.907 171.93c3.302 0 6.328-2.198 7.234-5.538 3.367-12.407 14.23-16.793 22.593-16.793.06 0 .121 0 .18.001 8.591.065 18.879 4.481 21.993 16.683 1.023 4.014 5.105 6.436 9.122 5.413 4.013-1.024 6.437-5.108 5.413-9.122-4.302-16.858-18.595-27.838-36.413-27.973-17.8-.15-32.805 11.062-37.364 27.864-1.084 3.998 1.276 8.117 5.274 9.202.657.177 1.317.263 1.968.263z" /><path d="m499.492 80.685c-14.232-14.73-38.028-14.181-55.85 1.119-17.812-15.308-41.611-15.86-55.825-1.117-16.624 17.222-16.694 45.189-.223 62.51l-24.359-.029c-3.376-7.206-7.326-14.011-11.856-20.364-19.153-26.857-47.322-44.134-79.318-48.649-18.482-2.609-37.643-.682-55.413 5.574-3.907 1.375-5.959 5.658-4.583 9.565 1.375 3.906 5.657 5.959 9.565 4.583 15.509-5.46 32.223-7.145 48.335-4.87 33.142 4.677 64.593 25.447 81.007 62.799.193 1.254.693 2.403 1.426 3.371 8.937 22.093 12.748 49.698 8.875 82.912-1.181 10.156-2.908 19.861-5.121 29.124-28.712-2.559-56.362 3.177-80.332 16.758-3.604 2.042-4.87 6.619-2.828 10.223 1.38 2.436 3.919 3.804 6.532 3.804 1.252 0 2.522-.314 3.69-.976 20.861-11.819 44.003-16.864 68.894-15.085-24.279 78.243-84.646 121.845-139.782 137.559 2.206-38.723 17.613-75.106 43.06-101.01 2.903-2.955 2.861-7.703-.094-10.606-2.956-2.903-7.704-2.861-10.606.094-28.98 29.5-46.115 71.21-47.537 115.217-67.499 13.744-131.348-8.782-168.634-60.242-6.015-8.29-6.716-15.165-4.822-18.043.293-.446 1.186-1.802 4.25-1.114 18.84 4.235 34.86 6.061 48.102 6.061 28.012-.001 43.576-8.175 47-19.005 2.223-7.03-1.379-14.067-8.761-17.114-.519-.214-1.06-.37-1.613-.463-70.114-11.832-91.595-58.019-96.48-98.137 21.157 20.983 53.037 35.321 95.151 42.732.44.077.877.115 1.309.115 3.572 0 6.737-2.562 7.378-6.202.718-4.08-2.007-7.968-6.087-8.687-48.252-8.49-81.499-26.292-98.886-52.916.758-27.631 7.866-51.778 14.572-65.409.23-.468.411-.959.54-1.465.649-2.557 3.329-4.965 5.973-5.368 2.555-.391 4.915 1.143 7.013 4.556.032.053.065.105.099.157 5.948 9.159 12.127 17.094 18.812 23.991.376.493.817.935 1.305 1.323 20.516 20.55 45.897 31.561 84.061 37.802 2.047.335 4.144-.194 5.789-1.461s2.69-3.159 2.888-5.226c2.873-29.995 17.271-55.658 40.543-72.261 3.372-2.406 4.155-7.089 1.75-10.461-2.405-3.371-7.088-4.154-10.461-1.75-12.161 8.677-22.215 19.474-29.889 31.88-17.168-8.838-30.356-21.507-43.196-41.32-.139-.215-.289-.422-.449-.621-8-9.949-16.958-10.17-21.587-9.419-8.626 1.402-15.409 8.032-17.809 14.005-4.866 10.009-8.937 22.587-11.735 35.957-2.5-3.288-4.956-6.787-7.393-10.536-5.319-8.596-13.338-12.767-22-11.445-8.328 1.27-15.621 7.658-18.023 15.679-7.463 15.47-15.273 42.473-15.825 72.967-.022.302-.032.605-.017.91-.062 4.643.042 9.362.345 14.134 2.451 38.427 19.709 104.87 107.338 120.833-4.682 4.177-25.184 13.057-76.469 1.53-8.133-1.824-15.822 1.051-20.068 7.504-4.656 7.077-5.732 20.013 5.209 35.093 21.712 29.967 52.178 51.525 88.104 62.345 17.543 5.284 35.97 7.928 54.724 7.928 15.477 0 31.176-1.81 46.784-5.416.198-.039.391-.089.583-.143 1.82-.426 3.639-.86 5.456-1.335 41.49-10.843 78.577-33.438 107.25-65.343 23.159-25.768 39.93-56.984 49.48-91.688.183-.467.32-.958.408-1.47 2.847-10.604 5.02-21.531 6.499-32.723l44.216-68.66 14.94 14.823c.181.18.372.351.57.511l.233.188c2.176 1.759 4.426 3.578 7.78 3.686.081.002.161.004.242.004s.161-.001.242-.004c3.31-.106 5.533-1.877 7.683-3.589l.313-.249c.215-.171.421-.354.616-.548l46.885-46.518c.041-.04.08-.08.119-.121 16.664-17.296 16.664-45.442-.007-62.748zm-410.869 14.756c.111-.227.21-.458.298-.695.536-1.447 3.102-4.293 6.307-4.814.915-.148 3.657-.595 7.268 3.742 14.275 21.938 29.101 36.09 48.528 46.087-4.162 9.317-7.136 19.324-8.82 29.855-29.871-5.651-49.78-14.415-66.247-30.186 2.378-16.425 6.931-32.289 12.666-43.989zm289.108 117.55c-.054-19.761-2.912-38.168-8.496-54.816l33.472.04 6.284 6.234zm111.021-80.021-45.097 44.743-45.1-44.747c-11.102-11.561-11.084-30.323.057-41.865 9.961-10.331 25.971-6.311 35.99 2.729.717.645 1.289 1.19 1.753 1.633 1.707 1.627 3.817 3.639 7.227 3.639h.117c3.455 0 5.6-2.059 7.334-3.724.452-.434 1-.96 1.657-1.558 10.007-9.028 26.03-13.047 36.006-2.721 11.118 11.542 11.137 30.307.056 41.871z" /></g>
                                    </svg>
                                </div>
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title">For Your Wellbeing</h4>
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
                            <div className="info-box info--box js-tilt-2">
                                <div className="info-icon gradient-icon">
                                    <svg width="40" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" >
                                        <defs>
                                            <linearGradient id="svg-gradient2">
                                                <stop offset="5%" stop-color="#ff6b6b" />
                                                <stop offset="95%" stop-color="#ffbb3d" />
                                            </linearGradient>
                                        </defs>
                                        <g>
                                            <g>
                                                <path d="M422.503,270.613c-4.115,0-7.451,3.336-7.451,7.451c0,5.217-4.244,9.461-9.461,9.461c-5.216,0-9.461-4.244-9.461-9.461
                                            c0-4.116-3.336-7.451-7.451-7.451s-7.451,3.336-7.451,7.451c0,13.434,10.93,24.363,24.363,24.363
                                            c13.433,0,24.363-10.93,24.363-24.363C429.954,273.947,426.618,270.613,422.503,270.613z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M492.444,271.83l-20.972-6.718c-2.686-0.861-4.803-3.005-5.662-5.736c-4.42-14.053-11.09-27.246-19.825-39.214
                                            c-3.981-5.455-8.408-10.664-13.244-15.623c3.094-13.573,4.776-28.934,4.558-42.205c-0.312-18.985-4.106-30.12-11.598-34.044
                                            c-4.035-2.116-16.315-8.544-82.782,21.882c-1.574,0.72-3.044,1.607-4.405,2.623c-4.481-1.204-9.061-2.318-13.669-3.318
                                            c-0.555-0.121-1.127-0.228-1.686-0.346c5.386-11.766,8.531-24.545,9.122-37.737c0.184-4.112-2.999-7.594-7.111-7.777
                                            c-4.101-0.204-7.594,2.998-7.777,7.11c-0.971,21.691-9.969,42.1-25.335,57.467c-9.181,9.181-19.931,15.85-31.388,20.05
                                            c-19.869-2.788-40.107-2.788-59.976,0c-11.458-4.2-22.207-10.869-31.388-20.05c-16.394-16.394-25.423-38.191-25.423-61.376
                                            c0-23.186,9.029-44.982,25.423-61.376c16.394-16.395,38.192-25.424,61.376-25.424c23.184,0,44.982,9.029,61.376,25.424
                                            c6.588,6.588,12.032,14.106,16.181,22.343c1.851,3.676,6.332,5.156,10.007,3.304c3.676-1.85,5.155-6.331,3.304-10.006
                                            c-4.863-9.659-11.24-18.466-18.953-26.18c-19.209-19.209-44.749-29.788-71.914-29.788c-27.165,0-52.705,10.579-71.914,29.788
                                            c-19.209,19.21-29.788,44.749-29.788,71.914s10.579,52.705,29.788,71.914c5.541,5.541,11.569,10.306,17.945,14.298
                                            c0.002,0,0.004-0.001,0.006-0.001c-4.633,1.204-9.231,2.556-13.778,4.076c-3.903,1.305-6.009,5.526-4.704,9.43
                                            c1.304,3.903,5.527,6.009,9.429,4.705c40.636-13.585,85.396-13.585,126.032,0c0.784,0.262,1.58,0.386,2.363,0.386
                                            c3.117,0,6.023-1.972,7.066-5.091c1.305-3.903-0.801-8.125-4.704-9.43c-4.547-1.52-9.145-2.873-13.778-4.076
                                            c0.002,0,0.004,0.001,0.006,0.001c6.377-3.992,12.404-8.757,17.945-14.298c4.902-4.902,9.229-10.255,12.986-15.944
                                            c2.054,0.399,4.093,0.817,6.102,1.253c2.676,0.581,5.34,1.205,7.98,1.86c-0.083,0.324-0.168,0.647-0.237,0.976
                                            c-3.634,17.245-3.398,32.497,0.701,45.33c3.684,11.535,10.333,20.88,19.76,27.777c11.111,8.128,24.525,11.639,36.676,11.639
                                            c9.145,0,17.576-1.99,23.768-5.497c7.004-3.967,12.872-12.326,17.517-24.876c2.147,2.506,4.182,5.073,6.1,7.701
                                            c7.777,10.654,13.714,22.396,17.646,34.898c2.309,7.343,8.041,13.121,15.332,15.458l20.972,6.718
                                            c5.503,1.763,9.2,6.828,9.2,12.606v34.775c0,5.778-3.697,10.843-9.2,12.606l-33.789,10.823
                                            c-5.406,1.733-9.981,5.448-12.882,10.462c-13.275,22.942-34.146,41.927-62.037,56.428c-3.222,1.677-5.454,4.676-6.126,8.23
                                            l-10.822,57.303c-0.299,1.579-1.682,2.724-3.289,2.724h-35.187c-1.607,0-2.99-1.146-3.289-2.724l-5.994-31.669
                                            c-1.18-6.231-7.024-10.37-13.314-9.417c-15.157,2.292-30.775,3.453-46.418,3.453c-11.638,0-23.127-0.649-34.15-1.93
                                            c-6.095-0.701-11.773,3.454-12.912,9.472l-5.696,30.091c-0.299,1.579-1.682,2.724-3.289,2.724h-35.187
                                            c-1.607,0-2.99-1.146-3.293-2.748l-10.42-54.122c-0.671-3.487-2.861-6.452-6.012-8.135C96.25,401.595,71.12,359.191,71.12,304.351
                                            c0-27.708,6.062-52.209,18.017-72.825c11.156-19.239,27.45-35.146,48.429-47.281c3.562-2.061,4.779-6.619,2.719-10.182
                                            c-2.06-3.562-6.618-4.777-10.181-2.719C89.425,194.876,64.89,231.18,58.135,277.29v-0.001c-0.717-0.065-1.435-0.127-2.15-0.201
                                            c0.13-4.975-0.77-9.995-2.73-14.867c-4.323-10.746-13.203-18.502-22.624-19.759c-7.424-0.994-14.489,2.158-19.392,8.636
                                            c-7.109,9.394-5.95,16.828-3.727,21.41c3.753,7.733,13.4,13.203,29.409,16.642c-0.44,0.659-0.924,1.321-1.454,1.986
                                            c-9.459,11.863-20.603,14.486-27.839,14.733C3.392,306.012,0,309.413,0,313.652v0.036c0,4.181,3.299,7.591,7.476,7.782
                                            c0.535,0.025,1.094,0.038,1.676,0.038c9.156,0,23.851-3.377,37.969-21.08c2.229-2.794,4.045-5.742,5.441-8.788
                                            c1.406,0.159,2.757,0.295,4.051,0.415c0-0.003,0-0.005,0.001-0.008c-0.254,4.038-0.395,8.135-0.395,12.304
                                            c0,31.028,7.397,58.693,21.984,82.23c13.45,21.7,32.707,39.468,57.255,52.83l10.13,52.616c1.629,8.608,9.17,14.856,17.931,14.856
                                            h35.187c8.761,0,16.302-6.248,17.931-14.856l5.15-27.208c10.696,1.133,21.77,1.707,32.965,1.707c15.36,0,30.702-1.07,45.654-3.182
                                            l5.429,28.685c1.63,8.608,9.171,14.855,17.931,14.855h35.187c8.761,0,16.302-6.248,17.932-14.859l10.537-55.791
                                            c29.768-15.741,52.206-36.419,66.704-61.475c1.045-1.806,2.654-3.131,4.53-3.732l33.788-10.823
                                            C504.141,356.455,512,345.686,512,333.403v-34.775C512,286.346,504.141,275.577,492.444,271.83z M421.278,183.273
                                            c-2.868,24.526-10.561,45.506-18.291,49.884c-8.786,4.977-29.071,5.938-44.301-5.203c-15.248-11.154-20.323-31.212-14.678-58.006
                                            c0-0.001,0-0.001,0-0.001c0.567-2.691,2.479-5.019,5.114-6.225c37.304-17.076,58.811-22.661,66.801-22.661
                                            c1.206,0,2.104,0.127,2.702,0.361C421.025,143.98,424.173,158.521,421.278,183.273z M20.921,266.001
                                            c-0.771-1.59,1.049-4.385,2.203-5.911c1.829-2.416,3.514-2.91,4.787-2.91c0.269,0,0.52,0.022,0.75,0.053
                                            c3.426,0.457,8.226,4.227,10.769,10.548c0.599,1.488,1.377,3.953,1.559,7.027C30.674,272.671,22.66,269.59,20.921,266.001z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M237.918,98.277V71.613c9.195,0.657,12.611,4.86,15.763,4.86c3.941,0,5.78-4.991,5.78-7.487
                                            c0-6.437-12.611-9.195-21.543-9.458V55.98c0-1.576-1.971-3.021-3.941-3.021c-2.234,0-3.81,1.445-3.81,3.021v3.809
                                            c-12.479,1.314-24.958,7.882-24.958,24.433c0,16.814,13.136,21.543,24.958,25.746v30.869
                                            c-13.399-1.051-16.945-10.246-21.28-10.246c-3.284,0-6.042,4.335-6.042,7.488c0,6.436,11.034,15.237,27.322,15.5h0v4.072
                                            c0,1.576,1.577,3.021,3.81,3.021c1.971,0,3.941-1.445,3.941-3.021v-4.466c14.187-1.971,23.907-10.903,23.907-27.06
                                            C261.825,108.261,249.346,102.48,237.918,98.277z M230.955,95.782c-6.962-2.627-12.61-5.385-12.61-12.872
                                            c0-6.831,5.254-10.115,12.61-11.034V95.782z M237.129,140.574v-27.716c6.436,2.758,11.559,6.436,11.559,14.711
                                            C248.688,135.058,244.222,139.261,237.129,140.574z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title">For Your Finances</h4>
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
                            <div className="info-box info--box js-tilt-2">
                                <div className="info-icon gradient-icon">
                                    <svg width="40" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 480" >
                                        <defs>
                                            <linearGradient id="svg-gradient3">
                                                <stop offset="5%" stop-color="#ff6b6b" />
                                                <stop offset="95%" stop-color="#ffbb3d" />
                                            </linearGradient>
                                        </defs>
                                        <g>
                                            <g>
                                                <path d="M456,112h-88V88c-0.035-30.913-25.087-55.965-56-56H168c-30.913,0.035-55.965,25.087-56,56v24H24
                                        c-13.255,0-24,10.745-24,24v160c0.042,10.134,6.445,19.15,16,22.528V424c0,13.255,10.745,24,24,24h400c13.255,0,24-10.745,24-24
                                        V318.528c9.555-3.378,15.958-12.394,16-22.528V136C480,122.745,469.255,112,456,112z M128,88c0.026-22.08,17.92-39.974,40-40h144
                                        c22.08,0.026,39.974,17.92,40,40v24h-16.32L336,88c-0.026-13.244-10.756-23.974-24-24H167.704c-13.244,0.026-23.974,10.756-24,24
                                        v0.08L143.92,112H128V88z M320,87.888L319.68,112H159.92l-0.248-24c0-4.418,3.582-8,8-8H312C316.375,80,319.939,83.513,320,87.888
                                        z M448,424c0,4.418-3.582,8-8,8H40c-4.418,0-8-3.582-8-8V320h56v24c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-24h208v24
                                        c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-24h56V424z M104,336v-40c-0.004-2.157,0.885-4.219,2.456-5.696
                                        c1.455-1.495,3.458-2.328,5.544-2.304c4.418,0,8,3.582,8,8v16v24H104z M360,336v-40c0-4.418,3.582-8,8-8
                                        c2.158-0.007,4.223,0.879,5.704,2.448c1.484,1.465,2.312,3.467,2.296,5.552v16v24H360z M464,296c0,4.418-3.582,8-8,8h-64v-8
                                        c-0.057-13.231-10.769-23.943-24-24c-13.255,0-24,10.745-24,24v8H136v-8c0-13.255-10.745-24-24-24
                                        c-13.224,0.074-23.926,10.776-24,24v8H24c-4.418,0-8-3.582-8-8V136c0-4.418,3.582-8,8-8h432c4.418,0,8,3.582,8,8V296z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title">For Your Work Life</h4>
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
                            <div className="info-box info--box js-tilt-2">
                                <div className="info-icon gradient-icon">
                                    <svg width="40" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511.999 511.999" >
                                        <defs>
                                            <linearGradient id="svg-gradient4">
                                                <stop offset="5%" stop-color="#ff6b6b" />
                                                <stop offset="95%" stop-color="#ffbb3d" />
                                            </linearGradient>
                                        </defs>
                                        <g>
                                            <g>
                                                <path d="M353.001,344.115c-3.945-3.865-10.276-3.8-14.142,0.144l-0.284,0.29c-3.865,3.945-3.8,10.276,0.145,14.142
                                            c1.946,1.907,4.473,2.857,6.998,2.857c2.593,0,5.185-1.003,7.144-3.001l0.284-0.29
                                            C357.011,354.312,356.946,347.981,353.001,344.115z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M460.574,239.276H434v-26.574c0-5.523-4.477-10-10-10s-10,4.477-10,10v26.574h-26.574c-5.523,0-10,4.477-10,10
                                            s4.477,10,10,10H414v26.574c0,5.523,4.477,10,10,10s10-4.477,10-10v-26.574h26.574c5.523,0,10-4.477,10-10
                                            S466.097,239.276,460.574,239.276z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M456.694,167.577c-9.34-69.03-67.048-120.678-135.545-120.678c-34.577,0-66.922,12.889-92.149,36.514
                                            c-25.228-23.625-57.573-36.514-92.149-36.514C61.391,46.899,0,109.752,0,187.009c0,15.264,4.453,32.373,13.312,51.259H10
                                            c-5.523,0-10,4.477-10,10s4.477,10,10,10h13.962c18.677,31.62,48.213,67.577,88.487,107.623
                                            c54.58,54.271,109.924,96.73,110.477,97.153c1.792,1.371,3.933,2.056,6.074,2.056s4.281-0.685,6.074-2.056
                                            c0.422-0.323,42.75-32.781,89.658-77.007c4.019-3.789,4.205-10.118,0.416-14.136c-3.788-4.018-10.117-4.205-14.136-0.416
                                            c-35.774,33.729-68.801,60.472-82.011,70.92c-15.698-12.42-59.4-47.873-102.593-90.838c-34.58-34.399-61.052-65.747-78.949-93.299
                                            h89.526c4.461,0,8.382-2.955,9.612-7.242l17.472-60.902l48.384,155.018c1.304,4.176,5.171,7.021,9.546,7.021
                                            s8.242-2.845,9.545-7.021l26.795-85.873h44.644c5.523,0,10-4.477,10-10s-4.477-10-10-10h-51.999c-4.375,0-8.243,2.844-9.546,7.021
                                            l-19.442,62.305L173.21,152.289c-1.316-4.217-5.234-7.081-9.662-7.02c-4.417,0.051-8.278,2.995-9.497,7.242l-24.603,85.758H35.624
                                            C25.287,218.753,20,201.552,20,187.009c0-66.229,52.419-120.11,116.851-120.11c32.384,0,62.5,13.312,84.799,37.482
                                            c1.894,2.052,4.558,3.219,7.35,3.219s5.457-1.167,7.35-3.219c22.299-24.17,52.415-37.482,84.799-37.482
                                            c55.707,0,103.068,40.174,114.325,95.125c-3.757-0.491-7.586-0.748-11.475-0.748c-48.523,0-88,39.477-88,88s39.477,88,88,88
                                            s88-39.477,88-88C512,212.3,489.075,180.582,456.694,167.577z M424,317.276c-37.495,0-68-30.505-68-68s30.505-68,68-68
                                            s68,30.505,68,68S461.495,317.276,424,317.276z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title">For Your Mental Health</h4>
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
                            <div className="info-box info--box js-tilt-2">
                                <div className="info-icon gradient-icon">
                                    <svg width="40" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 490.667 490.667" >
                                        <defs>
                                            <linearGradient id="svg-gradient5">
                                                <stop offset="5%" stop-color="#ff6b6b" />
                                                <stop offset="95%" stop-color="#ffbb3d" />
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
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title">For Your Family</h4>
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
            <Footer />

        </div>
    )
}

export default Career