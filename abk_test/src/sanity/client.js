import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
    projectId: "6ok7vsq7",
    dataset: "production",
    apiVersion: "v2025-04-02",
    useCdn: false
})