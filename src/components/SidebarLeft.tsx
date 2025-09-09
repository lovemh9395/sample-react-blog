import { useState } from "react";

export default function SidebarLeft() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null); // 드롭다운 상태 관리
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

  const toggleDropdown = (menuNo: number) => {
    setActiveMenu((prev) => (prev === menuNo ? null : menuNo)); // 클릭 시 드롭다운 토글
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        width: "20%",
      }}
    >
      <div style={{ margin: 10, fontWeight: 900, fontSize: 17 }}>MENU</div>
      {menus?.map((menu) => (
        <div key={menu.no} style={{ width: "100%" }}>
          <div
            onClick={() => toggleDropdown(menu.no)}
            style={{
              padding: "10px",
              cursor: "pointer",
              textAlign: "center",
              backgroundColor:
                activeMenu === menu.no ? "#f0f0f0" : "transparent", // 드롭다운 활성화 시 배경색 변경
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
                }}
                style={{
                  padding: "10px 20px",
                  cursor: "pointer",
                  textAlign: "center",
                  backgroundColor: "#f9f9f9",
                }}
              >
                {subMenu.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
