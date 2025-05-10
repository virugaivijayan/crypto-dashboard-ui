import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 ${className}`}
      {...props}
    />
  );
}
