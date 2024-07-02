const path=require("path");
const express=require("express");
const app=express();
const sequelize=require("./util/database");
app.use(express.json());
app.use('/',(req,res)=>{
	res.sendFile(path.join(__dirname,`/index.html`));
});

sequelize.sync().then(()=>{app.listen(3000)});