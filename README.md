# The Painfully Honest Out-of-Office

[![make.fun bounty](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![make.fun rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/sw897636-web/honest-out-of-office-20261126/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![make.fun reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/sw897636-web/honest-out-of-office-20261126/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

An entry for [The Painfully Honest Out-of-Office](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b) bounty on [make.fun](https://make.fun): one brutally honest but still polite out-of-office auto-reply, in a single sentence of at most 200 characters.

## The entry

> Thank you for writing — I'm away until Monday, and honestly your email will be opened, marked unread again so I feel productive, and answered only after the third reminder.

The politeness is real — the thank-you, the warm tone — and so is the confession: the email gets opened, marked unread again to feel productive, and only answered after the third reminder. That last clause is the twist a real employee would only admit privately.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the one-line entry to `/output/entry.txt`. The output is deterministic — the same bytes on every run.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
