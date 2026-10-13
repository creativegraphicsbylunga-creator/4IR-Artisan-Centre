import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenEnrol: () => void;
  onOpenProspectus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrol, onOpenProspectus }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24">
        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker: Clean unboxed text with separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              <span>QCTO Accredited Skills Development Provider</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-300">South Africa</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-400">Automotive & Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Building South Africa&apos;s Fourth Industrial Revolution <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Artisan Workforce</span>
            </h1>

            {/* Tagline & Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-amber-400 italic">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Delivering nationally recognised trade qualifications that combine rigorous classroom theory with hands-on workshop assessments. Equipped with digital diagnostics and precision tools to meet the exacting demands of modern industry.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEnrol}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-amber-400/20 cursor-pointer"
              >
                <span>Enrol / Request Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#catalog"
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Explore 8 Qualifications</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenProspectus}
                className="px-5 py-3.5 text-xs font-semibold tracking-wider text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View Prospectus</span>
              </button>
            </div>

            {/* Highlights List */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Formal QCTO Listed Trade accreditations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Over 150 certified and work-ready graduates</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hands-on computerized workshop diagnostics</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Youth-led dynamic leadership under Mr Mthobisi Zamisa</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="aspect-16/10 sm:aspect-16/9 lg:aspect-4/3 w-full relative">
                <img
                  src="/src/assets/images/hero_artisan_workshop_1791821639543.jpg"
                  alt="4IR Artisan Centre Modern Automotive Workshop in South Africa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </div>

              {/* In-Frame Context Card */}
              <div className="p-5 bg-slate-900/90 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Workshop Facility & Training Hub</span>
                  <span className="text-amber-400 font-mono text-[11px]">Midrand, Gauteng</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real vehicles, computerized wheel balancing stations, suspension jigs, and modern digital diagnostics mirror actual employer environments.
                </p>
                <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Compliant with NQF Act 12 of 2019 & QCTO standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof KPI Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              150+
            </div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Learners Certified
            </div>
            <p className="text-xs text-slate-400">
              Graduates successfully trained and placed in technical trades
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              8
            </div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Accredited Programmes
            </div>
            <p className="text-xs text-slate-400">
              Own direct accreditations plus compliant MOU partner qualifications
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              100%
            </div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              QCTO Aligned
            </div>
            <p className="text-xs text-slate-400">
              Gold standard quality assurance with MERSETA, Services SETA, W&RSETA & TETA
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              4IR
            </div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Industry 4.0 Focus
            </div>
            <p className="text-xs text-slate-400">
              Modern digital diagnostics, precision electronics, and supply chain synergy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
