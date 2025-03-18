import "./App.css";
import AboutMe from "./AboutMe/AboutMe";
import Prosjekter from "./Prosjekter/Prosjekter";
import Contact from "./Contact/Contact";
import DarkMode from "./DarkMode/DarkMode";
import Header from "./Header/Header";

export default function App() {
  return (
    <>
            {/* <DarkMode /> */}
      <div>
          <Header/>
        <main>
          <AboutMe />
          <Prosjekter />
          <Contact />
        </main>
      </div>
    </>
  );
}
