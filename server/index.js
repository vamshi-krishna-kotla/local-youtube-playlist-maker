const app = require('express')();
const morgan = require('morgan');

const songsRouter = require('./routes/_songs');

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', ( req, res ) => {
	res.send(`<h1>Working</h1>`);
	res.end();
});

app.use('/songs', songsRouter);

app.listen( PORT, () => {
	console.log(`Server running at port: ${PORT}`);
});