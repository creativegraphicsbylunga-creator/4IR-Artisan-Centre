import React from 'react';
import { Wrench, CheckCircle2, Gauge, Cpu, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FlagshipProgrammesProps {
  onOpenEnrol: (programmeId?: string) => void;
  onOpenDetail: (programmeId: string) => void;
}

export const FlagshipProgrammes: React.FC<FlagshipProgrammesProps> = ({ onOpenEnrol, onOpenDetail }) => {
  return (
    <section id="flagship" className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            04. Core Training Programmes & Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Automotive Trades
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every programme is designed with one objective: to produce a competent, confident, industry-ready artisan. Structured around the QCTO occupational qualification framework.
          </p>
        </div>

        {/* Flagship Programme 1: Automotive Suspension Repairer */}
        <div className="mb-16 bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Bay Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src="/src/assets/images/automotive_suspension_bay_1791821650800.jpg"
                alt="Automotive Suspension Repair Training Workshop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  MERSETA / QCTO
                </span>
                <h3 className="text-lg font-bold">Suspension Diagnostic Training</h3>
              </div>
            </div>

            {/* Content & Competencies */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    QCTO Listed Trade · Automotive Sector · NQF Level 2
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-neutral-100 px-2 py-0.5 rounded">
                    Accreditation: 07-QCTO/SDP250526181019
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Automotive Suspension Repairer
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  The Automotive Suspension Repairer qualification equips learners with comprehensive knowledge and practical skills required to inspect, diagnose, repair, and replace vehicle suspension systems on a wide range of light and heavy motor vehicles. Graduates hold a nationally listed trade credential respected by workshops, dealerships, and fleet managers.
                </p>

                {/* Programme Competencies Grid */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-amber-600" />
                    <span>Programme Competencies:</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Inspect & diagnose vehicle suspension systems for faults & wear</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Remove, repair & replace shock absorbers, springs, control arms & bushes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Perform wheel alignment checks & adjustments to factory specs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Interpret manufacturer technical service manuals & tolerances</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Apply health, safety & environmental standards in the workshop</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Use modern electronic diagnostic & pneumatic tools to industry standard</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onOpenDetail('automotive-suspension-repairer')}
                  className="text-xs font-semibold text-slate-800 hover:text-amber-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Full Syllabus & Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenEnrol('automotive-suspension-repairer')}
                  className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Apply for Suspension Trade
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Flagship Programme 2: Wheel Balancer */}
        <div className="mb-20 bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Wheel Balancer Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full lg:order-2">
              <img
                src="/src/assets/images/wheel_balancing_tech_1791821663482.jpg"
                alt="Computerized Wheel Balancing Workshop Training"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  MERSETA / QCTO
                </span>
                <h3 className="text-lg font-bold">Precision Dynamic Wheel Balancing</h3>
              </div>
            </div>

            {/* Content & Competencies */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 lg:order-1">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    QCTO Listed Trade · Tyre & Fitment Sector · NQF Level 1
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-neutral-100 px-2 py-0.5 rounded">
                    Accreditation: 07-QCTO/SDP150626150900
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Wheel Balancer
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  The Wheel Balancer trade qualification trains learners in the precise art and science of balancing vehicle wheels — a critical safety and high-performance function in every automotive workshop. Learners master both static and dynamic balancing techniques using computerised balancing equipment, ensuring immediate productivity in tyre centres, fitment shops, and dealership bays.
                </p>

                {/* Programme Competencies Grid */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-amber-600" />
                    <span>Programme Competencies:</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Perform static & dynamic wheel balancing on all vehicle types</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Operate computerised wheel balancing machines to specs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Mount & demount tyres safely using bead-breakers & tyre changers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Identify balance weights, valve types & radial/cross-ply construction</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Diagnose vehicle vibration & handling problems from wheel imbalance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Apply workshop safety protocols & PPE compliance at all times</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onOpenDetail('wheel-balancer')}
                  className="text-xs font-semibold text-slate-800 hover:text-amber-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Full Syllabus & Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenEnrol('wheel-balancer')}
                  className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Apply for Wheel Balancer Trade
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Training Methodology (From Page 11 of Document) */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
              Instructional Rigour
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Our Training Methodology
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              4IR Artisan Centre uses a blended, competency-based training methodology aligned to QCTO occupational qualification requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Competency-Based Assessment
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learners are assessed against nationally defined competency standards — no learner graduates without demonstrating full trade competence.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Workshop-Integrated Learning
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Practical sessions use real vehicles and industry-standard tools, mirroring what employers expect on day one on the job.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <Users2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Small Cohort Sizes
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We strictly limit cohort sizes to maximise individual attention, practical time on tools, and one-on-one facilitator engagement.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                4IR Technology Exposure
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We incorporate digital diagnostics, computerised balancing systems, and modern automotive technology to prepare learners for the 4th Industrial Revolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
