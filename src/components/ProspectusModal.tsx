import React from 'react';
import { X, Printer, Download, Award, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { ALL_PROGRAMMES } from '../data/programmes';
import { COMPANY_INFO } from '../data/company';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-neutral-300 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Action Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm">4IR Artisan Centre Prospectus &amp; Programme Guide</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close prospectus"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-900 print:p-0">
          {/* Header Block matching PDF style */}
          <div className="border-b-2 border-slate-900 pb-6 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              QCTO ACCREDITED SKILLS DEVELOPMENT PROVIDER
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                  4IR ARTISAN CENTRE TRAINING
                </h1>
                <p className="text-sm font-semibold text-slate-700 italic">
                  &ldquo;Skilled Today, Empowering Tomorrow.&rdquo;
                </p>
              </div>
              <div className="text-xs text-slate-600 sm:text-right font-mono">
                <div>Midrand, Gauteng · South Africa</div>
                <div>SDP No: 07-QCTO/SDP250526181019</div>
                <div>SDP No: 07-QCTO/SDP150626150900</div>
              </div>
            </div>
          </div>

          {/* Quick Summary Statement */}
          <div className="p-4 bg-neutral-100 rounded-lg text-xs sm:text-sm text-slate-700 leading-relaxed">
            4IR Artisan Centre Training is a QCTO-accredited Skills Development Provider dedicated to building the artisan workforce of the Fourth Industrial Revolution. Under the directorship of Mr Mthobisi Zamisa, the centre offers 8 registered qualifications across automotive trades, consumer electronics repair, new venture creation, and supply chain management.
          </div>

          {/* Complete Qualifications Catalogue Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-950">
              Complete Programme Catalogue (8 Qualifications)
            </h3>

            <div className="border border-neutral-300 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-neutral-300 text-slate-800 font-bold uppercase text-[10px]">
                    <th className="py-2.5 px-3">Programme</th>
                    <th className="py-2.5 px-2">NQF Level</th>
                    <th className="py-2.5 px-2">SAQA / OFO</th>
                    <th className="py-2.5 px-3">Offered By</th>
                    <th className="py-2.5 px-2">SETA</th>
                    <th className="py-2.5 px-2">Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {ALL_PROGRAMMES.map((prog) => {
                    const isOwn = prog.type === 'own';
                    return (
                      <tr key={prog.id} className={isOwn ? 'bg-amber-50/50' : 'bg-white'}>
                        <td className="py-2.5 px-3 font-semibold text-slate-900">
                          {prog.title}
                        </td>
                        <td className="py-2.5 px-2 font-medium text-slate-700">
                          {prog.nqfLevel}
                        </td>
                        <td className="py-2.5 px-2 font-mono text-slate-600">
                          {prog.saqaIdOrOfo}
                        </td>
                        <td className="py-2.5 px-3 text-slate-700">
                          {prog.offeredBy}
                        </td>
                        <td className="py-2.5 px-2 font-medium text-slate-700">
                          {prog.setaOrganizer}
                        </td>
                        <td className="py-2.5 px-2 font-bold text-[10px]">
                          {isOwn ? 'Direct QCTO' : 'MOU Network'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Flagship Trades Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2">
              <span className="font-bold uppercase tracking-wider text-amber-700 block text-[11px]">
                Automotive Suspension Repairer (NQF Level 2)
              </span>
              <p className="text-slate-600 leading-relaxed">
                Covers vehicle suspension diagnosis, shock absorber replacement, control arm &amp; bushing rebuilding, wheel alignment checks, and modern electronic diagnostic scan tools.
              </p>
              <div className="font-mono text-[10px] text-slate-500">
                Accreditation: 07-QCTO/SDP250526181019
              </div>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2">
              <span className="font-bold uppercase tracking-wider text-amber-700 block text-[11px]">
                Wheel Balancer (NQF Level 1)
              </span>
              <p className="text-slate-600 leading-relaxed">
                Covers static &amp; dynamic wheel balancing on all vehicle types, computerized wheel balancing machines, bead-breaker tyre mounting, and vibration diagnosis.
              </p>
              <div className="font-mono text-[10px] text-slate-500">
                Accreditation: 07-QCTO/SDP150626150900
              </div>
            </div>
          </div>

          {/* Contact Details & Campus */}
          <div className="pt-6 border-t border-neutral-300 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <div className="font-bold text-slate-900">Telephone / Cell:</div>
              <div className="text-slate-700">{COMPANY_INFO.contact.phone}</div>
            </div>
            <div>
              <div className="font-bold text-slate-900">Official Email:</div>
              <div className="text-slate-700">{COMPANY_INFO.contact.generalEmail}</div>
              <div className="text-slate-500">{COMPANY_INFO.contact.directorEmail}</div>
            </div>
            <div>
              <div className="font-bold text-slate-900">Training Facility:</div>
              <div className="text-slate-700">{COMPANY_INFO.contact.address.full}</div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Official Document · 4IR Artisan Centre Training
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-neutral-300 rounded-md cursor-pointer"
          >
            Close Prospectus
          </button>
        </div>
      </div>
    </div>
  );
};
