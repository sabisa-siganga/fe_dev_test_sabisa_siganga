'use client';

import Favorites from '@/app/components/Favorites/Favorites';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import CommentBox from '@/app/components/CommentBox/CommentBox';
import { Comment, PostInterface } from '@/app/interfaces/post';
import { FaRegHeart } from 'react-icons/fa';
import FavButton from '@/app/components/FavButton/FavButton';
import { DUMMY_COMMENTS, DUMMY_POSTS } from '@/app/dumy-data';
import { useParams } from 'next/navigation';

const PostDetails = () => {
	// Get the post id from the URL
	const params = useParams<{ id: string }>();

	const [loadingDetails, setLoadingDetails] = useState(true);
	const [loadingComments, setLoadingComments] = useState(true);

	const [post, setPost] = useState<PostInterface | null>(null);

	const [comments, setComments] = useState<Comment[]>([]);

	useEffect(() => {
		if (!params.id) {
			return;
		}

		// Convert postId to a number since it is a string from the URL query object
		const postId = parseInt(params.id as string);

		// Fetching the post from the server using the fetch API or dummy data
		const fetchPost = async () => {
			setLoadingDetails(true);

			try {
				// Using fetch to get post details from the server
				const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
				const post = await response.json();

				// For now, using dummy data instead of fetching from the server
				// const post = DUMMY_POSTS.find((post) => post.id === postId);

				if (post) {
					setPost(post);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingDetails(false);
			}
		};

		const fetchComments = async () => {
			setLoadingComments(true);

			try {
				// Using fetch to get comments from the server
				const response = await fetch(`http://localhost:3000/api/posts/${postId}/comments`);
				const comments = await response.json();

				setComments(comments);

				// For now, using dummy data instead of fetching from the server
				// setComments(DUMMY_COMMENTS);
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingComments(false);
			}
		};

		fetchPost();

		fetchComments();
	}, [params.id]);

	/**
	 * Function to add a comment to the list of comments
	 */
	const addComment = async (comment: Comment) => {
		// adding the comment at the beginning of the list
		setComments([comment, ...comments]);
	};

	return (
		<div className='px-5'>
			<Row>
				<Col sm={8}>
					{!post && !loadingDetails && (
						<div className={styles.noPost}>
							No post found with the given id
						</div>
					)}

					{!loadingDetails && post && (
						<div className='px-5'>
							<h1 className='pb-4 pt-5 mb-0'>
								Post: {post.title}
							</h1>

							<div>
								<Link href='/' className='btn btn-primary'>
									Back: Home
								</Link>
							</div>
							<div className='py-5'>
								<div className={styles.author}>
									<div>
										<span className={styles.authorTitle}>
											Author:
										</span>{' '}
										{post.authorName}
									</div>
									<FavButton post={post} />
								</div>
								<div className={styles.textBody}>
									{post.body}
								</div>
								<div>
									<div className={styles.commentTitle}>
										<span>Comments</span>
									</div>
									<div className={styles.commentsContainer}>
										{!loadingComments &&
											comments.map((comment, index) => {
												return (
													<div
														key={index}
														className={
															styles.comment
														}
													>
														<div
															className={
																styles.commentAuthor
															}
														>
															{comment.authorName}
														</div>
														<div
															className={
																styles.commentText
															}
														>
															{comment.comment}
														</div>
													</div>
												);
											})}

										{!loadingComments &&
											comments.length === 0 && (
												<div
													className={
														styles.noComments
													}
												>
													No comments yet
												</div>
											)}

										{loadingComments && (
											<div className={styles.noComments}>
												Loading comments...
											</div>
										)}
									</div>
								</div>

								<CommentBox
									onNewComment={addComment}
									postId={params.id ? parseInt(params.id) : 0}
								/>
							</div>
						</div>
					)}

					{loadingDetails && (
						<div className={styles.noPost}>Loading details...</div>
					)}
				</Col>

				<Col sm={4}>
					<Favorites />
				</Col>
			</Row>
		</div>
	);
};

export default PostDetails;
