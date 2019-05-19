const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);



let friends = require("./data/friends.json")

app.listen(PORT, function() {
    console.log(`Server listening on PORT: ${PORT}`);
});