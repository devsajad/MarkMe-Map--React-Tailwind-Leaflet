function FormCategoryItem({ catName, catId, setPlaceCat }) {
  return (
    <li>
      <input
        type="radio"
        name="category"
        id={`cat-${catId}`}
        value={catId}
        className="hidden peer"
        required
        onClick={() => setPlaceCat(catId)}
      />
      <label
        htmlFor={`cat-${catId}`}
        className="flex items-center justify-between w-full text-gray-100 text-sm py-1 border-0 outline-none bg-dark-primary/40 rounded-xl cursor-pointer peer-checked:bg-active-tab duration-300 hover:bg-active-tab "
      >
        <p className="truncate p-2 text-center w-full">{catName}</p>
      </label>
    </li>
  );
}

export default FormCategoryItem;
