import "./Contact.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        navigate("/success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="contact">
      <div className="contact-sec">
        <h1 style={{ color: "white" }}>Contact Us </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-sec">
            <label>Name *</label>
            <br />
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-sec">
            <label>Email *</label>
            <br />
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-sec">
            <label className="msg-label">Message *</label>
            <br />
            <br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
