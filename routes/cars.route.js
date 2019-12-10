const models = require('../models')

module.exports = function(app){
    app.get('/cars', (req, res) => {
        models
            .car
            .findAll({ include: [models.owner] })
            .then(cars => res.json(cars))
    })

    app.get('/cars/:id', (req, res) => {
        models
            .car
            .findByPk(req.params.id)
            .then(cars => res.json(cars))
    })

    app.post('/cars', (req, res) => {
        console.log(req.body)
        models
            .car
            .create({
                name : 'test',
                brand : 'test3',
                age : 34,
                color : "blue",
                eco : 1,
                owners_id : 1
            })
            .then(cars => res.json(cars))
        })    
    
}