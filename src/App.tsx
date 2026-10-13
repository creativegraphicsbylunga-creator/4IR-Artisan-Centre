/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyGlance } from './components/CompanyGlance';
import { VisionMissionValues } from './components/VisionMissionValues';
import { AccreditationSection } from './components/AccreditationSection';
import { FlagshipProgrammes } from './components/FlagshipProgrammes';
import { CollaborativeNetwork } from './components/CollaborativeNetwork';
import { ProgrammeCatalogue } from './components/ProgrammeCatalogue';
import { ImpactSection } from './components/ImpactSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OrganisationalStructure } from './components/OrganisationalStructure';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnrolmentModal } from './components/EnrolmentModal';
import { ProgrammeDetailModal } from './components/ProgrammeDetailModal';
import { ProspectusModal } from './components/ProspectusModal';

export default function App() {
  const [enrolModalOpen, setEnrolModalOpen] = useState(false);
  const [selectedEnrolProgrammeId, setSelectedEnrolProgrammeId] = useState<string | undefined>();
  const [detailModalProgrammeId, setDetailModalProgrammeId] = useState<string | null>(null);
  const [prospectusModalOpen, setProspectusModalOpen] = useState(false);

  const handleOpenEnrol = (programmeId?: string) => {
    setSelectedEnrolProgrammeId(programmeId);
    setEnrolModalOpen(true);
  };

  const handleOpenDetail = (programmeId: string) => {
    setDetailModalProgrammeId(programmeId);
  };

  const handleOpenProspectus = () => {
    setProspectusModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Navigation Top Bar */}
      <Header
        onOpenEnrol={handleOpenEnrol}
        onOpenProspectus={handleOpenProspectus}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenEnrol={() => handleOpenEnrol()}
          onOpenProspectus={handleOpenProspectus}
        />

        {/* 1. About & Company at a Glance */}
        <CompanyGlance />

        {/* 2. Vision, Mission & Core Values */}
        <VisionMissionValues />

        {/* 3. QCTO Accreditation Deep Dive */}
        <AccreditationSection
          onOpenEnrol={handleOpenEnrol}
        />

        {/* 4. Core Training Programmes & Services */}
        <FlagshipProgrammes
          onOpenEnrol={handleOpenEnrol}
          onOpenDetail={handleOpenDetail}
        />

        {/* 5. Collaborative Training Network (MOU Partners) */}
        <CollaborativeNetwork
          onOpenEnrol={handleOpenEnrol}
          onOpenDetail={handleOpenDetail}
        />

        {/* 6. Complete Programme Catalogue Matrix */}
        <ProgrammeCatalogue
          onOpenEnrol={handleOpenEnrol}
          onOpenDetail={handleOpenDetail}
          onOpenProspectus={handleOpenProspectus}
        />

        {/* 7. Our Impact (150+ Artisans Trained) */}
        <ImpactSection />

        {/* 8. Why Choose 4IR Artisan Centre */}
        <WhyChooseUs />

        {/* 9. Organisational Structure & Director Profile */}
        <OrganisationalStructure />

        {/* 10. Contact Us & Admissions Desk */}
        <ContactSection
          initialProgrammeId={selectedEnrolProgrammeId}
          onOpenProspectus={handleOpenProspectus}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenEnrol={() => handleOpenEnrol()}
        onOpenProspectus={handleOpenProspectus}
      />

      {/* Interactive Enrolment Modal */}
      <EnrolmentModal
        isOpen={enrolModalOpen}
        initialProgrammeId={selectedEnrolProgrammeId}
        onClose={() => setEnrolModalOpen(false)}
        onOpenProspectus={handleOpenProspectus}
      />

      {/* Syllabus / Detail Modal */}
      <ProgrammeDetailModal
        programmeId={detailModalProgrammeId}
        onClose={() => setDetailModalProgrammeId(null)}
        onEnrol={handleOpenEnrol}
      />

      {/* Full Prospectus Viewer Modal */}
      <ProspectusModal
        isOpen={prospectusModalOpen}
        onClose={() => setProspectusModalOpen(false)}
      />
    </div>
  );
}
