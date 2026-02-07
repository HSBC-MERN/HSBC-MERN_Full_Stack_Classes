const express  =  require('express')
const   dotenv  = require('dotenv');
const  route  =require("./routes/chatRoute")
const cors=require("cors")
const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
const port = process.env.PORT;

app.use("/api",route);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})