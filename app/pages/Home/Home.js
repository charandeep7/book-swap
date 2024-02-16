import { SparklesCore } from "@/components/ui/sparkle";
import { Button } from "@/components/ui/button";
import { GithubIcon, NotebookIcon } from "lucide-react";
import { MovingBooks } from "@/app/components/Card";
import Link from "next/link";

export async function Home() {
  return (
    <div className="w-full relative top-16 h-[calc(100vh-64px)]">
      <div className="relative z-20 flex flex-col items-center justify-center gap-4 overflow-hidden">
        <h1 className="md:text-5xl text-3xl lg:text-8xl mt-5 font-bold text-center relative">
          Book Swap
        </h1>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2>Trade Your Tales: Where Stories Find New Homes</h2>
          <p className="pl-4 pr-4 w-full sm:w-1/2 text-justify">
            Welcome to our book exchange website, where book lovers converge to
            share, discover, and connect through the magic of literature. Dive
            into our vast collection of titles spanning all genres, from
            classics to contemporary gems. Join our community of avid readers,
            engage in lively discussions, and swap books to uncover new
            favorites. Embrace the joy of reading and the thrill of exploration
            as you embark on a journey of literary discovery with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link target="_blank" href="https://github.com/charandeep7/book-swap">
              <Button className="cursor-pointer w-full">
                Github Repo &nbsp; <GithubIcon size={20} />{" "}
              </Button>
            </Link>
            <Link href="/trendingbooks">
              <Button variant="outline" className="cursor-pointer w-full">
                Trending Books &nbsp; <NotebookIcon size={20} />{" "}
              </Button>
            </Link>
          </div>
        </div>
        <MovingBooks />
      </div>
      {/* Core component */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#000"
        />
      </div>
    </div>
  );
}
