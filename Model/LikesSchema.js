const mongoose = require("mongoose");
const LikeSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'sagar'
    },
    like: {
        type: String,
        required: true,
    },
});

const Like = mongoose.model("Like", LikeSchema);
module.exports = Like;