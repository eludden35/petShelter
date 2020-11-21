const PetController = require("../controllers/pet.controller");

module.exports = app => {
    
    app.get("/api/pets", PetController.findAllPets);
    
    app.get("/api/pets/:_id", PetController.findOnePet);
    
    app.post("/api/pets/new", PetController.createPet);
    
    app.delete("/api/pets/delete/:_id", PetController.deletePet);
    
    app.put("/api/pets/:_id/edit", PetController.updatePet);

    app.put("/api/pets/:_id/edit/likes", PetController.addLike);
}