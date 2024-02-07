"use client";

import React, { useState } from "react";
import Post from "../Post/Post";
import styles from "./posts.module.scss";

const Posts = () => {
  const [posts, setPosts] = useState("");

  // // Fetch posts
  //   const fetchPosts = async () => {
  //     try{
  //         const response = await fetch("")
  //         const results = await response.json()
  //         const
  //     }
  //   }
  return (
    <div className={styles.posts}>
      <h1 className={`${styles.homeTitle} py-4`}>Posts</h1>
      <div className={`${styles.postContainer} px-4 py-4`}>
        <Post author="Remy Jules" title="To the moon and neyond" />
      </div>
    </div>
  );
};

export default Posts;
