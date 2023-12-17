const express = require('express');
const monoose=require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const port=process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: config.cors.origin,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    credentials: true
}));

const userRoutes = require('./routes/user');
const teamRoutes = require('./routes/team');


app.use((req,res,next)=>{
    return process.env.db_url;
});

app.use('/users', userRoutes);
app.use('/teams', teamRoutes);
app.use((req, res) => {
    res.status(404).send('Not Found');
});


monoose.connect(process.env.db_url)
.then(result => {
    console.log('Connected to database');
    app.listen(port, () => {
        console.log('Server is running on port 4000');
    });
}).catch(err => {
    console.log(err);
})

module.exports = app;
