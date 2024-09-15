import React, { useState } from 'react';
import styles from './ContactForm.module.css'; 
import siteConfig from '@generated/docusaurus.config';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',  
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const scriptURL = siteConfig.customFields.REACT_APP_GOOGLE_SCRIPT_URL;

    if (typeof scriptURL !== 'string') {
      setError('Oops! Something went wrong.');
      setLoading(false);
      return;
    }

    const postData = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone_number: formData.phone_number,  
      message: formData.message,
    }).toString();

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: postData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const result = await response.json();

      if (result.result === 'success') {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone_number: '', message: '' });
      } else {
        throw new Error(result.message || 'Oh no, something went wrong!');
      }
    } catch (error) {
      setError('Failed to send your message. Try again later!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2>🎉 Let's Chat! 🎉</h2>
      {submitted && (
        <p className={styles.successMessage}>
          Yay! 🥳 We got your message! A magical copy will fly to your inbox soon! 📨
        </p>
      )}
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          🚀 What's your name?*:
          <input
            className={styles.formInput}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your awesome name!"
            required
          />
        </label>
        <label className={styles.formLabel}>
          ✨ Your Email*:
          <input
            className={styles.formInput}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your magical email!"
            required
          />
        </label>
        <label className={styles.formLabel}>
          📞 Phone Number*:
          <input
            className={styles.formInput}
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Your secret agent number!"
            required
          />
        </label>
        <label className={styles.formLabel}>
          💬 Message*:
          <textarea
            className={styles.formTextarea}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us your queries, suggestions or awesome thoughts!"
            required
          />
        </label>
        <button className={styles.submitButton} type="submit" disabled={loading}>
          {loading ? 'Sending your message...' : 'Send it!'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
