import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, MapPin, Phone, Mail, Globe, Award } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container-lux">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-box">
            <Link to="/" className="brand-logo">
              <div className="brand-icon-box">
                <Shield size={22} color="#D6B36A" />
              </div>
              <div className="brand-text-container">
                <span className="brand-name">AURA</span>
                <span className="brand-tag">MEDICAL CENTER</span>
              </div>
            </Link>

            <p className="footer-brand-desc">
              World-class private hospital & research institute dedicated to sub-millimeter surgical robotics, molecular oncology, and personalized recovery sanctuaries.
            </p>

            <div className="footer-social-row">
              <a href="#" className="footer-social-icon" aria-label="Global Research"><Globe size={18} /></a>
              <a href="#" className="footer-social-icon" aria-label="Clinical Awards"><Award size={18} /></a>
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links-list">
              <Link to="/" className="footer-link-item">Home Institute</Link>
              <Link to="/about" className="footer-link-item">About & Faculty</Link>
              <Link to="/departments" className="footer-link-item">Clinical Departments</Link>
              <Link to="/doctors" className="footer-link-item">Chief Doctors</Link>
              <Link to="/contact" className="footer-link-item">Concierge & Access</Link>
            </div>
          </div>

          {/* Departments Col */}
          <div>
            <h4 className="footer-col-title">Institutes</h4>
            <div className="footer-links-list">
              <Link to="/departments" className="footer-link-item">Cardiovascular Institute</Link>
              <Link to="/departments" className="footer-link-item">Precision Neurosciences</Link>
              <Link to="/departments" className="footer-link-item">Advanced Oncology</Link>
              <Link to="/departments" className="footer-link-item">Orthopedic Robotics</Link>
              <Link to="/departments" className="footer-link-item">Longevity & Cellular</Link>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="footer-col-title">Executive Helipad & Campus</h4>
            <div className="footer-contact-info">
              <div className="contact-info-item">
                <MapPin size={18} className="contact-icon-gold" />
                <span>One AURA Sanctuary Boulevard, Medical District, NY 10021</span>
              </div>
              <div className="contact-info-item">
                <Phone size={18} className="contact-icon-gold" />
                <span>Concierge Desk: +1 (800) AURA-MED</span>
              </div>
              <div className="contact-info-item">
                <Mail size={18} className="contact-icon-gold" />
                <span>Private Intake: concierge@auramedical.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} AURA Medical Center & Institute. All Rights Reserved.
          </div>

          <div className="footer-legal-links">
            <a href="#" className="footer-link-item">Patient Non-Disclosure</a>
            <a href="#" className="footer-link-item">JCI Accreditation</a>
            <a href="#" className="footer-link-item">Ethical Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
