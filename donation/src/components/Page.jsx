import { redirectIfNotLoggedIn } from "../lib/utils";

export function Page ({ children, requiresLogin, className }) {
    // Protected pages will redirect you to the login screen if you are not logged in
    if (requiresLogin) {
        redirectIfNotLoggedIn();
    }

    return (
        <div className={`pt-16 py-2.5 px-5 ${className}`}>
            {children}
        </div>
    )
}