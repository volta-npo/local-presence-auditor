export const config = {
  "number": 1,
  "slug": "local-presence-auditor",
  "title": "Local Presence Auditor",
  "category": "Digital Presence",
  "tagline": "A zero-login audit that shows a local business exactly where its online footprint is missing, broken, or invisible.",
  "persona": "Volta student pods auditing restaurants, service businesses, and nonprofits before kickoff.",
  "gap": "SEO suites are built for marketers with budgets. Small businesses need a humane, evidence-based first audit that can be run during a 30-minute discovery call.",
  "niche": "Under-resourced local businesses with low or fragmented digital presence.",
  "metric": "time from first call to prioritized roadmap",
  "modules": [
    "Website basics scanner",
    "Maps/listing evidence checklist",
    "Review and social proof snapshot",
    "Action plan exporter"
  ],
  "theme": {
    "accent": "#2563eb",
    "accent2": "#60a5fa",
    "emoji": "\ud83c\udf10",
    "metricLabel": "Presence readiness",
    "workflow": [
      "Capture public evidence",
      "Score the digital gap",
      "Prioritize owner-safe fixes",
      "Export handoff packet"
    ],
    "privacy": "Only public business information and project notes should be entered. Do not store passwords."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "website-basics-scanner",
      "label": "Website basics scanner",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify website basics scanner with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "maps-listing-evidence-checklist",
      "label": "Maps/listing evidence checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify maps/listing evidence checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "review-and-social-proof-snapshot",
      "label": "Review and social proof snapshot",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify review and social proof snapshot with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "action-plan-exporter",
      "label": "Action plan exporter",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify action plan exporter with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Local Presence Auditor and capture baseline evidence.",
      "Complete the website basics scanner workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Riverside Community Bakery",
    "chapter": "Jacksonville",
    "studentLead": "Volta Student Lead",
    "notes": "Digital presence sprint for an under-digitized local storefront. Local Presence Auditor sample.",
    "evidencePrefix": "Local Presence Auditor",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
