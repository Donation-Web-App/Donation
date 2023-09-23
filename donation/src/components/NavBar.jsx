import { HomeI, DonateI, Activity, HistoryI, Like } from "../assets";
import { DesktopNavBar, MobileNavBar } from ".";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Logout } from ".";
import { isMobile } from "../lib/utils";

export function NavBar() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  const userRole = window.localStorage.getItem("userRole");
  const navigate = useNavigate();

  const adminRoutes = [
    { icon: <HomeI />, to: "/admin/home", label: "Home" },
    { icon: <Activity />, to: "/admin/breakdown", label: "Breakdown" },
    { icon: <Like />, to: "/admin/donations", label: "Donations" },
    { icon: <Like />, to: "/admin/mydonations", label: "My Donations" },
  ];

  const donorRoutes = [
    { icon: <HomeI />, to: "/donor/home", label: "Home" },
    { icon: <Like />, to: "/donor/donations", label: "Donations" },
  ];

  // Choose the appropriate routes to display based on a user's role
  const routes = userRole == "admin" ? adminRoutes : donorRoutes;

  if (isMobile()) {
    return (
      <MobileNavBar
        routes={routes}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        navigate={navigate}
      />
    );
  } else {
    return (
      <DesktopNavBar
        routes={routes}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        navigate={navigate}
      />
    );
  }
}
