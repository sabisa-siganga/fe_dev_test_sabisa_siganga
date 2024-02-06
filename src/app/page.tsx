import Image from "next/image";
import styles from "./page.module.css";
import Posts from "./components/Posts/Posts";

export default function Home() {
  return (
    <div className="posts-container">
      <Posts />
    </div>
  );
}
