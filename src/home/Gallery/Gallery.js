import React from "react";
import "./Gallery.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import soroq from "../../assets/img/soroq.png";
import FadeIn from "react-fade-in/lib/FadeIn";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { FormattedMessage } from "react-intl";
function Gallery() {
  const [Response, setResponse] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.nipon.nippongrant.uz/api/v1/info")
      .then((response) => response.json())
      .then((json) => setResponse(json));
  }, []);
  return (
    <div className="faq">
      <div className="container">
        <FadeIn className="title__numbers">
          <h1><FormattedMessage id="faq"/></h1>
          <div className="row__faq">
            <Accordion allowZeroExpanded={true}>
              {Response.map((item) => (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {item.question}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                  {item.answer}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>

            <img className="ques" src={soroq} alt="" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Gallery;
