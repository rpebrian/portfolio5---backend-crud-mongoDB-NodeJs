const db = require('../models');
const dataPGD = db.Tpengaduan;

//const Op = db.Sequelize.Op;
const CRUD = require('../services/crud.js')
const crud = new CRUD();

//create
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.judul) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      const fdataPGD = {
        nis : req.body.nis,
        judul : req.body.judul,
        laporan : req.body.laporan,
      }

      // Save in the database
    try {
        const pgd = await crud.create(dataPGD, fdataPGD)
        res.status(200).json(pgd)
       } catch(err){
         res.status(500).send({
           message:
             err.message || "Some error occurred while creating the Tutorial."
         });
       }
    
}

//findAll
exports.findAll = async (req, res) => {
    try {
        const pgd = await crud.findAll(dataPGD)
        res.status(200).json(pgd)
       } catch(err){
         res.status(500).send({
           message:
             err.message || "Some error occurred while creating the Tutorial."
         });
       }
}

//findOne
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const pgd = await crud.findOne(dataPGD, id)
        res.status(200).json(pgd)
       } catch(err){
         res.status(500).send({
           message:
             err.message || "Some error occurred while creating the Tutorial."
         });
       }
}

//update
exports.update = async (req, res) => {
    const id = req.params.id;
    const fdataPGD = {
        nis : req.body.nis,
        judul : req.body.judul,
        laporan : req.body.laporan,
      }


    try {
      await crud.update(dataPGD, fdataPGD, id)
      const pgd = await crud.findOne(dataPGD, id)
      res.status(200).json(pgd)
     } catch(err){
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Tutorial."
       });
     }
  }

  //deleteOne
  exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
      await crud.delete(dataPGD, id)
      res.status(200).json("delete success")
     } catch(err){
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Tutorial."
       });
     }
  }

  //DeleteAll
  exports.deleteAll = async (req, res) => {
    try {
      await crud.deleteAll(dataPGD)
      res.status(200).json("delete All success")
     } catch(err){
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Tutorial."
       });
     }
  }

