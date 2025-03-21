function IconMap({ setIsThemeOpen }) {
  return (
    <button
      onClick={() => {
        setIsThemeOpen((prev) => !prev);
      }}
    >
      <svg
        className="w-4 fill-gray-300 hover:fill-white cursor-pointer"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 3.62533C0.5 3.45186 0.589911 3.29078 0.737564 3.19973L5.04254 0.54512C5.24241 0.42187 5.5 0.565656 5.5 0.800474V14.3722C5.5 14.5456 5.41009 14.7067 5.26244 14.7978L2.02487 16.7942C1.35863 17.205 0.5 16.7257 0.5 15.943V3.62533ZM12.5 3.62533C12.5 3.45186 12.5899 3.29078 12.7376 3.19973L15.9751 1.20333C16.6414 0.792494 17.5 1.27178 17.5 2.05451V14.0931C17.5 14.44 17.3202 14.7622 17.0249 14.9443L12.9575 17.4524C12.7576 17.5756 12.5 17.4318 12.5 17.197V3.62533ZM11.2624 3.19973C11.4101 3.29078 11.5 3.45186 11.5 3.62533V17.197C11.5 17.4318 11.2424 17.5756 11.0425 17.4524L6.73756 14.7978C6.58991 14.7067 6.5 14.5456 6.5 14.3722V0.800474C6.5 0.565656 6.75759 0.42187 6.95746 0.54512L11.2624 3.19973Z"
        />
      </svg>
    </button>
  );
}

export default IconMap;
