const { Person, Academic } = require('../db')

const deleteUser = async (req, res) => {
  const { email } = req.query;
  try {
    const findPerson = await Person.findOne({
      where: { email: email }
    })
    res.status(200).send(allPersons)
  }
  catch (e) {
    res.status(500).json({ err: 'Error on deleteUser', e })
  }
}

module.exports = {
  deleteUser
}