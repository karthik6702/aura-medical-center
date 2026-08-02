import React from 'react';
import { motion } from 'motion/react';
import { Calendar, PhoneCall, ShieldCheck, Clock, Plane } from 'lucide-react';
import './AppointmentCTA.css';

interface AppointmentCTAProps {
  onOpenAppointmentModal: () => void;
}

export const AppointmentCTA: React.FC<AppointmentCTAProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section className="appointment-cta-section">
      <div className="container-lux">
        <motion.div
          className="appointment-cta-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-bg-glow" />

          <span className="section-badge">PRIVATE CONSULTATION & CONCIERGE</span>

          <h2 className="cta-title-lux">
            Begin Your Medical Journey with <br />
            <span className="gold-gradient-text">Uncompromising Distinction</span>
          </h2>

          <p className="cta-desc-lux">
            Our private clinical concierge team coordinates all international medical records, executive transport transfers, and specialist surgical consultations within 24 hours.
          </p>

          <div className="cta-buttons-wrapper">
            <button className="btn-primary-gold" onClick={onOpenAppointmentModal}>
              <Calendar size={18} />
              <span>Schedule Priority Evaluation</span>
            </button>

            <a href="tel:+18005552872" className="btn-secondary-glass">
              <PhoneCall size={18} />
              <span>Direct Concierge Desk (+1 800 AURA)</span>
            </a>
          </div>

          <div className="cta-concierge-features">
            <div className="cta-feature-pill">
              <ShieldCheck size={16} color="#D6B36A" />
              <span>Strict Non-Disclosure & Private Wing Access</span>
            </div>

            <div className="cta-feature-pill">
              <Clock size={16} color="#D6B36A" />
              <span>24-Hour International Record Evaluation</span>
            </div>

            <div className="cta-feature-pill">
              <Plane size={16} color="#D6B36A" />
              <span>Private Helipad & Jet Concierge Transfers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
