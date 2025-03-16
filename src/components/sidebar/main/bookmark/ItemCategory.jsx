import { Link } from "react-router-dom";

function ItemCategory({ name, id }) {
  return (
    <Link to={`/places/${id}?sidebar=closed`}>
      <li className="p-4 bg-dark-primary/30 text-gray-100 rounded-md h-12 flex items-center justify-center hover:scale-105 duration-300 cursor-pointer hover:bg-dark-primary/60">
        <p className="truncate">{name}</p>
      </li>
    </Link>
  );
}

export default ItemCategory;
