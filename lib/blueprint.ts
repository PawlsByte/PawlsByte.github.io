export const BLUEPRINT = {
  DOM1: { label: "Necessity for Cleaning", weight: 5 },
  DOM2: { label: "Mechanical Systems", weight: 15 },
  DOM3: { label: "Inspections", weight: 12 },
  DOM4: { label: "Contamination", weight: 12 },
  DOM5: { label: "Cleaning & Restoration Procedures", weight: 42 },
  DOM6: { label: "Health & Safety", weight: 6 },
  DOM7: { label: "Standards & Guidelines", weight: 8 },
} as const;

export type Difficulty = "Easy" | "Medium" | "Hard";

export const DIFFICULTY_MIX: Record<Difficulty, number> = {
  Easy: 0.25,
  Medium: 0.5,
  Hard: 0.25,
};
