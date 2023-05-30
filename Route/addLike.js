const express = require("express");

const router = express.Router();
const {
    addLikeForPortfolio,
} = require("../Controller/LikeController");

router.put("/", addLikeForPortfolio);

module.exports = router;