import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/send-email", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({
          userName: '',
          userEmail: '',
          message: ''
        }); // Reset form data
      } else {
        setStatus(`Failed to send email: ${responseData.message}`);
      }
    } catch (error) {
      setStatus(`Failed to send email: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center p-6 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-accent mr-4" />
            <p className="text-lg">573-890-0445</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-accent mr-4" />
            <p className="text-lg">brycegraham95@gmail.com</p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Contact me!</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="userName" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-accent"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" value="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-accent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-accent text-gray-900 font-semibold p-3 rounded-lg hover:bg-accent-dark"
              value="Send"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-white">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;