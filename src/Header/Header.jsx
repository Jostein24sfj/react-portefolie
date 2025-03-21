import "./Header.css";

export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header>
      <div className="logoTheme">
        <div className="triangleDown"></div> {/* Triangle background */}
        <div className="triangleUp"></div> {/* Top triangle */}
        <button className="logoBtn" onClick={() => scrollToSection("top")}>
          portefolie
        </button>
      </div>
      <div className="headerButtons">
        <button
          className="headerBtn"
          onClick={() => scrollToSection("aboutMe")}
        >
          Om meg
        </button>
        <button
          className="headerBtn"
          onClick={() => scrollToSection("projects")}
        >
          Prosjekter
        </button>
        <button
          className="headerBtn"
          onClick={() => scrollToSection("contact")}
        >
          Kontakt
        </button>
      </div>
    </header>
  );
}
