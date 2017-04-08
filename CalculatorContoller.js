var mycalulator=require('./lib/calculatorpro').calop;
var express1=require('express');
var app=express1();

app.listen(8080); //defining port
console.log("server is ready");

//defining webservice
app.get("/", function(req,res) {
	res.send("hey I am calculator");
});

app.get("/calculate", function(req,res) {
	var operation=req.query.name;
	var arg=req.query.num.split(",");
	if(arg.length!=2)
	{
		return res.send("please call the service with valid query params");
	}
	if(operation == "add")
	{
		return res.send("Result= "+mycalulator.addition(arg[0],arg[1]));
	}
	else if(operation == "sub")
	{
		return res.send("Result= "+mycalulator.substraction(arg[0],arg[1]));
	}
	else if(operation == "multiply")
	{
		return res.send("Result= "+mycalulator.multiply(arg[0],arg[1]));
	}
	else if(operation == "divide")
	{
		return res.send("Result= "+mycalulator.divide(arg[0],arg[1]));
	}
	else
	{
		return res.send("please specify a valid method !!!!!!!");
	}
	
});
