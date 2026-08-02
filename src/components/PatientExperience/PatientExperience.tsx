import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/hospitalData';
import './PatientExperience.css';

export const PatientExperience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section className="patient-exp-section">
      <div className="container-lux">
        <div className="section-header-center">
          <span className="section-badge">PATIENT SANCTUARY STORIES</span>
          <h2 className="section-title-large">Transformative Medical Experiences</h2>
          <p className="section-subtitle">
            Hear from international executives, public figures, and discerning individuals who entrusted their most critical medical moments to AURA.
          </p>
        </div>

        {/* Large Testimonial Slider Stage */}
        <div className="testimonial-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              className="testimonial-glass-card"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Quote size={80} className="quote-icon-large" />

              <div className="testimonial-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="star-gold" />
                ))}
              </div>

              <p className="testimonial-quote-text">"{item.quote}"</p>

              <div className="testimonial-author-row">
                <div className="author-meta">
                  <img src={item.image} alt={item.author} className="author-avatar" />
                  <div>
                    <div className="author-name">{item.author}</div>
                    <div className="author-role">{item.role} • {item.location}</div>
                  </div>
                </div>

                <div className="procedure-pill">
                  <span>{item.procedure}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="slider-controls">
            <button className="control-btn" onClick={handlePrev} aria-label="Previous story">
              <ChevronLeft size={22} />
            </button>

            <div className="dots-indicator">
              {TESTIMONIALS.map((_, idx) => (
                <div
                  key={idx}
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <button className="control-btn" onClick={handleNext} aria-label="Next story">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
