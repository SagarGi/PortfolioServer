const mongoose = require("mongoose");

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || "portfoliodatabase";

const DB_URI = `mongodb+srv://sagargi:8Z4rV25BrrarSEfe@cluster0.lxm2ua8.mongodb.net/?retryWrites=true&w=majority`;

const conn = () =>
    mongoose
        .connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database connected successfully !!!");
        })
        .catch((err) => console.log(err));

module.exports = conn;