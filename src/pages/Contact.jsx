import React, { useState } from "react";
import Banner from "../assets/contact-banner.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation here
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <main>
      <section className="relative">
        <img src={Banner} alt="Cover" className="w-full h-auto" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-6xl max-[750px]:text-4xl max-[380px]:text-2xl font-satisfy text-white">
            Contact Us
          </p>
        </div>
      </section>
      <section className="my-32">
        <p className="my-16 text-6xl max-[750px]:text-4xl max-[380px]:text-2xl font-satisfy text-center">
          Get in touch
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 items-center px-4"
        >
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="border p-4 w-[34rem] max-[600px]:w-[24rem] max-[440px]:w-[18rem] resize-none"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Message"
          ></textarea>
          <div className="flex gap-8 max-[600px]:flex-col">
            <input
              type="text"
              name="name"
              id="name"
              className="border p-4 w-64 max-[600px]:w-[24rem] max-[440px]:w-[18rem]"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="border p-4 w-64 max-[600px]:w-[24rem] max-[440px]:w-[18rem]"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Email"
            />
          </div>
          <button
            type="submit"
            className="bg-white hover:bg-cyellow text-cyellow hover:text-white px-3 py-2 border border-cyellow w-64 h-16 text-xl"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
