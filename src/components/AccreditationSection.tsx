import React from 'react';
import { ShieldCheck, Award, FileCheck2, Scale, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface AccreditationSectionProps {
  onOpenEnrol: (programmeId?: string) => void;
}

export const AccreditationSection: React.FC<AccreditationSectionProps> = ({ onOpenEnrol }) => {
  return (
    <section id="accreditation" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            03. Regulatory Standing & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            QCTO Accreditation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            The gold standard for trade training in South Africa. Our facilities, facilitators, assessors, and programme delivery meet stringent national statutory quality benchmarks.
          </p>
        </div>

        {/* Regulatory Context Box */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl bg-slate-950 text-white border border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Scale className="w-4 h-4" />
                <span>Statutory Authority & Framework</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Quality Council for Trades and Occupations (QCTO)
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                4IR Artisan Centre Training holds formal accreditation from the <strong>Quality Council for Trades and Occupations (QCTO)</strong> — South Africa&apos;s statutory body responsible for the quality assurance of occupational qualifications and trade programmes under the <strong>Skills Development Act (Act No. 97 of 1998)</strong>.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Our accreditation status is subject to ongoing quality assurance site inspections, learner logbook moderations, and learner data submission cycles. 4IR Artisan Centre is fully compliant with the <strong>National Qualifications Framework Amendment Act 12 of 2019</strong> and all QCTO policies and procedures.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-900 p-6 rounded-lg border border-slate-800 space-y-4">
              <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                Official Accreditation Numbers
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-slate-950 rounded border border-slate-800">
                  <div className="text-[10px] text-amber-400 uppercase font-sans font-medium">SDP Accreditation No. 1</div>
                  <div className="text-white font-bold text-sm tracking-wide mt-0.5">
                    07-QCTO/SDP250526181019
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans mt-0.5">Automotive Suspension Repairer</div>
                </div>

                <div className="p-3 bg-slate-950 rounded border border-slate-800">
                  <div className="text-[10px] text-amber-400 uppercase font-sans font-medium">SDP Accreditation No. 2</div>
                  <div className="text-white font-bold text-sm tracking-wide mt-0.5">
                    07-QCTO/SDP150626150900
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans mt-0.5">Wheel Balancer Trade</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Own Direct Trade Qualifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Automotive Suspension Repairer */}
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:border-amber-400 transition-colors flex flex-col justify-between">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    Trade Qualification · Automotive Sector
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Automotive Suspension Repairer
                  </h3>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                  QCTO Accredited
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Diagnosis, repair and replacement of vehicle suspension systems on light and heavy motor vehicles. Nationally listed trade qualification recognized across the automotive workshop ecosystem.
              </p>

              <div className="space-y-2 pt-2 border-t border-neutral-200 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-slate-500">Accrediting Body</span>
                  <span className="font-semibold text-slate-900">QCTO</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-slate-500">Qualification Type</span>
                  <span className="font-semibold text-slate-900">Listed Trade Qualification</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-slate-500">NQF Level</span>
                  <span className="font-semibold text-slate-900">NQF Level 02</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-slate-500">SETA Quality Partner</span>
                  <span className="font-semibold text-slate-900">MERSETA</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Accreditation Number</span>
                  <span className="font-mono font-medium text-slate-900">07-QCTO/SDP250526181019</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border-t border-neutral-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Direct Provider Status</span>
              <button
                onClick={() => onOpenEnrol('automotive-suspension-repairer')}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
              >
                Enrol for Programme
              </button>
            </div>
          </div>

          {/* Card 2: Wheel Balancer */}
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:border-amber-400 transition-colors flex flex-col justify-between">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    Trade Qualification · Automotive Sector
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Wheel Balancer
                  </h3>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                  QCTO Accredited
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Static and dynamic balancing of vehicle wheels and tyres using precision computerized equipment. Critical vehicle stability, tyre wear and braking safety trade.
              </p>

              <div className="space-y-2 pt-2 border-t border-neutral-200 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-slate-500">Accrediting Body</span>
                  <span className="font-semibold text-slate-900">QCTO</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-slate-500">Qualification Type</span>
                  <span className="font-semibold text-slate-900">Listed Trade Qualification</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-slate-500">NQF Level</span>
                  <span className="font-semibold text-slate-900">NQF Level 01</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-slate-500">SETA Quality Partner</span>
                  <span className="font-semibold text-slate-900">MERSETA</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Accreditation Number</span>
                  <span className="font-mono font-medium text-slate-900">07-QCTO/SDP150626150900</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border-t border-neutral-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Direct Provider Status</span>
              <button
                onClick={() => onOpenEnrol('wheel-balancer')}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
              >
                Enrol for Programme
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
