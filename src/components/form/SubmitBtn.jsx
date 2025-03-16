import { Link } from "react-router-dom";

function SubmitBtn({ handlSubmit }) {
  return (
    <Link onSubmit={handlSubmit}>
      <button
        onClick={handlSubmit}
        type="submit"
        className="ml-auto block text-gray-50 bg-active-tab hover:bg-blue-700 duration-300 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </Link>
  );
}

export default SubmitBtn;
