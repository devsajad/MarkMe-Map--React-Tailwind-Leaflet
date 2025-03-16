import { NavLink, useSearchParams } from "react-router-dom";
import IconBookmark from "../../../../icons/IconBookmark";

function Bookmarked() {
  const [searchParams] = useSearchParams();
  const sidebarState = searchParams.get("sidebar");

  return (
    <NavLink
      to={"/categories?sidebar=closed"}
      className="flex-container gap-2 cursor-pointer"
    >
      <IconBookmark />
      <p
        className={`text-gray-100 font-light duration-300 ${
          sidebarState === "closed" ? "transition-hidden" : ""
        }`}
      >
        Marked
      </p>
    </NavLink>
  );
}

export default Bookmarked;
