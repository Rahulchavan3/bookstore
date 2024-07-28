

import React from "react";


const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Welcome to Book Store!</p>
      </div>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Our journey began in a small corner of India with a
          simple idea: to create a community space where book enthusiasts can
          discover new worlds and share their passion for reading. Over the
          years, we have grown from a modest collection of books into a vibrant
          store that offers a wide range of genres, from classic literature and
          modern fiction to non-fiction, self-help, and children's books.
        </p>
      </section>


     

      <section className="about-section">
        <h2>Meet Our Team</h2>
        <p>
          Our team is passionate about books and dedicated to providing
          excellent service. We are always here to offer personalized
          recommendations and help you discover your next great read.
        </p>
        <ul>
          <li>
            <strong>Sam:</strong> Developer Documentation
          </li>
          <li>
            <strong>John:</strong> Designer
          </li>
          <li>
            <strong>Doe:</strong> Manager
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Visit Us</h2>
        <p>
          Come visit us at our store located at India, where you can browse
          our collection, attend events, and connect with fellow book lovers.
          Our welcoming and cozy atmosphere makes it the perfect place to lose
          yourself in a book.
        </p>
        <p>
          <strong>Store Hours:</strong>
        </p>
        <ul>
          <li>Monday to Friday: 9:00 AM - 8:00 PM</li>
          <li>Saturday: 10:00 AM - 6:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>
          Have any questions or special requests? Feel free to reach out to us
          at <a href="mailto:info@yourbookstore.com">info@yourbookstore.com</a>{" "}
          or give us a call at 91000000000. We love hearing from our
          customers and are always happy to help.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
