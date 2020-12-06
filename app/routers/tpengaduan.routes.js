module.exports = app => {
    const tpengaduans = require('../controllers/tpengaduan.controller.js');
    let router = require('express').Router();

    // create data
    router.post("/", tpengaduans.create);

     //findOne data
     router.get("/:id", tpengaduans.findOne);

     //update
     router.put("/:id", tpengaduans.update);
 
     //deleteOne
     router.delete("/:id", tpengaduans.delete);
 
      //deleteAll
      router.delete("/", tpengaduans.deleteAll);
 
     //findAll data
     router.get("/", tpengaduans.findAll);

    app.use('/api/tpengaduans', router);
};