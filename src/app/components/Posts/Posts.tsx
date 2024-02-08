"use client";

import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import styles from "./posts.module.scss";
import Input from "../Input/Input";
import { PostInterface } from "@/app/interfaces/post";
import { DUMMY_POSTS } from "@/app/dumy-data";

const Posts = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Reference to store original posts
  const postsRef = React.useRef<PostInterface[]>([]);

  /**
   * Fetching posts from the server using the fetch API or dummy data
   */
  const fetchPosts = async () => {
    try {
      // Fetch posts from the server using the fetch API
      const response = await fetch("http://localhost:3000/api/posts");
      const posts = await response.json();

      // For now, using dummy data instead of fetching from the server
      // const posts = DUMMY_POSTS;

      setPosts(posts);

      // Store the original posts in the ref
      postsRef.current = posts;
    } catch (error) {
      console.log(error);
    }
  };

  // Runs only once on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  /**
   * Handler for search input change
   */
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.trim();

    // If search is empty, reset posts to original
    if (!search) {
      setPosts(postsRef.current);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Creating a copy of data in postsRef.current and filter posts based on search query either by name or title
    const filteredPosts = [...postsRef.current].filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.authorName.toLowerCase().includes(search.toLowerCase())
    );

    setPosts(filteredPosts);
  };

  return (
    <div className={styles.posts}>
      <h1 className={`${styles.homeTitle} py-4`}>Posts</h1>
      <div className="mb-4">
        <Input
          onChange={onSearch}
          placeholder="Search with title and author name..."
        />
      </div>
      <div className={`${styles.postContainer} px-4 py-4`}>
        {/* Render posts */}
        {posts.map((post) => (
          <Post
            key={post.authorId}
            id={post.id}
            authorName={post.authorName}
            body={post.body}
            title={post.title}
            authorId={post.authorId}
          />
        ))}

        {/* Render no posts found message */}
        {!isSearching && posts.length === 0 && (
          <div className="text-center no-results">No posts found</div>
        )}

        {/* Render no search results found message */}
        {isSearching && posts.length === 0 && (
          <div className="text-center no-results">No search results found</div>
        )}
      </div>
    </div>
  );
};

export default Posts;
