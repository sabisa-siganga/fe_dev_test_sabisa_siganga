import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import styles from './CommentBox.module.scss';
import { Comment } from '@/app/interfaces/post';

interface input {
	onNewComment: (comment: Comment) => void;
}

export default function CommentBox(props: input) {
	const { onNewComment } = props;

	const [input, setInput] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const trimmed = e.target.value.trim();

		if (trimmed.length > 0) {
			// set the input
			setInput(e.target.value);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		onNewComment({
			comment: input,
			authorName: 'Anonymous',
		});

		// clear the input
		setInput('');
	};

	return (
		<div className={styles.commentBox}>
			<form onSubmit={handleSubmit}>
				<FloatingLabel
					controlId='floatingTextarea2'
					label='Leave a comment here'
					className={styles.commentInputLabel}
				>
					<Form.Control
						as='textarea'
						onChange={onChange}
						value={input}
						className={styles.commentInput}
						placeholder='Leave a comment here'
					/>
				</FloatingLabel>
				<div className={styles.commentBtn}>
					<button
						type='submit'
						disabled={input.length === 0}
						className='btn btn-success'
					>
						Post Comment
					</button>
				</div>
			</form>
		</div>
	);
}
