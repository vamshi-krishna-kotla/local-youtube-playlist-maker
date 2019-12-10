const router = require('express').Router();
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Song = require('../models/songModel');

mongoose.connect('mongodb://localhost:27017/vue-node-songs', { 
		useNewUrlParser: true, 
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then( () => {
		console.log('Connected to mongo server!')
	})
	.catch( err => {
		console.log('Error connecting to mongo server');
		console.log(err);
	})


router.get('/', (req,res) => {
	Song.find().sort({ song: 1 }).then((data)=>{
		res.send(data);
		res.end();
	})
});

router.get('/:song', (req,res) => {
	var song = req.params.song;
	Song.findOne({ 'song': song }).then( (data) => {
		if(!data) {
			res.status(404).send(`<h1>"${song}" not found</h1>`)
		}
		else {			
			res.status(200).send(data);
		}
		res.end();
	})
});

router.post('/', (req,res) => {
	var { error, value } = validateSong(req.body);
	if(!error) {
		new Song(value).save().then( data => {
			res.send(data);
			res.end();
		});
	}
	else {
		res.send(error.details[0].message);
		res.end();
	}
});

router.patch('/:song', ( req, res ) => {
	
	var song = req.params.song;

	var { error, value } = validateSong(req.body);
	if(!error) {
		Song.findOneAndUpdate({ 'song': song }, { 
			"artist": value.artist,
			"genre": value.genre,
			"link": value.link,
			"song": value.song
		}, { new: true }).then( data => {
			if(!data) {
				res.status(404).send(`<h1>"${song}" not found</h1>`)
			}
			else {			
				res.status(200).send(data);
			}
		})
	}
	else {
		res.send(error.details[0].message);
		res.end();
	}
});

router.delete('/:song', (req,res) => {
	
	var song = req.params.song;
	
	Song.findOneAndDelete({ 'song': song }).then( (data) => {
		if(!data) {
			res.status(404).send(`<h1>"${song}" not found</h1>`)
		}
		else {			
			res.status(200).send(data);
		}
	})

});

module.exports.songsRouter = router;

function validateSong( song ) {
	const validateSongSchema = Joi.object({
		'artist': Joi.string().min(3).required(),
		'genre': Joi.array().items(Joi.string().min(3).required()).sparse(),
		'link': Joi.string().uri(),
		'song': Joi.string().min(3).required()
	})

	return validateSongSchema.validate(song);
}
