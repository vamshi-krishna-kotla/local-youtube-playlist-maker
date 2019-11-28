const router = require('express').Router();
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

router.get('/', (req,res) => {
	if(Object.entries(songList).length !== 0) {
		res.status(200).end(JSON.stringify(songList));
	}
	else {
		res.send(`<h2>No Data!</h2>`);
		res.end();
	}
});

router.get('/:id', (req,res) => {
	var id = parseInt(req.params.id);
	if(songList.list.length > id) {
		res.status(200).send(songList.list[id]);
	}
	else {
		res.status(404).send(`<h2>Song with id:${id} not found</h2>`);
	}
	res.end();
});

module.exports =  router;