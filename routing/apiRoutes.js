let friends = require("../data/friends.json")

module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        friendMatch = {
            name: "",
            photo: "",
            // we need to start the score difference higher than the actual possible score difference 
            // so we can start finding good matches right away
            friendDifference: 100
        };

        // capture user data in variables to use with friend compatability testing
        let newUser = req.body;
        let userScores = newUser.scores;
        let userName = newUser.name;
        let userPhoto = newUser.photo;

        // we will establish this for each loop through the array and compare it to scoreDifference in the newly created object
        let scoreDifference = 0;
        // loop thorugh the friends array and then find each total score for comparison 
        for (let i = 0; i < friends.length -1; i++) {
            console.log("outer loop")
            scoreDifference = 0;
            // looping through the score array of each friend
            for (let j = 0; j < 10; j++) {
                console.log("inner loop")
                scoreDifference += (parseInt(userScores[j]) - parseInt(friends[i].scores[j]))
                if (scoreDifference <= friendMatch.friendDifference) {
                    friendMatch.name = friends[i].name;
                    friendMatch.photo = friends[i].photo;
                    friendMatch.friendDifference = scoreDifference;
                }
            }
        }
    
        friends.push(newUser);
        
        res.json(friendMatch)

    });
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

}