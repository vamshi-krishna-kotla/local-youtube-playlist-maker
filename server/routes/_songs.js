const router = require('express').Router();
const Joi = require('@hapi/joi');
const fs = require('fs');

var songList = {
	available: false,
	list : [],
};

router.get('/', (req,res) => {
	if(Object.entries(songList).length !== 0) {

		checkData();

		res.send(songList);
	}
	else {
		res.send(`<h2>No Data!</h2>`);
	}
	res.end();
});

router.get('/:song', (req,res) => {

	checkData();

	var song = req.params.song;
	var data = songList.list.find( s => s.song === song);

	if(data) {
		res.status(200).send(data);
	}
	else {
		res.status(404).send(`<h2>${song} not found</h2>`);
	}

	res.end();
});

router.post('/', (req,res) => {
	
	checkData();

	var {error, value} = validateSong(req.body);
	if(!error) {
		songList.list.push(value);

		updateSource();

		res.send(songList);
	}
	else {
		res.send(error.details[0].message);
	}

	res.end();
});

router.put('/:song', (req,res) => {
	
	var song = req.params.song;
	var data = songList.list.find( s => s.song === song);

	checkData();

	var {error,value} = validateSong(req.body);
	if(!error) {
		songList.list[songList.list.indexOf(data)] = value;

		updateSource();

		res.send(value);
	}
	else {
		res.send(error.details[0].message);
	}
	

	res.end();
});

router.delete('/:song', (req,res) => {
	
	var song = req.params.song;
	var data = songList.list.find( s => s.song === song);
	
	checkData();
	
	songList.list.splice(songList.list.indexOf(data),1);

	updateSource();

	res.send(songList);
	

	res.end();
});

module.exports =  router;

function validateSong(song) {
	const schema = Joi.object({
		'artist': Joi.string().min(3).required(),
		'genre': Joi.array().items(Joi.string().alphanum().min(3).required()).sparse(),
		'link': Joi.string().uri(),
		'song': Joi.string().min(3).required()
	})

	return schema.validate(song);
}

function checkData() {
	if(!songList.available) {
		songList.list = JSON.parse(fs.readFileSync(__dirname+'/source.json', 'utf8'));
		songList.available = !songList.available;
	}
}

async function updateSource() {
	// rewrite source file with songList.list here
	await fs.writeFile(__dirname+'/source.json', JSON.stringify(songList.list), (err) => {
		console.log(err);
	})
}