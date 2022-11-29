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
    }
  }, {
    timestamps: false,
    freezeTableName: true,
  })
}