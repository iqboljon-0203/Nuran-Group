import React, { useEffect, useState } from "react";
import "./Numbers.css";
import { FormattedMessage } from "react-intl";
import FadeIn from "react-fade-in/lib/FadeIn";
import CountUp from 'react-countup';
function Numbers() {
  const [Response, setResponse] = useState([]);
  useEffect(() => {
    fetch("https://api.nipon.nippongrant.uz/api/v1/number")
      .then((response) => response.json())
      .then((json) => setResponse(json));
  }, []);
  return (
    <>
      <div className="numbers">
        <FadeIn className="container">
          <div className="title__numbers">
            <h1><FormattedMessage id="infografika"/></h1>
          </div>
          <FadeIn className="row__numbers">
            <div className="item__r__numbers">
              <h1><CountUp duration={2.75} end={Response[0]?.n1} /></h1>
              <p>{Response[0]?.name1}</p>
              
            </div>
            <div className="item__r__numbers">
              <h1><CountUp duration={2.75} end={Response[0]?.n2} /></h1>
              <p>{Response[0]?.name2}</p>
              
            </div>
            <div className="item__r__numbers">
              <h1><CountUp duration={2.75} end={Response[0]?.n3} /></h1>
              <p>{Response[0]?.name3}</p>
              
            </div>
            <div className="item__r__numbers">
              <h1><CountUp duration={2.75} end={Response[0]?.n4} /></h1>
              <p>{Response[0]?.name4}</p>
              
            </div>
          </FadeIn>

          <div className="txt__numbers">
            <span> </span>
            <p>
              <FormattedMessage id="about"/>
            </p>
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default Numbers;
