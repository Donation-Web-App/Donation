import { Outlet } from "react-router-dom";
import { NavBar } from ".";
import { TitleBar } from ".";

export function MobileLayout() {
  return (
    <div className="h-full">
      <div className={`fixed top-0 left-0 right-0 h-[100px]`}>
        <TitleBar />
      </div>
      <div className={`h-full pt-[100px] pb-[50px]`}>
        <Outlet />
      </div>
      <div className={`fixed bottom-0 left-0 right-0 h-[50px]`}>
        <NavBar />
      </div>
    </div>
  );
}
