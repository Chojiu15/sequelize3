'use-strict'

module.exports = (sequelize, Datatypes) => {
    const Owner = sequelize.define('owner', {
        first_name: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        age: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    },  
        {
            underscored: true,
        }
    )
    Owner.associate = db => {
        Owner.belongsToMany(db.car, { through: 'car_owner', timestamps: false, constrains : false, foreignKey : 'owners_id' });
    }
    return Owner
}
