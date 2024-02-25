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
    <div className="grid grid-cols-1 mt-5 gap-16">
      <Hero />
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <h2 className="text-center font-bold tracking-tighter text-5xl pb-10">
          Latest posts
        </h2>
        {data.map((post, index) => (
          <Card key={index} className="flex py-4">
            <Image
              src={urlFor(post.titleImage).url()}
              alt={post.title}
              width={400}
              height={400}
              className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <p className="text-sm">Feb 21, 2024</p>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <Button asChild className=" mt-7">
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
