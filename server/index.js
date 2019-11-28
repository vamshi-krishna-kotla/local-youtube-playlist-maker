const app = require('express')();

const PORT = process.env.PORT || 3000;

const songList = {
	list : [
		{
			'song': 'bohemian rhapsody',
			'artist': 'Queen',
			'link': 'https://www.youtube.com/embed/fJ9rUzIMcZQ'
		},
		{
			'song': 'believer',
			'artist': 'Imagine Dragons',
			'link': 'https://www.youtube.com/embed/7wtfhZwyrcc'
		},
		{
			'song': 'thunder',
			'artist': 'Imagine Dragons',
			'link': 'https://www.youtube.com/embed/fKopy74weus'
		},
		{
			'song': 'we will rock you',
			'artist': 'Queen',
			'link': 'https://www.youtube.com/embed/-tJYN-eG1zk'
		},
	]
};

app.get('/', ( req, res ) => {
	res.send(`<h1>Working</h1>`);
	res.end();
});

app.get('/songs', (req,res) => {
	if(Object.entries(songList).length !== 0) {
		res.status(200).end(JSON.stringify(songList));
	}
	else {
		res.send(`<h2>No Data!</h2>`);
		res.end();
	}
});

app.listen( PORT, () => {
	console.log(`Server running at port: ${PORT}`);
});