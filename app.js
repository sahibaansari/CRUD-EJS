const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", blogRoutes);
// app.use("/blog",(req,res)=>{
//   return console.log("hi")
// })

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
