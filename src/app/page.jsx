"use client";

import HomeHero from "@/components/sections/HomeHero";
import DepartmentsGrid from "@/components/sections/DepartmentsGrid";
import EventsSection from "@/components/sections/EventsSection";
import CampusPreview from "@/components/sections/CampusPreview";

export default function Home() {
  return (
    <div className="w-full">
      <HomeHero />
      <DepartmentsGrid />
      <EventsSection />
      <CampusPreview />
    </div>
  );
}
