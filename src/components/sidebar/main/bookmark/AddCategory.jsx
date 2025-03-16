import { Link } from "react-router-dom";
import IconAdd from "../../../../icons/IconAdd";

function AddCategory() {
  return (
    <Link
      to={"/addCategory?sidebar=closed"}
      className="gap-1 text-gray-100 rounded-md h-12 flex items-center justify-center hover:scale-105 duration-300 cursor-pointer hover:bg-dark-primary/60"
    >
      <IconAdd />
      <p>Add</p>
    </Link>
  );
}

export default AddCategory;
