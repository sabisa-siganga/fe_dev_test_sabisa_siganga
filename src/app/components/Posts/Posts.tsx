"use client";

import React from "react";
import Post from "../Post/Post";
import styles from "./posts.module.scss";

const Posts = () => {
  return (
    <div className={styles.posts}>
      <h1 className={`${styles.homeTitle} py-4`}>Posts</h1>
      <div className={`${styles.postContainer} px-4 py-4`}>
        <Post />
      </div>
    </div>
  );
};

export default Posts;
