export function DesktopNavBar({
  routes,
  currentRoute,
  setCurrentRoute,
  navigate,
}) {
  return (
    <div className="bg-white h-full flex pl-5 border-r">
      <div>
        {routes.map((route) => {
          // Dark gray if the link's route is the current route
          const textColor =
            route.to === currentRoute ? "text-gray-900" : "text-gray-400";

          function handleClick() {
            setCurrentRoute(route.to);
            navigate(route.to);
          }

          return (
            <div
              className="flex items-center my-5 cursor-pointer"
              key={route.to}
              onClick={handleClick}
            >
              <div className="mr-2.5">{route.icon}</div>
              <span className={`text-sm ${textColor}`}>{route.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
