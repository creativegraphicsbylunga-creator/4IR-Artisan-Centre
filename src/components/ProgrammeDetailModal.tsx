import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Award, Clock, Users } from 'lucide-react';
import { ALL_PROGRAMMES } from '../data/programmes';

interface ProgrammeDetailModalProps {
  programmeId: string | null;
  onClose: () => void;
  onEnrol: (programmeId: string) => void;
}

export const ProgrammeDetailModal: React.FC<ProgrammeDetailModalProps> = ({
  programmeId,
  onClose,
  onEnrol
}) => {
  if (!programmeId) return null;

  const prog = ALL_PROGRAMMES.find((p) => p.id === programmeId);
  if (!prog) return null;

  const isOwn = prog.type === 'own';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-neutral-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className={`p-6 border-b ${isOwn ? 'bg-amber-500/10 border-amber-200' : 'bg-teal-50 border-teal-200'} flex items-start justify-between gap-4`}>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${
                isOwn ? 'bg-amber-200 text-amber-900' : 'bg-teal-200 text-teal-900'
              }`}>
                {isOwn ? '4IR Direct Accreditation' : 'MOU Partner Network'}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {prog.setaOrganizer}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {prog.title}
            </h3>
            <div className="text-xs font-mono text-slate-600 mt-1">
              Accreditation: {prog.accreditationNo}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs">
            <div>
              <span className="text-slate-500 block">NQF Level</span>
              <span className="font-bold text-slate-900">{prog.nqfLevel}</span>
            </div>
            <div>
              <span className="text-slate-500 block">SAQA / OFO</span>
              <span className="font-mono font-bold text-slate-900">{prog.saqaIdOrOfo}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Credits</span>
              <span className="font-bold text-slate-900">{prog.credits || 'Trade Core'}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Delivery Body</span>
              <span className="font-bold text-slate-900 truncate block">{prog.offeredBy}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Qualification Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {prog.summary}
            </p>
          </div>

          {/* Target Audience */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Ideal Candidate Profile
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {prog.targetAudience}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Assessed Competencies &amp; Learning Outcomes:
            </h4>
            <div className="space-y-2">
              {prog.competencies.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MOU Partner Note if applicable */}
          {prog.mouPartnerDetails && (
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl text-xs text-teal-900 space-y-1">
              <span className="font-bold block">Collaborative MOU Institution:</span>
              <p>
                Offered by <strong>{prog.mouPartnerDetails.name}</strong> ({prog.mouPartnerDetails.specialization}) in partnership with 4IR Artisan Centre delivery facilities.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-neutral-50 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 rounded-lg cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onEnrol(prog.id);
            }}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Enrol in this Qualification</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
