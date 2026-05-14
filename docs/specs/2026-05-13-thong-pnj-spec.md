---
template: spec
purpose: "Technical specification for model-driven projects — defines scope, inputs, formulas, validation, and analysis requirements precisely enough that any competent executor (human or LLM) can produce correct output"
audience: student
fields_required: [title, author, date, version, company, scope, model_architecture, data_inputs, derived_inputs, formulas, validation, analysis_requirements, output_format, references]
naming_convention: "YYYY-MM-DD-{slug}.md"
courses: [BUS-314, BUS-629, FIN-321]
notes: "Originally authored for BUS-629 ratios analysis. Section 5 (Ratio Definitions) can be replaced with project-specific formulas (e.g., FX hedging payoffs, valuation models) for non-ratios projects."
---

# Technical Specification: PNJ Financial Ratios Analysis

**Author:** Thong
**Date:** 2026-05-13
**Version:** 1.0
**Company:** Phu Nhuan Jewelry JSC (PNJ), HOSE

---

## 1. Scope & Objective

> This specification defines the architecture, data inputs, and formulas for computing and analyzing the financial ratios of Phu Nhuan Jewelry JSC (PNJ). The data covers the fiscal years 2024 and 2025, reported under Vietnamese Accounting Standards (VAS) with the reporting currency in Billion VND. The objective is to evaluate PNJ's financial health and operational performance, producing an analysis intended for academic and investment review.

---

## Part A — Model Specification

### 2. Model Architecture

> The model is built in a single Excel workbook (`2026-05-12-pnj-financials.xlsx`) divided into four primary tabs:
> - **Cover & Instructions:** Contains meta-information, source data links, and unit definitions.
> - **Balance Sheet:** Input tab for assets, liabilities, and equity (yellow cells are inputs).
> - **Income Statement:** Input tab for revenue, expenses, and profits.
> - **Cash Flow Statement:** Input tab for operating, investing, and financing cash flows.
> - **Ratios:** Calculation and output tab containing computed financial ratios based on the named ranges from the input tabs.

### 3. Data Inputs

> Complete table of every financial data point required, organized by source. All values are in Billion VND and represent year-end figures (or cumulative annual figures for Income/Cash Flow).

| Named Range | Source | Value | Unit |
|-------------|--------|-------|------|
| `yearCurrent` | Inputs | 2025 | Year |
| `yearStart` | Inputs | 2024 | Year |
| `BAL_assets_total_curr` | Balance Sheet | 20,164 | Bn VND |
| `BAL_assets_total_prior` | Balance Sheet | 17,208 | Bn VND |
| `BAL_liabilities_total_curr`| Balance Sheet | 6,889 | Bn VND |
| `BAL_liabilities_total_prior`| Balance Sheet | 5,952 | Bn VND |
| `BAL_equity_shareholders_curr`| Balance Sheet| 13,275 | Bn VND |
| `BAL_equity_shareholders_prior`| Balance Sheet| 11,255 | Bn VND |
| `INC_sales` | Income Statement | 34,976 | Bn VND |
| `INC_cost_goods_sold` | Income Statement | 27,293 | Bn VND |
| `INC_net` | Income Statement | 2,829 | Bn VND |
| `CASH_operating` | Cash Flow | 556 | Bn VND |

### 4. Derived Inputs

> Computed intermediate values used in ratio formulas.

| Named Range | Formula | Description |
|-------------|---------|-------------|
| `avg_total_assets` | `(BAL_assets_total_curr + BAL_assets_total_prior) / 2` | Average total assets |
| `avg_equity` | `(BAL_equity_shareholders_curr + BAL_equity_shareholders_prior) / 2` | Average shareholders' equity |

### 5. Ratio Definitions & Formulas

> Ratios calculated on the `Ratios` tab based on the named ranges above.

**Performance & Profitability**
| Ratio | Formula | Unit | Interpretation Guide |
|-------|---------|------|----------------------|
| ROA (Return on Assets) | `INC_net / avg_total_assets` | % | Measures how efficiently PNJ uses its assets to generate profit. |
| ROE (Return on Equity) | `INC_net / avg_equity` | % | Measures the return generated on shareholders' equity. |
| Gross Margin | `(INC_sales - INC_cost_goods_sold) / INC_sales` | % | Measures production efficiency and pricing power. |
| Net Margin | `INC_net / INC_sales` | % | Measures overall profitability after all expenses. |

**Leverage**
| Ratio | Formula | Unit | Interpretation Guide |
|-------|---------|------|----------------------|
| Debt Ratio (Total) | `BAL_liabilities_total_curr / BAL_assets_total_curr` | % | Proportion of company assets financed by debt. |
| Equity Multiplier | `BAL_assets_total_curr / BAL_equity_shareholders_curr` | x | Financial leverage measure used in Du Pont analysis. |

**Du Pont**
| Ratio | Formula | Unit | Interpretation Guide |
|-------|---------|------|----------------------|
| ROE Decomposition | `Net Margin * Asset Turnover * Equity Multiplier` | % | Breaks down ROE into profitability, efficiency, and leverage components. |

### 6. Validation Rules

> 1. **Balance Sheet Identity:** `BAL_assets_total_curr` must equal `BAL_liabilities_total_curr` + `BAL_equity_shareholders_curr` (Margin of error < 1 Bn VND, note: 2024 has a 1 Bn VND rounding difference in source data).
> 2. **Du Pont Check:** `ROE` calculated directly (`INC_net / avg_equity`) must closely match the product of the three Du Pont components.
> 3. **Non-negative Checks:** Total Assets, Total Equity, and Sales cannot be negative.

---

## Part B — Analysis Specification

### 7. Analysis Requirements

> 1. Evaluate PNJ's profitability trends from 2024 to 2025. Did margins expand or contract?
> 2. Assess the capital structure via the Debt Ratio. Is PNJ highly leveraged compared to retail industry standards?
> 3. Analyze the cash flow quality (Operating Cash Flow vs. Net Income).

### 8. Du Pont Decomposition

> Perform a 3-step Du Pont analysis for PNJ's 2025 performance. Identify whether ROE is primarily driven by operating margins, asset efficiency, or financial leverage. Compare the 2025 ROE drivers against historical context if possible.

### 9. Strategic Recommendations

> Provide 3 actionable strategic recommendations for PNJ management. Recommendations must be backed by the quantitative findings from the ratio analysis (e.g., if inventory efficiency is low, recommend working capital improvements).

### 10. Output Format

> The final analysis must be a markdown document with the following sections: Executive Summary, Financial Health Overview, Du Pont Analysis, Cash Flow Assessment, and Strategic Recommendations. The tone should be objective, analytical, and tailored to a corporate finance audience.

---

## References

> - VNDirect Financial Portal (https://dstock.vndirect.com.vn) for PNJ's 2024-2025 summary financial data.
> - Template Architecture from BUS-629.
