const { Router } = require('express');
const { postUser } = require('../controllers/postUser')
const { getUser } = require('../controllers/getUser')
const { deleteUser } = require('../controllers/deleteUser')
const router = Router();


router.get('/profile', getUser)
router.post('/profile', postUser)
router.delete('profile', deleteUser)
module.exports = router;

