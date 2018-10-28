'use strict'
const express=require('express')
const bodyParser=require('body-parse')
const request=request('request')

const app=express()		//set app as an express framework app

app.set('port',(process.env.PORT||5000))  	//set port to any preset environment

//allow us to process the data passed by the user
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//ROUTES

app.get('/',function(req,res){
	res.send("Hi! I am a chatbot")
})

//Facebook

app.get('/webhook/',function(req,res){
	if(req.query['hub.verify_token']==='test'){
		res.send(req.query[hub.challenge])
	}
	res.send("wrong token")
})

app.listen(app.get('port'),function(){
	console.log("running: port")
})