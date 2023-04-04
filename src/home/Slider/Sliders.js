import React, { useContext } from "react";
import "./Sliders.css";
import Slider from "react-slick";

import FadeIn from "react-fade-in";
import { Lang } from "../../App";
import SliderItem from "./SliderItem";
import { FormattedMessage } from "react-intl";
function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="bg__japan">
      <div className="Lang">
      {Lang()}
      </div>
      <FadeIn>
        <Slider {...settings} className="custom__arrow">
         <SliderItem url={"https://www.youtube.com/embed/yusIUGhk7A8"} img={'/img/1.png'} tex={<FormattedMessage id="car.1"/>}/>
         <SliderItem url={"https://www.youtube.com/embed/yusIUGhk7A8"} img={'/img/2.png'} tex={<FormattedMessage id="car.2"/>}/>
         <SliderItem url={"https://www.youtube.com/embed/yusIUGhk7A8"} img={'/img/3.png'} tex={<FormattedMessage id="car.3"/>}/>
         <SliderItem url={"https://www.youtube.com/embed/yusIUGhk7A8"} img={'/img/4.png'} tex={<FormattedMessage id="car.4"/>}/>
         <SliderItem url={"https://www.youtube.com/embed/yusIUGhk7A8"} img={'/img/5.png'} tex={<FormattedMessage id="car.5"/>}/>
        </Slider>
      </FadeIn>
    </div>
  );
}

export default Sliders;
