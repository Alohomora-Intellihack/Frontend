const express = require('express');
const dotenv = require('dotenv').config({path:'.env'});
const cors = require('cors');

const PORT = process.env.PORT || '8000';
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})