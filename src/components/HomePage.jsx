import React from "react";
import courseImg1 from "../../public/images/web-design.png";
import courseImg2 from "../../public/images/graphics-design.png";
import courseImg3 from "../../public/images/ui-ux.png";
import "./courses.css";
import CourseCardHomePage from "./CourseCardHomePage";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoLearn, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const HomePage = () => {
  return (
    <section>
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col col-lg-12 mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn btn-outline-dark">See All</button>
              </div>
            </div>
          </div>
          {coursesData.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-6">
              <CourseCardHomePage key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
