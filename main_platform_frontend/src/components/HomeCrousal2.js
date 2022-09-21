import React from 'react'
import avatarImg from "../Assets/images/avatar-img.jpg"
import avatarImg2 from "../Assets/images/avatar-img2.jpg"
import avatarImg3 from "../Assets/images/avatar-img3.jpg"
import Slider from "react-slick";


function HomeCrousal2() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "35px",
        slidesToShow: 2.9,
        speed: 500
    };
    return (
        <div style={{ justifyContent: "space-around" }}>
            <Slider {...settings}>
                <div>
                    <div className="testimonial-item">
                        <div style={{ width: "350px" }} className="testi-comment border border-color">
                            <p className="testi__desc">
                                Salvia esse nihil, flexitarian Truffaut synth art party deep
                                v chillwave. Seitan High Life reprehenderit consectetur
                                cupidatat kogi.
                            </p>
                        </div>
                        <div style={{ width: "350px" }} className="testi-content">
                            <img
                                src={avatarImg}
                                className="testi__img"
                                alt="testimonial image"
                            />
                            <h4 className="tesi__title">Richard Doe</h4>
                            <span className="testi__meta">united states</span>
                        </div>
                    </div>
                </div>
                {/* <!-- end testimonial-item --> */}
                <div>
                    <div className="testimonial-item">
                        <div style={{ width: "350px" }} className="testi-comment border border-color">
                            <p className="testi__desc">
                                Salvia esse nihil, flexitarian Truffaut synth art party deep
                                v chillwave. Seitan High Life reprehenderit consectetur
                                cupidatat kogi.
                            </p>
                        </div>
                        <div style={{ width: "350px" }} className="testi-content">
                            <img
                                src={avatarImg2}
                                className="testi__img"
                                alt="testimonial image"
                            />
                            <h4 className="tesi__title">Denwen Evil</h4>
                            <span className="testi__meta">united kingdom</span>
                        </div>
                    </div>
                </div>
                {/* <!-- end testimonial-item --> */}
                <div>
                    <div className="testimonial-item">
                        <div style={{ width: "350px" }} className="testi-comment border border-color">
                            <p className="testi__desc">
                                Salvia esse nihil, flexitarian Truffaut synth art party deep
                                v chillwave. Seitan High Life reprehenderit consectetur
                                cupidatat kogi.
                            </p>
                        </div>
                        <div style={{ width: "350px" }} className="testi-content">
                            <img
                                src={avatarImg3}
                                className="testi__img"
                                alt="testimonial image"
                            />
                            <h4 className="tesi__title">Collis Pong</h4>
                            <span className="testi__meta">melbourne, australia</span>
                        </div>
                    </div>
                </div>
                {/* <!-- end testimonial-item --> */}
                <div>
                    <div className="testimonial-item">
                        <div style={{ width: "350px" }} className="testi-comment border border-color">
                            <p className="testi__desc">
                                Salvia esse nihil, flexitarian Truffaut synth art party deep
                                v chillwave. Seitan High Life reprehenderit consectetur
                                cupidatat kogi.
                            </p>
                        </div>
                        <div style={{ width: "350px" }} className="testi-content">
                            <img
                                src={avatarImg}
                                className="testi__img"
                                alt="testimonial image"
                            />
                            <h4 className="tesi__title">Richard Doe</h4>
                            <span className="testi__meta">united states</span>
                        </div>
                    </div>
                </div>
                {/* <!-- end testimonial-item --> */}
                <div>
                    <div className="testimonial-item">
                        <div style={{ width: "350px" }} className="testi-comment border border-color">
                            <p className="testi__desc">
                                Salvia esse nihil, flexitarian Truffaut synth art party deep
                                v chillwave. Seitan High Life reprehenderit consectetur
                                cupidatat kogi.
                            </p>
                        </div>
                        <div style={{ width: "350px" }} className="testi-content">
                            <img
                                src={avatarImg2}
                                className="testi__img"
                                alt="testimonial image"
                            />
                            <h4 className="tesi__title">Denwen Evil</h4>
                            <span className="testi__meta">united kingdom</span>
                        </div>
                    </div>
                </div>
                {/* <!-- end testimonial-item --> */}
                <div>
                    <div className="testimonial-item">
                        <div style={{ width: "350px" }} className="testi-comment border border-color">
                            <p className="testi__desc">
                                Salvia esse nihil, flexitarian Truffaut synth art party deep
                                v chillwave. Seitan High Life reprehenderit consectetur
                                cupidatat kogi.
                            </p>
                        </div>
                        <div style={{ width: "350px" }} className="testi-content">
                            <img
                                src={avatarImg3}
                                className="testi__img"
                                alt="testimonial image"
                            />
                            <h4 className="tesi__title">Collis Pong</h4>
                            <span className="testi__meta">melbourne, australia</span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default HomeCrousal2