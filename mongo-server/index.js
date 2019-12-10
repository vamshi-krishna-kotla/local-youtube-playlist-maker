const express = require('express');
const morgan = require('morgan');

const { homeRouter } = require('./routes/home');
const { songsRouter } = require('./routes/songs');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/', homeRouter);
app.use('/songs', songsRouter);

app.listen(PORT, () => {
	console.log(`Mongo server running at http://localhost:${PORT}/`)
});