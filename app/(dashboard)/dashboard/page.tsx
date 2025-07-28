import DomainHeatmap from "@/components/charts/DomainHeatmap";

export default function Dashboard() {
  const data = [
    { domain: "DOM1", pct: 62 },
    { domain: "DOM2", pct: 71 },
    { domain: "DOM3", pct: 54 },
    { domain: "DOM4", pct: 66 },
    { domain: "DOM5", pct: 59 },
    { domain: "DOM6", pct: 81 },
    { domain: "DOM7", pct: 63 },
  ];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Readiness Overview</h1>
      <DomainHeatmap data={data} />
      <button className="fixed bottom-6 right-6 rounded-full shadow-lg px-4 py-3">
        Ask Tutor
      </button>
    </div>
  );
}
