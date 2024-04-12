const express = require("express")
const app = express()

app.use(express.json());

function middleware(req,res,next){
    fetch().then(()=>{
        next();
    })
}

app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("You have"+kidneyLength +"kidneys");

})

app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry something is up with servers"
    })
})