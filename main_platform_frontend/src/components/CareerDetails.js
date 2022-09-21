import React from 'react'
import Header4 from './Header4'
import Footer from './Footer'
function CareerDetails() {
    return (
        <div>
            <Header4 />
            {/* <!-- ================================
    START BREADCRUMB AREA
================================= --> */}
            <section className="breadcrumb-area bread-bg-3 bread-overlay py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content d-flex flex-wrap align-items-end justify-content-between">
                                <div className="section-heading">
                                    <h2 className="sec__title text-white mb-0">Senior Software Engineer</h2>
                                    <p className="sec__desc text-white pt-1 font-size-17"><i className="la la-map-marker mr-1"></i>390 Greenwich StNew York, NY 10013</p>
                                </div>
                                <div className="btn-box bread-btns d-flex align-items-center">
                                    <a href="#" className="btn-gray mr-2"><i className="la la-bookmark mr-1"></i>Save</a>
                                    <a href="#" className="btn-gray" data-toggle="modal" data-target="#shareModal"><i className="la la-external-link mr-1"></i>Share</a>
                                </div>
                            </div>
                            {/* <!-- end breadcrumb-content --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end breadcrumb-area --> */}
            {/* <!-- ================================
    END BREADCRUMB AREA
================================= -->

<!-- ================================
    START JOB DETAIL AREA
================================= --> */}
            <section className="job-detail-area padding-top-70px padding-bottom-70px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="job-listing-detail-wrap">
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Job Description</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <p className="pb-3 font-weight-medium line-height-30">
                                            Nemo ucxqui officia voluptatem accu santium doloremque laudantium,
                                            totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi
                                            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                                            unde omnis iste natus error sit voluptatem accusan tium dolorem
                                            que laudantium, totam rem aperiam the eaque ipsa quae abillo
                                            was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                        <div className="collapse collapse-content" id="showMoreOptionCollapse">
                                            <p className="font-weight-medium line-height-30 pb-3">
                                                Porpoise uncritical gosh and much and this haughtily broadcast goodness ponderous squid darn in sheepish yet the slapped mildly and adventurously sincere less dalmatian assentingly wherever left ethereal the underneath oh lustily arduously that a groggily some vexedly broadcast sheepish yet the slapped.
                                            </p>
                                        </div>
                                        <a className="collapse-btn" data-toggle="collapse" href="#showMoreOptionCollapse" role="button" aria-expanded="false" aria-controls="showMoreOptionCollapse">
                                            <span className="collapse-btn-hide">Read More <i className="la la-plus ml-1"></i></span>
                                            <span className="collapse-btn-show">Read Less <i className="la la-minus ml-1"></i></span>
                                        </a>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Job Responsibilities</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <ul className="list-items list-items-bullet">
                                            <li>Partner with cross functional partners in Product Management, Design, Data Science and Engineering to enable delivery of the highest impact work.</li>
                                            <li>Provide visibility and transparency into the portfolio of engineering initiatives.</li>
                                            <li>Leverage your expertise to identify and define the most critical priorities and establish best practices for the team.</li>
                                            <li>Increase the TPM team productivity by removing obstacles and keeping processes lean.</li>
                                            <li>Maintain urgency by ensuring there is strong collaboration within multiple parts of the business.</li>
                                            <li>Regularly assess risks and opportunities; understand best practices, drive for process improvements, and find new ways of operating, with a focus on simplification and productivity.</li>
                                            <li>Encourage collaboration on setting strategy, ensure your team understands and is inspired by the teams strategic direction.</li>
                                        </ul>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Preferred Qualifications</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <ul className="list-items list-items-bullet">
                                            <li>Minimum 15 years technical project or program management experience, with at least 8 years of people management experience.</li>
                                            <li>Experience managing an organization of program managers, including building and growing the team.</li>
                                            <li>Experience structuring an organization that optimizes for execution, including attracting talent and building out gaps in the existing team.</li>
                                            <li>Proven track record of managing large-scale, complex, cross functional technical initiatives.</li>
                                            <li>Demonstrated ability to work through ambiguity to detailed solutions. You can take a vague problem, crisply frame the challenge, identify a path forward, and drive an initiative over the finish-line.</li>
                                        </ul>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                                <div className="block-card mb-4">
                                    <div className="block-card-header">
                                        <h2 className="widget-title">Compensation & Other Benefits</h2>
                                        <div className="stroke-shape"></div>
                                    </div>
                                    {/* <!-- end block-card-header --> */}
                                    <div className="block-card-body">
                                        <ul className="list-items list-items-bullet">
                                            <li>Tour allowance, Medical allowance, Performance bonus, Over time allowance, Provident fund</li>
                                            <li>Lunch Facilities: <strong className="text-color font-weight-medium">Partially Subsidize</strong></li>
                                            <li>Salary Review: <strong className="text-color font-weight-medium">Half Yearly</strong></li>
                                            <li>Festival Bonus: <strong className="text-color font-weight-medium">3</strong></li>
                                        </ul>
                                    </div>
                                    {/* <!-- end block-card-body --> */}
                                </div>
                                {/* <!-- end block-card --> */}
                            </div>
                            {/* <!-- end listing-detail-wrap --> */}
                        </div>
                        {/* <!-- end col-lg-8 --> */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Job Summary</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <ul className="list-items list-items-style-2">
                                        <li><span className="text-color mr-1"><i className="la la-calendar mr-2 text-color-2 font-size-18"></i>Published on:</span> 20 Oct 2020</li>
                                        <li><span className="text-color mr-1"><i className="la la-glass mr-2 text-color-2 font-size-18"></i>Vacancy:</span> 02</li>
                                        <li><span className="text-color mr-1"><i className="la la-laptop mr-2 text-color-2 font-size-18"></i>Employment Status:</span>Full-time</li>
                                        <li><span className="text-color mr-1"><i className="la la-lightbulb mr-2 text-color-2 font-size-18"></i>Experience:</span>At least 2 year(s)</li>
                                        <li><span className="text-color mr-1"><i className="la la-users mr-2 text-color-2 font-size-18"></i>Gender:</span>Both</li>
                                        <li><span className="text-color mr-1"><i className="la la-user mr-2 text-color-2 font-size-18"></i>Age:</span>Age 24 to 32 years</li>
                                        <li><span className="text-color mr-1"><i className="la la-map-marker mr-2 text-color-2 font-size-18"></i>Job Location:</span><a href="#">New York, USA</a></li>
                                        <li><span className="text-color mr-1"><i className="la la-money mr-2 text-color-2 font-size-18"></i>Salary:</span>Tk. 35000 - 45000 (Monthly)</li>
                                        <li><span className="text-color mr-1"><i className="la la-hourglass-1 mr-2 text-color-2 font-size-18"></i>Application Deadline:</span>26 Nov 2020</li>
                                    </ul>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">General Info</h3>
                                    <div className="stroke-shape mb-4"></div>
                                    <ul className="list-items list-items-style-2">
                                        <li><i className="la la-star mr-2 text-color-2 font-size-18"></i><a href="#">Shortlist this job </a></li>
                                        <li><i className="la la-envelope mr-2 text-color-2 font-size-18"></i><a href="#" data-toggle="modal" data-target="#shareModalTwo"> Share by Email </a></li>
                                        <li><i className="la la-print mr-2 text-color-2 font-size-18"></i><a href="javascript:window.print()"> Print this job </a></li>
                                        <li><i className="la la-briefcase mr-2 text-color-2 font-size-18"></i><a href="#"> View all jobs of this category </a></li>
                                        <li><i className="la la-flag mr-2 text-color-2 font-size-18"></i><a href="#" data-toggle="modal" data-target="#reportModal"> Report this Job</a></li>
                                    </ul>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                            </div>
                            {/* <!-- end sidebar --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end job-detail-area --> */}
            {/* <!-- ================================
    END JOB DETAIL  AREA
================================= -->

<!-- ================================
    START CTA AREA
================================= --> */}
            <section className="cta-area padding-bottom-100px text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2 className="sec__title mb-3">Read Before Apply</h2>
                                <p className="sec__desc mb-2">
                                    We’re always looking for talented individuals and <br />
                                    people who are hungry to do great work.
                                </p>
                            </div>
                            {/* <!-- end section-heading --> */}
                            <div className="btn-box pt-4">
                                <a href="#" className="theme-btn gradient-btn hover-scale">Apply for this job<i className="la la-arrow-right ml-2"></i></a>
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
================================= --> */}
            <Footer />
        </div>
    )
}

export default CareerDetails