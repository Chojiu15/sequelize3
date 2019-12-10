'use-strict'



module.exports = (sequelize, Datatypes) => {
    const Car = sequelize.define('car', {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            len: [5, 30],
        },
        brand: {
            type: Datatypes.STRING,
            allowNull: false
        },
        age: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        color: {
            type: Datatypes.STRING,
            allowNull: false
        },
        eco: {
            type: Datatypes.BOOLEAN,
            allowNull: false
        }
    },

        {
            underscored: true,
        }

    )
    Car.associate = db => {
        Car.belongsToMany(db.owner, { through: 'car_owner', timestamps: false, foreignKey : 'cars_id'  });
    }
    return Car

}
