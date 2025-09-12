import { Route, Routes } from "react-router-dom";
import { MainScreen } from "../screens";
import PostListScreen from "../screens/PostListScreen";

export default function RootNavigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/post/list/:subMenuNo" element={<PostListScreen />} />
      </Routes>
    </>
  );
}
