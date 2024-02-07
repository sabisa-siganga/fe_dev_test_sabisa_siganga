import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import styles from './CommentBox.module.scss';

export default function CommentBox() {
	return (
		<div className={styles.commentBox}>
			<form action=''>
				<FloatingLabel
					controlId='floatingTextarea2'
					label='Leave a comment here'
					className={styles.commentInputLabel}
				>
					<Form.Control
						as='textarea'
						className={styles.commentInput}
						placeholder='Leave a comment here'
					/>
				</FloatingLabel>
			</form>
		</div>
	);
}
