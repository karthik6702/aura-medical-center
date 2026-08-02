import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Clock, DollarSign } from 'lucide-react';
import { DOCTORS, Doctor } from '../../data/hospitalData';
import './DoctorsPage.css';

interface DoctorsPageProps {
  onOpenAppointmentModalWithDoc?: (doc: Doctor) => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({ onOpenAppointmentModalWithDoc }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredDoctors = activeFilter === 'all'
    ? DOCTORS
    : DOCTORS.filter((d) => d.departmentId === activeFilter);

  return (
    <div className="doctors-page">
      <div className="container-lux">
        <div className="section-header-center">
          <span className="section-badge">DISTINGUISHED MEDICAL FACULTY</span>
          <h1 className="section-title-large" style={{ fontSize: '3.5rem' }}>
            Consult with World Medical Leaders
          </h1>
          <p className="section-subtitle">
            Every clinical chair and surgical director at AURA is double-board certified with over 15 years of sub-specialized clinical practice.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="doctor-filter-bar">
          <button
            className={`filter-pill-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Surgical Chairs
          </button>
          <button
            className={`filter-pill-btn ${activeFilter === 'cardio' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cardio')}
          >
            Cardiovascular
          </button>
          <button
            className={`filter-pill-btn ${activeFilter === 'neuro' ? 'active' : ''}`}
            onClick={() => setActiveFilter('neuro')}
          >
            Neurosciences
          </button>
          <button
            className={`filter-pill-btn ${activeFilter === 'oncology' ? 'active' : ''}`}
            onClick={() => setActiveFilter('oncology')}
          >
            Oncology
          </button>
          <button
            className={`filter-pill-btn ${activeFilter === 'ortho' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ortho')}
          >
            Orthopedics
          </button>
        </div>

        {/* Doctor List */}
        <div>
          {filteredDoctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              className="doctor-detail-full-card"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '300px' }}>
                <img src={doc.image} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div>
                <span className="section-badge">{doc.departmentName}</span>
                <h2 style={{ color: '#FFF', fontSize: '1.8rem', marginBottom: '0.25rem' }}>{doc.name}</h2>
                <div style={{ color: '#D6B36A', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>
                  {doc.title} • {doc.experience}
                </div>

                <p style={{ color: '#B5B5B5', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {doc.bio}
                </p>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#B5B5B5' }}>CONSULTATION EVALUATION</div>
                    <div style={{ color: '#FFF', fontWeight: 700, fontSize: '0.9rem' }}>{doc.consultationFee}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#B5B5B5' }}>CLINICAL DAYS</div>
                    <div style={{ color: '#FFF', fontWeight: 700, fontSize: '0.9rem' }}>{doc.availableDays.join(', ')}</div>
                  </div>
                </div>

                <button
                  className="btn-primary-gold"
                  onClick={() => onOpenAppointmentModalWithDoc && onOpenAppointmentModalWithDoc(doc)}
                >
                  <Calendar size={16} />
                  <span>Schedule Consultation with {doc.name.split(',')[0]}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
