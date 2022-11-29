const { Router } = require('express');
const router = Router();
const { postUser } = require('../controllers/postUser')
const { getUser } = require('../controllers/getUser')


router.get('/profile', getUser)
router.post('/profile', postUser)

module.exports = router;

