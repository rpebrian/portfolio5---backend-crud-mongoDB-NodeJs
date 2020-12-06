const db = require("../models");
const Tsiswa = db.Tsiswa;
//const Op = db.Sequelize.Op;
const CRUD = require('../services/crud.js')
const crud = new CRUD();

// Create and Save tsiswa
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.nama) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const tsiswa = {
      nama: req.body.nama,
      jk: req.body.jk,
      alamat: req.body.alamat,
    };
    console.log("tsiswa", tsiswa);
    
    // Save Tutorial in the database
    try {
     const siswa = await crud.create(Tsiswa, tsiswa)
     res.status(200).json(siswa)
    } catch(err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    }

  };

  exports.findAll = async (req, res) => {
    try {
      const siswa = await crud.findAll(Tsiswa)
      console.log("data siswa", siswa);
      res.status(200).json(siswa)
     } catch(err){
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Tutorial."
       });
     }
  }


  exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
      const siswa = await crud.findOne(Tsiswa, id)
      res.status(200).json(siswa)
     } catch(err){
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Tutorial."
       });
     }
  }

  exports.update = async (req, res) => {
    const id = req.params.id;
    const tsiswa = {
      nama: req.body.nama,
      jk: req.body.jk,
      alamat: req.body.alamat,
      
    };

    try {
      await crud.update(Tsiswa, tsiswa, id)
      const siswa = await crud.findOne(Tsiswa, id)
      res.status(200).json(siswa)
     } catch(err){
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Tutorial."
       });
     }
  }

  exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
      await crud.delete(Tsiswa, id)
      res.status(200).json("delete success")
     } catch(err){
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Tutorial."
       });
     }
  }

  exports.deleteAll = async (req, res) => {
    try {
      await crud.deleteAll(Tsiswa)
      res.status(200).json("delete All success")
     } catch(err){
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Tutorial."
       });
     }
  }