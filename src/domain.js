export const domain = {
    "kind": "audit",
    "title": "Presence Audit Console",
    "purpose": "A purpose-built audit interface for a zero-login audit that shows a local business exactly where its online footprint is missing, broken, or invisible.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Audit findings",
    "metricLabels": [
        "Presence Score",
        "Impact/Effort Priority",
        "Evidence Coverage"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Riverside Community Bakery",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "time from first call to prioritized roadmap",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Website exists and loads on mobile",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Owner-safe audit report",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Website exists and loads on mobile",
        "Google/Maps listing is findable",
        "NAP consistency checked",
        "Reviews visible and recent",
        "Social proof captured",
        "Primary CTA visible",
        "Accessibility quick checks complete",
        "Top 5 action roadmap generated",
        "Citation accuracy scored",
        "Mobile speed snapshot captured",
        "Competitor benchmark noted",
        "Owner action plan prioritized"
    ],
    "artifacts": [
        "Owner-safe audit report",
        "Impact-effort roadmap",
        "CSV findings ledger",
        "Owner intake questionnaire",
        "Competitive benchmark",
        "30-day implementation plan"
    ],
    "checks": [
        "Every failed item needs evidence",
        "URLs must be valid",
        "Severity must map to customer impact",
        "NAP mismatches must include source URLs",
        "Owner action plan requires due dates",
        "Competitor benchmark requires at least one peer"
    ],
    "sampleClient": "Riverside Community Bakery",
    "saas": {
        "personas": ["Student audit lead", "Small business owner", "Mentor reviewer"],
        "stages": [
            { "name": "Discovery intake", "goal": "Capture owner goals, target customers, and public evidence sources.", "rowPatterns": ["Website|Google|NAP|Social", "Evidence|Citation"] },
            { "name": "Presence diagnosis", "goal": "Score findability, trust, accessibility, and conversion gaps.", "rowPatterns": ["Reviews|CTA|Accessibility|Mobile|Competitor"] },
            { "name": "Roadmap handoff", "goal": "Turn audit evidence into prioritized owner actions.", "rowPatterns": ["roadmap|action plan|priority|Owner"] }
        ],
        "sampleValues": { "primary-goal": "publish a prioritized 30-day local presence roadmap" },
        "sampleRows": { "Competitor benchmark noted": "Compared against two nearby bakeries with stronger Maps photos and CTAs", "Owner action plan prioritized": "Roadmap grouped into same-day, 7-day, and 30-day owner tasks" }
    }
};
//# sourceMappingURL=domain.js.map