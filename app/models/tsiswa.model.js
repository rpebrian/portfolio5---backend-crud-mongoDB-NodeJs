module.exports = mongoose => {
    const Tsiswa = mongoose.model("tsiswa",
      mongoose.Schema(
        {
            nama: String,
            jk: String,
            alamat: String
          }
        )
      );
  
    return Tsiswa;
  };

//crete data MongoDb
// module.exports = (sequelize, Sequelize) => {
//     const Tsiswa = sequelize.define("tsiswa", {
//             nama : {
//                 type : Sequelize.STRING
//             },
//             jk : {
//                 type : Sequelize.STRING
//             },
//             alamat : {
//                 type : Sequelize.STRING
//             }
//     });

//     return Tsiswa;
// }