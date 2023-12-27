import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import Slide from "../../public/images/Untitled.png";
import ProjectManagerSlide from "../../public/images/project-manager.png"

function CrouselItem() {
  return (
    <Carousel interval={5000} fade={true}>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src={ProjectManagerSlide}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Sale Upto 70% Off</h3>
          <p style={{fontWeight: '500'}}>
            Get Discount On All Items Of High Quality
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src="../images/cro-new2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Sale Upto 70% Off</h3>
          <p style={{fontWeight: '500'}}>
            Get Discount On All Items Of High Quality
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src={Slide}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src="../images/web-development.png"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CrouselItem;