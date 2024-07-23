// src/calculateSalary.ts

export function calculateSalary(
  baseSalary: number,
  bonuses: number[] = [],
  deductions: number[] = []
): number {
  const totalBonuses = bonuses.reduce((acc, bonus) => acc + bonus, 0);
  const totalDeductions = deductions.reduce(
    (acc, deduction) => acc + deduction,
    0
  );
  return baseSalary + totalBonuses - totalDeductions;
}
