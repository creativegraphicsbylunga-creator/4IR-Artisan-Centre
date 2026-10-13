import React from 'react';
import { Users, CheckCircle2, TrendingUp, GraduationCap, Briefcase, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const ImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            07. Tangible Transformation & Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Impact — 150+ Artisans Trained
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Since opening our doors, 4IR Artisan Centre Training has made a real and lasting difference in the lives of over 150 learners. Every graduate enters the workforce with a nationally recognised QCTO trade certificate and practical skills.
          </p>
        </div>

        {/* 3 Metric High-Impact Callout Cards (Page 12 visual reproduction) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-sm flex flex-col justify-center items-center text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
              150+
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Artisans Trained &amp; Certified
            </div>
            <p className="text-xs text-slate-400 max-w-xs">
              Graduated with registered QCTO trade credentials and workplace competence
            </p>
          </div>

          <div className="p-8 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-sm flex flex-col justify-center items-center text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
              2
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              QCTO Trade Accreditations
            </div>
            <p className="text-xs text-slate-400 max-w-xs">
              Direct institutional accreditations in Suspension Repair and Wheel Balancing
            </p>
          </div>

          <div className="p-8 rounded-xl bg-amber-500 text-slate-950 border border-amber-600 shadow-sm flex flex-col justify-center items-center text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-slate-950 tracking-tight">
              4IR
            </div>
            <div className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Modern Economy Ready
            </div>
            <p className="text-xs text-slate-900/80 max-w-xs font-medium">
              Digital diagnostics, precision electronics, and automated testing systems
            </p>
          </div>
        </div>

        {/* 2-Column Split: Who We Train & Graduate Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Column 1: Who We Train */}
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Who We Train
                </h3>
                <span className="text-xs text-slate-500">
                  Serving diverse learners and corporate client sectors
                </span>
              </div>
            </div>

            <div className="space-y-3.5">
              {COMPANY_INFO.whoWeTrain.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Graduate Outcomes */}
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Graduate Outcomes
                </h3>
                <span className="text-xs text-slate-500">
                  Meaningful careers across South Africa&apos;s economy
                </span>
              </div>
            </div>

            <div className="space-y-3.5">
              {COMPANY_INFO.graduateOutcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
