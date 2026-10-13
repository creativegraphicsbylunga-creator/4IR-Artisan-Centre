import React from 'react';
import { Mail, Shield, User, Award, CheckCircle2, Phone, Briefcase } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { ORGANISATIONAL_ROLES } from '../data/programmes';

export const OrganisationalStructure: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            09. Governance & Team Accountability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Organisational Structure
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            4IR Artisan Centre Training is structured to deliver consistent, high-quality trade training across all programmes. Our team is lean, expert and fully accountable — every role exists to serve the learner and ensure programme excellence.
          </p>
        </div>

        {/* Director Spotlight (Recreating Page 14 prominent card) */}
        <div className="mb-14 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Director Monogram & Badge */}
            <div className="lg:col-span-3 bg-slate-900 p-8 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-slate-800 space-y-4">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-3xl shadow-lg shadow-amber-500/20">
                MZ
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                  Director &amp; Founder
                </span>
                <span className="text-sm font-semibold text-white mt-1 block">
                  4IR Artisan Centre
                </span>
              </div>
              <span className="text-[11px] text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                Youth-Led Leadership
              </span>
            </div>

            {/* Director Bio & Vision */}
            <div className="lg:col-span-9 p-8 sm:p-10 space-y-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {COMPANY_INFO.director.name}
                </h3>
                <div className="text-sm font-medium text-amber-400 mt-1">
                  Director — 4IR Artisan Centre Training
                </div>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Mr Zamisa is a young, forward-thinking leader with extensive hands-on experience in South Africa&apos;s skills development and training sector. As the founder and Director of 4IR Artisan Centre, he brings a fresh and innovation-driven outlook to artisan education — one that challenges conventional approaches to trade training and places the learner&apos;s economic future at the centre of every programme decision.
                </p>
                <p>
                  Under his leadership, 4IR has become more than a training provider — it is a platform for transformation, built on the conviction that young people in South Africa deserve access to world-class, industry-aligned trade qualifications that translate directly into employment and enterprise.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`mailto:${COMPANY_INFO.director.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: {COMPANY_INFO.director.email}</span>
                </a>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>QCTO Governance &amp; Regulatory Oversight</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Staff Roles Grid (Page 14 breakdown) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Operational &amp; Academic Leadership Structure
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline">
              End-to-end quality assurance &amp; workshop oversight
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ORGANISATIONAL_ROLES.slice(1).map((roleItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 shadow-xs hover:border-amber-400 transition-all space-y-3"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    {roleItem.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Stage 0{idx + 1}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900">
                  {roleItem.role}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {roleItem.description}
                </p>

                <div className="pt-2 text-xs font-medium text-slate-500 border-t border-neutral-200/60 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>QCTO Compliance Bound</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
