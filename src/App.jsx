import "./App.css";
import AboutMe from "./AboutMe/AboutMe";
import Prosjekter from "./Prosjekter/Prosjekter";
import Contact from "./Contact/Contact";
import DarkMode from "./DarkMode/DarkMode";
import Header from "./Header/Header";
import FrontPage from "./FrontPage/FrontPage";
export default function App() {
  return (
    <>
      {/* <DarkMode /> */}
      <div>
        <div id="top"></div> {/* Invisible div to mark the top of the page */}
        <Header />
        <main>
          <br />
          <br />
          <br />
          <br />
          <br />
          <FrontPage />
          <br />
          <br />
          <AboutMe />
          <br />
          <br />
          <br />
          <Prosjekter />
          <br />
          <br />
          <Contact />
        </main>
      </div>
    </>
  );
}
