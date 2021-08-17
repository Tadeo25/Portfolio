import React from "react";
import emailjs from "emailjs-com";


export default function mail() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f6pbpww",
        "template_k1grj0d",
        e.target,
        "user_cy3OAPOdFgHVinsRMxEIj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
