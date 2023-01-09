const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js');

const createUserRoute = require('./apis/createUser.js');

router.use('/', homeRoutes);

router.use('/apis', createUserRoute)

module.exports = router;
