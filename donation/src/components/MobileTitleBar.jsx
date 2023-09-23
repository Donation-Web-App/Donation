import { Logo, WelcomeText, Logout } from ".";

export function MobileTitleBar() {
  return (
    <div className="h-full flex flex-col justify-between bg-white">
      <div className="h-1/2 flex items-center justify-center">
        <Logo />
      </div>
      <hr />
      <div className="h-1/2 flex items-center justify-between px-5">
        <WelcomeText />
        <Logout />
      </div>
      <hr />
    </div>
  );
}
