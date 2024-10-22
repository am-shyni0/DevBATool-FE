import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AlignJustify } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MAIN_TABS } from "@/data/constants";
import { MainTab, SubTab } from "@/types/types";

const Topbar = () => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>(MAIN_TABS[0]);
  const [activeSubTab, setActiveSubTab] = useState<SubTab | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const paths = pathname.split("/");
    const currentTab = MAIN_TABS.filter(
      (mainTab) => mainTab.slug === paths[1]
    )[0];
    setActiveMainTab(currentTab);
    if (currentTab.sub.length > 0) {
      const currentSubTab = currentTab.sub.filter(
        (subtab) => subtab.slug === paths[2]
      )[0];
      setActiveSubTab(currentSubTab);
    } else {
      setActiveSubTab(null);
    }
  }, [pathname]);

  return (
    <header className="flex h-14 items-center gap-4 bg-zinc-100 px-4 lg:h-[60px] lg:px-6">
      <div className="w-full flex-1">
        <div className="flex items-center justify-start gap-5">
          <AlignJustify className="hidden md:flex text-primary size-8" />
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>OverX Project</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={activeMainTab.to}>{activeMainTab.name}</Link>
                </BreadcrumbLink>
                {/* <BreadcrumbPage>{activeSubTab.name}</BreadcrumbPage> */}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
