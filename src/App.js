import React, { useContext, useState } from "react";
import "./App.css";
import { Context } from "./components/Wrapper";
import { FormattedMessage } from "react-intl";
import FullpageReact from "./home/Home";
import Mobile from "./home/Mobile";
export function Lang() {
  const context = useContext(Context);
  const [Lang, setLang] = useState("uz");
  return (
    <>
      <button
        onClick={() => {
          context.selectLanguage("ru");
          setLang("ru");
        }}
        className={Lang == "ru" && "active"}
      >
        RU
      </button>
      <button
        onClick={() => {
          context.selectLanguage("uz");
          setLang("uz");
        }}
        className={Lang == "uz" && "active"}
      >
        UZ
      </button>
      <button
        value={"en"}
        onClick={() => {
          context.selectLanguage("en");
          setLang("en");
        }}
        className={Lang == "en" && "active"}
      >
        EN
      </button>
    </>
  );
}
function App() {
  const context = useContext(Context);

  return (
    <div className="App">
      <div className="body">
        {window.innerWidth > 768 ? (
          <FullpageReact
            Context={context}
            FormattedMessage={FormattedMessage}
          />
        ) : (
          <Mobile />
        )}
      </div>
    </div>
  );
}

export default App;
