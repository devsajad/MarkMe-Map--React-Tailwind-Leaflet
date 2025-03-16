import { useState } from "react";
import { useCategories } from "../../../../context/CategoriesContext";
import SecSidebarHeader from "../../header/SecSidebarHeader";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../../icons/Spinner";

function FormAddCategory() {
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  const { addCategory, isLoading, error } = useCategories();

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!categoryName.trim()) return;
    
    try {
      await addCategory(categoryName);
      setCategoryName("");
      navigate(-1);
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  }
  return (
    <div>
      <SecSidebarHeader title={"Add Category"} />

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="cat-input"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Add Category
          </label>

          <input
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
            type="text"
            id="cat-input"
            className="bg-dark-primary/40 outline-none rounded-xl text-gray-300 text-md font-light focus:ring-1 focus:ring-active-tab block w-full p-2.5 duration-300"
            placeholder={`Ex. resturant`}
            disabled={isLoading}
            required
          />
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="flex gap-2 items-center ml-auto text-gray-50 bg-active-tab hover:bg-blue-700 duration-300 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center"
        >
          {isLoading ? <Spinner size={5} /> : ""}
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
}

export default FormAddCategory;
