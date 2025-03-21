import "./FrontPage.css";

export default function FrontPage() {
  return (
    <>
      <section className="frontPageContent">
        <img className="profilePic" src="/images/profilePic.png" alt="" />
        <div>
          <h1>Jostein Westrum</h1>
          <p className="frontPageText">
            Mitt navn er Jostein. Dette er forsøk nr 2 på å lage en portefolie.
            Denne gangen lages det i React. Jeg har lært mer for å si det sånn:)
          </p>
        </div>
      </section>
    </>
  );
}
