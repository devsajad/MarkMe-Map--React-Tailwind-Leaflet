import { useCategories } from "../../../../context/CategoriesContext";
import AddCategory from "./AddCategory";
import ItemCategory from "./ItemCategory";
import SecSidebarHeader from "../../header/SecSidebarHeader";
import Spinner from "../../../../icons/Spinner";

function Categories() {
  const { categories, isLoading, error } = useCategories();

  return (
    <>
      <SecSidebarHeader title={"Categories"} />
      {isLoading ? (
        <div className="h-100 flex items-center justify-center">
          <Spinner size={8} />
        </div>
      ) : (
        <ul className="w-full grid grid-cols-2 gap-2">
          {categories.map((cat) => (
            <ItemCategory name={cat.name} key={cat.id} id={cat.id} />
          ))}
          <AddCategory />
        </ul>
      )}
    </>
  );
}

export default Categories;
