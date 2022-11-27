const { Router } = require('express');
const router = Router();
const { Person, Academic } = require('../db')

router.get('/', async (req, res) => {
  return res.status(200).json({ info: 'todo ok' })
})

router.post('/profile', async (req, res) => {
  const {
    name,
    lastName,
    email,
    phone,
    country,
    city,
    street,
    streetNumber,
    postalCode
  } = req.body;
  await Person.create({
    name,
    lastName,
    email,
    phone,
    country,
    city,
    street,
    streetNumber,
    postalCode
  });
  return res.status(200).send({ info: 'Person successfully created' })

})

module.exports = router;