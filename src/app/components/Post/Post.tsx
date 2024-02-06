"use client";

import React from "react";
import styles from "./post.module.scss";

export default function Post() {
  return (
    <div className={`${styles.post} px-3 py-3`}>
      <p>Anita Frankins</p>
      <p>John Kienern went to jail</p>
    </div>
  );
}
