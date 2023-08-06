"use client"

import "./DotRing.css";
import useMousePosition from "@/hooks/useMousePosition";

const DotRing = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="cursorRing hidden lg:block"
      ></div>
      <div
        className="cursorDot hidden lg:block"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;