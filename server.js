const express = require("express");
const userRoutes = require('./routes/user'); // import the routes

const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})

// Example
app.get("/", function (req, res) {
  res.json({message: "Hello world!"});
});

app.use("/", userRoutes);

app.get("/close", function(){
    process.exit();
});
