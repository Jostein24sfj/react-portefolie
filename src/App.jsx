import "./App.css";
import AboutMe from "./AboutMe/AboutMe";
import Prosjekter from "./Prosjekter/Prosjekter";
import Contact from "./Contact/Contact";
import DarkMode from "./DarkMode/DarkMode";

export default function App() {
  return (
    <>
    <div>
      <header>
        <div className="logoTheme">
        <button className="logoBtn">portofolie</button>
        <DarkMode/>
        </div>
        <div className="headerButtons">
          <button className="headerBtn">Om meg</button>
          <button className="headerBtn">Prosjekter</button>
          <button className="headerBtn">Kontakt</button>
        </div>
      </header>
      <AboutMe />
      <Prosjekter />
      <Contact />
      
      <div>
      <footer>
        <p>footer</p>
      </footer>
      </div>
    </div>
    </>
  );
}



