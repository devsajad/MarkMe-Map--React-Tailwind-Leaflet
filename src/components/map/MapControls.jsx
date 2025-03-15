function MapControls({ children }) {
  return (
    <div className="z-1000 h-18 w-9 backdrop-blur-lg bg-dark-primary/85 absolute top-5 right-5 flex flex-col px-2 py-3 justify-between rounded-xl items-center">
      {children}
    </div>
  );
}

export default MapControls;
