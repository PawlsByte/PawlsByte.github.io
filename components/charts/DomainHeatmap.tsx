"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function DomainHeatmap({ data }: { data: { domain: string; pct: number }[] }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="domain" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="pct" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
