const AIResponse = require("../controller/chatController")
const express = require("express")

const route =express.Router()


route.post('/chat',AIResponse)

module.exports=route