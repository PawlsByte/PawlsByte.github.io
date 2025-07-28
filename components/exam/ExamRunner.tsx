"use client";
import { useState } from "react";

type Item = { id: string; stem: string; options: { id: string; text: string }[] };

export default function ExamRunner({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const item = items[index];
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-2">Question {index + 1} / {items.length}</h2>
      <div className="border rounded p-4 mb-4">
        <p className="mb-4">{item.stem}</p>
        <ul className="space-y-2">
          {item.options.map(o => (
            <li key={o.id} className="border rounded p-2 hover:bg-gray-50 cursor-pointer">{o.text}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between">
        <button onClick={() => setIndex(i => Math.max(0, i - 1))}>Prev</button>
        <button onClick={() => setIndex(i => Math.min(items.length - 1, i + 1))}>Next</button>
      </div>
    </div>
  );
}
