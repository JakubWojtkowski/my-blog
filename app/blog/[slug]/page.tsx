import { FullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import "../../globals.css";
import Footer from "@/app/components/Footer";
import { Facebook, Linkedin, MoveLeft, Twitter, X } from "lucide-react";
import Link from "next/link";

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
    <div>
      <div className="mt-8 max-w-4xl w-full mx-auto px-8 lg:px-0">
        <button className="mt-8 flex gap-2">
          <Link href={`/`}>
            <MoveLeft className="w-9 h-9" />
          </Link>
        </button>
        <h1 className="flex flex-col gap-2">
          <span className="text-base text-center text-primary font-semibold rounded-lg">
            Self-development
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
            {data.title}
          </span>
          <span className="text-center dark:text-gray-400 text-gray-600">
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

        <div className="flex gap-4 relative my-8">
          <div className="flex flex-col gap-1 sticky top-0 py-2 left-0 h-32 text-base border-t-2 border-dark dark:border-lightBackground">
            <span className="">Written by</span>
            <span className="font-semibold">@Jakub Wojtkowski</span>
            <span>Feb 21, 2024</span>
          </div>

          <div className="prose prose-blue prose-xl dark:prose-invert pl-16">
            <PortableText value={data.content} />

            <div className="flex flex-col gap-2">
              <span className="text-base">( Share )</span>
              <div className="flex gap-2">
                <Linkedin className="cursor-pointer" />
                <Twitter className="cursor-pointer" />
                <Facebook className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
