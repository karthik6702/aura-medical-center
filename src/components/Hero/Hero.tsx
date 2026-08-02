import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowUpRight, Award, Shield, Cpu, Activity } from 'lucide-react';
import { HOSPITAL_STATS } from '../../data/hospitalData';
import './Hero.css';

interface HeroProps {
  onOpenAppointmentModal: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal, onExploreClick }) => {
  return (
    <section className="hero-section">
      {/* Background Media with Dark Cinematic Overlay */}
      <div className="hero-background-media">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
          alt="AURA Medical Center Interior"
          className="hero-bg-image"
        />
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container-lux" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content">
          {/* Eyebrow Badge */}
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow-dot" />
            <span className="eyebrow-text">WORLD-CLASS PRIVATE MEDICAL INSTITUTE</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pinnacle of Medicine. <br />
            <span className="gold-gradient-text">Art of Care.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where double-board certified faculty, sub-millimeter surgical robotics, and private sanctuary penthouse recovery converge to deliver unparalleled health outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn-primary-gold" onClick={onOpenAppointmentModal}>
              <Calendar size={18} />
              <span>Book Concierge Consultation</span>
            </button>

            <a href="#departments" className="btn-secondary-glass" onClick={onExploreClick}>
              <span>Explore Departments</span>
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Statistics Bar */}
          <motion.div
            className="hero-stats-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {HOSPITAL_STATS.map((stat, idx) => (
              <div className="stat-card-lux" key={idx}>
                <div className="stat-value gold-gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
