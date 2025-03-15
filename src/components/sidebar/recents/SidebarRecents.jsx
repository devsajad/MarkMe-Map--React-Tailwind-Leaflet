import { useSearchParams } from "react-router-dom";
import IconPin from "../../../icons/IconPin";

function SidebarRecents() {
  const [searchParams] = useSearchParams();
  const sidebarState = searchParams.get("sidebar");

  return (
    <section className="text-gray-100">
      <p
        className={`opacity-40 text-sm font-medium mb-2 ${
          sidebarState === "closed" ? "transition-hidden" : ""
        }`}
      >
        Recents
      </p>
      <ul>
        <li className="flex-container gap-2 cursor-pointer">
          <IconPin />
          <p
            className={`duration-300 ${
              sidebarState === "closed" ? "transition-hidden" : ""
            }`}
          >
            Tehran
          </p>
        </li>
      </ul>
    </section>
  );
}

export default SidebarRecents;
