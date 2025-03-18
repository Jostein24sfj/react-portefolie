import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <section className="aboutMe">
        <img className="profilePic" src="public/images/profilePic.png" alt="" />
        <div>
          <h1>Jostein Westrum</h1>
          <p className="aboutMeText">
            Mitt navn er Jostein Westrum. Dette er forsøk nr 2 på å lage en
            portofolie. Denne gangen lages det i React.
          </p>
        </div>
      </section>
    </>
  );
}
