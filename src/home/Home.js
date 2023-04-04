import React, { useContext } from "react";
import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";
import "./main.css";
import Sliders from "./Slider/Sliders";
import Map from "./Map/Map";
import About from "./About/About";
import Numbers from "./Numbers/Numbers";
import Client from "./Clients/Client";
import Contact from "./Contact/Contact";
import Brand from "./Brands/Brand";
import { Context } from "../components/Wrapper";
import { FormattedMessage } from "react-intl";
import Team from "./Team/Team";
import Gallery from "./Gallery/Gallery";

const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;
const fullPageOptions = {
  scrollSensitivity: 2,
  touchSensitivity: 2,
  scrollSpeed: 200,
  resetSlides: true,
  hideScrollBars: true,
  // enableArrowKeys: true,
  activeSlide: 0,
};
const topNavStyle = {
  textAlign: "center",
  position: "fixed",
  width: "100%",
  cursor: "pointer",
  top: "0px",
  height: "10vh",
};

const horizontalNavStyle = {
  position: "absolute",
  width: "100%",
  top: "50%",
  zIndex: 10,
};

const horizontalSliderProps = {
  name: "horizontalSlider1",
  infinite: true,
};

class FullpageReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
        horizontalSlider1: 0,
      },
      FormattedMessage,
      Context,
      darkbar: false,
    };
    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
  }

  onSlideChangeStart(name, props, state, newState) {
    if (!this.horizontalNav) {
      this.horizontalNav = document.getElementById("horizontal-nav");
    }

    if (name === "horizontalSlider1") {
      scrollNavStart(this.horizontalNav);
    }
  }

  onSlideChangeEnd(name, props, state, newState) {
    if (name === "horizontalSlider1") {
      scrollNavEnd(this.horizontalNav);
    }

    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide,
    };

    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
  }
  componentDidMount() {}

  render() {
    const { active } = this.state;
    const { FormattedMessage } = this.state;
    const Context = this.context;
    const currentActive = active.Fullpage;
    const goToTop = changeFullpageSlide.bind(null, 0);
    const netx = changeFullpageSlide.bind(null, currentActive + 1);
    const gotoBrend = changeFullpageSlide.bind(null, 1);
    const gotoAbout = changeFullpageSlide.bind(null, 2);
    const gotoNumber = changeFullpageSlide.bind(null, 4);
    const gotoNews = changeFullpageSlide.bind(null, 6);
    const gotoTeam = changeFullpageSlide.bind(null, 7);
    const gotoContact = changeFullpageSlide.bind(null, 8);
    const gotoQamrov = changeFullpageSlide.bind(null, 7);
    const gotoClients = changeFullpageSlide.bind(null, 5);

    const horizontalSliderName = horizontalSliderProps.name;
    const horizontalActive = this.state.active[horizontalSliderName];

    const prevHorizontalSlide = changeHorizontalSlide.bind(
      null,
      horizontalSliderName,
      horizontalActive - 1
    );
    const nextHorizontalSlide = changeHorizontalSlide.bind(
      null,
      horizontalSliderName,
      horizontalActive + 1
    );
    const setdarkbar = () => this.setState({ darkbar: true });
    const settodarkbar = () => this.setState({ darkbar: false });
    const topNav = (
      <div
        style={topNavStyle}
        className="navbar"
        id={
          currentActive === 3 || currentActive === 6 || this.state.darkbar
            ? "dark__bar"
            : ""
        }
      >
        <span
          onClick={() => {
            goToTop();
            settodarkbar();
          }}
        >
          <button>
            <img
              src={
                currentActive === 3 || currentActive === 6 || this.state.darkbar
                  ? "/img/logolight.svg"
                  : "/img/logo.svg"
              }
              alt="img"
            />
            <img src={"/img/logolight.svg"} className="logo" alt="img" />
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              goToTop();
              settodarkbar();
            }}
          >
            <FormattedMessage id="app.header1" />
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              gotoBrend();
              settodarkbar();
            }}
          >
            <FormattedMessage id="app.header2" />
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              gotoAbout();
              settodarkbar();
            }}
          >
            <FormattedMessage id="app.header3" />{" "}
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              gotoNumber();
              settodarkbar();
            }}
          >
            <FormattedMessage id="app.header4" />
          </button>
        </span>
          {/* <button onClick={netx}>
            next
          </button> */}
        <span>
          <button
            onClick={() => {
              gotoTeam();
              settodarkbar();
            }}
          >
            {" "}
            <FormattedMessage id="app.header5" />
          </button>
        </span>
        <span>
          <a href="tel: +998954767676">
            {" "}
            <button id="call">
              {" "}
              <img
                src={
                  currentActive === 3 ||
                  currentActive === 6 ||
                  this.state.darkbar
                    ? "/img/calllight.svg"
                    : "/img/call.svg"
                }
                alt="img"
              />{" "}
              <img src={"/img/calllight.svg"} className="logo" alt="img" />
              93 349 27 77
            </button>
          </a>
        </span>
      </div>
    );

    const horizontalNav = (
      <div id="horizontal-nav" style={horizontalNavStyle}>
        <span onClick={prevHorizontalSlide}>
          <button>PREV</button>
        </span>
        <span
          style={{ position: "absolute", right: "0px" }}
          onClick={nextHorizontalSlide}
        >
          <button>Next</button>
        </span>
      </div>
    );

    const horizontalSlides = [
      <Slide style={{ backgroundColor: "transparent" }}>
        <p>Horizontal 1</p>
      </Slide>,
      <Slide style={{ backgroundColor: "transparent" }}>
        <p>Horizontal 2</p>
      </Slide>,
    ];
    horizontalSliderProps.slides = horizontalSlides;

    const horizontalSlider = (
      <HorizontalSlider id="horizontal-slider-1" {...horizontalSliderProps}>
        {horizontalNav}
      </HorizontalSlider>
    );

    const verticalSlides = [
      <Slide>
        <Sliders />
      </Slide>,
      <Slide style={{ backgroundColor: "#fff" }}>
        {currentActive === 1 ? (
          <Brand setdarkbar={setdarkbar} nav={topNav} />
        ) : (
          ""
        )}
      </Slide>,
      <Slide style={{ backgroundColor: "#fff" }}>
        {currentActive === 2 ? <About /> : ""}
      </Slide>,
      <Slide style={{ backgroundColor: "#fff" }}>
        {currentActive === 3 ? <Numbers /> : ""}
      </Slide>,
      <Slide style={{ backgroundColor: "#fff" }}>
        {currentActive === 4 ? <Team /> : ""}
      </Slide>,
      <Slide style={{ backgroundColor: "#fff" }}>
        {currentActive === 5 ? <Client /> : ""}
      </Slide>,
      <Slide style={{ backgroundColor: "#fff" }}>
        {currentActive === 6 ? <Gallery /> : ""}
      </Slide>,
      <Slide style={{ backgroundColor: "#fff" }}>
        {currentActive === 7 ? <Map /> : ""}
      </Slide>,
    ];
    fullPageOptions.slides = verticalSlides;

    return (
      <div className="root">
        <Fullpage
          onSlideChangeStart={this.onSlideChangeStart}
          onSlideChangeEnd={this.onSlideChangeEnd}
          {...fullPageOptions}
          style={{ width: "10vw" }}
        >
          {topNav}
        </Fullpage>
      </div>
    );
  }
}

function scrollNavStart(nav) {
  // make the nav fixed when we start scrolling horizontally
  nav.style.position = "fixed";
}

function scrollNavEnd(nav) {
  // make the nav absolute when scroll finishes
  nav.style.position = "absolute";
}

export default FullpageReact;
