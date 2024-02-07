"use client";

import React from "react";
import styles from "./post.module.scss";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

interface Props {
  author: string;
  title: string;
  id?: string;
}

// Displaying a post item
export default function Post(props: Props) {
  const { author, title, id } = props;
  //   props destructuring
  return (
    // Rendering a post
    <Link href={`post /${id}`} className={`${styles.post} px-3 py-3 mb-4`}>
      <div className="postInfo">
        <p>{author}</p>
        <p>{title}</p>
      </div>
      <div className="favIcon py-4 px-4">
        <FaRegHeart />
      </div>
    </Link>
  );
}
