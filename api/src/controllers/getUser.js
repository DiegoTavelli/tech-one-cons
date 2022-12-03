const { Person, Academic } = require('../db')

const getUser = async (req, res) => {
  try {
    const allPersons = await Person.findAll({
      includes: Academic
    })
    res.status(200).send(allPersons)
  }
  catch (e) {
    res.status(500).json({ err: 'Error on getProfile', e })
  }
}

module.exports = {
  getUser
}