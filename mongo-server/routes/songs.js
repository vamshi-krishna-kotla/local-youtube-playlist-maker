const router = require('express').Router();

router.get('/', ( req, res ) => {
	res.end(__filename);
});

module.exports.songsRouter = router;