export default function MainScreen() {
  const posts = [
    {
      no: 1,
      menu_no: 1,
      title: "안녕하세요. 리액트 프로젝트",
      sub_title:
        "안녕하세요. 리액트 샘플 프로젝트 제작기에 있습니다. 많은 관심 부탁드립니다.",
      content: "React Content 1",
      del_yn: "N",
      createdAt: "2024-06-20 12:00:00",
      updatedAt: "2024-06-20 12:00:00",
    },
    {
      no: 1,
      menu_no: 1,
      title: "리액트 샘플 프로젝트 테스트 코드입니다.",
      sub_title:
        "안녕하세요. 리액트 샘플 프로젝트 제작기에 있습니다. 많은 관심 부탁드립니다.",
      content: "React Content 1",
      del_yn: "N",
      createdAt: "2024-06-21 12:00:00",
      updatedAt: "2024-06-21 12:00:00",
    },
  ];

  return (
    <div>
      <div
        style={{
          gap: "16px",
          display: "grid",
          flex: 1,
        }}
      >
        {posts?.map((post) => (
          <div
            className="post-list-item"
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: 16,
                marginBottom: 5,
                textDecoration: "none",
                transition: "text-decoration 0.2s ease",
              }}
            >
              {post.title}
            </div>
            <div
              style={{
                color: "rgba(73,80,87,1)",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              {post.sub_title}
            </div>
            <div
              style={{
                color: "rgba(52,58,64,1)",
                fontSize: 12,
                fontWeight: "600",
                marginTop: 12,
              }}
            >
              {post.createdAt}
            </div>
            {/* <p>{post.content}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
