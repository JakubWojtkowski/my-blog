import { FullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == "${slug}"] {
        "currentSlug": slug.current,
        title,
        content, 
        titleImage
      }[0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: FullBlog = await getData(params.slug);

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase ">
          My blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt={data.title}
        width={900}
        height={900}
        className="rounded-lg mt-8 border object-cover"
        priority
      />

      <div className="my-8 prose prose-blue prose-xl dark:prose-invert">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
