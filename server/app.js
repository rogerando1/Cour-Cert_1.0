const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//middleware
app.use(express.json());


//connect mongodb
mongoose.connect(process.env.MONGODB_URI).then(() =>{
    const PORT = process.env.PORT || 8000 
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })

}).catch(err =>{
    console.log(err);
})

//route
app.get('/', (req,res) => {
    res.status(201).json({message: 'Connected to client!'});
})