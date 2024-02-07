import { Comment, PostInterface } from './interfaces/post';

// Dummy data for posts
export const DUMMY_POSTS: PostInterface[] = [
	{
		id: 1,
		authorId: 1,
		authorName: 'Remy Jules',
		title: 'To the moon and beyond',
		body: 'The moon is the closest celestial body to Earth.',
	},
	{
		id: 2,
		authorId: 2,
		authorName: 'National Geographic',
		title: 'All the wonders of the world',
		body: "We are the world's leading science and exploration magazine.",
	},
];

export const DUMMY_COMMENTS: Comment[] = [
	{
		comment:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime rem repellendus temporibus ut eaque perspiciatis saepe quis similique consectetur nesciunt, incidunt distinctio qui harum iusto quo sed, magni totam accusantium.',
		authorName: 'Gary Mariner',
	},
	{
		comment:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime rem repellendus temporibus ut eaque perspiciatis saepe quis similique consectetur nesciunt, incidunt distinctio qui harum iusto quo sed, magni totam accusantium.',
		authorName: 'Gary Mariner',
	},
	{
		comment:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime rem repellendus temporibus ut eaque perspiciatis saepe quis similique consectetur nesciunt, incidunt distinctio qui harum iusto quo sed, magni totam accusantium.',
		authorName: 'Gary Mariner',
	},
];
