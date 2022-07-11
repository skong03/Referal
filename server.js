const express = require("express");
const path = require('path');
const userRoutes = require('./routes/user'); // import the routes

const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})

app.use(express.static(path.resolve(__dirname, './my-app/build')));

// Example
// app.get("/", function (req, res) {
//   res.json({message: "Hello world!"});
// });

app.use("/", userRoutes);

app.get("/close", function(){
    process.exit();
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './my-app/build', 'index.html'));
});
