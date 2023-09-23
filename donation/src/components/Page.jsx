import { redirectIfNotLoggedIn } from "../lib/utils";

export function Page({ children, requiresLogin }) {
  // Protected pages will redirect you to the login screen if you are not logged in
  if (requiresLogin) {
    redirectIfNotLoggedIn();
  }

  return <div className={`h-full w-full p-2.5`}>{children}</div>;
}
