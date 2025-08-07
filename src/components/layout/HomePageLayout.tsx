import { ReactNode } from "react";

interface HomePageLayoutProps {
  children: ReactNode;
}

export function HomePageLayout({ children }: HomePageLayoutProps) {
  return (
    <div className="font-inter w-full min-h-screen bg-gradient-to-br mx-auto relative">
      {children}
    </div>
  );
}