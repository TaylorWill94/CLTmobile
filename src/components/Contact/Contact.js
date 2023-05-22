import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-sec">
        {/* <h1 className="contact-bio">real.edgemere.clt@gmail.com</h1> */}

        <form>
          {/* <form onSubmit={handleSubmit}> */}
          <div className="form-sec">
            <label>Name</label>
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="form-sec">
            <label>Email</label>
            <input
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="form-sec">
            <label>Message</label>
            <textarea
              name="message"
              // value={formData.message}
              // onChange={handleChange}
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
