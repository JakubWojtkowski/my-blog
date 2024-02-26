import { FullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import "../../globals.css";
import Footer from "@/app/components/Footer";

export const revalidate = 30;

async function fetchArticleData(slug: string) {
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
  const data: FullBlog = await fetchArticleData(params.slug);

  return (
    <div className="">
      <div className="mt-8 max-w-4xl w-full mx-auto">
        <h1 className="flex flex-col gap-2">
          <span className="text-base text-center text-primary tracking-wide font-semibold rounded-lg">
            Self-development
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
            {data.title}
          </span>
          <span className="text-center dark:text-gray-300 text-gray-600">
            6 mins read
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
      <Footer />
    </div>
  );
}
