const express=require("express");
const app=express();

app.use(express.json());
app.use('/',(req,res)=>{
	res.sendFile("./index.html");
});

app.listen(3000);