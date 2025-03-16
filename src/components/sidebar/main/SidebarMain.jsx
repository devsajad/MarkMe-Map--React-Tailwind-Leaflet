import Search from "./Search";
import Bookmarked from "./bookmark/Bookmarked";

function SidebarMain() {
  return (
    <section className="space-y-4 mb-8">
      <Search />
      <Bookmarked />
    </section>
  );
}

export default SidebarMain;
