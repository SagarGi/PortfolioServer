const Likes = require("../Model/LikesSchema");

const addLikeForPortfolio = async (req, res) => {
    const { likes } = req.body
    try {
        let sendLikes = parseInt(likes) + 1
        let incrementLike = sendLikes.toString();
        await Likes.updateOne({
                name: "dagar"
            }, {
                likes: incrementLike
            }
        )
        return res
            .status(201)
            .json({ message: "Thank you for the like !!" });
    }catch (e) {
        return res.status(500).json({ error: "Something wrong in the server" });
    }
};

const getTotalLikes = async (req, res) => {
    try {
        const likes = await Likes.findOne({ name: "dagar" });
        if (!likes) {
            return res.status(404).json({ error: "likes not found" });
        }
        return res
            .status(200)
            .json(likes);
    }catch (e) {
        return res.status(500).json({ error: "Something wrong in the server" });
    }
};

module.exports = {
    addLikeForPortfolio,
    getTotalLikes
};