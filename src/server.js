require('dotenv').config(); // Load .env file

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const ejs = require('ejs');
const homeController = require('./controllers/homeController.js');
const apiRouter = require('./routes/api');
const { createJWT, verifytoken } = require('./middleware/JWTAction');
//const apiR = require('./routes/apilogin');





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


createJWT();
let decededData =verifytoken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWHVhbkFuaCIsImFkZHJlc3MiOiJ0cGhjbSIsImlhdCI6MTcxMDQ2NzI2N30.1qm1HQtDqb2mKf1-nvig-fq6IySRfU-QkD2TrBe2mvs")
console.log(decededData)
app.use(express.json());
// Set view engine to EJS
app.set('view engine', 'ejs');

// Routes
app.get('/', homeController.getHomePage);
app.set('views', path.join(__dirname, 'views'));
app.use('/api', apiRouter);
//app.use('/apilogin', apiR);







const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


