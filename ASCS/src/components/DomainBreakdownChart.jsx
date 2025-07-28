import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { useEffect, useRef } from "react";
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DomainBreakdownChart({ data }) {
  const canvasRef = useRef(null);
  useEffect(()=>{
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d=>d.domain),
        datasets: [{
          label: 'Weight (%)',
          data: data.map(d=>d.weight)
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, max: 50 } }
      }
    });
    return () => chart.destroy();
  }, [data]);
  return <canvas ref={canvasRef} width="600" height="200"></canvas>;
}
