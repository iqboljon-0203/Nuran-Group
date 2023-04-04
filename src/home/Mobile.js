import React from "react";
import About from "./About/About";
import Brand from "./Brands/Brand";
import Client from "./Clients/Client";
import Gallery from "./Gallery/Gallery";
import Map from "./Map/Map";
import Numbers from "./Numbers/Numbers";
import Sliders from "./Slider/Sliders";
import Team from "./Team/Team";

function Mobile() {
  const [menu, setmenu] = React.useState(false);
  return (
    <div className="mobile">
      <nav>
        <img src={"/img/logo.svg"} alt="img" />
        <button onClick={() => setmenu(!menu)}>☰</button>
        <div onClick={() => setmenu(false)} className={`menu__nav ${menu && "active"}`}>
        <span>&times;</span>
          <a href="/">Yaponiyaga ketish</a>
          <a href="/">Kurs haqida</a>
          <a href="/">Natijalar</a>
          <a href="/">Hamkorlar</a>
          <a href="/">Kontakt</a>
          <a href="+998 93 349 27 77">93 349 27 77</a>
        </div>
      </nav>
      <Sliders />
      <Brand />
      <About />
      <Numbers />
      <Team />
      <Client />
      <Gallery />
      <Map />
    </div>
  );
}

export default Mobile;
