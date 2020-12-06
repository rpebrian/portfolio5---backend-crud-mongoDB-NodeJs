//connect to mongodb
const dbConfig = require("../config/database.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.Tsiswa = require("./tsiswa.model.js")(mongoose);
db.Tpengaduan = require("./tpengaduan.model.js")(mongoose);

module.exports = db; 

// //connect database mysql
// const dbConfig = require("../config/database.js");

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
//     dbConfig.DB,
//     dbConfig.USER,
//     dbConfig.PASSWORD,
//     {
//         host : dbConfig.HOST,
//         dialect : dbConfig.dialect,
//         operatorAliases : false,

//         poll : {
//             max : dbConfig.pool.max,
//             min : dbConfig.pool.min,
//             acquire : dbConfig.pool.min,
//             idle : dbConfig.pool.idle
//         }

//     }
// );

// const db = {};

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.Tsiswa = require("./tsiswa.model.js")(sequelize, Sequelize);
// db.Tpengaduan = require("./tpengaduan.model.js")(sequelize, Sequelize);

// module.exports = db;

