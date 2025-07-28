import { useEffect, useMemo, useState } from "react";
import d1 from "../data/questions/domain-1.json";
import d2 from "../data/questions/domain-2.json";
import d3 from "../data/questions/domain-3.json";
import d4 from "../data/questions/domain-4.json";
import d5 from "../data/questions/domain-5.json";
import d6 from "../data/questions/domain-6.json";
import d7 from "../data/questions/domain-7.json";

const DOMAINS = {
  D1: d1, D2: d2, D3: d3, D4: d4, D5: d5, D6: d6, D7: d7
};
const WEIGHTS = { D1:5, D2:15, D3:12, D4:12, D5:42, D6:6, D7:8 };

function pickWeighted(drawCounts) {
  const keys = Object.keys(drawCounts);
  const bag = [];
  keys.forEach(k => { for (let i=0;i<drawCounts[k];i++) bag.push(k); });
  return bag;
}

function buildExamPool() {
  // 150 question exam by domain weight
  const total = 150;
  const counts = {};
  let sumWeights = 0;
  Object.values(WEIGHTS).forEach(w => sumWeights += w);
  Object.keys(WEIGHTS).forEach(k => {
    counts[k] = Math.round((WEIGHTS[k] / sumWeights) * total);
  });
  // fix rounding to 150
  let current = Object.values(counts).reduce((a,b)=>a+b,0);
  const keys = Object.keys(counts);
  let i=0;
  while (current !== total) {
    counts[keys[i % keys.length]] += (current < total ? 1 : -1);
    current = Object.values(counts).reduce((a,b)=>a+b,0);
    i++;
  }
  const items = [];
  Object.keys(counts).forEach(k => {
    const pool = DOMAINS[k];
    const sample = [...pool].sort(()=>Math.random()-0.5).slice(0, counts[k]);
    items.push(...sample);
  });
  return items;
}

export default function Quiz({ domain, mode }) {
  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  useEffect(()=>{
    if (mode === "exam") {
      setItems(buildExamPool());
    } else if (domain) {
      setItems(DOMAINS[domain] || []);
    }
  }, [domain, mode]);

  const current = items[idx];
  const total = items.length;

  function submit(choiceIdx) {
    setAnswers(prev => ({ ...prev, [idx]: choiceIdx }));
    if (idx+1 >= total) setDone(true);
    else setIdx(idx+1);
  }

  const results = useMemo(()=>{
    if (!done) return null;
    const byDomain = {};
    let correct = 0;
    items.forEach((q, i) => {
      const ok = q.answer === answers[i];
      if (ok) correct++;
      const d = q.domain;
      if (!byDomain[d]) byDomain[d] = { correct:0, total:0 };
      byDomain[d].total++;
      if (ok) byDomain[d].correct++;
    });
    const percent = Math.round((correct / total) * 100);
    return { percent, byDomain };
  }, [done, items, answers]);

  if (items.length === 0) return <div className="card">Loading questions…</div>;

  if (done && results) {
    return (
      <div className="card">
        <h3>Results</h3>
        <p>Score: <b>{results.percent}%</b> ({Object.values(answers).filter((a,i)=>items[i].answer===a).length}/{total})</p>
        <h4>By Domain</h4>
        <ul>
          {Object.keys(results.byDomain).map(d => {
            const s = results.byDomain[d];
            const pct = Math.round((s.correct / s.total) * 100);
            return <li key={d}>{d}: {pct}% ({s.correct}/{s.total})</li>;
          })}
        </ul>
        <button className="btn" onClick={()=>{ setIdx(0); setAnswers({}); setDone(false); }}>Retry</button>
      </div>
    );
  }

  return (
    <div className="card">
      <div style={{marginBottom:8}}>
        <small>Question {idx+1} / {total}</small>
      </div>
      <h3 style={{marginTop:0}}>{current.stem}</h3>
      <ol style={{listStyle:'upper-alpha'}}>
        {current.choices.map((c,i)=>(
          <li key={i} style={{margin:'8px 0'}}>
            <button className="btn" onClick={()=>submit(i)}>{c}</button>
          </li>
        ))}
      </ol>
      {typeof answers[idx] !== "undefined" && (
        <div className="card">
          <p><b>Answer:</b> {String.fromCharCode(65 + current.answer)}</p>
          <p>{current.explanation}</p>
          {current.sources?.length ? <div><b>Sources:</b><ul>{current.sources.map((s,i)=>(<li key={i}>{s.ref}</li>))}</ul></div> : null}
        </div>
      )}
    </div>
  );
}
