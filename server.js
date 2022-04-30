const express = require('express');
const bodyParser = require('body-parser')


const app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
  