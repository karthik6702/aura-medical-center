import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, Brain, Dna, Activity, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { DEPARTMENTS, Department } from '../../data/hospitalData';
import './Departments.css';

interface DepartmentsProps {
  onSelectDepartment?: (dept: Department) => void;
}

export const Departments: React.FC<DepartmentsProps> = ({ onSelectDepartment }) => {
  const navigate = useNavigate();

  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse size={22} />;
      case 'Brain': return <Brain size={22} />;
      case 'Dna': return <Dna size={22} />;
      case 'Activity': return <Activity size={22} />;
      case 'Sparkles': return <Sparkles size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      default: return <HeartPulse size={22} />;
    }
  };

  const handleClick = (dept: Department) => {
    if (onSelectDepartment) {
      onSelectDepartment(dept);
    } else {
      navigate('/departments');
    }
  };

  return (
    <section className="departments-section" id="departments">
      <div className="container-lux">
        <div className="section-header-center">
          <span className="section-badge">CENTERS OF CLINICAL EXCELLENCE</span>
          <h2 className="section-title-large">Six Specialized Medical Institutes</h2>
          <p className="section-subtitle">
            Hover over each institute to explore cutting-edge clinical capabilities, precision sub-specialties, and international surgical standards.
          </p>
        </div>

        {/* 6 Minimal Department Cards with Hover Image Reveal */}
        <div className="dept-grid">
          {DEPARTMENTS.map((dept, idx) => (
            <motion.div
              key={dept.id}
              className="dept-card"
              onClick={() => handleClick(dept)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="dept-image-background">
                <img src={dept.image} alt={dept.name} className="dept-img" />
              </div>
              <div className="dept-overlay" />

              <div className="dept-card-content">
                <div className="dept-icon-badge">
                  {getDeptIcon(dept.iconName)}
                </div>

                <h3 className="dept-title">{dept.name}</h3>
                <div className="dept-tagline">{dept.tagline}</div>
                <p className="dept-desc">{dept.description}</p>

                <div className="dept-card-footer">
                  <span className="dept-stat-text">{dept.keyStats}</span>
                  <div className="dept-arrow-btn">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
