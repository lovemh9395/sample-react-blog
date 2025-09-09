import { useState } from "react";

export default function AppTopComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState<number | null>(null); // 드롭다운 상태 관리

  const toggleDropdown = (menuNo: number) => {
    setActiveMenu((prev) => (prev === menuNo ? null : menuNo)); // 클릭 시 드롭다운 토글
  };
  const menus = [
    {
      no: 1,
      title: "React Menu 1",
      subMenus: [
        {
          no: 1,
          title: "React SubMenu 1-1",
        },
      ],
    },
    {
      no: 2,
      title: "React Menu 2",
      subMenus: [
        {
          no: 1,
          title: "React SubMenu 2-1",
        },
      ],
    },
  ];
  return (
    <div
      style={{
        flex: 1,
        paddingRight: 15,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        zIndex: 10,
        position: "relative",
        height: 54,
      }}
    >
      <div style={{ height: 54 }}>
        <div style={{ padding: 15, fontWeight: 700, fontSize: 22 }}>
          React Smaple Blog
        </div>
      </div>
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 30,
          height: 24,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
          zIndex: 20,
        }}
        aria-label="Menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          style={{
            width: "100%",
            height: 3,
            backgroundColor: "black",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            width: "100%",
            height: 3,
            backgroundColor: "black",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            width: "100%",
            height: 3,
            backgroundColor: "black",
            borderRadius: 2,
          }}
        />
      </button>

      <div
        style={{
          position: "absolute",
          top: "100%",
          right: 0,
          left: 0, // 좌측도 0으로 설정하여 전체 너비를 사용
          backgroundColor: "white",
          zIndex: 15,
          maxHeight: isMenuOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
          boxShadow: isMenuOpen ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
          borderRadius: "4px",
          width: "100%", // 전체 너비로 변경
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "24px",
            textAlign: "center",
            width: "100%", // 전체 너비 사용
          }}
        >
          {menus?.map((menu) => (
            <div key={menu.no} style={{ width: "100%" }}>
              <div
                onClick={() => toggleDropdown(menu.no)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                  backgroundColor:
                    activeMenu === menu.no ? "#f9f9f9" : "transparent", // 드롭다운 활성화 시 배경색 변경
                  color: "black",
                }}
              >
                {menu.title}
              </div>
              {activeMenu === menu.no &&
                menu.subMenus?.map((subMenu) => (
                  <div
                    key={subMenu.no}
                    onClick={() => {
                      setActiveMenu(null); // 서브 메뉴 클릭 시 드롭다운 닫기
                      setIsMenuOpen(false); // 서브 메뉴 클릭 시 메뉴 닫기
                    }}
                    style={{
                      padding: "10px 20px",
                      cursor: "pointer",
                      textAlign: "center",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    {subMenu.title}
                  </div>
                ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
