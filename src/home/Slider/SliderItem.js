import React from "react";
import Boy from "../../assets/img/boy.png";
import videoImg from "../../assets/img/video.svg";
import { FormattedMessage } from "react-intl";
function SliderItem(props) {
  const [modal, setmodal] = React.useState(false);
  return (
    <div>
      <div className="top__slider">
        {modal && (
          <div className="modal__slider">
            <span onClick={() => setmodal(!modal)}>&times;</span>
            <iframe
              width="853"
              height="480"
              src={props.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )}
        <div>
          {/* <p>
            <FormattedMessage
              id="slide"
              values={{ fileName: "src/App.js", code: (word) => <br /> }}
            />
          </p> */}
          <h1>
            {
              props.tex
            }
          </h1>

          <button onClick={() => setmodal(!modal)}>
            <img src={videoImg} alt="" />
            <FormattedMessage
              id="watch.vid"
              values={{ fileName: "src/App.js", code: (word) => <br /> }}
            />
          </button>
        </div>
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}

export default SliderItem;
