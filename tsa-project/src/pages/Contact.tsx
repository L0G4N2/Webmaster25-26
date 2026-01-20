import React, { useState } from 'react';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="container">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>Get in touch with the Harris County Community Resource Hub team</p>
        </section>

        <div className="contact-content">
          <section className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Have questions about our resources? Need help finding a specific service?
              Want to suggest improvements? We'd love to hear from you!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Email</h3>
                <p>info@harriscountyhub.org</p>
                <p>Response within 24 hours</p>
              </div>

              <div className="contact-method">
                <h3>📞 Phone</h3>
                <p>(281) 555-HUBS</p>
                <p>Monday - Friday, 9 AM - 5 PM</p>
              </div>

              <div className="contact-method">
                <h3>📍 Office</h3>
                <p>Harris County Administration Building</p>
                <p>1001 Preston Street, Houston, TX 77002</p>
              </div>

              <div className="contact-method">
                <h3>🕒 Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-item">
                <h4>How do I add a new resource?</h4>
                <p>Use the "Submit a New Resource" form on our home page or resources page.</p>
              </div>
              <div className="faq-item">
                <h4>Is this service free?</h4>
                <p>Yes! The Harris County Community Resource Hub is completely free for all residents.</p>
              </div>
              <div className="faq-item">
                <h4>How often is the information updated?</h4>
                <p>We update our database regularly and rely on community submissions to keep information current.</p>
              </div>
            </div>
          </section>

          <section className="contact-form-section">
            <h2>Send us a Message</h2>
            {submitted ? (
              <div className="success-message">
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="resource-add">Add a Resource</option>
                    <option value="resource-update">Update Resource Information</option>
                    <option value="technical-issue">Technical Issue</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};