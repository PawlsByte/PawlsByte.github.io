import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

async function main() {
  // Minimal domain/objective scaffolding
  const domains = [
    { name: "Necessity for Cleaning", weightPercent: 5, code: "DOM1", objs: ["OBJ1","OBJ2"] },
    { name: "Mechanical Systems", weightPercent: 15, code: "DOM2", objs: ["OBJ1","OBJ2","OBJ3","OBJ4"] },
    { name: "Inspections", weightPercent: 12, code: "DOM3", objs: ["OBJ1","OBJ2","OBJ3","OBJ4"] },
    { name: "Contamination", weightPercent: 12, code: "DOM4", objs: ["OBJ1","OBJ2","OBJ3","OBJ4"] },
    { name: "Cleaning & Restoration Procedures", weightPercent: 42, code: "DOM5", objs: ["OBJ1","OBJ2","OBJ3","OBJ4","OBJ5","OBJ6"] },
    { name: "Health & Safety", weightPercent: 6, code: "DOM6", objs: ["OBJ1","OBJ2","OBJ3","OBJ4"] },
    { name: "Standards & Guidelines", weightPercent: 8, code: "DOM7", objs: ["OBJ1","OBJ2","OBJ3"] },
  ];

  for (const d of domains) {
    const dom = await prisma.domain.create({ data: { name: d.name, weightPercent: d.weightPercent }});
    for (const obj of d.objs) {
      await prisma.objective.create({
        data: {
          domainId: dom.id,
          code: `${d.code}.${obj}`,
          description: `${d.name} – ${obj}`
        }
      });
    }
  }

  // Load items
  const items = JSON.parse(fs.readFileSync("prisma/seed/items.json", "utf-8"));
  for (const it of items) {
    const obj = await prisma.objective.findUnique({ where: { code: it.objective_code }});
    if (!obj) continue;
    await prisma.item.create({
      data: {
        objectiveId: obj.id,
        stem: it.stem,
        options: it.options,
        correct: it.correct,
        itemType: it.item_type,
        difficulty: it.difficulty,
        references: {}
      }
    });
  }

  // Load flashcards
  const cards = JSON.parse(fs.readFileSync("prisma/seed/flashcards.json", "utf-8"));
  for (const c of cards) {
    const obj = await prisma.objective.findUnique({ where: { code: c.objective_code }});
    if (!obj) continue;
    await prisma.flashcard.create({
      data: {
        objectiveId: obj.id,
        prompt: c.prompt,
        answer: c.answer
      }
    });
  }
}

main().then(() => prisma.$disconnect()).catch(e => { console.error(e); process.exit(1); });
