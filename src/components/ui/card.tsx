import React from "react";

export function Card({ children, className = "" }) {
  return <div className={`bg-white p-4 rounded-lg ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`space-y-2 ${className}`}>{children}</div>;
}
