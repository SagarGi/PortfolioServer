const express = require("express");

const router = express.Router();
const {
    addLikeForPortfolio,
    getTotalLikes
} = require("../Controller/LikeController");

router.put("/add-like", addLikeForPortfolio);
router.get("/get-likes", getTotalLikes);

module.exports = router;