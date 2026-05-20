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
    "modules": [
        {
            "name": "Evidence intake CRM",
            "description": "Owner goals, channels, source URLs, and screenshot notes become a repeatable audit record instead of loose checklist text.",
            "metrics": [
                "Evidence sources captured",
                "Owner priorities ranked",
                "Risky assumptions flagged"
            ],
            "deliverable": "Signed intake and public-evidence map"
        },
        {
            "name": "Local visibility scoring engine",
            "description": "Scores findability, trust, conversion, accessibility, and competitive context with owner-safe severity labels.",
            "metrics": [
                "Presence score",
                "Trust gaps",
                "Conversion blockers"
            ],
            "deliverable": "Prioritized gap analysis"
        },
        {
            "name": "Roadmap and task planner",
            "description": "Converts audit findings into same-day, 7-day, 30-day, and student-pod implementation actions.",
            "metrics": [
                "Tasks sequenced",
                "Owner effort isolated",
                "Student actions scoped"
            ],
            "deliverable": "30-day local presence roadmap"
        },
        {
            "name": "Client handoff room",
            "description": "Packages recommendations, evidence, and approval state for a non-technical business owner.",
            "metrics": [
                "Owner approvals",
                "Evidence completeness",
                "Launch readiness"
            ],
            "deliverable": "Owner-safe handoff brief"
        }
    ],
    "plays": [
        {
            "name": "First-visit audit sprint",
            "trigger": "Client has no trusted baseline of public presence.",
            "outcome": "A complete public footprint diagnosis with urgent fixes separated from strategic work."
        },
        {
            "name": "Maps conversion rescue",
            "trigger": "Customers can find the listing but do not call, click, or trust it.",
            "outcome": "CTA, review, photo, and category fixes prioritized by customer impact."
        },
        {
            "name": "30-day owner roadmap",
            "trigger": "Audit is complete and needs to become executable.",
            "outcome": "A day-by-day owner/student action plan with due dates and evidence requirements."
        }
    ],
    "economics": {
        "buyer": "Small business owner or main-street program manager",
        "valueMetric": "Public presence gaps resolved per month",
        "priceHint": "$99 audit seat or $399 guided local-presence sprint",
        "northStar": "Owner-approved action plan completion rate"
    },
    "exportSuite": [
        "Owner-safe audit dossier",
        "Competitor benchmark memo",
        "30-day implementation roadmap",
        "Evidence ledger CSV",
        "Mentor QA brief"
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
        "sampleRows": { "Website exists and loads on mobile": "Homepage tested on phone viewport; hero, address, and hours visible without pinch zoom", "Google/Maps listing is findable": "Maps result found by business name and primary service within local search area", "NAP consistency checked": "Website footer, Maps listing, and Facebook page compared with mismatch notes", "Reviews visible and recent": "Recent review cadence captured with response status and trust risk", "Social proof captured": "Owner quote and public testimonial source logged with consent note", "Primary CTA visible": "Call/order/request quote CTA checked above fold on mobile and desktop", "Accessibility quick checks complete": "Keyboard tab path, alt text sampling, contrast spot checks, and form labels reviewed", "Top 5 action roadmap generated": "Top fixes ranked by impact, effort, owner dependency, and student dependency", "Citation accuracy scored": "NAP citation mismatches scored across search, maps, and social sources", "Mobile speed snapshot captured": "Mobile load friction noted from Lighthouse/manual network observation", "Competitor benchmark noted": "Compared against two nearby bakeries with stronger Maps photos and CTAs", "Owner action plan prioritized": "Roadmap grouped into same-day, 7-day, and 30-day owner tasks" }
    }
};
//# sourceMappingURL=domain.js.map