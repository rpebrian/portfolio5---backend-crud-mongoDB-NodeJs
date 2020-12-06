//create database in mongodb
module.exports = mongoose => {
    const Tpengaduan = mongoose.model("tpengaduan",
      mongoose.Schema(
            {
              nis : {
                type: String, 
                references : {
                  model : 'tsiswas',
                  key : 'id'
                }
              },
              judul : String,
              laporan : String,
            }
      )
    );
  
    return Tpengaduan;
  };

//create database in mysql
// module.exports = (sequelize, Sequelize) => {
//     const Tpengaduan = sequelize.define("tpengaduan", {
//         nis : {
//             type : Sequelize.INTEGER,   
//             references : {
//                 model : 'tsiswas',
//                 key : 'id',
//             }
//         },
//         judul : {
//             type : Sequelize.STRING
//         },
//         laporan : {
//             type : Sequelize.TEXT
//         }
//     });
//     return Tpengaduan;
// }