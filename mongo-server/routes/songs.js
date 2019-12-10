const router = require('express').Router();
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Song = require('../models/songModel');

mongoose.connect('mongodb://localhost:27017/vue-node-songs', { 
		useNewUrlParser: true, 
		useUnifiedTopology: true 
	})
	.then( () => {
		console.log('Connected to mongo server!')
	})
	.catch( err => {
		console.log('Error connecting to mongo server');
		console.log(err);
	})


router.get('/', (req,res) => {
	//send all available data from mongo
	res.end('GET');
});

router.get('/:song', (req,res) => {

	var song = req.params.song;
	// send one song from mongo
	res.end('GET:song');
});

router.post('/', (req,res) => {
	var { error, value } = validateSong(req.body);
	if(!error) {
		res.send(addNewSong(value));
	}
	else {
		res.send(error.details[0].message);
	}
	res.end('POST');
});

router.patch('/:song', (req,res) => {
	
	var song = req.params.song;

	var {error,value} = validateSong(req.body);
	if(!error) {
		// modify song here
	}
	else {
		res.send(error.details[0].message);
	}
	res.end(`PATCH ${song}`);
});

router.delete('/:song', (req,res) => {
	
	var song = req.params.song;
	res.end(`DELETE ${song}`);

});

module.exports.songsRouter = router;

function validateSong(song) {
	const validateSongSchema = Joi.object({
		'artist': Joi.string().min(3).required(),
		'genre': Joi.array().items(Joi.string().alphanum().min(3).required()).sparse(),
		'link': Joi.string().uri(),
		'song': Joi.string().min(3).required()
	})

	return validateSongSchema.validate(song);
}

async function addNewSong(song) {
	var newSong = new Song(song);

	return await newSong.save();
}