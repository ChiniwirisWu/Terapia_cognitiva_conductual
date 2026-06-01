"use client"

import { usePageProviderContext, PageRoutes } from "@/components/pageProvider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// this component returns the page main content
export default function Index() {
  const { pageRouteSelected } = usePageProviderContext();
  const router = useRouter();

  useEffect(() => {
    // targets the page depending on the pageSelected
    switch (pageRouteSelected) {
      case PageRoutes.hero:
        router.replace('/hero');
        break;

      case PageRoutes.log:
        router.replace('/logs');
        break;

      default:
        router.replace('/hero');
        break;
    }

  }, [pageRouteSelected, router]);

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <p>Cargando...</p>
    </div>
  )
}
