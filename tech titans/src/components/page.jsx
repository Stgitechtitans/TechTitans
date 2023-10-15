import React, { useState } from 'react';
import "./page.css"

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [fileContent, setFileContent] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);
      };

      reader.readAsText(file, 'utf-8');
    }
  };
  console.log(fileContent,"filecontent");

  const handleFileDelete = () => {
    setSelectedFile(null);
    setFileContent(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
    <nav className="navbar">
    <div className="logo">Wordify</div>
      <div className="navbar-container">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
              <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
    </nav>

      <header>
        <h1>Welcome to our Website!</h1>
      </header>

      <section className="centered-box">
        <div className="file-input-container">
          <input type="file" onChange={handleFileChange} />
          {selectedFile && 
          <div><p>Selected File: {selectedFile.name}</p>
            <button onClick={handleFileDelete}>Delete</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>}
        </div>
      </section>

      <section className="centered-box">
        <h2 >Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2023 Tech Titans. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
