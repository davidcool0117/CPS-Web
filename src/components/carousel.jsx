import { Carousel } from "antd";
import "./css/carousel.css";

const backgroundImage = () => (
  <Carousel autoplay muted effect="fade">
    <div>
      <img src="img/carousel/bg1.jpg" alt="" />
    </div>
    <div>
      <img src="img/carousel/bg2.jpg" alt="" />
    </div>
    <div>
      <img src="img/carousel/bg3.jpg" alt="" />
    </div>
  </Carousel>
);
export default backgroundImage;
