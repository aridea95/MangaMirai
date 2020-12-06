const express = require('express');
const app = express();
// require('dotenv').config()

const PORT = 3000;

const errorHandling = require('./middlewares/errorHandling')
const router = require('./routes')

//Middlewares
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Routes
app.use(router);
// app.use(errorHandling);

app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
})
