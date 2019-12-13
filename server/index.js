const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const pug = require('pug');
const cors = require('cors');

const songsRouter = require('./routes/_songs');

const PORT = process.env.PORT || 3000;

const appView = './views/app.pug';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', ( req, res ) => {
	fs.readFile(appView,(err,data) => {
		if(!err) {
			res.end(pug.render(data, { PORT: PORT }));
		}
		else {
			res.end(err);
		}
	});
});

app.use('/songs', songsRouter);

app.listen( PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});