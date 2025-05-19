
import React from "react";

function Chk1({
  label = "Check me",
  checked = false,
  onChange,
  bgColor = "bg-gray-800",
  borderColor = "border-gray-400",
  hoverColor = "hover:bg-gray-700",
  tickColor = "text-green-500",
}) {
  const boxClass = `
    w-5 h-5 rounded-sm border cursor-pointer
    ${bgColor} ${borderColor} ${hoverColor}
    appearance-none
    focus:outline-none
    flex items-center justify-center
    relative
  `;

  const lineThroughColor = borderColor.replace("border", "decoration");

  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none text-white">
      <div className={boxClass}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="opacity-0 w-full h-full absolute cursor-pointer"
        />
        {checked && (
          <svg
            className={`w-3.5 h-3.5 pointer-events-none ${tickColor}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>

      <span
        className={`${
          !checked ? `line-through ${lineThroughColor} decoration-2` : ""
        } relative -right-3 whitespace-nowrap`}
      >
        {label}
      </span>
    </label>
  );
}

export default Chk1;
