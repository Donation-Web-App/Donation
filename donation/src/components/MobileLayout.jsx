import { Outlet } from "react-router-dom";
import { NavBar } from ".";
import { TitleBar } from ".";

export function MobileLayout() {
  const titleBarHeight = "100px";
  const navBarHeight = "50px";

  return (
    <div className="h-full">
      <div className={`fixed top-0 left-0 right-0 h-[${titleBarHeight}]`}>
        <TitleBar />
      </div>
      <div className={`h-full pt-[${titleBarHeight}] pb-[${navBarHeight}]`}>
        <Outlet />
      </div>
      <div className={`fixed bottom-0 left-0 right-0 h-[${navBarHeight}]`}>
        <NavBar />
      </div>
    </div>
  );
}
