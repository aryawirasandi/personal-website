import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	return new Response('the blogs api');
};
