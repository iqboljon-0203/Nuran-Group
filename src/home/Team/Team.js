import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "./Team.css";
import imgcard from "../../assets/img/kal.png";
import FadeIn from "react-fade-in/lib/FadeIn";

function Team() {
  const [Response, setResponse] = useState([]);
  useEffect(() => {
    fetch("https://api.nipon.nippongrant.uz/api/v1/student")
      .then((response) => response.json())
      .then((json) => setResponse(json));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="team">
      <FadeIn className=" container">
        <div className="title__numbers childrens">
          <h1><FormattedMessage id="students"/></h1>
        </div>
        <Slider {...settings}>
          {Response.map((item) => (
            <div>
              <div className="child__card">
                <img
                  src={"https://api.nipon.nippongrant.uz" + item.img}
                  alt=""
                />
                <h2>{item.name}</h2>
                <p>{item.edu}</p>
              </div>
            </div>
          ))}
        </Slider>
      </FadeIn>
    </div>
  );
}

export default Team;
