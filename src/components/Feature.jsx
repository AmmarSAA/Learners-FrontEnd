import React from "react";
import "./features.css";
import { RiDraftLine, RiDiscussLine, RiContactsBookLine } from "react-icons/ri";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: <RiDraftLine color="orange" size={"08rem"}/>,
  },
  {
    title: "All Time Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: <RiDiscussLine color="orange" size={"08rem"}/>,
  },
  {
    title: "Certification",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: <RiContactsBookLine color="orange" size={"08rem"}/>,
  },
];

const Features = () => {
  return (
    <section>
      <div className="container my-2 mt-4">
        <div className="row">
          {FeatureData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">{item.icon}</h2> {/* Render icon directly */}
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
