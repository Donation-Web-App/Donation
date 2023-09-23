import { Outlet } from "react-router-dom";
import { NavBar } from ".";
import { TitleBar } from ".";

export function DesktopLayout() {
  const navBarWidth = "200px";
  const titleBarHeight = "50px";
  return (
    <div className="h-screen">
      <div className={`fixed top-0 left-0 right-0 h-[${titleBarHeight}]`}>
        <TitleBar />
      </div>
      <div
        className={`fixed h-full top-[${titleBarHeight}] w-[${navBarWidth}]`}
      >
        <NavBar />
      </div>
      <div
        className={`pt-[${titleBarHeight}] pl-[${navBarWidth}] h-full w-full overflow-y-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
}
