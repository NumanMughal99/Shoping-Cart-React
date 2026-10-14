import { useState } from "react";
import "./contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setSubmitted(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };


  return (
    <div className="contact">

      <div className="contact-header">

        <h1>Contact Us</h1>

        <p>
          We would love to hear from you.
        </p>

      </div>


      <div className="contact-container">


        {/* Contact Information */}
        <div className="contact-info">

          <div>
            <h3>📍 Address</h3>
            <p>Islamabad, Pakistan</p>
          </div>


          <div>
            <h3>📞 Phone</h3>
            <p>+92 300 1234567</p>
          </div>


          <div>
            <h3>📧 Email</h3>
            <p>info@shopnow.com</p>
          </div>

        </div>


        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />


          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />


          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />


          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          ></textarea>


          <button type="submit">
            Send Message
          </button>


          {submitted && (
            <p className="success-message">
              ✅ Your message has been sent successfully!
            </p>
          )}

        </form>

      </div>

    </div>
  );
}

export default Contact;