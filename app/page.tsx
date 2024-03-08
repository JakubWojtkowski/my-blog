import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./globals.css";
import { ArrowDownRight } from "lucide-react";
// import Menu from "./components/Menu";
import DropdownMenu from "./components/DropdownMenu";

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
    <div className="grid grid-cols-1 mt-4 min-h-[100vh]">
      <Hero />

      <div className="z-10 w-full max-w-4xl mx-auto md:pt-8 px-8 lg:px-0 min-h-[100vh] bg-lightBackground dark:bg-darkBackground border-t-4 rounded">
        <h2 className="text-center font-bold tracking-tighter text-4xl md:text-5xl pb-2">
          Articles
        </h2>

        {/* <Menu /> */}
        {/* <DropdownMenu /> */}

        {data.map((post, index) => (
          <Card
            key={index}
            className="flex-1 flex flex-col sm:flex-row py-8 gap-8 border-b-2 border-gray-200 dark:border-gray-700 "
          >
            <Image
              src={urlFor(post.titleImage).url()}
              alt={post.title}
              width={400}
              height={200}
              className="rounded-lg h-[200px] object-cover"
            />
            <CardContent className="flex flex-col justify-end gap-1 sm:gap-2 flex-1 p-0">
              <p className="text-base text-gray-600 dark:text-gray-400 font-semibold">
                Feb 21, 2024
              </p>

              <div className="text-xs tracking-wide my-2"><span className="rounded-xl bg-slate-100 text-slate-500 dark:text-slate-400 dark:bg-gray-800 px-2 py-2">mental health</span></div>

              <h3 className="text-2xl font-bold cursor-pointer">
                {post.title.length >= 36
                  ? post.title.slice(0, 36).concat("...")
                  : post.title}
              </h3>
              <Button asChild className="mt-8 flex gap-2 font-semibold bg-darkBackground dark:bg-lightBackground">
                <Link href={`/blog/${post.currentSlug}`}>
                  Read more <ArrowDownRight className="h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}
