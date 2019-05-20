let friends = require("../data/friends.json")

module.exports = function(app) {
    app.post("/api/friends", function(req, res) {
        let newfriend = req.body;
        friends.push(newfriend);
        res.json({ waiting: false, message: "You have a reservation"})
    
    });
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

}