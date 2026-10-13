import React from 'react';
import { Network, ShieldCheck, CheckCircle2, ArrowRight, Zap, Smartphone, Truck } from 'lucide-react';
import { MOU_PARTNERS } from '../data/programmes';

interface CollaborativeNetworkProps {
  onOpenEnrol: (programmeId?: string) => void;
  onOpenDetail: (programmeId: string) => void;
}

export const CollaborativeNetwork: React.FC<CollaborativeNetworkProps> = ({ onOpenEnrol, onOpenDetail }) => {
  return (
    <section id="network" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            05. Extended Ecosystem & Strategic Alliances
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Collaborative Training Network — Extended Programmes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            South Africa&apos;s skills development needs are vast and urgent. Through formal Memoranda of Understanding (MOUs) with fellow accredited Skills Development Providers, 4IR delivers an expanded portfolio of 8 high-impact qualifications.
          </p>
        </div>

        {/* How the MOU Model Works Compliance Explainer */}
        <div className="mb-14 p-6 sm:p-8 rounded-xl bg-neutral-900 text-white border border-neutral-800 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Compliant Delivery Architecture</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            How the MOU Partnership Model Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-sm leading-relaxed">
            <p>
              Under each formal <strong>Memorandum of Understanding (MOU)</strong>, the accredited partner institution provides the registered qualification, QCTO accreditation framework, and primary quality assurance standards.
            </p>
            <p>
              <strong>4IR Artisan Centre</strong> contributes its modern workshop delivery infrastructure, experienced facilitator network, learner management systems, and corporate client relationships.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center gap-3 text-xs text-teal-300">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-400" />
            <span>
              Certificates are issued under the accredited partner&apos;s registered QCTO accreditation number — ensuring every learner receives a fully valid, nationally registered qualification recognized across South Africa.
            </span>
          </div>
        </div>

        {/* 3 Partner Profile Cards */}
        <div className="space-y-12">
          {/* Partner 1: Thutha Ngwane Projects */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  MOU Partner 01 · Transportation & Auto-Electrical
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Thutha Ngwane Projects (Pty) Ltd
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono bg-white px-3 py-1 rounded border border-neutral-200 text-slate-700">
                <span>SETA: MERSETA & Services SETA</span>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              QCTO-accredited Skills Development Provider with formal accreditation in Transportation and Automotive Electrical trades, as well as New Venture Creation. Covers the Transportation Electrician trade — one of the most in-demand technical trades in South Africa as modern vehicles become software and electronics-driven — alongside entrepreneurship programming.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Qualification 1 */}
              <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase text-teal-700">
                    Listed Trade · Automotive Electrician
                  </span>
                  <span className="text-xs font-mono text-slate-500">OFO: 671208</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Transportation Electrician (Automotive)
                </h4>
                <div className="text-xs font-mono text-slate-500">
                  Accreditation: 07-QCTO/SDP020625224051
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Advanced automotive electronics, computerized CAN-bus diagnosis, wiring harness rebuilds, sensor troubleshooting, and starter/charging systems.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onOpenDetail('transportation-electrician')}
                    className="text-xs font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onOpenEnrol('transportation-electrician')}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer"
                  >
                    Enrol
                  </button>
                </div>
              </div>

              {/* Qualification 2 */}
              <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase text-teal-700">
                    NQF Level 02 · 32 Credits
                  </span>
                  <span className="text-xs font-mono text-slate-500">SP-210401</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  New Venture Creation
                </h4>
                <div className="text-xs font-mono text-slate-500">
                  Accreditation: 07-QCTO/SDP170625113623
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Practical commercialisation curriculum for artisans transitioning into owner-operated workshop owners, independent contractors, and fleet service providers.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onOpenDetail('new-venture-creation')}
                    className="text-xs font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onOpenEnrol('new-venture-creation')}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer"
                  >
                    Enrol
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Partner 2: Sekeno Training Institute */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  MOU Partner 02 · Electronics & Domestic Appliances
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Sekeno Training Institute (Pty) Ltd
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono bg-white px-3 py-1 rounded border border-neutral-200 text-slate-700">
                <span>SETA: W&amp;RSETA</span>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Specialising in high-demand consumer electronics and appliance repair trades — sectors experiencing rapid growth as South Africans increasingly repair rather than replace. Graduates can launch a repair business from a market stall or mobile unit with minimal startup capital.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Qualification 1 */}
              <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase text-teal-700">
                    NQF Level 02 · 25 Credits
                  </span>
                  <span className="text-xs font-mono text-slate-500">SP-191211</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Mobile Phone Repairer
                </h4>
                <div className="text-xs font-mono text-slate-500">
                  Accreditation: 07-QCTO/SDP250526181428
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Micro-soldering, touch glass / LCD screen replacement, charging port diagnostics, power IC testing, and secure operating system recovery.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onOpenDetail('mobile-phone-repairer')}
                    className="text-xs font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onOpenEnrol('mobile-phone-repairer')}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer"
                  >
                    Enrol
                  </button>
                </div>
              </div>

              {/* Qualification 2 */}
              <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase text-teal-700">
                    NQF Level 02 · 27 Credits
                  </span>
                  <span className="text-xs font-mono text-slate-500">SP-191210</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Basic Kitchen Appliance Repairer
                </h4>
                <div className="text-xs font-mono text-slate-500">
                  Accreditation: 07-QCTO/SDP250526181428
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fault finding, continuity testing, and component repairs on motorized and heating kitchen appliances (microwaves, blenders, thermal units).
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onOpenDetail('basic-kitchen-appliance-repairer')}
                    className="text-xs font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onOpenEnrol('basic-kitchen-appliance-repairer')}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer"
                  >
                    Enrol
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Partner 3: Eyesizwe Corporation */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  MOU Partner 03 · Supply Chain Management & Logistics
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Eyesizwe Corporation (Pty) Ltd
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono bg-white px-3 py-1 rounded border border-neutral-200 text-slate-700">
                <span>SETA: TETA</span>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Brings a distinct, higher-level dimension to 4IR&apos;s programme offering: formal, nationally recognised Supply Chain Management qualifications at NQF Levels 5 and 6. Uniquely positions 4IR to serve transport and automotive clients who require both technical workshop trades and supply chain credentials.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Qualification 1 */}
              <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase text-teal-700">
                    NQF Level 05 · 180 Credits
                  </span>
                  <span className="text-xs font-mono text-slate-500">OFO: 110942</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Supply Chain Practitioner
                </h4>
                <div className="text-xs font-mono text-slate-500">
                  Accreditation: 07-QCTO/SDP170225195640
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Operational supply chain coordination, warehousing, logistics inventory control, parts procurement, and dispatch management in automotive fleets.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onOpenDetail('supply-chain-practitioner')}
                    className="text-xs font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onOpenEnrol('supply-chain-practitioner')}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer"
                  >
                    Enrol
                  </button>
                </div>
              </div>

              {/* Qualification 2 */}
              <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase text-teal-700">
                    NQF Level 06 · 180 Credits
                  </span>
                  <span className="text-xs font-mono text-slate-500">OFO: 111357</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Supply Chain Manager
                </h4>
                <div className="text-xs font-mono text-slate-500">
                  Accreditation: 07-QCTO/SDP170225195640
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Advanced strategic sourcing, cross-border freight architecture, supply chain economics, contract administration, and executive logistics leadership.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onOpenDetail('supply-chain-manager')}
                    className="text-xs font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onOpenEnrol('supply-chain-manager')}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer"
                  >
                    Enrol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
