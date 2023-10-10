import { useRef } from "react";

const CustomCursor = () => {
  const cursor = useRef(null);

  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };

  return <div ref={cursor} className="custom__cursor"></div>;
};

export default CustomCursor;
