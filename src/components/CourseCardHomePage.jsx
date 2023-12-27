import React from "react";

const CourseCard = (props) => {
  const { id, imgUrl, title, lesson, students, rating } = props.item;

  return (
    <div className="single__course__item border border-dark rounded-1 bg-warning">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100 border border-dark rounded-1" />
      </div>

      <div className="course__details  border border-dark rounded-1 bg-light">
        <h6 className="course__title mb-4 p-2">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center px-1 pe-2">
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center px-1 pe-2">
          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1 btn btn-outline-dark">
            <a href={`/course/${id}`}> Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
