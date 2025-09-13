#!/usr/bin/env python3
import re
import sys
from pathlib import Path

try:
    import requests
except Exception as e:
    print("::error::requests not available")
    sys.exit(1)

BIB_PATH = Path("_bibliography/papers.bib")

ARXIV_RE = re.compile(r"arxiv\s*=\s*\{([^}]+)\}")

def fetch_arxiv_abs(arxiv_id: str) -> str:
    url = f"https://export.arxiv.org/api/query?id_list={arxiv_id}"
    r = requests.get(url, timeout=20)
    r.raise_for_status()
    # crude parse of Atom XML
    m = re.search(r"<summary>([\s\S]*?)</summary>", r.text)
    if not m:
        return ""
    abs_txt = m.group(1)
    abs_txt = abs_txt.replace("\n", " ").strip()
    return abs_txt

def add_abstracts(text: str) -> str:
    entries = re.split(r"\n\s*\n", text)
    updated = []
    for e in entries:
        if not e.strip():
            continue
        if "abstract" in e:
            updated.append(e)
            continue
        m = ARXIV_RE.search(e)
        if not m:
            updated.append(e)
            continue
        arxiv_id = m.group(1).strip()
        try:
            abs_txt = fetch_arxiv_abs(arxiv_id)
        except Exception:
            abs_txt = ""
        if abs_txt:
            # insert abstract before last closing brace of entry
            e = re.sub(r"\n}\s*$", f"\n  abstract = {{{abs_txt}}}\n}}", e, flags=re.MULTILINE)
        updated.append(e)
    return "\n\n".join(updated) + "\n"

def main():
    if not BIB_PATH.exists():
        print(f"::warning::{BIB_PATH} not found")
        return
    orig = BIB_PATH.read_text(encoding="utf-8")
    new = add_abstracts(orig)
    if new != orig:
        BIB_PATH.write_text(new, encoding="utf-8")
        print("Updated abstracts from arXiv.")
    else:
        print("No changes to abstracts.")

if __name__ == "__main__":
    main()


