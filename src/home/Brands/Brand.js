import React, { useContext } from "react";
import "./Brand.css";
import FadeIn from "react-fade-in";
import { FormattedMessage } from "react-intl";
import techlogo from "../../assets/img/tech.svg";
import techlogo2 from "../../assets/img/tech2.svg";
import toleftlogo from "../../assets/img/toleft.svg";

import ModalOne from "./ModalOne";
import ModalTwo from "./ModalTwo";
function Brand({ setdarkbar, nav }) {
  const [learning, setLearning] = React.useState(false);
  const [etap, setEtap] = React.useState(false);
  return (
    <div className="double__section">
      <div>
        <FadeIn className="row__brand">
          <div className="card__brand" onClick={() => setLearning(!learning)}>
            <img src={techlogo} alt="." />
            <p><FormattedMessage id="edu"/></p>
            <img src={toleftlogo} alt="." />
          </div>
          <div className="card__brand" onClick={() => setEtap(!etap)}>
            <img src={techlogo2} alt="." />
            <p><FormattedMessage id="app.header1"/></p>
            <img src={toleftlogo} alt="." />
          </div>
        </FadeIn>
      </div>
      {learning && (
        <ModalOne nav={nav} close={setLearning}/>
      )}
      {etap && (
        <ModalTwo nav={nav} close={setEtap}/>
      )}
    </div>
  );
}

export default Brand;
