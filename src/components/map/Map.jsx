import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import MapControls from "./MapControls";
import IconMap from "../../icons/iconMap";
import IconGps from "../../icons/IconGps";
import { useGeolocation } from "../../hooks/useGeolocation";
import { useEffect, useState } from "react";
import useUrlPosition from "../../hooks/useUrlPosition";
import { usePlaces } from "../../context/PlacesContext";
import MapTheme from "./MapTheme";

function Map() {
  const { places } = usePlaces();
  const [lat, lng] = useUrlPosition();

  const [IsThemeOpen, setIsThemeOpen] = useState(false);
  const [theme, setTheme] = useState("streets");
  const [position, setPosition] = useState([36.2605, 59.6168]);
  console.log(theme);
  const {
    position: geoPosition,
    isLoading,
    error,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    if (lat && lng) setPosition([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (geoPosition) setPosition([geoPosition.lat, geoPosition.lng]);
  }, [geoPosition]);

  return (
    <div className="absolute top-0 h-full w-full">
      <MapControls>
        <MapTheme IsThemeOpen={IsThemeOpen} setTheme={setTheme} theme={theme} />
        <IconMap setIsThemeOpen={setIsThemeOpen} />
        <IconGps isLoading={isLoading} getPosition={getPosition} />
      </MapControls>

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className={`leaflet-container`}
        zoomControl={false}
      >
        <TileLayer
          url={`https://tile.jawg.io/jawg-${theme}/{z}/{x}/{y}{r}.png?access-token={accessToken}`}
          attribution=""
          minZoom={0}
          maxZoom={22}
          accessToken="xUYdIoKcs1WnLyRxVk54tUoy81cFrz9ASUZMLyxVA9vubtuuju0CdgkaDYUzw3Dk"
        />
        {places.map((place) => (
          <Marker position={place.coordinates} key={place.id}>
            <Popup>
              <span>{place.name}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={[position[0], position[1]]} />
        <ZoomControl position="bottomright" />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.flyTo(position);
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(
        `formAddBookmark?lat=${e.latlng.lat}&lng=${e.latlng.lng}&sidebar=closed`
      );
    },
  });
}

export default Map;
