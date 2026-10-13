import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink,
  Building,
  User
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { ALL_PROGRAMMES } from '../data/programmes';

interface ContactSectionProps {
  initialProgrammeId?: string;
  onOpenProspectus: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialProgrammeId,
  onOpenProspectus 
}) => {
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
  const [submissionRef, setSubmissionRef] = useState('');
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
      setErrorMsg('Please enter your phone or contact number.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionRef(`4IR-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      enquirerType: 'individual',
      programmeId: 'automotive-suspension-repairer',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            10. Admissions & Corporate Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact 4IR Artisan Centre
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            We are ready to partner with you to build the skilled workforce South Africa needs. Reach our admissions desk or connect directly with our leadership team.
          </p>
        </div>

        {/* 2-Column Split: Official Details & Interactive Enrolment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Card (Page 15 1:1 reproduction) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-lg space-y-6">
              <div className="border-b border-slate-800 pb-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                  <Building className="w-4 h-4" />
                  <span>Headquarters &amp; Training Facility</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">
                  4IR Artisan Centre Training
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Director: {COMPANY_INFO.director.name} · Youth-Led Training Provider
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-4 text-sm text-slate-300">
                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 shrink-0 border border-slate-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Telephone / Admissions Desk</span>
                    <a 
                      href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} 
                      className="font-bold text-white hover:text-amber-400 transition-colors text-base"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Director Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 shrink-0 border border-slate-800">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Director Direct Enquiries</span>
                    <a 
                      href={`mailto:${COMPANY_INFO.contact.directorEmail}`} 
                      className="font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      {COMPANY_INFO.contact.directorEmail}
                    </a>
                  </div>
                </div>

                {/* General Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 shrink-0 border border-slate-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">General Admissions &amp; Corporate Enquiries</span>
                    <a 
                      href={`mailto:${COMPANY_INFO.contact.generalEmail}`} 
                      className="font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      {COMPANY_INFO.contact.generalEmail}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 shrink-0 border border-slate-800">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Workshop &amp; Campus Location</span>
                    <address className="not-italic text-sm text-slate-200 leading-snug">
                      {COMPANY_INFO.contact.address.street}, {COMPANY_INFO.contact.address.unit}<br />
                      {COMPANY_INFO.contact.address.suburb}, {COMPANY_INFO.contact.address.city}, {COMPANY_INFO.contact.address.province}, {COMPANY_INFO.contact.address.postalCode}
                    </address>
                    <a
                      href={COMPANY_INFO.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Official QCTO Accreditation Numbers Block */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>QCTO Accreditation Verification</span>
                </div>
                <div className="font-mono text-xs text-slate-300 space-y-1">
                  <div>07-QCTO/SDP250526181019</div>
                  <div>07-QCTO/SDP150626150900</div>
                </div>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  Accredited Skills Development Provider · Republic of South Africa
                </div>
              </div>

              {/* Direct Quick WhatsApp Connect */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/27826486529?text=Hello%204IR%20Artisan%20Centre,%20I%20am%20interested%20in%20enrolling%20for%20an%20accredited%20qualification.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenProspectus}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs text-center transition-colors cursor-pointer"
                >
                  Download Prospectus
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enrolment & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white text-slate-900 shadow-xl border border-neutral-200">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Enrolment Request Submitted
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Our admissions coordinator will contact you via phone ({formData.phone}) and email ({formData.email}) with intake dates and documentation.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-100 rounded-lg max-w-sm mx-auto font-mono text-xs text-slate-700 space-y-1">
                    <div>Reference: <span className="font-bold text-slate-900">{submissionRef}</span></div>
                    <div>Programme: <span className="font-semibold text-slate-900">{ALL_PROGRAMMES.find(p => p.id === formData.programmeId)?.title}</span></div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={onOpenProspectus}
                      className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    >
                      View Programme Prospectus
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-neutral-200 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      Enrolment &amp; Programme Enquiry
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Register your interest for upcoming 2026/2027 intake cohorts or corporate workplace training.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Enquirer Classification */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      I am applying as:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'individual', label: 'Learner / Youth' },
                        { id: 'corporate', label: 'Corporate Fleet' },
                        { id: 'smme', label: 'SMME Workshop' },
                        { id: 'parent', label: 'Parent / Sponsor' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, enquirerType: item.id })}
                          className={`py-2 px-2.5 text-xs font-semibold rounded-md border transition-colors text-center cursor-pointer ${
                            formData.enquirerType === item.id
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-neutral-50 text-slate-600 border-neutral-200 hover:bg-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Programme Select */}
                  <div className="space-y-1.5">
                    <label htmlFor="programmeId" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Select Qualification / Programme of Interest:
                    </label>
                    <select
                      id="programmeId"
                      value={formData.programmeId}
                      onChange={(e) => setFormData({ ...formData, programmeId: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    >
                      <optgroup label="Direct 4IR Artisan Centre Qualifications (QCTO)">
                        <option value="automotive-suspension-repairer">
                          Automotive Suspension Repairer (NQF Level 2)
                        </option>
                        <option value="wheel-balancer">
                          Wheel Balancer (NQF Level 1)
                        </option>
                      </optgroup>
                      <optgroup label="MOU Partner Network Qualifications">
                        <option value="transportation-electrician">
                          Transportation Electrician (Automotive) — Thutha Ngwane Projects
                        </option>
                        <option value="new-venture-creation">
                          New Venture Creation (NQF Level 2) — Thutha Ngwane Projects
                        </option>
                        <option value="mobile-phone-repairer">
                          Mobile Phone Repairer (NQF Level 2) — Sekeno Training Institute
                        </option>
                        <option value="basic-kitchen-appliance-repairer">
                          Basic Kitchen Appliance Repairer (NQF Level 2) — Sekeno Training Institute
                        </option>
                        <option value="supply-chain-practitioner">
                          Supply Chain Practitioner (NQF Level 5) — Eyesizwe Corporation
                        </option>
                        <option value="supply-chain-manager">
                          Supply Chain Manager (NQF Level 6) — Eyesizwe Corporation
                        </option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name &amp; Surname *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sipho Ndlovu"
                        required
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 082 123 4567"
                        required
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sipho@example.co.za"
                      required
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Additional Details / Enrolment Questions:
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your prior technical experience, intake date preference, or company fleet requirements..."
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 text-xs font-semibold tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Processing Application...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Enrolment / Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Your information is protected in compliance with the POPI Act and QCTO data policies.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
