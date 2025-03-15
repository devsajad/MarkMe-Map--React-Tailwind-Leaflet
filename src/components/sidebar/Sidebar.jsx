import { useSearchParams } from "react-router-dom";

function Sidebar({ children }) {
  const [searchParams] = useSearchParams();
  const sidebarState = searchParams.get("sidebar");

  return (
    <aside
      className={`h-dvh p-4 z-1000 absolute top-0 left-0 duration-300 backdrop-blur-lg bg-dark-primary/85 ${
        sidebarState === "closed" ? "w-18" : "w-50"
      }`}
    >
      {children}
    </aside>
  );
}

export default Sidebar;
