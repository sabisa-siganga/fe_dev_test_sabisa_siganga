'use client';

import React from 'react';
import styles from './post.module.scss';

import Link from 'next/link';
import FavButton from '../FavButton/FavButton';
import { PostInterface } from '@/app/interfaces/post';

type Props = PostInterface;

// Displaying a post item
export default function Post(props: Props) {
	// props destructuring
	const { authorId, authorName, title } = props;

	// Rendering a post
	return (
		<div className={`${styles.post} px-3 py-3 mb-4`}>
			<Link href={`post/${authorId}`}>
				<div className={styles.postInfo}>
					<div className={styles.title}>{title}</div>
					<div className={styles.author}>{authorName}</div>
				</div>
			</Link>
			<div className={styles.favoriteBtn}>
				<FavButton post={props} />
			</div>
		</div>
	);
}
