import { redirectIfNotLoggedIn } from "../../lib/utils";

export function Index () {
    redirectIfNotLoggedIn();
    const userRole = window.localStorage.getItem('userRole');

    if (userRole == "admin") {
        window.location = "/admin/home";
    } else {
        window.location = "/donor/home";
    }

    return <div>Redirecting you in a second...</div>
}