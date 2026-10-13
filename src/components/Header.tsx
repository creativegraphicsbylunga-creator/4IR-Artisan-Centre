import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeaderProps {
  onOpenEnrol: (programmeId?: string) => void;
  onOpenProspectus: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnrol, onOpenProspectus }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      {/* Top Banner Notice */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-neutral-300">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-400 uppercase tracking-wider text-[11px]">
              QCTO Accredited Skills Development Provider
            </span>
            <span className="hidden sm:inline text-neutral-500">·</span>
            <span className="hidden sm:inline text-neutral-300 text-[11px]">
              Accreditation No: {COMPANY_INFO.accreditation.numbers[0]}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} 
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{COMPANY_INFO.contact.phone}</span>
            </a>
            <span className="text-neutral-600">·</span>
            <button
              onClick={onOpenProspectus}
              className="text-amber-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
            >
              Download Prospectus
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation: Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 font-bold text-xl border border-slate-700 shadow-sm group-hover:bg-slate-800 transition-colors">
            4IR
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight group-hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
              4IR Artisan Centre
            </span>
            <span className="text-[11px] font-medium text-slate-700 uppercase tracking-wider">
              Training & Trade Centre
            </span>
          </div>
        </a>

        {/* Zone 2: 5 Concise Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a href="#about" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            About
          </a>
          <a href="#accreditation" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Accreditation
          </a>
          <a href="#flagship" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Trades
          </a>
          <a href="#network" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Network
          </a>
          <a href="#catalog" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Qualifications
          </a>
          <a href="#leadership" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Leadership
          </a>
          <a href="#contact" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenEnrol()}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all shadow-sm hover:shadow flex items-center gap-2 cursor-pointer"
          >
            <span>Enrol Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenEnrol()}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-md"
          >
            Enrol
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-md hover:bg-neutral-100"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100 hover:text-slate-900"
            >
              About the Centre
            </a>
            <a 
              href="#accreditation" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100 hover:text-slate-900"
            >
              QCTO Accreditation
            </a>
            <a 
              href="#flagship" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100 hover:text-slate-900"
            >
              Automotive Trades & Methodology
            </a>
            <a 
              href="#network" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100 hover:text-slate-900"
            >
              MOU Partner Network
            </a>
            <a 
              href="#catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100 hover:text-slate-900"
            >
              All 8 Qualifications Catalogue
            </a>
            <a 
              href="#leadership" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100 hover:text-slate-900"
            >
              Leadership & Structure
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100 hover:text-slate-900"
            >
              Contact & Directions
            </a>
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProspectus();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-center"
            >
              View Full Prospectus
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrol();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg text-center uppercase tracking-wider"
            >
              Enrol / Request Admission Info
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
