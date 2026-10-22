import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SectionRoots from './components/SectionRoots';
import SectionBranches from './components/SectionBranches';
import SectionWork from './components/SectionWork';
import SectionGrowthRings from './components/SectionGrowthRings';
import SectionGroundwork from './components/SectionGroundwork';
import SectionNewBranches from './components/SectionNewBranches';
import SectionHowWeWork from './components/SectionHowWeWork';
import SectionOffshoots from './components/SectionOffshoots';
import SectionContactFooter from './components/SectionContactFooter';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavigate = sectionId => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)]">
      {/* Subtle tactile paper grain overlay */}
      <div className="paper-grain" />

      {/* Global Navigation Bar */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        {/* Hero with 3D Japanese Maple Bonsai & Hotspots */}
        <HeroSection
          onOpenContact={() => setIsContactOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* 01 / The Roots */}
        <SectionRoots />

        {/* 02 / The Branches */}
        <SectionBranches />

        {/* 03 / Selected Work */}
        <SectionWork />

        {/* 04 / Growth Rings (Deep Spruce Section) */}
        <SectionGrowthRings />

        {/* 05 / The Groundwork */}
        <SectionGroundwork />

        {/* 06 / New Branches */}
        <SectionNewBranches
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 07 / How We Work */}
        <SectionHowWeWork />

        {/* 08 / The Offshoots */}
        <SectionOffshoots />

        {/* 09 / Your Idea, The Next Branch & Footer */}
        <SectionContactFooter
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Interactive Project Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
