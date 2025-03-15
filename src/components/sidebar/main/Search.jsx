import { useSearchParams } from "react-router-dom";
import IconSearch from "../../../icons/IconSearch";

function Search() {
  const [searchParams] = useSearchParams();
  const sidebarState = searchParams.get("sidebar");

  return (
    <div className="flex-container gap-2 cursor-pointer">
      <IconSearch />
      <p
        className={`text-gray-100 font-light duration-300 ${
          sidebarState === "closed" ? "transition-hidden" : ""
        }`}
      >
        Search
      </p>
    </div>
  );
}

export default Search;
