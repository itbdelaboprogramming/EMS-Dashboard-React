const { Model, DataTypes } = require('sequelize')
const connection = require('../connection')

class Data extends Model { }

Data.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    time: {
        type: DataTypes.DATE
    },
    voltage: {
        type: DataTypes.INTEGER,
    },
    current: {
        type: DataTypes.INTEGER,
    },
    power: {
        type: DataTypes.INTEGER,
    },
    electricity: {
        type: DataTypes.INTEGER,
    },
    day: {
        type: DataTypes.INTEGER,
    },
    week: {
        type: DataTypes.INTEGER,
    },
    month: {
        type: DataTypes.INTEGER,
    },
    total_electricity: {
        type: DataTypes.INTEGER,
    },
    total_cost: {
        type: DataTypes.INTEGER,
    }
}, {
    modelName: "tuya_smart_plug_1",
    sequelize: connection,
    paranoid: false,
    timestamps: false
})

module.exports = Data