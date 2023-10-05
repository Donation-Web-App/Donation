import { Logo, WelcomeText, Logout } from ".";

export function DesktopTitleBar() {
  return (
    <div className="h-full border-b">
      <div className="h-full flex justify-between bg-white px-[20px]">
        <div className="flex gap-5 items-center">
          <Logo />
          <WelcomeText />
        </div>
        <div className="flex items-center">
          <Logout />
        </div>
      </div>
    </div>
  );
}
