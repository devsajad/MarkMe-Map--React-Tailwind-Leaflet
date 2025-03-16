import { Link } from "react-router-dom";

function PlaceItem({ place }) {
  return (
    <li className="bg-dark-primary/60 p-2 rounded-xl hover:scale-105 duration-300 cursor-pointer hover:bg-dark-primary/80">
      <Link
        to={`/place/?lat=${place.coordinates[0]}&lng=${place.coordinates[1]}&sidebar=closed`}
      >
        <div>
          <p className="text-gray-100 truncate">{place.name}</p>
          <p className="text-gray-100/30 text-sm font-light truncate">
            {place.description}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default PlaceItem;
