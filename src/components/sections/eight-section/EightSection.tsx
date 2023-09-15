import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { LegacyRef, useEffect, useLayoutEffect, useRef } from "react";

function EightSection() {
  const Window = window;
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from("#zoom-in h2 #footer", {
      scale: 150,
      scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        // end: `-=${innerHeight * 1.3}`,
        // scrub: 3,
      },
    });
  }, []);
  useEffect(() => {
    gsap.to("#zoom-out h2", {
      scale: Window.innerWidth > 1500 ? 250 : 115,
      stagger: 3,
      duration: 1,
      scrollTrigger: {
        trigger: "#zoom-out",
        pin: true,
        end: `+=${Window.innerHeight * 1.3}`,
        scrub: 3,
      },
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <section id="zoom-out" className="bg-white">
        <h2 className="bg-clip-text tracking-widest text-[170px] font-bold border-4 text-shadow border-white text-transparent bg-[url('/bg2.webp')]">
          Expec-too
        </h2>
      </section>
      <section
        id="zoom-in"
        className="bg-transparent animate__animated bg-[url('/bg2.webp')]"
      >
        <h2>Text zoom-in</h2>
        <br />
        <div id="footer">
          <h2>footer</h2>
        </div>
      </section>
    </div>
  );
}

export default EightSection;
function MutableRefObject<T>() {
  throw new Error("Function not implemented.");
}
