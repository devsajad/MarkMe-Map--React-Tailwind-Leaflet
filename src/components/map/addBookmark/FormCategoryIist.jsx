function FormCategoryList({ children }) {
  return (
    <div>
      <h3 className="block mb-2 text-sm font-medium text-gray-100">
        Choose your category :
      </h3>

      <ul className="grid w-full gap-2 grid-cols-2 md:grid-cols-3">{children}</ul>
    </div>
  );
}

export default FormCategoryList;
