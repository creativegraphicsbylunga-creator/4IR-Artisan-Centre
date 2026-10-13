export type ProgrammeType = 'own' | 'mou';

export type ProgrammeCategory = 
  | 'all' 
  | 'automotive' 
  | 'electronics' 
  | 'supply-chain' 
  | 'entrepreneurship';

export interface Programme {
  id: string;
  title: string;
  nqfLevel: string;
  credits?: number;
  saqaIdOrOfo: string;
  offeredBy: string;
  setaOrganizer: string;
  type: ProgrammeType;
  accreditationNo: string;
  category: 'automotive' | 'electronics' | 'supply-chain' | 'entrepreneurship';
  summary: string;
  competencies: string[];
  targetAudience: string;
  durationEstimate?: string;
  mouPartnerDetails?: {
    name: string;
    specialization: string;
  };
}

export interface TeamRole {
  role: string;
  responsibilities: string;
  scope?: string;
}

export interface ValueItem {
  title: string;
  description: string;
}
