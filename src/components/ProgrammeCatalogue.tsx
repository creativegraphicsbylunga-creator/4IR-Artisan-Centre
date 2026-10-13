import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle, ArrowRight, ShieldCheck, Download, Info } from 'lucide-react';
import { ALL_PROGRAMMES } from '../data/programmes';
import { ProgrammeCategory } from '../types';

interface ProgrammeCatalogueProps {
  onOpenEnrol: (programmeId?: string) => void;
  onOpenDetail: (programmeId: string) => void;
  onOpenProspectus: () => void;
}

export const ProgrammeCatalogue: React.FC<ProgrammeCatalogueProps> = ({
  onOpenEnrol,
  onOpenDetail,
  onOpenProspectus
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProgrammeCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProgrammes = useMemo(() => {
    return ALL_PROGRAMMES.filter((prog) => {
      const matchesCategory = 
        selectedCategory === 'all' || prog.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        prog.title.toLowerCase().includes(q) ||
        prog.nqfLevel.toLowerCase().includes(q) ||
        prog.saqaIdOrOfo.toLowerCase().includes(q) ||
        prog.offeredBy.toLowerCase().includes(q) ||
        prog.setaOrganizer.toLowerCase().includes(q) ||
        prog.accreditationNo.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalog" className="py-20 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
              06. Comprehensive Programme Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Complete Programme Catalogue
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Consolidating 4IR Artisan Centre&apos;s full qualification catalogue — combining directly accredited trade qualifications with programmes available through our accredited MOU partner network. Every programme carries valid QCTO accreditation.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenProspectus}
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-white border border-neutral-300 hover:bg-neutral-50 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-amber-600" />
              <span>Full Prospectus PDF</span>
            </button>
          </div>
        </div>

        {/* Legend Notice matching document */}
        <div className="mb-6 p-4 bg-white rounded-xl border border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-amber-400 border border-amber-500 shrink-0" />
              <span className="font-semibold text-slate-900">Gold Shaded:</span>
              <span className="text-slate-600">Delivered directly under 4IR Artisan Centre QCTO accreditation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-teal-500 border border-teal-600 shrink-0" />
              <span className="font-semibold text-slate-900">Teal Shaded:</span>
              <span className="text-slate-600">Delivered in partnership under named MOU partner QCTO accreditation</span>
            </div>
          </div>
          <span className="text-slate-500 font-medium">8 Total Registered Qualifications</span>
        </div>

        {/* Interactive Controls Bar: Category Filter + Search */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-white border border-neutral-200 rounded-lg overflow-x-auto shadow-sm">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Qualifications (8)
            </button>
            <button
              onClick={() => setSelectedCategory('automotive')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'automotive'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Automotive &amp; Electrical (3)
            </button>
            <button
              onClick={() => setSelectedCategory('electronics')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'electronics'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Electronics &amp; Appliances (2)
            </button>
            <button
              onClick={() => setSelectedCategory('supply-chain')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'supply-chain'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Supply Chain (2)
            </button>
            <button
              onClick={() => setSelectedCategory('entrepreneurship')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'entrepreneurship'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              New Venture (1)
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search trade, OFO, SETA..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
            />
          </div>
        </div>

        {/* Desktop Data Table (1:1 with Document Table on Page 9) */}
        <div className="hidden lg:block bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900 text-white font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Programme / Qualification</th>
                <th className="py-3.5 px-3">NQF Level</th>
                <th className="py-3.5 px-3">SAQA ID / OFO</th>
                <th className="py-3.5 px-4">Offered By</th>
                <th className="py-3.5 px-3">SETA / Organizer</th>
                <th className="py-3.5 px-3">Type</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredProgrammes.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">
                    No programmes found matching &ldquo;{searchQuery}&rdquo;.
                  </td>
                </tr>
              ) : (
                filteredProgrammes.map((prog) => {
                  const isGold = prog.type === 'own';
                  return (
                    <tr 
                      key={prog.id}
                      className={`transition-colors ${
                        isGold 
                          ? 'bg-amber-50/70 hover:bg-amber-100/60' 
                          : 'bg-teal-50/50 hover:bg-teal-100/50'
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="font-bold text-slate-900 text-sm">
                          {prog.title}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                          {prog.accreditationNo}
                        </div>
                      </td>
                      <td className="py-4 px-3 font-semibold text-slate-800 whitespace-nowrap">
                        {prog.nqfLevel}
                        {prog.credits ? (
                          <span className="block text-[11px] text-slate-500 font-normal">
                            {prog.credits} Credits
                          </span>
                        ) : null}
                      </td>
                      <td className="py-4 px-3 font-mono text-slate-700 whitespace-nowrap">
                        {prog.saqaIdOrOfo}
                      </td>
                      <td className="py-4 px-4 font-medium text-slate-800">
                        {prog.offeredBy}
                      </td>
                      <td className="py-4 px-3 font-semibold text-slate-700 whitespace-nowrap">
                        {prog.setaOrganizer}
                      </td>
                      <td className="py-4 px-3">
                        <span 
                          className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold ${
                            isGold 
                              ? 'bg-amber-200 text-amber-900' 
                              : 'bg-teal-200 text-teal-900'
                          }`}
                        >
                          {isGold ? 'Own Accreditation' : 'MOU Partnership'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => onOpenDetail(prog.id)}
                            className="p-1.5 text-slate-600 hover:text-slate-900 rounded hover:bg-white/80 transition-colors cursor-pointer"
                            title="View Competencies & Details"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onOpenEnrol(prog.id)}
                            className={`px-3 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
                              isGold
                                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                                : 'bg-slate-900 hover:bg-slate-800 text-white'
                            }`}
                          >
                            Enrol
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Responsive Cards View */}
        <div className="lg:hidden space-y-4">
          {filteredProgrammes.length === 0 ? (
            <div className="p-8 bg-white rounded-xl text-center text-slate-500 text-sm">
              No qualifications found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredProgrammes.map((prog) => {
              const isGold = prog.type === 'own';
              return (
                <div
                  key={prog.id}
                  className={`p-5 rounded-xl border border-neutral-200 shadow-xs space-y-3 ${
                    isGold ? 'bg-amber-50/80 border-amber-200' : 'bg-teal-50/60 border-teal-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span 
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1 ${
                          isGold ? 'bg-amber-200 text-amber-900' : 'bg-teal-200 text-teal-900'
                        }`}
                      >
                        {isGold ? 'Direct Accreditation' : 'MOU Network'}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        {prog.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prog.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-neutral-200/60">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Level</span>
                      <span className="font-semibold text-slate-800">{prog.nqfLevel}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block">SAQA / OFO</span>
                      <span className="font-mono text-slate-800">{prog.saqaIdOrOfo}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block">SETA Quality</span>
                      <span className="font-semibold text-slate-800">{prog.setaOrganizer}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block">Institution</span>
                      <span className="font-medium text-slate-800 text-[11px]">{prog.offeredBy}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-200/60 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenDetail(prog.id)}
                      className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Syllabus &amp; Modules</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => onOpenEnrol(prog.id)}
                      className={`px-3 py-1.5 rounded text-xs font-semibold text-white ${
                        isGold ? 'bg-amber-500 hover:bg-amber-600' : 'bg-slate-900 hover:bg-slate-800'
                      }`}
                    >
                      Enrol Now
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
