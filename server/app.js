const express = require("express");
const mongoose = require("mongoose");
const app = express(); 

const cors = require("cors"); 

require("dotenv").config(); 

const corsOptions = {
    origin:"http://localhost:3000"
}


app.use(express.json()); 
app.use(cors(corsOptions));




mongoose.connect(process.env.MONGODB_URI)
.then(() => {

    const port = process.env.port
    app.listen(port, () => {
        console.log(`server started ${port}`)
    })

}).catch(err => {
    console.log(err);
})


app.get("/", (req, res) => {
    res.status(201).json({message:"connected to db"});
    
});