import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Globe, Cpu, Lock, CheckCircle } from 'lucide-react';
import { AppointmentCTA } from '../../components/AppointmentCTA/AppointmentCTA';
import './About.css';

interface AboutProps {
  onOpenAppointmentModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAppointmentModal }) => {
  return (
    <div className="about-page">
      <div className="container-lux">
        {/* Header Hero */}
        <div className="about-hero-box">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            INSTITUTE HERITAGE & VISION
          </motion.span>
          <motion.h1
            className="section-title-large"
            style={{ fontSize: '3.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The Pursuit of Perfection in <br />
            <span className="gold-gradient-text">Human Healing</span>
          </motion.h1>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Established as a global sanctuary for critical surgical care and molecular precision medicine, AURA Medical Center unites world-leading clinical chairs, advanced robotics, and bespoke private recovery.
          </motion.p>
        </div>

        {/* Accreditations Grid */}
        <div className="about-grid-3">
          <motion.div
            className="accred-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="accred-badge-icon">
              <ShieldCheck size={28} />
            </div>
            <h3 style={{ color: '#FFF', fontSize: '1.25rem', marginBottom: '0.5rem' }}>JCI Gold Seal Accreditation</h3>
            <p style={{ color: '#B5B5B5', fontSize: '0.9rem' }}>
              Recognized globally as the gold standard in clinical quality, infection control, and surgical safety metrics.
            </p>
          </motion.div>

          <motion.div
            className="accred-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="accred-badge-icon">
              <Award size={28} />
            </div>
            <h3 style={{ color: '#FFF', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Global Center of Surgical Innovation</h3>
            <p style={{ color: '#B5B5B5', fontSize: '0.9rem' }}>
              Designated as a official training & research master site for Da Vinci Xi and CyberKnife S7 robotic platforms.
            </p>
          </motion.div>

          <motion.div
            className="accred-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="accred-badge-icon">
              <Globe size={28} />
            </div>
            <h3 style={{ color: '#FFF', fontSize: '1.25rem', marginBottom: '0.5rem' }}>International Concierge Network</h3>
            <p style={{ color: '#B5B5B5', fontSize: '0.9rem' }}>
              Serving international patients from 65+ countries with dedicated air ambulance transfers and language concierges.
            </p>
          </motion.div>
        </div>

        {/* Tech Infrastructure Showcase */}
        <div className="tech-showcase-box">
          <div className="tech-grid-2">
            <div>
              <span className="section-badge">SURGICAL SANCTUARY</span>
              <h2 className="section-title-large" style={{ textAlign: 'left', fontSize: '2.2rem' }}>
                Sub-Millimeter Robotics & Intraoperative Diagnostics
              </h2>
              <p style={{ color: '#B5B5B5', lineHeight: 1.7, marginBottom: '2rem' }}>
                Our 12 surgical suites are equipped with 7T real-time intraoperative MRI, zero-latency 3D robotic visualization, and laminar air filtration systems operating at 99.999% particulate purity.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFF' }}>
                  <CheckCircle size={18} color="#D6B36A" />
                  <span>Da Vinci Xi 4-Arm Surgical System</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFF' }}>
                  <CheckCircle size={18} color="#D6B36A" />
                  <span>CyberKnife S7 Synchrony Target Tracking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFF' }}>
                  <CheckCircle size={18} color="#D6B36A" />
                  <span>Mako SmartRobotics Articular Restoration</span>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                alt="Intraoperative MRI Suite"
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      <AppointmentCTA onOpenAppointmentModal={onOpenAppointmentModal} />
    </div>
  );
};
