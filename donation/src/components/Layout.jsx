import { DesktopLayout, MobileLayout } from ".";
import { isMobile } from "../lib/utils";

export function Layout() {
  if (isMobile()) {
    return <MobileLayout />;
  } else {
    return <DesktopLayout />;
  }
}
