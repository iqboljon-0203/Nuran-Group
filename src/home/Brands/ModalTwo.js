import React from "react";
import magistir from "../../assets/img/magistir.svg";
import whitearrow from "../../assets/img/whitearrow.svg";
import FadeIn from "react-fade-in";
import { FormattedMessage } from "react-intl";

function ModalTwo(props) {
  const [Beginner, setBeginner] = React.useState("");
  return (
    <div className="modal">
      <div className="container">{props.nav}</div>
      <div className="row__brand dark">
        <FadeIn className="col__modal">
        <span onClick={() => props.close(false)} className={"back__modal"}>
            <img src={whitearrow} alt="" />
          </span>
          <article>
            <FormattedMessage id="gotojapan"/>
          </article>
          <ul>
            <li
              onClick={() => setBeginner("beginner")}
              className={Beginner === "beginner" && "active"}
            >
              {" "}
              <p>1</p> <span><FormattedMessage id="gotojapan1"/></span>
            </li>
            <li
              onClick={() => setBeginner("Elementry")}
              className={Beginner === "Elementry" && "active"}
            >
              {" "}
              <p>2</p> <span><FormattedMessage id="gotojapan2"/></span>
            </li>
            <li
              onClick={() => setBeginner("Intermedit")}
              className={Beginner === "Intermedit" && "active"}
            >
              {" "}
              <p>3</p> <span><FormattedMessage id="gotojapan3"/></span>
            </li>
            <li
              onClick={() => setBeginner("Pre-indermedit")}
              className={Beginner === "Pre-indermedit" && "active"}
            >
              {" "}
              <p>4</p> <span><FormattedMessage id="gotojapan4"/></span>
            </li>
            <li
              onClick={() => setBeginner("Ielts")}
              className={Beginner === "Ielts" && "active"}
            >
              {" "}
              <p>5 </p> <span><FormattedMessage id="gotojapan5"/></span>
            </li>
          </ul>
        </FadeIn>

        {Beginner === "beginner" && (
         <FadeIn>
            <div className="card__brand dark">
            <h1>
              <span><FormattedMessage id="gotojapan1"/></span>
            </h1>
            <img src={magistir} className="img" alt="" />
            <p className="custom__p">
              <FormattedMessage id="modal1"/>
            </p>
          </div>
         </FadeIn>
        )}
        {Beginner === "" && (
         <FadeIn>
            <div className="card__brand dark">
            <h1>
              <span><FormattedMessage id="gotojapan1"/></span>
            </h1>
            <img src={magistir} className="img" alt="" />
            <p className="custom__p">
              <FormattedMessage id="modal1"/>
            </p>
          </div>
         </FadeIn>
        )}
        {Beginner === "Elementry" && (
         <FadeIn>
            <div className="card__brand dark">
            <h1>
              <span><FormattedMessage id="gotojapan2"/></span>
            </h1>
            <img src={magistir} className="img" alt="" />
            <p className="custom__p">
              <FormattedMessage id="modal2"/>
            </p>
          </div>
          </FadeIn>
        )}
        {Beginner === "Intermedit" && (
          <FadeIn>
            <div className="card__brand dark">
            <h1>
              <span><FormattedMessage id="gotojapan3"/></span>
            </h1>
            <img src={magistir} className="img" alt="" />
            <p className="custom__p">
              <FormattedMessage id="modal3"/>
            </p>
          </div>
          </FadeIn>
        )}
        {Beginner === "Pre-indermedit" && (
          <FadeIn>
          <div className="card__brand dark">
            <h1>
              <span><FormattedMessage id="gotojapan4"/></span>
            </h1>
            <img src={magistir} className="img" alt="" />
            <p className="custom__p">
              <FormattedMessage id="modal4"/>
            </p>
          </div>
         </FadeIn>
        )}
        {Beginner === "Ielts" && (
         <FadeIn>
            <div className="card__brand dark">
            <h1>
              <span><FormattedMessage id="gotojapan5"/></span>
            </h1>
            <img src={magistir} className="img" alt="" />
            <p className="custom__p">
              <FormattedMessage id="modal5"/>
            </p>
          </div>
         </FadeIn>
        )}
      </div>
    </div>
  );
}

export default ModalTwo;
