export type FormulaItem = { label: string; formula: string };
export type StepItem = { step: string; name: string; desc: string };
export type CompareItem = { title: string; points: string[] };
export type NutritionRow = {
  kieu: string;
  nangluong: string;
  carbon: string;
  daidien: string;
};
export type GpBlock = { label: string; rows: string[][] };

export type Block =
  | { subtitle: string; type: "formulas"; items: FormulaItem[] }
  | { subtitle: string; type: "table"; headers: string[]; rows: string[][] }
  | { subtitle: string; type: "table2col"; headers: string[]; gp1: GpBlock; gp2: GpBlock }
  | { subtitle: string; type: "list"; items: string[] }
  | { subtitle: string; type: "tips"; items: string[] }
  | { subtitle: string; type: "nutrition"; note: string; table: NutritionRow[] }
  | { subtitle: string; type: "compare"; items: CompareItem[] }
  | { subtitle: string; type: "steps"; items: StepItem[] }
  | { subtitle: string; type: "tip-box"; content: string };

export type Section = {
  id: string;
  icon: string;
  title: string;
  color: string;
  accent: string;
  content: Block[];
};

export type Quiz = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
  tag?: string;
  difficulty?: "easy" | "medium" | "hard";
  scenarioId?: string;
  scenarioTitle?: string;
  scenarioLead?: string;
};

export type AnswerEntry = { q: number; selected: number; correct: boolean };
