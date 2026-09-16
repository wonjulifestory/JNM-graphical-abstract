"""Create a validated, source-linked data file for a JNM graphical abstract.

This script deliberately stops at a structured JSON handoff. It does not draw
the final artwork; the PowerPoint builder consumes the JSON so that every
number and phrase can be reviewed before layout.
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from pypdf import PdfReader


def text_from_pdf(pdf: Path) -> str:
    return "\n".join(page.extract_text() or "" for page in PdfReader(str(pdf)).pages)


def require(pattern: str, text: str, label: str) -> re.Match[str]:
    match = re.search(pattern, text, flags=re.I | re.S)
    if not match:
        raise ValueError(f"Could not verify {label} from the supplied PDF")
    return match


def build_record(pdf: Path, article_id: str) -> dict:
    raw = text_from_pdf(pdf)
    # These fields are deliberately tied to the supplied article's printed
    # abstract/Table 4. A new article should get its own extractor profile.
    require(r"228\s+IEM patients", raw, "cohort size")
    require(r"P\s*=\s*0\.006", raw, "primary P value")
    require(r"Abnormal BT.*?Elevated\s+IRP.*?15/56.*?25/172.*?0\.036.*?15/51.*?20/155.*?0\.006", raw, "Table 4")
    record = {
        "id": article_id,
        "source_pdf": str(pdf),
        "source_pages": {"article": 1, "table_4": 7},
        "citation": "Abdel-Jalil A, Koo TH, Fass R. J Neurogastroenterol Motil. 2026;32(2):217-227.",
        "doi": "10.5056/jnm25058",
        "title": "Dysphagia in ineffective esophageal motility",
        "cohort_n": 228,
        "irpdata_n": 206,
        "study_design": "Single-center retrospective study, 2010-2013",
        "assessment": "High-resolution manometry with impedance",
        "findings": [
            "Defective bolus transit",
            "Poor LES relaxation",
        ],
        "comparison": [
            {"group": "With dysphagia", "numerator": 15, "denominator": 51, "percent": 29},
            {"group": "Without dysphagia", "numerator": 20, "denominator": 155, "percent": 13},
        ],
        "p_value": "0.006",
        "conclusion": "Dysphagia was associated with the combination of impaired bolus transit and poor LES relaxation in patients with IEM.",
        "review_flags": [
            "IRP thresholds appear inconsistently in the Methods; do not print a threshold without author confirmation.",
            "The comparison uses IRP data available for 206 of 228 patients.",
            "The percentages describe the combined finding within each symptom group.",
        ],
        "validation": {
            "cohort_verified": True,
            "table_4_verified": True,
            "comparison_denominators_verified": True,
            "p_value_verified": True,
        },
    }
    return record


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pdf", required=True, type=Path)
    parser.add_argument("--id", required=True)
    parser.add_argument("--out", required=True, type=Path)
    args = parser.parse_args()
    record = build_record(args.pdf, args.id)
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(record, indent=2), encoding="utf-8")
    print(args.out)


if __name__ == "__main__":
    main()
