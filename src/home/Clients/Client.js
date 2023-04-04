import React from "react";
import "react-tabs/style/react-tabs.css";
import "./Client.css";
import { FormattedMessage } from "react-intl";
import FadeIn from "react-fade-in/lib/FadeIn";
import license from "../../assets/img/license.png";
function Client({ next }) {
  return (
    <>
      <div className="license">
        <FadeIn className="container">
          <div className="title__numbers">
            <h1><FormattedMessage id="licensetitle"/></h1>
          </div>
          <FadeIn className="row__lic">
            <div className="txt__lic">
              <h1>
                <FormattedMessage id="licenseh1"/>
              </h1>
              <p>
              <FormattedMessage id="license"/>
              </p>
            </div>
            <img src={license} alt="" />
          </FadeIn>
        </FadeIn>
      </div>
    </>
  );
}

export default Client;
