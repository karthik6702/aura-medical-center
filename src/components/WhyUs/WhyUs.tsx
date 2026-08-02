import React from 'react';
import { motion } from 'motion/react';
import { Award, Cpu, Crown, Microscope } from 'lucide-react';
import { WHY_US_FEATURES } from '../../data/hospitalData';
import './WhyUs.css';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award size={28} />;
      case 'Cpu': return <Cpu size={28} />;
      case 'Crown': return <Crown size={28} />;
      case 'Microscope': return <Microscope size={28} />;
      default: return <Award size={28} />;
    }
  };

  return (
    <section className="why-us-section" id="why-us">
      <div className="container-lux">
        <div className="section-header-center">
          <span className="section-badge">UNRIVALED DISTINCTION</span>
          <h2 className="section-title-large">Designed for Critical Medical Excellence</h2>
          <p className="section-subtitle">
            Every clinical protocol, surgical theater, and private recovery sanctuary at AURA is engineered without compromise for those who seek the extraordinary.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="why-us-grid">
          {WHY_US_FEATURES.map((feat, index) => (
            <motion.div
              key={feat.id}
              className="why-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="why-icon-box">
                {getIcon(feat.iconName)}
              </div>

              <h3 className="why-card-title">{feat.title}</h3>
              <div className="why-card-sub">{feat.subtitle}</div>
              <p className="why-card-desc">{feat.description}</p>

              <div className="why-card-footer">
                <div>
                  <div className="why-stat-num gold-gradient-text">{feat.statNumber}</div>
                  <div className="why-stat-lbl">{feat.statLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
