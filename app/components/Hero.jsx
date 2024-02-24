import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <h1>
        Built yourself today with
        <span> improveu</span>
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
