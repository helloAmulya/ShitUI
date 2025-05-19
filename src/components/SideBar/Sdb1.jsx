
import React, { useState } from "react";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

function Sdb1({
  bgColor = "bg-[#09090B]",
  borderColor = "border-gray-700",
  hoverColor = "hover:bg-gray-700",
  textColor = "text-white",
}) {
  const items = [
    { title: "Home", url: "#", icon: Home },
    { title: "Inbox", url: "#", icon: Inbox },
    { title: "Calendar", url: "#", icon: Calendar },
    { title: "Search", url: "#", icon: Search },
    { title: "Settings", url: "#", icon: Settings },
  ];

  const randomPaddings = ["p-1", "p-4", "p-2", "p-6", "p-0"];
  const randomGaps = [1, 5, 2, 6, 0];
  const [clickCounts, setClickCounts] = useState(Array(items.length).fill(0));

  const handleClick = (index, url) => {
    const newCounts = [...clickCounts];
    newCounts[index] += 1;
    setClickCounts(newCounts);
    if (newCounts[index] >= 2) window.location.href = url;
  };

  return (
    <div
      className={`flex flex-col md:w-48 w-56 h-[60%] p-8 ${bgColor} border-b border-r ${borderColor}`}
    >
      <ul>
        {items.map(({ title, url, icon: Icon }, index) => (
          <li
            key={index}
            className={`group relative flex items-start cursor-pointer rounded-md transition 
              ${randomPaddings[index % randomPaddings.length]} 
              ${hoverColor} 
              ${textColor}`}
            style={{
              gap: `${randomGaps[index % randomGaps.length]}rem`,
              marginTop: index % 3 === 0 ? "0.5rem" : "0",
              marginLeft: index % 2 === 0 ? "1rem" : "0",
            }}
            onClick={() => handleClick(index, url)}
          >
            <Icon size={12 + index * 5} className="mt-2" />
            <span className="text-sm relative select-none">
              {title}
              {/* Styled Tooltip */}
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                Double click to navigate
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sdb1;
