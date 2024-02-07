import Posts from './components/Posts/Posts';
import Favorites from './components/Favorites/Favorites';
import { Col, Row } from 'react-bootstrap';

export default function Home() {
	return (
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
	);
}
