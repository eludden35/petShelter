const Pet = require("../models/pet.model");

module.exports.findAllPets = (req,res) => {
    Pet.find()
        .then(allPet => res.json({pets: allPet}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.findOnePet = (req,res) => {
    Pet.findOne({_id: req.params._id})
        .then(onePet => res.json({pet: onePet}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.createPet = (req,res) => {
    Pet.create(req.body)
        .then(newPet => res.json({pet: newPet}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.deletePet = (req,res) => {
    Pet.remove({_id: req.params._id})
        .then(remPet => res.json({message: "Your pet is gone fooooorever!!"}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}
module.exports.addLike = (req,res) => {
    Pet.updateOne({_id: req.params._id}), {
        $set: {
            liked: req.body.liked
        }
    }
}
module.exports.updatePet = (req,res) => {
    Pet.update({_id: req.params._id}, {
        $set: {
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skillOne: req.body.skillOne,
            skillTwo: req.body.skillTwo,
            skillThree: req.body.skillThree
        }
    }, {runValidators: true})
        .then(allPet => res.json({Pets: allPet}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}