import "./App.css";
import AboutMe from "./AboutMe/AboutMe";
import Prosjekter from "./Prosjekter/Prosjekter";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <header>
        <button className="logoBtn">portofolie</button>
        <button className="lightning">Lightning</button>
        <div className="headerButtons">
          <button className="headerBtn">Om meg</button>
          <button className="headerBtn">Prosjekter</button>
          <button className="headerBtn">Kontakt</button>
        </div>
      </header>
      <AboutMe />
      <Prosjekter />
      <Contact />

      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}

function myFunction() {
  let element = document.body;
  element.classList.toggle("lightning");
}

export default App;
