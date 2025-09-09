export default function TopComponent() {
  return (
    <div
      className="sidebar-top"
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",
        backgroundColor: "white",
        padding: 20,
      }}
    >
      <div style={{ fontSize: 40, color: "black", fontWeight: 600 }}>
        Hello, World
      </div>
      <div style={{ color: "black" }}>여러분도 따라해보세요.</div>
    </div>
  );
}
