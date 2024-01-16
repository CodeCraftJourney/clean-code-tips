"use client";
import React from "react";

interface ITabBar {
  children: React.ReactNode;
  tabs: Array<string>;
  defaultTab?: string;
}

export const TabBar: React.FC<ITabBar> = ({ children, tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = React.useState<string>(
    defaultTab || tabs[0]
  );
  const tabPaneContent = Array.from(children as Array<React.ReactElement>).find(
    (tab) => tab.props.name === activeTab
  );

  return (
    <div
      style={{
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
      }} // to keep the tab bar flexible
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          margin: "0 0 10px 0",
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab}
            style={{
              ...(activeTab === tab
                ? { color: "green", fontWeight: "bold" }
                : {}), // conditional styles
              cursor: "pointer",
            }}
            onClick={() => {
              setActiveTab(tab);
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      <>{tabPaneContent}</>
    </div>
  );
};
