import "./Contact.css";

export default function Contact() {
  return (
    <>
    <div className="contactSection">
       <div className="inputSections">
       <h2>Kontakt Meg</h2>
        <input className="inputName" type="text" />
        <input className="inputTlf" type="text" />
        <input className="inputEmail" type="text" />
       </div>
        <input className="inputMessage" type="text" />
    </div>
    </>
  );
  
}
