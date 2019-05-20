let friends = require("../data/friends.json")

module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        let newfriend = req.body;
        friends.push(newfriend);
        let bestMatch = friends[0]
        res.json(bestMatch)

    });
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

}