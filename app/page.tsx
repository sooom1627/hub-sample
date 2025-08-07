'use client';

import { Header } from "@/src/ui/header/Header";
import { HomePageLayout } from "@/src/components/layout/HomePageLayout";
import { MainContent } from "@/src/components/layout/MainContent";

export default function Home() {
  return (
    <HomePageLayout>
      <Header />
      <MainContent />
    </HomePageLayout>
  );
}
