export function MobileNavBar({
  routes,
  currentRoute,
  setCurrentRoute,
  navigate,
}) {
  const links = routes.map((route) => {
    function handleClick() {
      setCurrentRoute(route.to);
      navigate(route.to);
    }

    return (
      <div key={route.to} onClick={handleClick}>
        {route.icon}
      </div>
    );
  });
  return (
    <div className="bg-white h-full">
      <hr />
      <div className="flex justify-between items-center px-10 h-full">
        {links}
      </div>
    </div>
  );
}
