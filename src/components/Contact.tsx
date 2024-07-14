

import React, { useState } from 'react';
import './Contact.module.css';
import styles from "./Contact.module.css"; // Optional: for styling

const Contact: React.FC = () => {
    // Example state for form fields (replace with your actual form state)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Replace with your logic to handle form submission (e.g., send data to server)
        console.log(formData);
        // Optionally, you can clear the form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className={styles.contactContainer}>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;