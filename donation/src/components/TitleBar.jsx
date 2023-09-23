import { DesktopTitleBar, MobileTitleBar } from ".";
import { isMobile } from "../lib/utils";

export function TitleBar() {
  if (isMobile()) {
    return <MobileTitleBar />;
  } else {
    return <DesktopTitleBar />;
  }
}
