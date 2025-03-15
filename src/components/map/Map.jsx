import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

function Map() {
  return (
    <div className="absolute top-0 h-full w-full">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className={`leaflet-container`}
        zoomControl={false}
      >
        <TileLayer
          url="https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}"
          attribution=""
          minZoom={0}
          maxZoom={22}
          accessToken="xUYdIoKcs1WnLyRxVk54tUoy81cFrz9ASUZMLyxVA9vubtuuju0CdgkaDYUzw3Dk"
        />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}

export default Map;
