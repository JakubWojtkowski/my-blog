import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const client = createClient({
    apiVersion,
    dataset: "production",
    projectId,
    useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}