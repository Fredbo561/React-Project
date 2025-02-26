import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Make sure this is imported for Bootstrap JS functionality

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'text') setText(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let error = '';

    // Validate the name
    if (!name) {
      error = 'Name is required.';
    }

    // Validate the email
    if (!email) {
      error = 'Email is required.';
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      error = 'Please enter a valid email address.';
    }

    // Validate the message
    if (!text) {
      error = 'Message is required.';
    }

    // If there's an error, set the error message, otherwise clear it
    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage('');
      // Handle form submission logic (e.g., send data to a server)
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-1">Contact Me!</h1>

      <form className="form" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            value={text}
            name="text"
            onChange={handleInputChange}
            className="form-control"
            id="message"
            rows={4}
            placeholder="Enter your message"
          ></textarea>
        </div>

        {/* Error message for validation, placed below the message box */}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
