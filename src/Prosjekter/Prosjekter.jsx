import { useState } from "react";
import "./Prosjekter.css";

export default function Prosjekter() {
  const [showSections, setShowSections] = useState(false); // State to track visibility

  const toggleSections = () => {
    setShowSections(!showSections); // Toggle show/hide
  };

  return (
    <>
      <section id="projects">
        <h2>Prosjekter jeg har jobbet med</h2>
        <div className="allSections">
          <section className="section">
            <img src="/images/restaurantmenyen.PNG" alt="bilde" />
            <div className="sectionText">
              <h2>Restaurantmenyen</h2>
              <p>Er en restaurantmeny som viser forskjellige retter.</p>
            </div>
          </section>

          <section className="section">
            <img src="/images/energydrink.PNG" alt="bilde" />
            <div className="sectionText">
              <h2>Energy Drink Test</h2>
              <p>En nettside som tester forskjellige energidrikker.</p>
            </div>
          </section>

          <section className="section">
            <img src="/images/rpgBoardgame.PNG" alt="bilde" />
            <div className="sectionText">
              <h2>RPG Boardgame</h2>
              <p>Et spill med én vei til seier.</p>
            </div>
          </section>
        </div>
        <div className="seAlleBtnPosition">
          <button className="seAlleBtn" onClick={toggleSections}>
            {showSections ? "Lukk" : "Se Alle"}
          </button>
        </div>
        <div className="allSections">
          {showSections && (
            <>
              <section className="section">
                <img src="/images/socialLinks.png" alt="bilde" />
                <div className="sectionText">
                  <h2>Social links profile</h2>
                  <p>En sosial portefølje for lenker.</p>
                </div>
              </section>

              <section className="section">
                <img src="/images/potionGame.png" alt="bilde" />
                <div className="sectionText">
                  <h2>Potion Recipe Game</h2>
                  <p>Lag riktig potion i console.</p>
                </div>
              </section>

              <section className="section">
                <img src="/images/tipsyTroll.png" alt="bilde" />
                <div className="sectionText">
                  <h2>The Tipsy Troll Tavern</h2>
                  <p>En nettside for en fiktiv pub.</p>
                </div>
              </section>
            </>
          )}
        </div>
      </section>
    </>
  );
}
