"use client";
import React from "react";

interface ITabPane {
  children: React.ReactNode;
  name: string;
}

export const TabPane: React.FC<ITabPane> = ({ children, name }) => {
  return (
    <div // occupies all available space below tab buttons
      style={{
        backgroundColor: "#00800015",
        height: "100%",
        width: "100%",
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};
