//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let item = []

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
   let today = new Date();

   let day = "";

   if(today.getDay() === 6 || today.getDay() === 0){
    day = "Weekend";

   } else {
    day = "Weekday";
   
   }
   res.render("list",{kindOfDay: day})
});


app.listen(3000, function(){
    console.log("Listening in port 3000")
});
