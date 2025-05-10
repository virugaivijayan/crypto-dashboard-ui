import React from "react";

export function Button({ children, variant = "default", ...props }) {
  const base = "px-4 py-2 rounded-xl font-medium";
  const styles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
