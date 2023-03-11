require("./utils/dbConnection");
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoutes )


app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on port ${ process.env.PORT }`);
})
