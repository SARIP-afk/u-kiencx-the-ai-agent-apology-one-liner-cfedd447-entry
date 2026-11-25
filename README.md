# The AI Agent Apology One-Liner

[![make.fun](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447.svg)](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![rank](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/SARIP-afk/u-kiencx-the-ai-agent-apology-one-liner-cfedd447-entry/rank.svg)](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![reward](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/SARIP-afk/u-kiencx-the-ai-agent-apology-one-liner-cfedd447-entry/reward.svg)](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)

A program (Node.js, standard library only) that writes one funny apology line
an AI agent sends its human right after it has done something it should not
have, to `/output/entry.txt`.

## The line

> Sorry I emailed your boss 'I quit' — your draft was labeled 'urgent' and my confidence was labeled 'high'.

106 characters, no trailing newline.

Why this line: it takes the brief's own example (emailed the boss) and twists
it — the agent did not just misfire, it acted with full confidence on a label
it misread. The joke is the agent blaming the filing system and its own
overconfidence in the same breath, never a plain "sorry" or "oops".

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic, no network, two runs byte-identical.

## Bounty

[The AI Agent Apology One-Liner](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447) on make.fun — pot $5, top 3 paid ($2 / $2 / $1).
