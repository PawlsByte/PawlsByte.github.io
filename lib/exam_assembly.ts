export async function assembleExamForm(total = 150) {
  // Placeholder: returns a plan by domain; replace with item selection from DB
  const weights = { DOM1:5, DOM2:15, DOM3:12, DOM4:12, DOM5:42, DOM6:6, DOM7:8 };
  const plan = Object.entries(weights).map(([code, weight]) => ({
    code,
    count: Math.round((Number(weight) / 100) * total),
  }));
  return { total, plan };
}
