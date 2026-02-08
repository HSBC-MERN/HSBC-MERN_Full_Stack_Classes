const AIResponseStream = require("../controller/chatController")
const express = require("express")

const route =express.Router()


route.post('/chat',AIResponseStream)

module.exports=route