"use client";
import FourthSection from "@/components/sections/fourth-section/FourthSection";
import HeaderSection from "@/components/sections/header-section/HeaderSection";
import SecondSection from "@/components/sections/second-section/SecondSection";
import ThirdSection from "@/components/sections/third-sction/ThirdSection";

export default function Home() {
  return (
    <main className="w-full  ">
      <HeaderSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </main>
  );
}
