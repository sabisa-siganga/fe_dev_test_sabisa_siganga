'use client';

import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import styles from './posts.module.scss';
import Input from '../Input/Input';
import { PostInterface } from '@/app/interfaces/post';

// Dummy data for posts
const DUMMY_POSTS: PostInterface[] = [
	{
		authorId: 1,
		authorName: 'Remy Jules',
		title: 'To the moon and beyond',
	},
	{
		authorId: 2,
		authorName: 'Remy',
		title: 'To the moon and beyond',
	},
];

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
			// For now, using dummy data instead of fetching from the server
			const posts = DUMMY_POSTS;

			setPosts(posts);

			// Store the original posts in the ref
			postsRef.current = posts;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []); // Runs only once on component mount

	// Handler for search input change
	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const search = e.target.value.trim();

		// If search is empty, reset posts to original
		if (!search) {
			setPosts(postsRef.current);
			setIsSearching(false);
			return;
		}

		setIsSearching(true);

		// Filter posts based on search query
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
			<div className='mb-4'>
				<Input
					onChange={onSearch}
					placeholder='Search with title and author name...'
				/>
			</div>
			<div className={`${styles.postContainer} px-4 py-4`}>
				{/* Render posts */}
				{posts.map((post) => (
					<Post
						key={post.authorId}
						authorName={post.authorName}
						title={post.title}
						authorId={post.authorId}
					/>
				))}

				{/* Render no posts found message */}
				{!isSearching && posts.length === 0 && (
					<div className='text-center no-results'>No posts found</div>
				)}

				{/* Render no search results found message */}
				{isSearching && posts.length === 0 && (
					<div className='text-center no-results'>
						No search results found
					</div>
				)}
			</div>
		</div>
	);
};

export default Posts;
