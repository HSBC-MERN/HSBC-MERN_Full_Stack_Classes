const mongoose = require("mongoose");

const connection = async() => {
 await mongoose
    .connect("mongodb://localhost:27017/Ecommerce")
    .then(() => {
      console.log("MongoDb connected Successfully");
    })
    .catch((err) => console.log("Unable to connect mongodb", err));
};


module.exports=connection;