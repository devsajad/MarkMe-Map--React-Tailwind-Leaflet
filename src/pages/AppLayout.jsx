import { Outlet } from "react-router-dom";
import Map from "../components/map/Map";
import MapControls from "../components/map/MapControls";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarHeader from "../components/sidebar/header/SidebarHeader";
import SidebarMain from "../components/sidebar/main/SidebarMain";
import SidebarRecents from "../components/sidebar/recents/SidebarRecents";
import IconGps from "../icons/IconGps";
import IconMap from "../icons/iconMap";

function AppLayout() {
  return (
    <main className="bg-gray-200 h-dvh w-dvw relative">
      <Sidebar>
        <SidebarHeader />
        <SidebarMain />
        <SidebarRecents />
      </Sidebar>

      <Outlet />

      <Map />

      <MapControls>
        <IconMap />
        <IconGps />
      </MapControls>
    </main>
  );
}

export default AppLayout;
