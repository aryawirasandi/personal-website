const { Client } = require('@notionhq/client');

// Initializing a client
const database = new Client({
	auth: process.env.SECRET_TOKEN
});

export { database };
