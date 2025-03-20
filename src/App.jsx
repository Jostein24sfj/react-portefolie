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
          <Header/>
        <main>
          <FrontPage/>
          <AboutMe />
          <Prosjekter />
          <Contact />
        </main>
      </div>
    </>
  );
}
