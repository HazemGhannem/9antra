const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors =require('cors')
connectDB();

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

//image upload and access to it from frontend
app.use('/Upload',express.static('Upload'))


//app.use('/Upload', express.static(path.join(__dirname, 'Upload')))
app.use('/api/upload', require('./Routers/UploadRoutes'));

//Routes
app.use('/api/products', require('./Routers/ProductRoutes'));







app.listen(port, () => console.log(`Server started on port ${port}`));