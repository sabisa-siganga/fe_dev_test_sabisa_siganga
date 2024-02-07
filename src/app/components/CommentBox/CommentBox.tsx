import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import styles from './CommentBox.module.scss';
import { Comment, Profile } from '@/app/interfaces/post';

interface input {
	onNewComment: (comment: Comment) => void;
	postId: number;
}

export default function CommentBox(props: input) {
	const { onNewComment, postId } = props;

	const [input, setInput] = useState('');
	const [profile, setProfile] = useState<Profile | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Fetch profile from the server using the fetch API
		const fetchProfile = async () => {
			try {
				// Using fetch to get profile details from the server
				const response = await fetch(
					'http://localhost:3000/api/my-profile'
				);
				const profile = await response.json();

				// For now, using dummy data instead of fetching from the server
				// const profile = { id: 2, name: 'Panasonic' };

				setProfile(profile);
			} catch (error) {
				console.error(error);

				alert('Failed to fetch profile');
			}
		};

		fetchProfile();
	}, []);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// set the input
		setInput(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			if (!postId) {
				return;
			}

			const trimmedInput = input.trim();

			// Post comment to the server using the fetch API
			await fetch(`http://localhost:3000/api/posts/${postId}/comments`, {
				method: 'POST',
				body: JSON.stringify({
					text: trimmedInput,
					profileId: profile?.id,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			onNewComment({
				comment: trimmedInput,
				authorName: profile?.name || 'Anonymous',
			});

			// clear the input
			setInput('');
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
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
						disabled={input.length === 0 || !profile || loading}
						className='btn btn-success'
					>
						{loading ? 'Posting...' : 'Post Comment'}
					</button>
				</div>
			</form>
		</div>
	);
}
