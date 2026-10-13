import React from 'react';
import { Target, Compass, Award, Cpu, UserCheck, ShieldCheck, HeartHandshake, Briefcase } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const VisionMissionValues: React.FC = () => {
  const valueIcons = [
    <Award className="w-5 h-5 text-amber-600" key="0" />,
    <Cpu className="w-5 h-5 text-amber-600" key="1" />,
    <UserCheck className="w-5 h-5 text-amber-600" key="2" />,
    <ShieldCheck className="w-5 h-5 text-amber-600" key="3" />,
    <HeartHandshake className="w-5 h-5 text-amber-600" key="4" />,
    <Briefcase className="w-5 h-5 text-amber-600" key="5" />,
  ];

  return (
    <section className="py-20 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            02. Direction & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Vision, Mission & Core Values
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every programme, workshop assessment, and industry partnership is driven by a clear mandate: building a capable, self-sufficient artisan economy.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="p-8 rounded-xl bg-slate-900 text-white shadow-sm border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Compass className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Our Vision
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              Leading Artisan Training in South Africa
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-xl bg-white text-slate-900 shadow-sm border border-neutral-200 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Our Mission
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              Transformative, Accredited Trade Education
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>
        </div>

        {/* 6 Core Values Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Our 6 Core Values
            </h3>
            <span className="text-xs text-slate-700 font-medium hidden sm:inline">
              Non-negotiable operational principles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.values.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm hover:border-amber-400/60 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center border border-neutral-200">
                    {valueIcons[idx]}
                  </div>
                  <span className="text-xs font-mono text-slate-600 font-medium">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 tracking-tight">
                  {val.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
