const express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");

const app = express();
// db connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

// enable cors with default config
app.use(cors());

app.use(express.json());
require("./Route")(app);

//Connect to the database before listening
connectDB().then(() => {
    app.listen(3001, () => {
        console.log("listening for requests");
    })
})