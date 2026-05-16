# Corporate Finance — Claude Code Project Config

**Owner:** Thong Pham  
**Repo:** `thongpham1/corporate-finance`  
**Purpose:** BUS-629 corporate finance coursework — ratio analysis, valuation, and equity research on Vietnamese-listed companies.

---

## Repository Layout

```
corporate-finance/
├── analysis/          # In-progress analytical work and validation outputs
├── data/              # Raw source data (scraped or downloaded)
├── deliverables/      # Submission-ready outputs per stage + prompt-log.md
├── docs/
│   ├── decisions/     # Company-selection decision docs  (Stage 2)
│   ├── plans/         # Project plans
│   ├── specs/         # Technical specifications        (Stage 4)
│   └── templates/     # Doc templates
├── models/
│   ├── builds/        # Completed Excel workbooks       (Stage 3)
│   └── templates/     # Ratio/valuation Excel templates (Stage 1)
└── scratch/           # Throwaway scripts (PDF extraction, scraping)
```

---

## Financial Marketplace — Installed Agents & Skills

This project uses the `anthropics/financial-services` marketplace.

### Core connector
| Package | Role |
|---------|------|
| `financial-analysis` | Foundation layer — financial data parsing, Excel named-range awareness, VAS/IFRS ratio formulas |

### Named agents
| Agent | When to invoke |
|-------|---------------|
| `pitch-agent` | Building investor-facing pitch decks or executive summaries |
| `gl-reconciler` | Reconciling balance sheet identities; cross-checking input tabs vs. source data |
| `market-researcher` | Gathering industry benchmarks, peer comparables, sector context |

### Vertical bundles
| Bundle | Capabilities |
|--------|-------------|
| `investment-banking` | DCF, LBO, comparable company analysis, M&A structuring |
| `equity-research` | Initiating-coverage reports, target price derivation, Buy/Hold/Sell recommendations |

---

## Stage Workflow

| Stage | Deliverable | Key agent |
|-------|-------------|-----------|
| 0 | `README.md`, `resume.md`, `bio.md` | — |
| 1 | `models/templates/performance-ratios-template.xlsx` | `financial-analysis` |
| 2 | `docs/decisions/YYYY-MM-DD-pham-{company}-selection.md` | `market-researcher` |
| 3 | `models/builds/{company}-ratios-YYYY-MM-DD.xlsx` | `financial-analysis`, `gl-reconciler` |
| 4 | `docs/specs/YYYY-MM-DD-thong-{company}-spec.md` + prompt log | `financial-analysis` |
| 5 | Final analysis report + polished repo | `equity-research`, `pitch-agent` |

---

## Active Project — PNJ (Phu Nhuan Jewelry JSC, HOSE)

- **Workbook:** `models/builds/2026-05-12-pnj-financials.xlsx`
- **Spec:** `docs/specs/2026-05-13-thong-pnj-spec.md`
- **Currency:** Billion VND (Vietnamese Accounting Standards)
- **Period:** FY 2024–2025

### Key named ranges
`BAL_assets_total_curr/prior` · `BAL_liabilities_total_curr/prior` · `BAL_equity_shareholders_curr/prior` · `INC_sales` · `INC_cost_goods_sold` · `INC_net` · `CASH_operating`

### Validation rules
1. Balance sheet identity: Assets = Liabilities + Equity (≤ 1 Bn VND rounding tolerance)
2. Du Pont check: `Net Margin × Asset Turnover × Equity Multiplier ≈ ROE`
3. Non-negative: Total Assets, Equity, Sales

---

## Conventions

- **Naming:** `YYYY-MM-DD-{author}-{company}-{artifact}.{ext}`
- **Prompt log:** Every meaningful AI interaction must be recorded in `deliverables/prompt-log.md`
- **No auto-commit** of model builds (`.xlsx`) without explicit instruction — binary files should be verified first.
- **Language:** English for code/docs; Vietnamese acceptable in prompts and notes.
