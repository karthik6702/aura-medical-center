import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppointmentModal } from './components/AppointmentModal/AppointmentModal';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { DepartmentsPage } from './pages/Departments/DepartmentsPage';
import { DoctorsPage } from './pages/Doctors/DoctorsPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { Department, Doctor } from './data/hospitalData';
import { CookieConsent } from "./components/CookieConsent/CookieConsent";

// Helper component to reset scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDepartment, setModalDepartment] = useState<Department | null>(null);
  const [modalDoctor, setModalDoctor] = useState<Doctor | null>(null);

  const handleOpenAppointmentModal = () => {
    setModalDepartment(null);
    setModalDoctor(null);
    setModalOpen(true);
  };

  const handleOpenModalWithDept = (dept: Department) => {
    setModalDepartment(dept);
    setModalDoctor(null);
    setModalOpen(true);
  };

  const handleOpenModalWithDoctor = (doc: Doctor) => {
    setModalDoctor(doc);
    setModalDepartment(null);
    setModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <ScrollProgress />
          <CustomCursor />
          <div className="ambient-background">
            <div className="ambient-glow-1" />
            <div className="ambient-glow-2" />
          </div>
          <div className="noise-overlay" />

          <Header onOpenAppointmentModal={handleOpenAppointmentModal} />

          <main style={{ minHeight: '80vh', position: 'relative', zIndex: 2 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onOpenAppointmentModal={handleOpenAppointmentModal}
                    onSelectDepartment={handleOpenModalWithDept}
                    onSelectDoctor={handleOpenModalWithDoctor}
                  />
                }
              />
              <Route
                path="/about"
                element={<About onOpenAppointmentModal={handleOpenAppointmentModal} />}
              />
              <Route
                path="/departments"
                element={<DepartmentsPage onOpenAppointmentModalWithDept={handleOpenModalWithDept} />}
              />
              <Route
                path="/doctors"
                element={<DoctorsPage onOpenAppointmentModalWithDoc={handleOpenModalWithDoctor} />}
              />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <Footer />
          <CookieConsent />

          <AppointmentModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            initialDepartment={modalDepartment}
            initialDoctor={modalDoctor}
          />
        </>
      )}
    </BrowserRouter>
  );
}

