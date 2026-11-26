// The Painfully Honest Out-of-Office — make.fun bounty
// u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
// Writes a single one-line out-of-office auto-reply (<= 200 characters)
// to /output/entry.txt. Deterministic and offline: same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a warm thank-you up front, then the private truth, with the
// twist saved for the last clause — the email gets opened, marked unread
// again so the sender feels productive, and only answered after the
// third reminder. One sentence, 172 characters, polite enough to stand.
const ENTRY =
  "Thank you for writing — I'm away until Monday, and honestly your email will be opened, marked unread again so I feel productive, and answered only after the third reminder.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
