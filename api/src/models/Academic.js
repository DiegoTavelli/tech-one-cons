const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('academic', {
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
      allowNull: false
    },
    activities: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    start: {
      type: DataTypes.STRING,
      allowNull: false
    },
    end: {
      type: DataTypes.STRING,
      allowNull: false
    },
    titleImg: {
      type: DataTypes.STRING,
    },

  })
}