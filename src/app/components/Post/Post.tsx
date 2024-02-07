'use client';

import React from 'react';
import styles from './post.module.scss';
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';

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
		<Link href={`post/${id}`} className={`${styles.post} px-3 py-3 mb-4`}>
			<div className={styles.postInfo}>
				<div className={styles.title}>{title}</div>
				<div className={styles.author}>{author}</div>
			</div>
			<div className='py-4 px-4'>
				<FaRegHeart color='#e54848' size='22px' />
			</div>
		</Link>
	);
}
