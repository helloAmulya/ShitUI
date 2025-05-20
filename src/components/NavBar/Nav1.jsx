"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "/src/lib/utils.js";

export const Nav1 = ({
  navItems = [
    { name: "Home", link: "/", icon: "🏠" },
    { name: "About", link: "/about", icon: "ℹ️" },
    { name: "Components", link: "/components", icon: "🧩" },
  ],
  showLogin = true,
  loginText = "Login",
  bgColor = "bg-white dark:bg-black",
  textColor = "text-neutral-600 dark:text-neutral-50",
  hoverTextColor = "hover:text-neutral-500 dark:hover:text-neutral-300",
  shadow = "shadow-md",
  border = "border-transparent dark:border-white/[0.2]",
  className,
}) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        `flex max-w-fit fixed top-10 inset-x-0 mx-auto px-6 py-3 z-50
        items-center justify-center space-x-4 rounded-full border
        ${bgColor} ${shadow} ${border}`,
        className
      )}
    >
      {navItems.map((item, idx) => (
        <a
          key={`nav-${idx}`}
          href={item.link}
          className={cn(
            `relative flex items-center space-x-1 text-sm ${textColor} ${hoverTextColor}`
          )}
        >
          {item.icon && <span className="block sm:hidden">{item.icon}</span>}
          <span className="hidden sm:block">{item.name}</span>
        </a>
      ))}

      {showLogin && (
        <button
          className={cn(
            `border text-sm font-medium px-4 py-2 rounded-full text-black dark:text-white
             border-neutral-200 dark:border-white/[0.2]`
          )}
        >
          {loginText}
        </button>
      )}
    </motion.div>
  );
};
