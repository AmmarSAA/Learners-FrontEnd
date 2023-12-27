import React from "react";

import courseImg01 from "../../public/images/web-development.png";
import courseImg02 from "../../public/images/kids-learning.png";
import courseImg03 from "../../public/images/seo.png";
import courseImg04 from "../../public/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
    {
        id: "01",
        title: "Basic Web Development Course",
        imgUrl: courseImg01,
        students: 5.3,
        rating: 1.7,
    },
    {
        id: "02",
        title: "Coding for Junior Basic Course",
        imgUrl: courseImg02,
        students: 5.3,
        rating: 1.7,
    },

    {
        id: "03",
        title: "Search Engine Optimization - Basic",
        imgUrl: courseImg03,
        students: 5.3,
        rating: 1.7,
    },

    {
        id: "04",
        title: "Basic UI/UX Design - Figma",
        imgUrl: courseImg04,
        students: 5.3,
        rating: 1.7,
    },
];

const FreeCourse = () => {
    return (
        <section>
            <div className="container my-2 mt-3">
                <div className="row">
                    <div className="col col-lg-12 text-center mb-5">
                        <h2 className="fw-bold">Our Free Courses</h2>
                    </div>

                    {freeCourseData.map((item) => (
                        <div className="col col-lg-3 col-md-4 mb-4" key={item.id}>
                            <FreeCourseCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FreeCourse;
