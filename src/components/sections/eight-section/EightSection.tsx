import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { LegacyRef, useEffect, useLayoutEffect, useRef } from "react";
import { EasePack } from "gsap/EasePack";
function EightSection() {
  const Window = window;
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from("#zoom-in #zoom-out", {
      scale: 10,
      scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `-=${innerHeight * 0.3}`,
        scrub: 1,
      },
    });
  }, []);
  useEffect(() => {
    gsap.to("#zoom-out h2", {
      scale: Window.innerWidth > 1500 ? 400 : 160,
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
      <section
        id="zoom-out"
        className="bg-white flex flex-col items-center justify-center"
      >
        <h2 className="bg-clip-text tracking-widest text-[169px] font-bold border-4 text-shadow border-white text-transparent bg-cover bg-[url('/diamond-sunset.svg')] bg-no-repeat">
          Expec-too
        </h2>
      </section>
      <div
        id="zoom-in"
        className="bg-transparent flex flex-col items-center  w-full  animate__animated "
      >
        <div
          id="footer"
          className="w-[70%] h-[80%] p-5 leading-[45px] tracking-[0.5rem] text-white flex flex-col items-center text-5xl font-bold"
        >
          <h2>You are in good company here,Start with a free quote</h2>
        </div>
        <div id="footer2" className="w-full h-screen p-5 bg-slate-500">
          <h2>footer2</h2>
        </div>
      </div>
    </div>
  );
}

export default EightSection;
function MutableRefObject<T>() {
  throw new Error("Function not implemented.");
}
