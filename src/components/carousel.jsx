import { Carousel } from "antd";
import "./css/carousel.css";

const backgroundImage = () => (
  <Carousel muted autoplay loop effect="fade">
    <div>
      <p className="slogan1">
        <img src="img/header/logo.png" alt="" />“
        <span>
          콘텐츠기획자협회 <br />
          Contents Planner Society
        </span>
        ”
      </p>
      <img className="bg" src="img/carousel/bg1.jpg" alt="" />
    </div>
    <div>
      <p className="slogan2">
        <img src="img/header/logo.png" alt="" />“
        <span>
          콘텐츠기획자협회 <br />
          Contents Planner Society
        </span>
        ”
      </p>
      <img className="bg" src="img/carousel/bg2.jpg" alt="" />
    </div>
    <div>
      <p className="slogan3">
        <img src="img/header/logo.png" alt="" />“
        <span>
          콘텐츠기획자협회 <br />
          Contents Planner Society
        </span>
        ”
      </p>
      <img className="bg" src="img/carousel/bg3.png" alt="" />
    </div>
  </Carousel>
);
export default backgroundImage;
