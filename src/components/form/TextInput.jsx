function TextInput({ title, placeholder, id }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-100">
        {title}
      </label>
      <input
        type="text"
        id={id}
        className="bg-dark-primary/40 outline-none rounded-xl text-gray-300 text-md font-light focus:ring-1 focus:ring-active-tab block w-full p-2.5 duration-300"
        placeholder={`Ex. ${placeholder}`}
        required
      />
    </div>
  );
}

export default TextInput;
