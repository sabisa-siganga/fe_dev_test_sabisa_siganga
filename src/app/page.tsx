'use client';

import Posts from './components/Posts/Posts';
import Favorites from './components/Favorites/Favorites';
import { Col, Row } from 'react-bootstrap';
import { FavoritesProvider } from './context/FavoritesProvider';

export default function Home() {
	return (
		<FavoritesProvider>
			<div className='px-5'>
				<Row>
					<Col sm={8}>
						<Posts />
					</Col>

					<Col sm={4}>
						<Favorites />
					</Col>
				</Row>
			</div>
		</FavoritesProvider>
	);
}
