import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Plane, ShieldCheck, Clock, Send, CheckCircle2 } from 'lucide-react';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="container-lux">
        <div className="section-header-center">
          <span className="section-badge">PRIVATE INTAKE & CONCIERGE ACCESS</span>
          <h1 className="section-title-large" style={{ fontSize: '3.5rem' }}>
            Executive Concierge Desk
          </h1>
          <p className="section-subtitle">
            Whether coordinating private jet transfers, emergency surgical airlifts, or confidential second opinions, our intake liaisons respond within 60 minutes.
          </p>
        </div>

        <div className="contact-grid-2">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-block">
              <div className="contact-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ color: '#FFF', fontSize: '1.15rem', marginBottom: '0.25rem' }}>Campus & Sanctuary Address</h4>
                <p style={{ color: '#B5B5B5', fontSize: '0.925rem', lineHeight: 1.6 }}>
                  One AURA Sanctuary Boulevard<br />
                  Medical Research District, New York, NY 10021
                </p>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-icon-wrapper">
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ color: '#FFF', fontSize: '1.15rem', marginBottom: '0.25rem' }}>24/7 International Hotline</h4>
                <p style={{ color: '#B5B5B5', fontSize: '0.925rem', lineHeight: 1.6 }}>
                  Direct Concierge: +1 (800) 555-2872<br />
                  Emergency Airlift Desk: +1 (800) 999-AURA
                </p>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-icon-wrapper">
                <Plane size={24} />
              </div>
              <div>
                <h4 style={{ color: '#FFF', fontSize: '1.15rem', marginBottom: '0.25rem' }}>Helipad & Valet Logistics</h4>
                <p style={{ color: '#B5B5B5', fontSize: '0.925rem', lineHeight: 1.6 }}>
                  GPS Coordinates: 40.7614° N, 73.9776° W<br />
                  24/7 Private VIP Valet Parking at West Portico
                </p>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ color: '#FFF', fontSize: '1.15rem', marginBottom: '0.25rem' }}>Strict Privacy Protocol</h4>
                <p style={{ color: '#B5B5B5', fontSize: '0.925rem', lineHeight: 1.6 }}>
                  All intake communications are protected under strict international medical non-disclosure protocols.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            className="contact-card-box"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={56} color="#D6B36A" style={{ margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ color: '#FFF', fontSize: '1.8rem', marginBottom: '0.75rem' }}>Inquiry Received</h3>
                <p style={{ color: '#B5B5B5', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Thank you, <strong style={{ color: '#FFF' }}>{name}</strong>. Your confidential inquiry has been routed directly to our Executive Medical Officer. A senior liaison will contact you within 60 minutes.
                </p>
                <button className="btn-secondary-glass" onClick={() => setSubmitted(false)}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ color: '#FFF', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                  Send Confidential Message
                </h3>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label">Your Full Name</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Sofia Al-Mansoor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label">Private Email Address</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="sofia@executive.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label">Contact Phone / Encrypted Mobile</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Clinical Profile / Medical Request Summary</label>
                  <textarea
                    rows={4}
                    className="form-textarea"
                    placeholder="Provide details regarding medical history, surgical requirements, or concierge needs..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-primary-gold" style={{ width: '100%' }}>
                  <Send size={16} />
                  <span>Transmit Encrypted Intake</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
