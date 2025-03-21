import {useNavigate } from "react-router-dom";

function IconClose() {
  const navigate = useNavigate();
  return (
    <button className="cursor-pointer" onClick={() => navigate(-1)}>
      <svg
        className="w-9 fill-white/55 cursor-pointer hover:scale-105 duration-200 hover:fill-white/30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
      </svg>
    </button>
  );
}

export default IconClose;
