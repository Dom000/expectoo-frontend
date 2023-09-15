"use client";
import EightSection from "@/components/sections/eight-section/EightSection";
import FourthSection from "@/components/sections/fourth-section/FourthSection";
import HeaderSection from "@/components/sections/header-section/HeaderSection";
import MapSection from "@/components/sections/map-section/MapSection";
import SecondSection from "@/components/sections/second-section/SecondSection";
import Team from "@/components/sections/team-section/Team";
import Swipe from "@/components/sections/testimony-section/Swipes";
import ThirdSection from "@/components/sections/third-section/ThirdSection";

export default function Home() {
  return (
    <main className="w-full  ">
      <HeaderSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <MapSection />
      <Swipe />
      <Team />
      <EightSection />
    </main>
  );
}
