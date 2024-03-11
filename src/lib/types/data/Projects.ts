import type { Meta } from './Meta';

export interface Projects extends Meta {
	id: string;
	slug: string;
	src: string | string[];
	title: string;
	description?: string;
	url: string;
}
