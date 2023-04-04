import React, { useContext } from "react";
import "./Map.css";
import qol from "../../assets/img/qol.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Context } from "../../components/Wrapper";
import { FormattedMessage } from "react-intl";

function Map() {
  const context = useContext(Context);
  const conLog = context.locale;
  const [value, setValue] = React.useState();

  const [success, setsuccess] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    let dat = `
    Name: ${e.target[0].value}%0A Phone: ${e.target[2].value}%0A
  `;
    fetch(
      `https://api.telegram.org/bot5179242004:AAFfpQeQ22gl8ejwezRolJwaEzRR3HpaBzs/sendMessage?chat_id=-1001519224663&text=${dat}`
    );
    setsuccess(true);
    e.target[0].value = "";
    setValue("+998");
  };
  console.log(<FormattedMessage id="name" />);
  return (
    <FadeIn>
      <div className="partner">
        <div className="container">
          {success && (
            <div className="scc__modal" onClick={() => setsuccess(false)}>
              <img
                src="https://www.svgrepo.com/show/13650/success.svg"
                alt=""
              />
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <h1>
              <FormattedMessage id="partner" />,
            </h1>
            <p>
              <FormattedMessage id="partner1" />{" "}
            </p>
            {conLog === "en" ? (
              <input type="text" placeholder={"Name"} required />
            ) : conLog === "ru" ? (
              <input type="text" placeholder={"Имя"} required />
            ) : (
              <input type="text" placeholder={"Ismingizni kiriting"} required />
            )}

            <PhoneInput
              placeholder="Telefon raqamingiz"
              international
              initialValueFormat="national"
              value={value}
              defaultCountry="UZ"
              onChange={setValue}
            />
            <button>
              <FormattedMessage id="partBtn" />
            </button>
          </form>
          <img src={qol} alt="" />
        </div>
      </div>
    </FadeIn>
  );
}

export default Map;
