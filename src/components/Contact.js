import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../assets/styles/Contact.css';
import { useLanguage } from "../context/languageContext.js";

const Contact = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_xcjxhz8', 
      'template_vu83faw', 
      formData,
      'lO_85z41DU1D7dIvF'
    ).then((result) => {
      console.log(result.text);
      alert(t('messagesent'));
    }, (error) => {
      console.log(error.text);
      alert(t('messagenotssent'));
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">{t('contactme')}</h2>
      <div className="contact-form-wrapper">
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>{t('contactname')}</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contactname')}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>{t('contactemail')}</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contactemail')}
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>{t('contactmessage')}</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder={t('contactmessage')}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
          {t('contactsubmit')}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
