import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FooterProps {
  onOpenEnrol: () => void;
  onOpenProspectus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnrol, onOpenProspectus }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-lg">
                4IR
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                4IR Artisan Centre
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              QCTO-accredited Skills Development Provider committed to preparing South Africa&apos;s youth and industry professionals for the Fourth Industrial Revolution through practical trade excellence.
            </p>

            <div className="pt-2 text-xs text-amber-400 font-medium italic">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </div>

            <div className="pt-2 text-[11px] text-slate-400 font-mono space-y-0.5">
              <div>QCTO SDP No: 07-QCTO/SDP250526181019</div>
              <div>QCTO SDP No: 07-QCTO/SDP150626150900</div>
            </div>
          </div>

          {/* Direct Qualifications */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Direct Trades
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#flagship" className="hover:text-amber-400 transition-colors">
                  Automotive Suspension Repairer (NQF L2)
                </a>
              </li>
              <li>
                <a href="#flagship" className="hover:text-amber-400 transition-colors">
                  Wheel Balancer (NQF L1)
                </a>
              </li>
              <li>
                <a href="#accreditation" className="hover:text-amber-400 transition-colors">
                  QCTO Accreditation Status
                </a>
              </li>
              <li>
                <a href="#flagship" className="hover:text-amber-400 transition-colors">
                  Training Methodology
                </a>
              </li>
            </ul>
          </div>

          {/* MOU Network Qualifications */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Collaborative Network
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#network" className="hover:text-amber-400 transition-colors">
                  Transportation Electrician (Auto-Electrical)
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-amber-400 transition-colors">
                  New Venture Creation
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-amber-400 transition-colors">
                  Mobile Phone Repairer
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-amber-400 transition-colors">
                  Basic Kitchen Appliance Repairer
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-amber-400 transition-colors">
                  Supply Chain Practitioner &amp; Manager
                </a>
              </li>
            </ul>
          </div>

          {/* Campus & Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Campus &amp; Admissions
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  657 James Crescent, Unit C3 Mount Royal, Halfway House, Midrand, Gauteng, 1685
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.generalEmail}`} className="hover:text-white">
                  {COMPANY_INFO.contact.generalEmail}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenProspectus}
                className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
              >
                Download Course Prospectus &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} 4IR Artisan Centre Training. All rights reserved.</span>
            <span>·</span>
            <span>Skills Development Act (Act No. 97 of 1998)</span>
            <span>·</span>
            <span>NQF Act 12 of 2019</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnrol}
              className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
            >
              Enrol Online
            </button>
            <span>·</span>
            <a href="#about" className="hover:text-slate-400">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
