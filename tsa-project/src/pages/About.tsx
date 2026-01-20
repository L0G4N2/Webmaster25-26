import React from 'react';
import './About.css';

export function About() {
  return (
    <div className="about">
      <div className="container">
        <section className="about-hero">
          <h1>About Harris County Community Resource Hub</h1>
          <p>Connecting residents with essential services and community support</p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            The Harris County Community Resource Hub serves as a comprehensive platform to connect
            residents with essential services, community events, and support resources available
            throughout Harris County, Texas.
          </p>
        </section>

        <section className="features">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📍 Resource Directory</h3>
              <p>Comprehensive directory of local services, charities, and community programs</p>
            </div>
            <div className="feature-card">
              <h3>🗺️ Interactive Maps</h3>
              <p>Visual location guides to help you find resources near you</p>
            </div>
            <div className="feature-card">
              <h3>⭐ Featured Resources</h3>
              <p>Highlighted community resources and special programs</p>
            </div>
            <div className="feature-card">
              <h3>📝 Community Submissions</h3>
              <p>Submit new resources to help grow our community database</p>
            </div>
          </div>
        </section>

        <section className="impact">
          <h2>Community Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Residents Served</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Community Resources</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Partner Organizations</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Online Access</p>
            </div>
          </div>
        </section>

        <section className="contact-info">
          <h2>Get Involved</h2>
          <p>
            Help us expand our resource database! If you know of a community service,
            charity, or local program that's not listed, please submit it through our
            resource submission form.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <h4>📧 Email</h4>
              <p>info@harriscountyhub.org</p>
            </div>
            <div className="contact-item">
              <h4>📞 Phone</h4>
              <p>(281) 555-HUBS</p>
            </div>
            <div className="contact-item">
              <h4>📍 Location</h4>
              <p>Harris County, Texas</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};