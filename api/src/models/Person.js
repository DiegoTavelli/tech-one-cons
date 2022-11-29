const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('person', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
    streetNumber: {
      type: DataTypes.INTEGER,
    },
    postalCode: {
      type: DataTypes.INTEGER,
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: false
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fieldOfStudy: {
      type: DataTypes.STRING,
    },
    activities: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    start: {
      type: DataTypes.STRING,
    },
    end: {
      type: DataTypes.STRING,
    },
  }, {
    freezeTableName: true,
  })
}