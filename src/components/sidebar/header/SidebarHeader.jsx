import { useSearchParams } from "react-router-dom";
import IconSidebar from "../../../icons/IconSidebar";

function SidebarHeader() {
  const [searchParams] = useSearchParams();
  const sidebarState = searchParams.get("sidebar");

  return (
    <header className="mb-8">
      <div className="flex-container justify-between h-7">
        <p
          className={`text-gray-50 text-lg duration-200 ${
            sidebarState === "closed" ? "hidden" : ""
          }`}
        >
          MarkMe
        </p>
        <IconSidebar />
      </div>
    </header>
  );
}

export default SidebarHeader;
