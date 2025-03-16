import SecSidebarHeader from "../header/SecSidebarHeader";
import { useParams } from "react-router-dom";
import { useCategories } from "../../../context/CategoriesContext";
import { usePlaces } from "../../../context/PlacesContext";
import PlaceItem from "./PlaceItem";
import Spinner from "../../../icons/Spinner";

function Places() {
  const { id } = useParams();

  //   const [currentCategory, setCurrentCategory] = useState();
  const { categories, isLoading: catLoading } = useCategories();
  const { places, isLoading: placeLoading } = usePlaces();

  const currentPlaces = places.filter(
    (place) => place.categoryId === Number(id)
  );
  const [currentCategory] = categories.filter((cat) => cat.id === Number(id));

  console.log(places, categories);
  return places.length === 0 || categories.length === 0 ? (
    <Spinner />
  ) : (
    <div>
      <SecSidebarHeader title={currentCategory.name} />
      <ul className="flex flex-col gap-2">
        {currentPlaces.map((place) => (
          <PlaceItem place={place} key={place.id} />
        ))}
      </ul>
    </div>
  );
}

export default Places;
