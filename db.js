const mongoose = require("mongoose");

mongoose.connect("mongodb://cs8899112_db:foreingsinix@ac-mygfsoy-shard-00-00.f1aoovq.mongodb.net:27017,ac-mygfsoy-shard-00-01.f1aoovq.mongodb.net:27017,ac-mygfsoy-shard-00-02.f1aoovq.mongodb.net:27017/?ssl=true&replicaSet=atlas-btfgum-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("estado de la conexion con atlas: Conectado"))
.catch(err => console.log(err));

module.exports = mongoose;