const express=require("express");
const app=express();

app.use(express.json());
app.use('/',(req,res)=>{
	res.json({"message":"hello"});
});

app.listen(3000);