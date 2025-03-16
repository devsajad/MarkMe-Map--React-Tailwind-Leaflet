function MapTheme({ IsThemeOpen, setTheme, theme }) {
  return (
    <div
      className={`${
        IsThemeOpen ? "opacity-100 scale-100" : "transition-hidden"
      } duration-100 scale-80 w-45 h-28 px-5 bg-dark-primary/85 absolute right-12 top-0 rounded-xl items-center flex justify-between`}
    >
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        <img
          src="/map-dark.png"
          alt="map dark image"
          className={`w-15 h-13 rounded-xl mb-1 ${
            theme === "dark" ? "border-2 border-active-tab" : ""
          }`}
        />
        <p className="text-white text-xs text-center">Dark Mode</p>
      </button>
      <button onClick={() => setTheme("streets")}>
        <img
          src="/map-street.png"
          alt="map dark image"
          className={`w-15 h-13 rounded-xl mb-1 ${
            theme === "streets" ? "border-2 border-active-tab" : ""
          }`}
        />
        <p className="text-white text-xs text-center">Standard</p>
      </button>
    </div>
  );
}

export default MapTheme;
