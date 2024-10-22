import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import BackIcon from "@/assets/sidebar/BackIcon";
import { useEffect, useState } from "react";
import { MAIN_TABS } from "@/data/constants";
import { MainTab } from "@/types/types";

export default function Sidebar() {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>(MAIN_TABS[0]);
  const [subTabsActive, setSubTabsActive] = useState<boolean>(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const paths = pathname.split("/");
    const currentTab = MAIN_TABS.filter(
      (mainTab) => mainTab.slug === paths[1]
    )[0];
    setActiveMainTab(currentTab);
    if (currentTab.name === "Dashboard") {
      setSubTabsActive(false);
    } else {
      setSubTabsActive(true);
    }
  }, [pathname, subTabsActive]);

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center lg:h-[60px] gap-2 justify-start pt-4 pl-4">
        {subTabsActive && (
          <button onClick={() => navigate("/")}>
            <BackIcon size={20} />
          </button>
        )}
        <Avatar className="border-2 border-primary">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-col items-center justify-center">
          <p className="font-semibold text-md">Will Smith</p>
          <p className="font-light text-xs">willsmith@gmail.com</p>
        </div>
      </div>
      <div className="flex-1 pt-8 text-md">
        <nav className="grid items-start font-medium">
          {MAIN_TABS.length > 0 &&
            activeMainTab &&
            activeMainTab.sub.length === 0 &&
            MAIN_TABS.map((mainTab) => {
              return (
                <div
                  key={mainTab.name}
                  className={`${
                    mainTab.to === pathname && mainTab.name === "Dashboard"
                      ? "bg-primary/40"
                      : ""
                  }`}
                >
                  <Link
                    onClick={() => setSubTabsActive(true)}
                    to={mainTab.to}
                    className={`flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      mainTab.to === pathname && mainTab.name === "Dashboard"
                        ? "border-2 border-primary"
                        : ""
                    } `}
                  >
                    <mainTab.icon size={20} />
                    {mainTab.name}
                  </Link>
                </div>
              );
            })}

          {activeMainTab &&
            activeMainTab.sub.length > 0 &&
            activeMainTab.sub.map((subTab) => (
              <div
                key={subTab.name}
                className={`${subTab.to === pathname ? "bg-primary/40" : ""}`}
              >
                <Link
                  to={subTab.to}
                  className={`flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    subTab.to === pathname ? "border-2 border-primary" : ""
                  } `}
                >
                  {subTab.name}
                </Link>
              </div>
            ))}
        </nav>
      </div>
    </div>
  );
}
