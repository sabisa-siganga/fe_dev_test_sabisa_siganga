export interface PostInterface {
	id: number;
	title: string;
	authorName: string;
	authorId: number;
	body?: string;
}

export interface Comment {
	comment: string;
	authorName: string;
}

export interface Profile {
	id: number;
	name: string;
}