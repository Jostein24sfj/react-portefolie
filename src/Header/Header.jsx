import { useState } from "react";
import "./Header.css"

export default function Header () {
    return (
        <>
        <header>
          <div className="logoTheme">
            <button className="logoBtn">portofolie</button>
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