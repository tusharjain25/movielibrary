const mongoose = require('mongoose');
//const mongoURI = "mongodb://localhost:27017/movielibrary"
const mongoURI = "mongodb+srv://root:rooty@cluster0.mdpeosu.mongodb.net/movielibrary"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;
