import React from "react";
import "./css/navigation.css";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll logo" href="#page-top">
            <img src="img/header/logo.png" alt="" />
            컨텐츠기획자협회
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                컨텐츠기획자협회
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                프로그램
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                SPA프로젝트
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                회원사 소개
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                협회소식
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                협회활동
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
