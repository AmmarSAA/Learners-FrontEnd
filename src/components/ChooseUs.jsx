import React, { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import chooseImg from "../../public/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="choose__content">
                            <h2>Why Choose Us</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolores cupiditate facilis provident quidem accusamus impedit
                                tenetur laboriosam debitis nisi eius!
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="choose__img">
                            {showVideo ? (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                                    controls
                                    width="100%"
                                    height="350px"
                                />
                            ) : (
                                <img src={chooseImg} alt="" className="w-100 border border-1 border-dark" />
                            )}

                            {!showVideo && (
                                <span className="play__icon">
                                    <FaRegPlayCircle size="03em" color="white" />
                                    <i
                                        className="ri-play-circle-line"
                                        onClick={() => setShowVideo(!showVideo)}
                                    ></i>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
