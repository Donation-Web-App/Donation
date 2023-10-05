import { Outlet } from "react-router-dom";
import { NavBar } from ".";
import { TitleBar } from ".";

export function DesktopLayout() {
  return (
    <div className="h-screen">
      <div className={`fixed top-0 left-0 right-0 h-[50px]`}>
        <TitleBar />
      </div>
      <div className={`fixed h-full top-[50px] w-[200px]`}>
        <NavBar />
      </div>
      <div className={`pt-[50px] pl-[200px] h-full w-full overflow-y-auto`}>
        <Outlet />
      </div>
    </div>
  );
}
