import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DEPARTMENTS, Department } from '../../data/hospitalData';
import './DepartmentsPage.css';

interface DepartmentsPageProps {
  onOpenAppointmentModalWithDept?: (dept: Department) => void;
}

export const DepartmentsPage: React.FC<DepartmentsPageProps> = ({ onOpenAppointmentModalWithDept }) => {
  return (
    <div className="dept-page">
      <div className="container-lux">
        <div className="section-header-center">
          <span className="section-badge">CLINICAL EXCELLENCE DIRECTORY</span>
          <h1 className="section-title-large" style={{ fontSize: '3.5rem' }}>
            Six Centers of Clinical Mastery
          </h1>
          <p className="section-subtitle">
            Explore our clinical institutes, each led by globally recognized surgical chairs and equipped with sub-millimeter robotic platforms.
          </p>
        </div>

        {DEPARTMENTS.map((dept, idx) => (
          <motion.div
            key={dept.id}
            className="dept-detail-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div>
              <span className="section-badge">{dept.keyStats}</span>
              <h2 className="section-title-large" style={{ textAlign: 'left', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
                {dept.name}
              </h2>
              <div style={{ color: '#D6B36A', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                {dept.tagline}
              </div>
              <p style={{ color: '#B5B5B5', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {dept.description}
              </p>

              <div style={{ color: '#FFF', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Core Clinical Highlights:
              </div>
              <div className="procedure-tag-grid">
                {dept.highlights.map((h, i) => (
                  <span key={i} className="procedure-tag">{h}</span>
                ))}
              </div>

              <button
                className="btn-primary-gold"
                onClick={() => onOpenAppointmentModalWithDept && onOpenAppointmentModalWithDept(dept)}
              >
                <Calendar size={16} />
                <span>Consult with {dept.name} Chair</span>
              </button>
            </div>

            <div>
              <img src={dept.image} alt={dept.name} className="dept-detail-img" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
