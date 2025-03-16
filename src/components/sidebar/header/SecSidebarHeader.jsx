import IconClose from "../../../icons/IconClose";

function SecSidebarHeader({ title }) {

  return (
    <header className="flex justify-between items-center mb-5">
      <p className="text-gray-50 font-medium text-lg">{title}</p>
      <IconClose />
    </header>
  );
}

export default SecSidebarHeader;
