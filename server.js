// Import Dependencies
require("dotenv").config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create our app object
const app = express();

// set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
  // send projects via JSON
  res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
  // send projects via JSON
  res.json(about);
});


// // create route - post
// app.post("/projects", (req, res) => {
//     // push req.body into array
//     console.log("Request Body:", req)
//     projects.push(req.body)
//     // return all the projects
//     res.json(projects)
// })

// // update route - put - 
// app.put("/projects/:id", (req, res) => {
//     // grab the id
//     const id = req.params.id
//     // update the array
//     projects[id] = req.body
//     // return all projects
//     res.json(projects)
// })

// // destroy route
// app.delete("/projects/:id", (req, res) => {
//     // grab the id
//     const id = req.params.id
//     // splice/remove the item from the array
//     projects.splice(id, 1)
//     // return all projects
//     res.json(projects)
// })

// // show route
// app.get("/projects/:id", (req, res) => {
//     // grab the id from params
//     const id = req.params.id
//     // send back specific project
//     res.json(projects[id])
// })

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));