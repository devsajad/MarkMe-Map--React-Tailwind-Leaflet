import { useState } from "react";
import { useCategories } from "../../../context/CategoriesContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import Spinner from "../../../icons/Spinner";
import SecSidebarHeader from "../../sidebar/header/SecSidebarHeader";
import FormCategoryItem from "./FormCategoryItem";
import FormCategoryList from "./FormCategoryIist";
import { usePlaces } from "../../../context/PlacesContext";
import useUrlPosition from "../../../hooks/useUrlPosition";

function FormAddBookmark() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [lat, lng] = useUrlPosition();

  const [placeName, setPlaceName] = useState("");
  const [placeCat, setPlaceCat] = useState("");
  const [placeDescription, setPlaceDescription] = useState("");

  const { categories } = useCategories();
  const { addPlace, isLoading, error } = usePlaces();

  async function handlSubmit(e) {
    try {
      e.preventDefault();

      const newPlace = {
        name: placeName,
        description: placeDescription,
        coordinates: [lat, lng],
        categoryId: placeCat,
      };

      await addPlace(newPlace);
      navigate("/?sidebar=closed");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <SecSidebarHeader title={"Add Bookmark"} />

      <form className="space-y-5" onSubmit={handlSubmit}>
        {/* Place Name */}
        <div>
          <label
            htmlFor="cat-input"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Place name
          </label>

          <input
            value={placeName}
            onChange={(e) => {
              setPlaceName(e.target.value);
            }}
            type="text"
            id="cat-input"
            className="bg-dark-primary/40 outline-none rounded-xl text-gray-300 text-md font-light focus:ring-1 focus:ring-active-tab block w-full p-2.5 duration-300 disabled:opacity-30"
            placeholder={`Ex. Italian resturant`}
            disabled={isLoading}
            required
          />
        </div>

        {/* Categories */}
        <FormCategoryList>
          {categories.map((cat) => (
            <FormCategoryItem
              catName={cat.name}
              catId={cat.id}
              key={cat.id}
              setPlaceCat={setPlaceCat}
            />
          ))}
        </FormCategoryList>

        {/* Desctiption */}
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          Place description
        </label>
        <textarea
          id="description"
          rows="4"
          className="bg-dark-primary/40 outline-none rounded-xl text-gray-300 text-md font-light focus:ring-1 focus:ring-active-tab block w-full p-2.5 duration-300"
          placeholder="Write your thoughts here..."
          disabled={isLoading}
          value={placeDescription}
          onChange={(e) => setPlaceDescription(e.target.value)}
        ></textarea>

        {/* Submit */}
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

export default FormAddBookmark;
