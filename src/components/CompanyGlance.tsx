import React from 'react';
import { Building2, Sparkles, User, Award, Shield, Check, Layers, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const CompanyGlance: React.FC = () => {
  const glanceRows = [
    { label: "Company Name", value: COMPANY_INFO.name },
    { label: "Trading As", value: COMPANY_INFO.tradingAs },
    { label: "Director & Founder", value: COMPANY_INFO.director.name },
    { 
      label: "Leadership", 
      value: "Youth-Led — bringing a fresh, innovation-driven approach to artisan training" 
    },
    { label: "Sector", value: "Automotive & Engineering — Skills Development" },
    { label: "Accrediting Body", value: "Quality Council for Trades and Occupations (QCTO)" },
    { 
      label: "Own Accreditations", 
      value: "Automotive Suspension Repairer (NQF L2) | Wheel Balancer (NQF L1)" 
    },
    { 
      label: "MOU Partnerships", 
      value: "Thutha Ngwane Projects | Sekeno Training Institute | Eyesizwe Corporation" 
    },
    { 
      label: "Total Programmes", 
      value: "8 QCTO-Accredited Qualifications (Direct & Collaborative Network)" 
    },
    { 
      label: "Learners Trained", 
      value: "150+ Learners Successfully Trained & Certified" 
    },
    { label: "Official Tagline", value: `"${COMPANY_INFO.tagline}"` },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            01. Institutional Profile & Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About 4IR Artisan Centre Training
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            4IR Artisan Centre Training is a QCTO-accredited Skills Development Provider dedicated to building the artisan workforce of the Fourth Industrial Revolution.
          </p>
        </div>

        {/* 2-Column Content: Narrative + Company at a Glance Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & Leadership */}
          <div className="lg:col-span-6 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Founded on the conviction that <strong>technical excellence</strong> and <strong>modern industry readiness</strong> must go hand in hand, 4IR Artisan Centre delivers trade qualifications that are nationally recognised, practically rigorous, and directly aligned to the demands of South Africa&apos;s automotive and engineering sectors.
              </p>
              <p>
                The name says it all: <strong>4IR — the Fourth Industrial Revolution</strong> — is reshaping every industry, and artisans must be equipped not only with traditional trade skills but with the digital literacy, precision engineering, and adaptability the modern economy requires. 4IR Artisan Centre Training exists to close that gap, producing confident, competent, and work-ready tradespeople who are valued by employers from day one.
              </p>
              <p>
                With <strong>over 150 learners successfully trained and certified</strong>, 4IR Artisan Centre has established a strong reputation for quality, consistency, and genuine learner transformation. Our programmes blend classroom theory with hands-on practical assessments, ensuring every graduate meets the exacting standards of their trade.
              </p>
            </div>

            {/* Youth-Led Leadership Focus Box */}
            <div className="p-6 rounded-xl bg-slate-900 text-white space-y-3 shadow-md border border-slate-800">
              <div className="flex items-center gap-2.5 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Youth-Led Innovation</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Under the Leadership of Mr Mthobisi Zamisa
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                4IR Artisan Centre is proudly youth-led. Mr Zamisa brings a fresh and dynamic outlook to artisan education: one that challenges outdated approaches to trade training, embraces the opportunities of the Fourth Industrial Revolution, and centres the learner&apos;s long-term economic empowerment at the heart of everything 4IR does.
              </p>
              <div className="pt-2 text-xs text-amber-300 font-medium">
                &ldquo;His leadership is a statement in itself — that the next generation of South African training providers is here, building something worth paying attention to.&rdquo;
              </div>
            </div>
          </div>

          {/* Right Column: Company at a Glance Official Table */}
          <div className="lg:col-span-6">
            <div className="bg-neutral-50 rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-sm tracking-wide">Company at a Glance</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">QCTO Verified Provider</span>
              </div>

              <div className="divide-y divide-neutral-200 text-sm">
                {glanceRows.map((row, idx) => (
                  <div 
                    key={idx}
                    className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 hover:bg-white transition-colors"
                  >
                    <span className="sm:col-span-4 font-semibold text-slate-800 text-xs uppercase tracking-wider">
                      {row.label}
                    </span>
                    <span className="sm:col-span-8 text-slate-700 text-sm">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-500/10 border-t border-amber-200/50 flex items-center gap-3 text-xs text-slate-800">
                <Shield className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  Accredited in terms of the Skills Development Act (Act No. 97 of 1998)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
