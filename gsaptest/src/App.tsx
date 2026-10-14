
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".box", {
        x: 400,
        rotation: 360,
        ease: "none",

        scrollTrigger: {
          trigger: ".box",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="bg-black text-white">
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Scroll Down
        </h1>
      </section>

      <section className="h-screen flex items-center px-20">
        <div className="box w-24 h-24 bg-purple-500 rounded-xl" />
      </section>

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Animation Complete
        </h1>
      </section>
    </main>
  );
}
