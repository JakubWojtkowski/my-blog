import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export const revalidate = 30;

const fetchData = async () => {
  const query = `
  *[_type == "blog"] | order(_createdAt desc) {
    title, 
      description, 
        "currentSlug": slug.current,
        titleImage
  }`;

  const data = await client.fetch(query);

  return data;
};

export default async function Home() {
  const data: BlogCard[] = await fetchData();

  return (
    <div className="grid grid-cols-1 mt-5 gap-6">
      <Hero />
      <div className="max-w-4xl mx-auto px-4">
        {data.map((post, index) => (
          <Card key={index}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt={post.title}
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                {post.description}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.currentSlug}`}>Read more</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}
