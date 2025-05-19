import React, { useState } from "react";

function TextArea1({
  bgColor = "",
  borderColor = "",
  textColor = "text-white",
  height = "h-16",
}) {
  const [btext, setText] = useState("");

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <textarea
        spellCheck={false}
        value={btext}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message here..."
        className={`w-full ${height} ${borderColor} ${bgColor} py-2 px-4 rounded-md border-[0.5px] border-gray-500 outline-none focus:ring-0 focus:border-gray-500 placeholder:text-md placeholder:text-white/70`}
        style={{ color: "transparent", caretColor: "white" }}
      />

      <p
        className={`mt-4 p-2 rounded ${textColor} whitespace-pre-wrap break-words min-h-[4rem] w-full`}
      >
        {btext}
      </p>
    </div>
  );
}

export default TextArea1;
