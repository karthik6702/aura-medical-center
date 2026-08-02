import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Calendar, Menu, X } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  onOpenAppointmentModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Departments', path: '/departments' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-lux header-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo">
            <div className="brand-icon-box">
              <Shield size={22} color="#D6B36A" strokeWidth={1.8} />
            </div>
            <div className="brand-text-container">
              <span className="brand-name">AURA</span>
              <span className="brand-tag">MEDICAL CENTER</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className={`nav-item ${isActive ? 'active' : ''}`}>
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="nav-underline"
                      layoutId="navUnderline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="header-actions">
            <button className="btn-header-appointment" onClick={onOpenAppointmentModal}>
              <Calendar size={16} color="#D6B36A" />
              <span>Book Appointment</span>
            </button>

            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-drawer-header">
              <Link to="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
                <div className="brand-icon-box">
                  <Shield size={22} color="#D6B36A" />
                </div>
                <div className="brand-text-container">
                  <span className="brand-name">AURA</span>
                  <span className="brand-tag">MEDICAL CENTER</span>
                </div>
              </Link>
              <button className="mobile-toggle-btn" onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="mobile-nav-list">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              <button
                className="btn-header-appointment"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  setMobileOpen(false);
                  onOpenAppointmentModal();
                }}
              >
                <Calendar size={18} color="#D6B36A" />
                <span>Book Concierge Appointment</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
