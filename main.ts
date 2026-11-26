// The Painfully Honest Out-of-Office — make.fun entry
// One auto-reply, one sentence, at most 200 characters: brutally honest
// about the inbox, still polite enough to forward to a manager.
// Craft: a concrete, privately-true admission (the unread pile) up front,
// then the quotable twist — the reply comes the moment the dread lifts —
// and a warm, professional landing so a manager would let it stand.
import { mkdirSync, writeFileSync } from "node:fs";

// The admission: where I am, and the true state of the inbox.
const SETUP =
  "I'm out of office until Monday, and honestly, my inbox already holds 847 unread emails";
// The twist: the honest condition for answering, kept warm and professional.
const TWIST =
  "yours will be answered the moment I stop dreading the pile, with the same care as always.";

const ENTRY = `${SETUP} — ${TWIST}`;

// Gate guards: the scorer only accepts 1–200 characters, one sentence.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters; gate needs 1–200.`);
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("Entry must be exactly one sentence.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
