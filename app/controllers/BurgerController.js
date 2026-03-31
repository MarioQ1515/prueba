const Burger = require('../models/BurgerModel');

const BurgerService = require('../services/BurgerService')

const data = require('../models/BurgerModelDummy.json')
console.log(data)
function listall(req, res) {
    /*      
    Burger.find({})
        .then(burgers => {
            if(burgers.length) return res.status(200).send({burgers})
            return res.status(204).send({message: 'No Content'});
        }).catch(err => res.status(500).send({err}))
    */
    //return res.status(200).send({'nombre':'Hamburguesa con queso','precio':15000,'ingredientes':{'mayonesa':true,'ketchup':false}})    

    return res.status(200).send({'hamburguesas':data}) 
}

function create(req, res) {
    //let burgerService = BurgerService.validate(req.body)
    console.log(req.body)
    let burger = new Burger(req.body);
    /*
    burger.save()
        .then(burger => 
            res.status(201).send({burger})
        ).catch(err => res.status(500).send({err}))
    */
   //console.log(burger)
   res.status(201).send({burger})
}

function show(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.burgers) return res.status(404).send({message: 'Not Found'});
    let burgers = req.body.burgers;
    return res.status(200).send({burgers});
}

function update(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.burgers) return res.status(404).send({message: 'Not Found'});
    let burger = req.body.burgers[0];
    burger = Object.assign(burger, req.body);
    burger.save()
        .then(burger => res.status(200).send({message: 'Burger Updated', burger})
    ).catch(err => res.status(500).send({err}))
}

function deleted(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.burgers) return res.status(404).send({message: 'Not Found'});
    req.body.burgers[0].remove()
        .then(burger => {
            res.status(200).send({message:'Burger removed', burger})
        }
        ).catch(err => res.status(500).send({err}));
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    Burger.find(query).then(burgers => {
        if(!burgers.length) return next();
        req.body.burgers = burgers;
        return next();
    }).catch(err =>{
        req.body.error = err;
        next();
    })
}

module.exports = {
    listall,
    show,
    create,
    update,
    deleted,
    find,
}