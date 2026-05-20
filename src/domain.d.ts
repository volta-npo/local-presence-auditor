export declare const domain: {
    kind: string;
    title: string;
    purpose: string;
    inputTitle: string;
    previewTitle: string;
    tableTitle: string;
    metricLabels: string[];
    fields: ({
        id: string;
        label: string;
        type: string;
        sample: string;
        placeholder: string;
    } | {
        id: string;
        label: string;
        type: string;
        sample: number;
        placeholder: string;
    })[];
    rows: string[];
    artifacts: string[];
    checks: string[];
    modules: {
        name: string;
        description: string;
        metrics: string[];
        deliverable: string;
    }[];
    plays: {
        name: string;
        trigger: string;
        outcome: string;
    }[];
    economics: {
        buyer: string;
        valueMetric: string;
        priceHint: string;
        northStar: string;
    };
    exportSuite: string[];
    sampleClient: string;
    saas: {
        personas: string[];
        stages: {
            name: string;
            goal: string;
            rowPatterns: string[];
        }[];
        sampleValues: {
            "primary-goal": string;
        };
        sampleRows: {
            "Website exists and loads on mobile": string;
            "Google/Maps listing is findable": string;
            "NAP consistency checked": string;
            "Reviews visible and recent": string;
            "Social proof captured": string;
            "Primary CTA visible": string;
            "Accessibility quick checks complete": string;
            "Top 5 action roadmap generated": string;
            "Citation accuracy scored": string;
            "Mobile speed snapshot captured": string;
            "Competitor benchmark noted": string;
            "Owner action plan prioritized": string;
        };
    };
};
