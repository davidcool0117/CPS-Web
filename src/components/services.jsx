import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>콘텐츠기획사의 역할</h2>
          <p>
            컨텐츠 기획에 있어서 고객의 비즈니스 목표를 고려하며, 세심한 조사와
            분석을 통해 최적의 전략을 제공합니다. 궁극적인 목표는 고객의 성공을
            돕는 탁월한 컨텐츠를 제작하는 것입니다.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
