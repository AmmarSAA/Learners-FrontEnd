import React from "react";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;

  return (
    <div className="single__free__course border border-dark rounded rounded-3">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100 border border-dark" />
        <button className="btn free__btn text-dark bg-warning rounded-pill border border-dark">Free</button>
      </div>

      <div className="free__course__details p-3 pt-0">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <i className="ri-user-line"></i> {students}k
          </span>

          <span className=" d-flex align-items-center gap-2">
            <i className="ri-star-fill"></i> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
