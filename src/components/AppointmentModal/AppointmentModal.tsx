import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Calendar, User, Mail, Phone, ShieldCheck, ArrowRight, ArrowLeft, Plane, Home, Award } from 'lucide-react';
import { DEPARTMENTS, DOCTORS, Department, Doctor } from '../../data/hospitalData';
import './AppointmentModal.css';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDepartment?: Department | null;
  initialDoctor?: Doctor | null;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDepartment,
  initialDoctor
}) => {
  const [step, setStep] = useState(1);
  const [selectedDept, setSelectedDept] = useState<string>(initialDepartment?.id || DEPARTMENTS[0].id);
  const [selectedDoc, setSelectedDoc] = useState<string>(initialDoctor?.id || 'any');

  // Form State
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (09:00 - 12:00)');
  const [notes, setNotes] = useState('');

  // Concierge Services
  const [helipadTransfer, setHelipadTransfer] = useState(false);
  const [penthouseRecovery, setPenthouseRecovery] = useState(false);
  const [translatorService, setTranslatorService] = useState(false);

  // Generated Ref Code
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 3) {
      // Generate unique luxury reference code
      const code = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
      setRefCode(code);
      setStep(4);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const currentDeptObj = DEPARTMENTS.find((d) => d.id === selectedDept);

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Modal Header */}
          <div className="modal-header">
            <div>
              <span className="section-badge">PRIVATE CLINICAL CONCIERGE</span>
              <h3 className="modal-title" style={{ color: '#FFF', fontSize: '1.4rem', marginTop: '0.2rem' }}>
                {step === 4 ? 'Appointment Confirmed' : 'Request Priority Consultation'}
              </h3>
            </div>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          <div className="modal-body">
            {step < 4 && (
              <div className="modal-steps-indicator">
                <div className={`modal-step-item ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                  <div className="step-num">1</div>
                  <span className="step-title">Specialty</span>
                </div>
                <div className={`modal-step-item ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                  <div className="step-num">2</div>
                  <span className="step-title">Faculty</span>
                </div>
                <div className={`modal-step-item ${step >= 3 ? 'active' : ''}`}>
                  <div className="step-num">3</div>
                  <span className="step-title">Details</span>
                </div>
              </div>
            )}

            {/* STEP 1: Department Selection */}
            {step === 1 && (
              <div>
                <p style={{ color: '#B5B5B5', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  Select the specialized clinical institute for your consultation:
                </p>
                <div className="selection-grid">
                  {DEPARTMENTS.map((dept) => (
                    <div
                      key={dept.id}
                      className={`select-card-option ${selectedDept === dept.id ? 'selected' : ''}`}
                      onClick={() => setSelectedDept(dept.id)}
                    >
                      <div className="dept-icon-badge" style={{ marginBottom: 0 }}>
                        <Award size={20} color="#D6B36A" />
                      </div>
                      <div>
                        <div style={{ color: '#FFF', fontWeight: 700, fontSize: '0.95rem' }}>{dept.name}</div>
                        <div style={{ color: '#D6B36A', fontSize: '0.775rem' }}>{dept.keyStats}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Doctor Selection */}
            {step === 2 && (
              <div>
                <p style={{ color: '#B5B5B5', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  Choose your preferred medical director or chair for {currentDeptObj?.name}:
                </p>
                <div className="selection-grid">
                  <div
                    className={`select-card-option ${selectedDoc === 'any' ? 'selected' : ''}`}
                    onClick={() => setSelectedDoc('any')}
                  >
                    <div className="dept-icon-badge" style={{ marginBottom: 0 }}>
                      <ShieldCheck size={20} color="#D6B36A" />
                    </div>
                    <div>
                      <div style={{ color: '#FFF', fontWeight: 700, fontSize: '0.95rem' }}>First Available Surgical Chair</div>
                      <div style={{ color: '#B5B5B5', fontSize: '0.775rem' }}>Assigned based on urgent clinical profile</div>
                    </div>
                  </div>

                  {DOCTORS.map((doc) => (
                    <div
                      key={doc.id}
                      className={`select-card-option ${selectedDoc === doc.id ? 'selected' : ''}`}
                      onClick={() => setSelectedDoc(doc.id)}
                    >
                      <img
                        src={doc.image}
                        alt={doc.name}
                        style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ color: '#FFF', fontWeight: 700, fontSize: '0.95rem' }}>{doc.name}</div>
                        <div style={{ color: '#D6B36A', fontSize: '0.775rem' }}>{doc.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Patient & Logistics Details */}
            {step === 3 && (
              <div>
                <div className="form-grid-2">
                  <div>
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Lord Henry Sterling"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Private Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="sterling@executive.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div>
                    <label className="form-label">Direct Contact Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+1 (555) 019-2831"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      className="form-input"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Preferred Time Window</label>
                  <select
                    className="form-select"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                  >
                    <option value="Morning (09:00 - 12:00)">Morning Executive Hours (09:00 - 12:00)</option>
                    <option value="Afternoon (13:00 - 16:00)">Afternoon Executive Hours (13:00 - 16:00)</option>
                    <option value="Evening (17:00 - 19:00)">Evening Executive Hours (17:00 - 19:00)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Discreet Concierge Logistics (Optional)</label>
                  <div className="checkbox-concierge-grid">
                    <div
                      className={`checkbox-concierge-card ${helipadTransfer ? 'checked' : ''}`}
                      onClick={() => setHelipadTransfer(!helipadTransfer)}
                    >
                      <Plane size={18} color="#D6B36A" />
                      <span>Private Helipad Transfer</span>
                    </div>

                    <div
                      className={`checkbox-concierge-card ${penthouseRecovery ? 'checked' : ''}`}
                      onClick={() => setPenthouseRecovery(!penthouseRecovery)}
                    >
                      <Home size={18} color="#D6B36A" />
                      <span>Penthouse Recovery Suite</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Success Receipt */}
            {step === 4 && (
              <div className="receipt-box">
                <div className="receipt-icon-circle">
                  <CheckCircle2 size={36} />
                </div>

                <h3 className="section-title-large" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                  Priority Reservation Logged
                </h3>

                <p style={{ color: '#B5B5B5', maxWidth: '540px', margin: '0 auto 1.5rem auto' }}>
                  Thank you, <strong style={{ color: '#FFF' }}>{patientName || 'Distinguished Patient'}</strong>. Your executive medical liaison will contact your private line within 2 hours.
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#B5B5B5', textTransform: uppercaseLetterSpacing }}>
                    CONCIERGE PASS REFERENCE
                  </span>
                  <br />
                  <div className="receipt-ref-code">{refCode}</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1.25rem', borderRadius: '12px', textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
                  <div style={{ color: '#D6B36A', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    RESERVATION SUMMARY
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#F5F5F5', display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span>Department:</span>
                    <strong>{currentDeptObj?.name}</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#F5F5F5', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Target Date:</span>
                    <strong>{preferredDate || 'Immediate Executive Queue'}</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            {step > 1 && step < 4 ? (
              <button className="btn-secondary-glass" onClick={handlePrevStep}>
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
            ) : <div />}

            {step < 4 ? (
              <button className="btn-primary-gold" onClick={handleNextStep}>
                <span>{step === 3 ? 'Confirm Concierge Request' : 'Continue'}</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button className="btn-primary-gold" style={{ margin: '0 auto' }} onClick={onClose}>
                <span>Close & Return to Site</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const uppercaseLetterSpacing = 'uppercase' as const;
