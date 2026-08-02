import React from 'react';
import { motion } from 'motion/react';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { DOCTORS, Doctor } from '../../data/hospitalData';
import './Doctors.css';

interface DoctorsProps {
  onSelectDoctorBook?: (doc: Doctor) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onSelectDoctorBook }) => {
  return (
    <section className="doctors-section" id="doctors">
      <div className="container-lux">
        <div className="section-header-center">
          <span className="section-badge">INTERNATIONALLY RENOWNED FACULTY</span>
          <h2 className="section-title-large">Chief Surgical Chairs & Medical Directors</h2>
          <p className="section-subtitle">
            Our medical leadership comprises double-board certified clinical pioneers who set worldwide benchmarks in surgical precision and breakthrough clinical trials.
          </p>
        </div>

        {/* 4 Featured Doctors Cards */}
        <div className="doctors-grid">
          {DOCTORS.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              className="doctor-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <div className="doctor-image-wrapper">
                <img src={doctor.image} alt={doctor.name} className="doctor-img" />
                <div className="doctor-image-gradient" />
                <div className="doctor-exp-badge">{doctor.experience}</div>
              </div>

              <div className="doctor-info-body">
                <span className="doctor-dept-label">{doctor.departmentName}</span>
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-title">{doctor.title}</p>

                <div className="doctor-credentials-list">
                  {doctor.credentials.map((cred, i) => (
                    <div className="cred-item" key={i}>
                      <CheckCircle2 size={13} color="#D6B36A" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="btn-book-doctor"
                  onClick={() => onSelectDoctorBook && onSelectDoctorBook(doctor)}
                >
                  <Calendar size={15} />
                  <span>Request Consultation</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
