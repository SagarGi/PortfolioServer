module.exports = (app) => {

    const addLike = require("./addLike");

    app.all("/", (req, res) => {
        res.send("OK");
    });

    app.use("/add-like", addLike);
};