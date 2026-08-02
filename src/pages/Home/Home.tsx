import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { WhyUs } from '../../components/WhyUs/WhyUs';
import { Departments } from '../../components/Departments/Departments';
import { Doctors } from '../../components/Doctors/Doctors';
import { AboutPreview } from '../../components/AboutPreview/AboutPreview';
import { PatientExperience } from '../../components/PatientExperience/PatientExperience';
import { AppointmentCTA } from '../../components/AppointmentCTA/AppointmentCTA';
import { Department, Doctor } from '../../data/hospitalData';
import './Home.css';

interface HomeProps {
  onOpenAppointmentModal: () => void;
  onSelectDepartment: (dept: Department) => void;
  onSelectDoctor: (doc: Doctor) => void;
}

export const Home: React.FC<HomeProps> = ({
  onOpenAppointmentModal,
  onSelectDepartment,
  onSelectDoctor
}) => {
  return (
    <div className="home-page-container">
      <Hero onOpenAppointmentModal={onOpenAppointmentModal} />
      <WhyUs />
      <Departments onSelectDepartment={onSelectDepartment} />
      <Doctors onSelectDoctorBook={onSelectDoctor} />
      <AboutPreview />
      <PatientExperience />
      <AppointmentCTA onOpenAppointmentModal={onOpenAppointmentModal} />
    </div>
  );
};
