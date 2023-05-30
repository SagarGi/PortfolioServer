const Like = require("../Model/LikesSchema");

const addLikeForPortfolio = async (req, res) => {
    const { likes } = req.body
    try {
        return res.status(201).json({ likes: likes });
    }catch (e) {
        return res.status(500).json({ error: "Something wrong in the server" });
    }
};

module.exports = {
    addLikeForPortfolio
};