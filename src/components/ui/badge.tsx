import React from "react";

export function Badge({ children, variant = "default" }) {
  const style = {
    default: "bg-blue-100 text-blue-800",
    outline: "border border-gray-400 text-gray-800",
  };

  return (
    <span className={`text-sm px-3 py-1 rounded-full ${style[variant]}`}>
      {children}
    </span>
  );
}
