const models = require('../models')

module.exports = function (app) {
    app.get('/owners', (req, res) => {
        models
            .owner
            .findAll({ include: [models.car] })
            .then(owners => res.json(owners))
    })



    app.get('/owners/:id', (req, res) => {
        models
            .owner
            .findByPk(req.params.id)
            .then(owners => res.json(owners))
    })


    app.post('/owners', (req, res) => {
        console.log(req.body)
        models
            .owner
            .create({
                cars_id: 1,
                first_name: 'test',
                last_name: 'test',
                age: 44,
            })
            .then(car => res.json(car))
    })

}