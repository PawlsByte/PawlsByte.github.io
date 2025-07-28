import { useState } from "react";

export default function Flashcards({ cards }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[idx] || { front: "", back: "" };

  return (
    <div className="card" style={{textAlign:'center'}}>
      <div
        onClick={()=>setFlipped(!flipped)}
        style={{ cursor:'pointer', padding:'40px 20px', border:'1px solid #1f2937', borderRadius:12, minHeight:120 }}
      >
        <h3>{flipped ? card.back : card.front}</h3>
      </div>
      <div style={{marginTop:12, display:'flex', gap:8, justifyContent:'center'}}>
        <button className="btn" onClick={()=>{ setIdx(Math.max(0, idx-1)); setFlipped(false); }}>Prev</button>
        <button className="btn" onClick={()=>{ setIdx(idx+1); setFlipped(false); }}>Next</button>
      </div>
    </div>
  );
}
