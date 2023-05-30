module.exports = (app) => {

    const addLike = require("./Like");

    app.all("/", (req, res) => {
        res.send("OK");
    });

    app.use("/like", addLike);
};