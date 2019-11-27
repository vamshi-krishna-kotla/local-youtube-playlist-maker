const app = require('express')();

const PORT = process.env.PORT || 3000;

app.get('/', ( req, res ) => {
	res.end(`<h1>Working</h1>`);
});

app.listen( PORT, () => {
	console.log(`Server running at port: ${PORT}`);
});