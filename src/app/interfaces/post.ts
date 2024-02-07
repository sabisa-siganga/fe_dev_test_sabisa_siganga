export interface PostInterface {
	title: string;
	authorName: string;
	authorId: number;
	body?: string;
}

export interface Comment {
	comment: string;
	authorName: string;
}
