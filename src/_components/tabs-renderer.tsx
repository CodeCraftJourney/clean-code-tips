import { TabBar, TabPane } from "./snippets/tabs";

export const TabsRenderer: React.FC = () => {
  return (
    <main
      style={{
        margin: "20px",
        border: "2px solid #00000010",
        borderRadius: "5px",
        padding: "15px",
      }}
    >
      <div // wrapper of tab bar, you can control height and width of tab bar
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <TabBar tabs={["Tab 1", "Tab 2", "Tab 3"]}>
          {/* Add defaultTab if needed*/}
          <TabPane name="Tab 1">
            <div
              style={{
                flexGrow: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              React.js
            </div>
          </TabPane>
          <TabPane name="Tab 2">
            <div
              style={{
                flexGrow: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Next.js
            </div>
          </TabPane>
          <TabPane name="Tab 3">
            <div
              style={{
                flexGrow: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>TypeScript</div>
            </div>
          </TabPane>
        </TabBar>
      </div>
    </main>
  );
};
