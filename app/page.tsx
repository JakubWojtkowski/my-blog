import { client } from "@/lib/sanity";

const fetchData = async () => {
  const query = `
  *[_type == "blog"] | order(_createdAt desc) {
    title, 
      description, 
        "currentSlug": slug.current
  }`;

  const data = await client.fetch(query);

  return data;
};

export default async function Home() {
  const data = await fetchData();

  console.log(data);
  return (
    <div>
      <h1 className="text-4xl">Page</h1>
    </div>
  );
}
