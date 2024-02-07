import Image from "next/image";
import styles from "./page.module.css";
import Posts from "./components/Posts/Posts";
import Favourites from "./components/Favourites/Favourites";
import { Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div className={`${styles.postsContainer} px-5`}>
      <Row>
        <Col sm={8}>
          <Posts />
        </Col>

        <Col sm={4}>
          <Favourites />
        </Col>
      </Row>
    </div>
  );
}
