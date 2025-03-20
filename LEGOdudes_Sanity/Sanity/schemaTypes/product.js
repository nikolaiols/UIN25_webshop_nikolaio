import { slugifier } from "./helpers";

export const product ={
    name: "product",
    title: "produkt",
    type: "document",
    fields: [
        {
            name: "producttitle",
            title: "Produktnavn",
            type: "string"
        },
        {
            name: "slug",
            title: "Pen URL",
            type: "slug",
            options: {
                source: "producttitle",
                slugify: input => slugifier(input)
            }
        },
        {
            name: "productimage",
            title: "Produktbilde",
            type: "image"
        },
        {
            name: "price",
            title: "Pris",
            type: "number"
        },
        {
            name: "category",
            title: "Kategori",
            type: "reference",
            to: [{type: "category"}]
        }
    ]
}