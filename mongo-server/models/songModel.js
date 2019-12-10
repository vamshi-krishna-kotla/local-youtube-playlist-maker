const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
	"artist": {type: String, default: ''},
	"genre":[ String ],
	"link": {type: String, default: ''},
	"song": {type: String, default: ''}
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;