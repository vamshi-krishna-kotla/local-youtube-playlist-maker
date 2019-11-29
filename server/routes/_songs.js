const router = require('express').Router();
const songList = {
	list : [
		{
			'artist': 'Queen',
			'genre': ['Classic', 'Rock'],
			'link': 'https://www.youtube.com/embed/fJ9rUzIMcZQ',
			'song': 'bohemian rhapsody'
		},
		{
			'artist': 'Imagine Dragons',
			'genre': ['Pop', 'Rock', 'Dance', 'Electronic'],
			'link': 'https://www.youtube.com/embed/7wtfhZwyrcc',
			'song': 'believer'
		},
		{
			'artist': 'Imagine Dragons',
			'genre': ['Rock‎', '‎Heavy metal'],
			'link': 'https://www.youtube.com/embed/fKopy74weus',
			'song': 'thunder'
		},
		{
			'artist': 'Queen',
			'genre': ['Arena', 'Rock'],
			'link': 'https://www.youtube.com/embed/-tJYN-eG1zk',
			'song': 'we will rock you'
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