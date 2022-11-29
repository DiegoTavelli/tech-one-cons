const { Person, Academic } = require('../db')

const getUser = async (req, res) => {
  try {
    const allUsers = await Person.findAll({
      include: [Academic]
    })
    res.status(200).send(allUsers)
  } catch (e) {
    res.status(500).json({ err: 'Error on getProfile', e })
  }
}

module.exports = {
  getUser
}