import React from "react";
import CarouselFade from "./carousel";

export const Header = (props) => {
  return (
    <div>
      <CarouselFade>
        <header id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1>
                      {props.data ? props.data.title : "Loading"}
                      <span></span>
                    </h1>
                    <p>{props.data ? props.data.paragraph : "Loading"}</p>
                    <a
                      href="#features"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      자세히 보기
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </CarouselFade>
    </div>
  );
};
