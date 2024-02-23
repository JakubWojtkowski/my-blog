import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex flex-col max-w-4xl mx-auto py-5 h-full">
      <h1 className="font-bold text-8xl flex-1 leading-4">
        Built yourself today with
        <span className="underline italic"> improveu</span>
      </h1>

      <div>
        <p>
          The <span>improveu</span> is your destination for self-development and
          personal growth
        </p>
        <div>
          <Image src="" alt="" width={300} height={300} />
          <p>The goal is simple: Be better than yesterday</p>
        </div>
      </div>

      <div>
        Latest post: Feb 21, 2024 - The goal is simple: Be better than
        yesterday...
      </div>

      <span>( scroll )</span>
    </div>
  );
}
