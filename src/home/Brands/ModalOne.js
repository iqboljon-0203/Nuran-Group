import React from "react";
import brain from "../../assets/img/brain.svg";
import whitearrow from "../../assets/img/whitearrow.svg";
import time from "../../assets/img/time.svg";
import task from "../../assets/img/task.svg";
import FadeIn from "react-fade-in";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { FormattedMessage } from "react-intl";
function ModalOne(props) {
  const [Beginner, setBeginner] = React.useState("");
  const [modal, setmodal] = React.useState(false);
  const [value, setValue] = React.useState();
  window.onclick = function (e) {
    console.log(e.target.className);
    if (e.target.className === "requesting") {
      setmodal(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let dat = `
    Phone: ${e.target[1].value}%0A Name: ${e.target[2].value}%0A
  `;
    fetch(
      `https://api.telegram.org/bot5179242004:AAFfpQeQ22gl8ejwezRolJwaEzRR3HpaBzs/sendMessage?chat_id=-1001519224663&text=${dat}`
    );
    e.target[0].value = "";
    setValue("+998");
    setmodal(false);
    toast.success("Successfully");
  };
  return (
    <div className="modal">
      <Toaster />
      {modal && (
        <div className="requesting">
          <FadeIn>
            <form onSubmit={handleSubmit} className="requesting__body">
              <div className="item__requesting">
                <p>номер телефона</p>
                <PhoneInput
                  international
                  initialValueFormat="national"
                  value={value}
                  defaultCountry="UZ"
                  onChange={setValue}
                />
              </div>
              <div className="item__requesting">
                <p>ваша имя</p>
                <input type="text" name="" id="" required />
              </div>
              <button className="btn">отправить</button>
            </form>
          </FadeIn>
        </div>
      )}
      <div className="container">{props.nav}</div>
      <div className="row__brand dark">
        <FadeIn className="col__modal">
          <span onClick={() => props.close(false)} className={"back__modal"}>
            <img src={whitearrow} alt="" />
          </span>
          <article>
            <FormattedMessage id="lern" />
          </article>
          <ul>
            <li
              onClick={() => setBeginner("beginner")}
              className={Beginner === "beginner" && "active"}
            >
              {" "}
              <p>1</p> <span>N1 <FormattedMessage id="modal"/></span>
            </li>
            <li
              onClick={() => setBeginner("Elementry")}
              className={Beginner === "Elementry" && "active"}
            >
              {" "}
              <p>2</p> <span>N2  <FormattedMessage id="modal"/></span>
            </li>
            <li
              onClick={() => setBeginner("Intermedit")}
              className={Beginner === "Intermedit" && "active"}
            >
              {" "}
              <p>3</p> <span>N3  <FormattedMessage id="modal"/></span>
            </li>
            <li
              onClick={() => setBeginner("Pre-indermedit")}
              className={Beginner === "Pre-indermedit" && "active"}
            >
              {" "}
              <p>4</p> <span>N3  <FormattedMessage id="modal"/></span>
            </li>
            <li
              onClick={() => setBeginner("Ielts")}
              className={Beginner === "Ielts" && "active"}
            >
              {" "}
              <p>5 </p> <span>N5  <FormattedMessage id="modal"/></span>
            </li>
          </ul>
        </FadeIn>

        <FadeIn>
          {Beginner === "beginner" && (
            <FadeIn>
              <div className="card__brand dark">
                <h1>
                  <span>N1 <FormattedMessage id="modal"/></span>
                </h1>
                <div className="row_grid">
                  <img src={brain} alt="" />
                  <p>
                    {" "}
                    <FormattedMessage id="daraja1" />
                  </p>
                </div>
                <div className="row_grid">
                  <img src={time} alt="" />
                  <p><FormattedMessage id="daraja2" /></p>
                </div>
                <div className="row_grid">
                  <img src={task} alt="" />
                  <p><FormattedMessage id="daraja3" /></p>
                </div>

                <button onClick={() => setmodal(true)} className="btn">
                  <FormattedMessage id="lern4" />
                  <img src={whitearrow} alt="." />
                </button>
              </div>
            </FadeIn>
          )}
          {Beginner === "" && (
            <FadeIn>
              <div className="card__brand dark">
                <h1>
                  <span>N1 <FormattedMessage id="modal"/></span>
                </h1>
                <div className="row_grid">
                  <img src={brain} alt="" />
                  <p>
                    {" "}
                    <FormattedMessage id="daraja1" />
                  </p>
                </div>
                <div className="row_grid">
                  <img src={time} alt="" />
                  <p><FormattedMessage id="daraja2" /></p>
                </div>
                <div className="row_grid">
                  <img src={task} alt="" />
                  <p><FormattedMessage id="daraja3" /></p>
                </div>

                <button onClick={() => setmodal(true)} className="btn">
                  <FormattedMessage id="lern4" />
                  <img src={whitearrow} alt="." />
                </button>
              </div>
            </FadeIn>
          )}
          {Beginner === "Elementry" && (
            <FadeIn>
              <div className="card__brand dark">
                <h1>
                  <span>N2 <FormattedMessage id="modal"/></span>
                </h1>
                <div className="row_grid">
                  <img src={brain} alt="" />
                  <p>
                    {" "}
                    <FormattedMessage id="daraja4" />
                  </p>
                </div>
                <div className="row_grid">
                  <img src={time} alt="" />
                  <p><FormattedMessage id="daraja5" /></p>
                </div>
                <div className="row_grid">
                  <img src={task} alt="" />
                  <p><FormattedMessage id="daraja6" /></p>
                </div>

                <button onClick={() => setmodal(true)} className="btn">
                  <FormattedMessage id="lern4" />
                  <img src={whitearrow} alt="." />
                </button>
              </div>
            </FadeIn>
          )}
          {Beginner === "Intermedit" && (
            <FadeIn>
              <div className="card__brand dark">
                <h1>
                  <span>N3 <FormattedMessage id="modal"/></span>
                </h1>
                <div className="row_grid">
                  <img src={brain} alt="" />
                  <p>
                    {" "}
                    <FormattedMessage id="daraja7" />
                  </p>
                </div>
                <div className="row_grid">
                  <img src={time} alt="" />
                  <p><FormattedMessage id="daraja8" /></p>
                </div>
                <div className="row_grid">
                  <img src={task} alt="" />
                  <p><FormattedMessage id="daraja9" /></p>
                </div>

                <button onClick={() => setmodal(true)} className="btn">
                  <FormattedMessage id="lern4" />
                  <img src={whitearrow} alt="." />
                </button>
              </div>
            </FadeIn>
          )}
          {Beginner === "Pre-indermedit" && (
            <FadeIn>
              <div className="card__brand dark">
                <h1>
                  <span>N4 <FormattedMessage id="modal"/></span>
                </h1>
                <div className="row_grid">
                  <img src={brain} alt="" />
                  <p>
                    {" "}
                    <FormattedMessage id="daraja10" />
                  </p>
                </div>
                <div className="row_grid">
                  <img src={time} alt="" />
                  <p><FormattedMessage id="daraja11" /></p>
                </div>
                <div className="row_grid">
                  <img src={task} alt="" />
                  <p><FormattedMessage id="daraja12" /></p>
                </div>

                <button onClick={() => setmodal(true)} className="btn">
                  <FormattedMessage id="lern4" />
                  <img src={whitearrow} alt="." />
                </button>
              </div>
            </FadeIn>
          )}
          {Beginner === "Ielts" && (
            <FadeIn>
              <div className="card__brand dark">
                <h1>
                  <span>N5 <FormattedMessage id="modal"/></span>
                </h1>
                <div className="row_grid">
                  <img src={brain} alt="" />
                  <p>
                    {" "}
                    <FormattedMessage id="daraja13" />
                  </p>
                </div>
                <div className="row_grid">
                  <img src={time} alt="" />
                  <p><FormattedMessage id="daraja14" /></p>
                </div>
                <div className="row_grid">
                  <img src={task} alt="" />
                  <p><FormattedMessage id="daraja15" /></p>
                </div>

                <button onClick={() => setmodal(true)} className="btn">
                  <FormattedMessage id="lern4" />
                  <img src={whitearrow} alt="." />
                </button>
              </div>
            </FadeIn>
          )}
        </FadeIn>
      </div>
    </div>
  );
}

export default ModalOne;
