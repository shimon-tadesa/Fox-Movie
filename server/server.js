const express = require('express');
const path = require("path");
let app = express();
const dataBase = require('./services/dataBase');
const movies_servers = require('./services/movies.service');
const PORT = process.env.PORT || 3000;







app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());

app.get('/ping',function (req,res){
    return res.send('pong')
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// __________
// get home
app.get('/home', async function (req, res) {
    movies_servers.getTopMovies1(req,res);
    
});

app.get('/home/two', async  function (req, res) {
    movies_servers.getTopMovies2(req,res);
    
});

app.get('/home/three', async  function (req, res) {
    movies_servers.getTopMovies3(req,res);
    
});

app.get('/home/tv', async function (req, res) {
    movies_servers.getTopTV1(req,res);
});

app.get('/home/tv/two', async function (req, res) {
    movies_servers.getTopTV2(req,res);
});

app.get('/home/tv/three', async function (req, res) {
    movies_servers.getTopTV3(req,res);
});

// ____________________________________________________________________ mongo user 

// __________
// post to data base (mongoDB) the user info, and save that 
app.post("/users/registr", (req, res) => {
    dataBase.registr(req,res);
});


// post to data base the user info ,and check if the user is already eixst
app.post("/users/login", (req, res) => {
    dataBase.login(req,res);
});
   
app.post('/cart/:userId', function (req, res) { 
    dataBase.saveUserCart(req,res)//req to server to save the user movie in DATABASE
              
    });


app.get("/user/:id", function(req,res){
    dataBase.findUser_ToAdd_Item(req,res)
})

app.delete("/cart/:id/:movieId", function(req,res){
    dataBase.findUser_ToDelete_Item(req,res) //this is for delete movie from list
})
    


app.listen(PORT);
