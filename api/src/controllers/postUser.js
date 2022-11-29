const { Person, Academic } = require('../db')


const postUser = async (req, res) => {
  try {

    const {
      name, lastName, email, phone, country, city, street, streetNumber, postalCode
    } = req.body[0];

    const {
      institution, degree, fieldOfStudy, activities, start, end, description
    } = req.body[1];

    //validate person values
    if (!name || !lastName || !email || !phone) {
      return res.status(400).json({ err: 'Some of the required arguments are not valid' })
    }
    if (typeof name !== 'string' || typeof lastName !== 'string' ||
      typeof email !== 'string' || typeof phone !== 'string' ||
      typeof country !== 'string' || typeof city !== 'string' || typeof street !== 'string') {
      return res.status(400)
        .json({ err: 'name, lastname, email, phone, country, city & street must be of type String' })
    }
    if (typeof streetNumber !== 'number' || typeof postalCode !== 'number') {
      return res.status(400).json({ err: 'streetNumber & postalCode must be of type Number' })
    }
    let checkEmail = await Person.findOne({
      where: {
        email: email
      }
    })
    if (checkEmail) return res.status(400).json({ err: 'That email already exist' })

    //validate academic values
    if (!institution || !degree) return res.status(400).json({ err: 'institution & degree are required' })

    if (typeof institution !== 'string' || typeof degree !== 'string' || typeof fieldOfStudy !== 'string' ||
      typeof activities !== 'string' || typeof start !== 'string' || typeof end !== 'string' ||
      typeof description !== 'string') {
      return res.status(400)
        .json({ err: 'institution, degree, fieldOfStudy, activities, start, end & description must be of type String' })
    }

    //if no error I create person and academics and relate them.
    const person = await Person.create({
      name,
      lastName,
      email,
      phone,
      country,
      city,
      street,
      streetNumber,
      postalCode,
    });
    const academics = await Academic.create({
      institution,
      degree,
      fieldOfStudy,
      activities,
      start,
      end,
      description
    })
    await person.addAcademic(academics)

    return res.status(201).send({ info: 'Person successfully created' })

  } catch (e) {
    res.status(500).send({ err: 'Error on postUser controller', e })
  }
}

module.exports = {
  postUser
}