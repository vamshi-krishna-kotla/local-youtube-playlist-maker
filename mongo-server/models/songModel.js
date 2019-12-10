const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
	"artist": { type: String, default: '', required: true },
	"genre":[ String ],
	"link": { type: String, default: '', required: true },
	"song": { type: String, default: '', required: true }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;