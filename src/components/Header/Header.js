import React from "react";
import TrollFace from "../../images/TrollFace.png";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src={TrollFace} alt="TrollFace" className="header--image" />
      <h1 className="header--title">Meme Generator</h1>
    </header>
  );
};
