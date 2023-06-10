import React, { useState } from 'react';

export function MyForm() {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Make the HTTP request
    fetch('/your-server-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

//   const handleShowForm = () => {
//     setShowForm(true); // Show the form on button click
//   };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button id="showButton" style={{ color: 'green' }} onClick={handleShowForm}>
          Click to show
        </button>
      )}
    </div>
  );
}
