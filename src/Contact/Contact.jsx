import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t8e60ai", // Bytt ut med ditt Service ID
        "template_jp04o2q", // Bytt ut med ditt Template ID
        formData,
        "RDIph1ylBIVWC7Nxs" // Bytt ut med din Public Key
      )
      .then(
        (response) => {
          console.log("E-post sendt!", response.status, response.text);
          alert("Melding sendt!");
          setFormData({ name: "", email: "", message: "" }); // Nullstill skjemaet
        },
        (error) => {
          console.log("Feil ved sending:", error);
          alert("Noe gikk galt, prøv igjen!");
        }
      );
  };

  return (
    <div className="contactSection">
      <h2>Kontakt Meg</h2>
      <form onSubmit={handleSubmit} className="contactForm">
        <input
          type="text"
          name="name"
          placeholder="Navn"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-post"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Din melding..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
