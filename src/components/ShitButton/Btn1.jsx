import React from "react";

function Btn1({
  label = "Click",
  onClick,
  bgColor = "bg-gray-800",
  borderColor = "border-gray-400",
  hoverColor = "hover:bg-gray-700",
}) {
  const baseStyle =
    `px-4 py-1 rounded-sm border text-white overflow-visible`;

  const className = `${baseStyle} ${bgColor} ${borderColor} ${hoverColor}`;

  return (
    <button onClick={onClick} className={className}>
       <span className="whitespace-nowrap relative -right-7 block">{label}</span>
    </button>
  );
}

export default Btn1;
