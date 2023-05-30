const mongoose = require("mongoose");
const LikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    likes: {
        type: String,
        required: true,
    },
});

const Likes = mongoose.model("Like", LikeSchema);
module.exports = Likes;