const express = require('express');
const indexRouter = require('./routes');


//setting up app;
const app = express();

//setting ejs
app.set("view engine","ejs");
app.set("views","./views");

//setting static 
app.use(express.static('public'));

//enable json
app.use(express.json());

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


app.listen(3333,(err)=>{
    err ? console.log(err):console.log("Listening to port 3333");
});