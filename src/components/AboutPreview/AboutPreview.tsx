import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Award, Lock, Sparkles, Building2 } from 'lucide-react';
import './AboutPreview.css';

export const AboutPreview: React.FC = () => {
  return (
    <section className="about-preview-section">
      <div className="container-lux">
        <div className="about-preview-grid">
          {/* Left Visual Stage */}
          <motion.div
            className="about-image-stage"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200"
              alt="AURA Medical Institute Surgical Theater"
              className="about-main-img"
            />

            <div className="about-floating-badge">
              <div className="badge-icon-shield">
                <ShieldCheck size={26} />
              </div>
              <div>
                <div className="badge-title">JCI Gold Seal Accredited</div>
                <div className="badge-sub">Highest Global Healthcare Safety Distinction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            className="about-content-box"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-badge">THE AURA PHILOSOPHY</span>
            <h2 className="section-title-large" style={{ textAlign: 'left' }}>
              Redefining Medicine through Precision & Sanctuary
            </h2>

            <p className="about-text-lead">
              Founded on the belief that surgical mastery and holistic healing require an environment of absolute tranquility, AURA Medical Center represents the convergence of science, art, and privacy.
            </p>

            <p className="about-text-body">
              Our campus eliminates the stressful atmosphere of conventional institutions. From private helipad transfers to in-house molecular genome sequencing labs, every detail is engineered to deliver flawless outcomes in an atmosphere of discreet luxury.
            </p>

            <div className="about-feature-list">
              <div className="about-feature-item">
                <Award size={20} className="feat-icon-gold" />
                <div>
                  <div className="feat-item-title">Ivy-League Faculty</div>
                  <div className="feat-item-desc">Double-board certified clinical chairs</div>
                </div>
              </div>

              <div className="about-feature-item">
                <Lock size={20} className="feat-icon-gold" />
                <div>
                  <div className="feat-item-title">Discreet Executive Care</div>
                  <div className="feat-item-desc">Private wings & dedicated security</div>
                </div>
              </div>

              <div className="about-feature-item">
                <Sparkles size={20} className="feat-icon-gold" />
                <div>
                  <div className="feat-item-title">Molecular Diagnostics</div>
                  <div className="feat-item-desc">In-house 3-hour genomic sequencing</div>
                </div>
              </div>

              <div className="about-feature-item">
                <Building2 size={20} className="feat-icon-gold" />
                <div>
                  <div className="feat-item-title">Penthouse Recovery</div>
                  <div className="feat-item-desc">Dedicated nurse & private executive chef</div>
                </div>
              </div>
            </div>

            <div>
              <Link to="/about" className="btn-secondary-glass" style={{ display: 'inline-flex' }}>
                <span>Learn More About Our Institute</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
