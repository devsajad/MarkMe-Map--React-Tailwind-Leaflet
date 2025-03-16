import { NavLink, useLocation } from "react-router-dom";

function IconBookmark() {
  const location = useLocation();
  const isCategoriesPage = location.pathname === "/categories";

  return (
    <button
      className={`icon-container cursor-pointer duration-300 ${
        isCategoriesPage ? "bg-active-tab" : ""
      }`}
    >
      <svg
        className="w-5 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"></path>
      </svg>
    </button>
  );
}

export default IconBookmark;
