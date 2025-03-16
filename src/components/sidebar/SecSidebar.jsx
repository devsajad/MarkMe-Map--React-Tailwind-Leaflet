import { Outlet, useOutlet } from "react-router-dom";

function SecSidebar() {
  const outletElement = useOutlet();
  const translateClass = outletElement ? "" : "-translate-x-120/100";

  return (
    <div
      className={`${translateClass} h-full overflow-y-scroll absolute top-0 left-18 p-4 z-[999] backdrop-blur-lg bg-dark-primary/85 w-60 md:w-90 border-l border-style transition-transform duration-500`}
    >
      <Outlet />
    </div>
  );
}

export default SecSidebar;
