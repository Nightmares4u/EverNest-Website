#!/usr/bin/env python3
"""
Pulls Search Console performance data for evernestconsultants.com using a
service account and writes a dated JSON report into seo-data/search-console/.

Auth: reads the service account key JSON from the GSC_SERVICE_ACCOUNT_JSON
environment variable (set as a GitHub Actions repo secret — never committed,
never typed anywhere else). The service account must be added as a user on
the Search Console property (Settings > Users and permissions) before this
will return data.

Note on scope: the public Search Console API only exposes Search Analytics
(queries, pages, clicks/impressions/CTR/position) and per-URL Inspection.
It does NOT expose the aggregate "Page indexing" report (discovered/crawled
-not-indexed counts) — there is no public API for that view. Indexing-status
review still has to be done manually in the Search Console UI periodically.
"""
import json
import os
import sys
from datetime import date, timedelta

from google.oauth2 import service_account
from googleapiclient.discovery import build

SITE_URL = "https://www.evernestconsultants.com/"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "seo-data", "search-console")


def get_service():
    key_json = os.environ.get("GSC_SERVICE_ACCOUNT_JSON")
    if not key_json:
        print("ERROR: GSC_SERVICE_ACCOUNT_JSON env var not set.", file=sys.stderr)
        sys.exit(1)
    info = json.loads(key_json)
    creds = service_account.Credentials.from_service_account_info(info, scopes=SCOPES)
    return build("searchconsole", "v1", credentials=creds)


def query(service, start, end, dimensions, row_limit=25):
    body = {
        "startDate": start.isoformat(),
        "endDate": end.isoformat(),
        "dimensions": dimensions,
        "rowLimit": row_limit,
    }
    resp = service.searchanalytics().query(siteUrl=SITE_URL, body=body).execute()
    return resp.get("rows", [])


def main():
    service = get_service()
    today = date.today()

    windows = {
        "last_28_days": (today - timedelta(days=28), today),
        "last_90_days": (today - timedelta(days=90), today),
    }

    report = {"generated_at": today.isoformat(), "site": SITE_URL, "windows": {}}

    for label, (start, end) in windows.items():
        totals_rows = query(service, start, end, dimensions=[])
        totals = totals_rows[0] if totals_rows else {}
        report["windows"][label] = {
            "start": start.isoformat(),
            "end": end.isoformat(),
            "totals": {
                "clicks": totals.get("clicks", 0),
                "impressions": totals.get("impressions", 0),
                "ctr": totals.get("ctr", 0),
                "position": totals.get("position", 0),
            },
            "top_queries": query(service, start, end, dimensions=["query"], row_limit=25),
            "top_pages": query(service, start, end, dimensions=["page"], row_limit=25),
        }

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    out_path = os.path.join(OUTPUT_DIR, f"{today.isoformat()}.json")
    with open(out_path, "w") as f:
        json.dump(report, f, indent=2)

    latest_path = os.path.join(OUTPUT_DIR, "latest.json")
    with open(latest_path, "w") as f:
        json.dump(report, f, indent=2)

    print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()
