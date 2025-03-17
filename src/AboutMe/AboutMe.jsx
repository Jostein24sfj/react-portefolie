import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div>
        <main>
          <img
            className="profilePic"
            src="public/images/profilePic.png"
            alt=""
          />
          <p>
            Mitt navn er Jostein Westrum. Dette er forsøk nr 2 på å lage en
            portofolie. Denne gangen lages det i React.
          </p>
        </main>
      </div>
    </>
  );
}
