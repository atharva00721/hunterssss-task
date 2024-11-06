"use client";
import * as React from "react";
import Scene from "@/components/Scene";
import Projects from "@/components/Projects";
import Counter from "@/components/Counter";
import Lenis from "lenis";
export default function Home() {
  const [activeProject, setActiveProject] = React.useState(null);
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-[#111111] max-md:py-20">
      <div className="w-full px-4 py-20 md:pt-52">
        <div className="mx-auto text-white flex bg-[#101010] flex-row">
          <h2 className="w-[30%] mx-auto text-3xl md:text-6xl font-light mb-6 text-[#A16A00]">
            $ import <span className="font-semibold">about</span>
          </h2>
          <div className="w-[60%] space-y-4 text-lg">
            <p>
              Behind this legendary hackathon and series of extraordinary event
              lies the heart and soul of Techuntersssss. More than a community,
              it's a gathering of passionate individuals sharing love, interest,
              and compassion for technology.
            </p>
            <p>
              We aim to bring together all the community-minded hunters to
              provide them with the perfect space where they can nurture their
              tech curiosities by learning, networking, interacting, and sharing
              their experiences-all while having fun!
            </p>
            <p>So, if you love tech just like us, this is the place to be!</p>
            <p className="text-[#A16A00] font-semibold">
              Here's how we made it.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20">
          <Counter />
        </div>
      </div>
      <div className="md:h-[20vh]"></div>
      <div className="max-w-7xl px-4 mb-16 text-white">
        <h2 className=" text-3xl md:text-6xl font-light mb-4 text-[#A16A00]">
          $ git push <span className="font-semibold">Past Events</span>
        </h2>
        <p className="text-lg">
          Explore our past events to see the amazing experiences and knowledge
          shared. From TechXchange to Speaker Sessions, revisit the highlights
          and key moments.
        </p>
      </div>
      <Projects setActiveProject={setActiveProject} />
      <Scene activeProject={activeProject} />
    </main>
  );
}
