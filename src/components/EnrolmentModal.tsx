import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Phone, Mail } from 'lucide-react';
import { ALL_PROGRAMMES } from '../data/programmes';
import { COMPANY_INFO } from '../data/company';

interface EnrolmentModalProps {
  isOpen: boolean;
  initialProgrammeId?: string;
  onClose: () => void;
  onOpenProspectus: () => void;
}

export const EnrolmentModal: React.FC<EnrolmentModalProps> = ({
  isOpen,
  initialProgrammeId,
  onClose,
  onOpenProspectus
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquirerType: 'individual',
    programmeId: initialProgrammeId || 'automotive-suspension-repairer',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reference, setReference] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReference(`4IR-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-neutral-200 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block">
              Official Enrolment Desk
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              4IR Artisan Centre Admissions
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Submitted State */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Application Received!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                Thank you for applying to 4IR Artisan Centre Training. Our admissions office will get in touch with you shortly.
              </p>
              <div className="p-3 bg-neutral-100 rounded text-xs font-mono text-slate-800">
                Application Ref: <span className="font-bold text-slate-900">{reference}</span>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenProspectus();
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
                >
                  Download Prospectus
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
                  {errorMsg}
                </div>
              )}

              {/* Qualification Select */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Programme:
                </label>
                <select
                  value={formData.programmeId}
                  onChange={(e) => setFormData({ ...formData, programmeId: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                >
                  {ALL_PROGRAMMES.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.title} ({prog.nqfLevel} · {prog.offeredBy})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Full Name &amp; Surname *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Sipho Ndlovu"
                  required
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="082 123 4567"
                    required
                    className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sipho@example.co.za"
                    required
                    className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Notes / Questions (Optional):
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any questions or specific cohort requirements..."
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 text-xs font-semibold tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Admission Request</span>
                  </>
                )}
              </button>

              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>QCTO Accredited Skills Development Provider</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
