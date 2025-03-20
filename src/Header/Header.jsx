import { useState } from "react";
import "./Header.css"

export default function Header () {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  };





    return (
        <>
        <header>
          <div className="logoTheme">
            <button className="logoBtn" onClick={scrollToTop}>portefolie</button>
          </div>
          <div className="headerButtons">
            <button className="headerBtn">Om meg</button>
            <button className="headerBtn">Prosjekter</button>
            <button className="headerBtn">Kontakt</button>
          </div>
        </header>
        </>
    )
}