import React, { useState } from "react";

function Swt2({
  onLabel = "Turn On",
  offLabel = "Turn Off",
  onBg = "bg-gray-300",
  offBg = "bg-gray-600",
  roundStamp = "bg-black",
}) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-center gap-2 w-full">
        
      <div className="w-24 text-right">
        {enabled && (
          <span className="text-white text-sm font-medium">{offLabel}</span>
        )}
      </div>

      <button
        aria-pressed={enabled}
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex items-center h-8 w-16 rounded-full border-2 transition-colors duration-300 ${
          enabled ? onBg : offBg
        }`}
      >
        <span
          className={`inline-block w-6 h-6 transform ${roundStamp} rounded-full shadow-md transition-transform duration-300 ${
            enabled ? "translate-x-8" : "translate-x-1"
          }`}
        />
      </button>

      <div className="w-24 text-left">
        {!enabled && (
          <span className="text-white text-sm font-medium">{onLabel}</span>
        )}
      </div>
    </div>
  );
}

export default Swt2;
