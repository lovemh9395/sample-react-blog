import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostListScreen() {
  const { subMenuNo } = useParams();
  useEffect(() => {
    console.log("PostListScreen location:", subMenuNo);
  }, [subMenuNo]);
  return <div>Post List Screen {subMenuNo}</div>;
}
