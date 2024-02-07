'use client';

import Favorites from '@/app/components/Favorites/Favorites';
import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import CommentBox from '@/app/components/CommentBox/CommentBox';

const PostDetails = () => {
	const [post, setPost] = React.useState({
		id: 1,
		title: 'this is my title',
		author: 'Emily Jones',
		body: 'Brook was found killed and her killers have left the country, Police are still in search of the killers',
	});

	const [comments, setComments] = React.useState([
		// {
		// 	comment:
		// 		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime rem repellendus temporibus ut eaque perspiciatis saepe quis similique consectetur nesciunt, incidunt distinctio qui harum iusto quo sed, magni totam accusantium.',
		// 	author: 'Gary Mariner',
		// },
		// {
		// 	comment:
		// 		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime rem repellendus temporibus ut eaque perspiciatis saepe quis similique consectetur nesciunt, incidunt distinctio qui harum iusto quo sed, magni totam accusantium.',
		// 	author: 'Gary Mariner',
		// },
		// {
		// 	comment:
		// 		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime rem repellendus temporibus ut eaque perspiciatis saepe quis similique consectetur nesciunt, incidunt distinctio qui harum iusto quo sed, magni totam accusantium.',
		// 	author: 'Gary Mariner',
		// },
	]);

	return (
		<div className='px-5'>
			<Row>
				<Col sm={8}>
					<div className='px-5'>
						<h1 className='pb-4 pt-5 mb-0'>Post: {post.title}</h1>

						<div>
							<Link href='/' className='btn btn-primary'>
								Back: Home
							</Link>
						</div>
						<div className='py-5'>
							<div className={styles.author}>
								<span>Author:</span> {post.author}
							</div>
							<div className={styles.textBody}>{post.body}</div>
							<div>
								<div className={styles.commentTitle}>
									<span>Comments</span>
								</div>
								<div className={styles.commentsContainer}>
									{comments.map((comment, index) => {
										return (
											<div
												key={index}
												className={styles.comment}
											>
												<div
													className={
														styles.commentAuthor
													}
												>
													{comment.author}
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

									{comments.length === 0 && (
										<div className={styles.noComments}>
											No comments yet
										</div>
									)}
								</div>
							</div>

							<CommentBox />
						</div>
					</div>
				</Col>

				<Col sm={4}>
					<Favorites />
				</Col>
			</Row>
		</div>
	);
};

export default PostDetails;
