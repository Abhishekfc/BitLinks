import Image from "next/image";
import Link from "next/link";

// ❌ Removed Google Font import to avoid turbopack error
// You can use CSS instead to set a fallback system font

export default function Home() {
  return (
    <main>
      <section className="bg-purple-100 grid grid-cols-2 h-[90vh] font-sans">
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-3xl font-bold">
            The best URL shorten in the market
          </p>
          <p className="px-30 text-center">
            We’re not just another URL shortener — BitLinks makes link shortening fast, reliable, and incredibly simple, so you can focus on what matters.
          </p>

          <div className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-purple-200 p-3 py-1 cursor-pointer text-black font-bold rounded-lg shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/Abhishekfc/BitLinks">
              <button className="bg-purple-200 p-3 py-1 cursor-pointer text-black font-bold rounded-lg shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out">
                Github
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="a vector image"
            src={"/vector.jpg"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
