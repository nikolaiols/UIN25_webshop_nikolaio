import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
    projectId: "13mhafto",
    dataset: "production",
    apiVersion: "v2025-03-24",
    useCdn: false
})