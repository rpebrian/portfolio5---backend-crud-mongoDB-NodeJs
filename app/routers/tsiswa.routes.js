module.exports = app => {
    const tsiswas = require("../controllers/tsiswa.controller.js");

    let router = require('express').Router();

    // create data
    router.post("/", tsiswas.create);

    //findOne data
    router.get("/:id", tsiswas.findOne);

    //update
    router.put("/:id", tsiswas.update);

    //deleteOne
    router.delete("/:id", tsiswas.delete);

     //deleteAll
     router.delete("/", tsiswas.deleteAll);

    //findAll data
    router.get("/", tsiswas.findAll);

    app.use('/api/tsiswas', router);
};