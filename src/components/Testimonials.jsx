import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import thirdslide from "../../public/images/ntitled.png";

function CrouselItem() {
  return (
    <Carousel interval={3000} fade={true}>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img border border-dark rounded"
          src="./images/crow.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Sale Upto 70% Off</h3>
          <p style={{fontWeight: '500'}}>
            Get Discount On All Items Of High Quality
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src={thirdslide}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Sale Upto 70% Off</h3>
          <p style={{fontWeight: '500'}}>
            Get Discount On All Items Of High Quality
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img border border-dark rounded"
          src={thirdslide}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src={thirdslide}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img border border-dark rounded"
          src={thirdslide}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Sale Upto 70% Off</h3>
          <p style={{fontWeight: '500'}}>
            Get Discount On All Items Of High Quality
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src={thirdslide}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Sale Upto 70% Off</h3>
          <p style={{fontWeight: '500'}}>
            Get Discount On All Items Of High Quality
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CrouselItem;

// import React from "react";
// import "./testimonial.css";
// import Slider from "react-slick";

// import img from "../../public/images/testimonial01.png";

// const Testimonials = () => {
//   const settings = {
//     infinite: true,
//     dots: true,
//     speed: 500,
//     slidesToShow: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToScroll: 1,
//   };
//   return (
//     <section>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-10 col-md-12 m-auto">
//             <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
//               <div className="testimonial__img w-50">
//                 <img src={img} alt="" className="w-100" />
//               </div>

//               <div className="testimonial__content w-50">
//                 <h2 className="mb-4">Our Students Voice</h2>

//                 <Slider {...settings}>
//                   <div>
//                     <div className="single__testimonial">
//                       <h6 className="mb-3 fw-bold">
//                         Excellent course of materials
//                       </h6>
//                       <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Facilis saepe id voluptas molestiae. Aperiam corrupti
//                         voluptas earum at molestiae neque!
//                       </p>

//                       <div className="student__info mt-4">
//                         <h6 className="fw-bold">Jhon Doe</h6>
//                         <p>California, United State</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <div className="single__testimonial">
//                       <h6 className="mb-3 fw-bold">
//                         Excellent course of materials
//                       </h6>
//                       <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Facilis saepe id voluptas molestiae. Aperiam corrupti
//                         voluptas earum at molestiae neque!
//                       </p>

//                       <div className="student__info mt-4">
//                         <h6 className="fw-bold">Jhon Doe</h6>
//                         <p>California, United State</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <div className="single__testimonial">
//                       <h6 className="mb-3 fw-bold">
//                         Excellent course of materials
//                       </h6>
//                       <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Facilis saepe id voluptas molestiae. Aperiam corrupti
//                         voluptas earum at molestiae neque!
//                       </p>

//                       <div className="student__info mt-4">
//                         <h6 className="fw-bold">Jhon Doe</h6>
//                         <p>California, United State</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Slider>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
