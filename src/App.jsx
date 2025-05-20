import React, { useState } from "react";
import "./App.css";
import Chk1 from "./components/CheckBox/Chk1";
import Btn1 from "./components/ShitButton/Btn1";
import Sdb1 from "./components/SideBar/Sdb1";
import TextArea1 from "./components/Texts/TextArea1";
import TextArea2 from "./components/Texts/TextArea2";
import Swt1 from "./components/Switch/Swt1";
import Swt2 from "./components/Switch/Swt2";
import { Nav1 } from "./components/NavBar/Nav1";
function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex h-screen bg-[#09090B]">
      <Nav1
        navItems={[
          { name: "Home", link: "/", icon: "🏠" },
          { name: "Docs", link: "/docs", icon: "📚" },
          { name: "Blog", link: "/blog", icon: "📝" },
        ]}
        loginText="Sign In"
        showLogin={true}
        bgColor="bg-gray-100 dark:bg-zinc-900"
        textColor="text-zinc-700 dark:text-zinc-100"
        hoverTextColor="hover:text-zinc-900 dark:hover:text-zinc-300"
      />

      <Sdb1
        borderColor="border-purple-200"
        hoverColor="hover:bg-[#54346B]"
        textColor="text-gray-300"
      />

      <div className="flex-1 flex flex-col gap-4 justify-center items-center overflow-auto">
        <Btn1
          label="ShitUI Button"
          bgColor="bg-[#3D224E]"
          borderColor="border-purple-500"
          hoverColor="hover:bg-purple-900"
        />

        <Chk1
          label="Weird Checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          bgColor="bg-[#3D224E]"
          borderColor="border-purple-500"
          hoverColor="hover:bg-purple-900"
          tickColor="text-white"
        />

        <TextArea1 />
        <TextArea2 />

        <Swt1 onLabel="Enable Cool Mode" offLabel="Disable Cool Mode" />

        <Swt2 />
      </div>
    </div>
  );
}

export default App;
