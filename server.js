const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

const db = require("./app/models");

//otomate create db on mysql
// db.sequelize.sync();

//CONNECT MongoDB
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.get('/', (req, res)=>{
    res.send('getting index');
});

//routes create data tsiswa
require("./app/routers/tsiswa.routes")(app);

//routes create data tpendaduan
require("./app/routers/tpengaduan.routes")(app);

app.listen(3000, function(){
	console.log("server is running on port 3000.")
});
