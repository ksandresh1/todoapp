require("dotenv").config();
const express = require('express');
const indexRouter = require('./routes');
const PORT = +process.env.PORT || 3333;
const {database} = require("./service/database");
//setting up app;
const app = express();



//setting ejs
app.set("view engine","ejs");
app.set("views","./views");

//setting static 
app.use(express.static('public'));

//enable json
app.use(express.json());
    
//testing DATABASE
database();

//setting up starting routes 
app.use('/',indexRouter);

app.use((err, req,res, next)=>{
    if(err){
        err = err.toString();
        console.log(err);
    }
    else{
        
    }
})


app.listen(PORT,(err)=>{
    err ? console.log(err):console.log("Listening to port..... "+ PORT);
});