import React from 'react';
import { Check, Shield, Layers, Award, Cpu, UserCheck, Briefcase } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Shield className="w-5 h-5 text-amber-600" key="0" />,
    <Layers className="w-5 h-5 text-amber-600" key="1" />,
    <Award className="w-5 h-5 text-amber-600" key="2" />,
    <Cpu className="w-5 h-5 text-amber-600" key="3" />,
    <UserCheck className="w-5 h-5 text-amber-600" key="4" />,
    <Briefcase className="w-5 h-5 text-amber-600" key="5" />,
  ];

  return (
    <section className="py-20 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            08. Competitive Differentiators
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose 4IR Artisan Centre?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering authentic trade mastery through rigorous accredited frameworks, state-of-the-art facilities, and strong industry alignment.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.whyChooseReasons.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-xl bg-white border border-neutral-200 shadow-xs hover:border-amber-400 hover:shadow-sm transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center">
                  {icons[idx]}
                </div>
                <span className="text-xs font-mono font-semibold text-slate-400">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
