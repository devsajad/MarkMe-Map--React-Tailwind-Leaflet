import { Link, useNavigate, useSearchParams } from "react-router-dom";

function IconSidebar() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sidebarState = searchParams.get("sidebar");

  function toggleSidebar() {
    if (sidebarState === "open" || !sidebarState) {
      navigate("/?sidebar=closed");
    } else {
      navigate("/?sidebar=open");
    }
  }

  return (
    <button className="cursor-pointer ml-1" onClick={toggleSidebar}>
      <svg
        className="size-5 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,152H56a8,8,0,0,0,0-16H40V120H56a8,8,0,0,0,0-16H40V88H56a8,8,0,0,0,0-16H40V56H80V200H40Zm176,48H96V56H216V200Z"></path>
      </svg>
    </button>
  );
}

export default IconSidebar;
