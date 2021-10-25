const router = require('express').Router();
const htmlRoutes = require ('./htmlRoutes');
const apiroutes = require ('./api');

router.use ('/', htmlRoutes);
router.use ('/api', apiroutes);

module.exports = router;