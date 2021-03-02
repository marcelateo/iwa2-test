const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require ('cors'),
express = require ('express'),
bodyParser = require('body-parser');

var app= express();
var port= 8000;
app.use(bodyParser.json())

app.get('/hello/:foo/:bar', function (req, res) {
    res.json({message:'Hello BScBest!', data:[
        req.params.foo,
        req.params.bar
    ]});
    
});

//http.createServer((req, res)=>{
  res.send(users.join("\n")); //display the list of users on the page
  //res.write("\n, \n"+emails.join("\n")); //display the list of users on the page
  //res.end(); //end the response
//}).listen(8000); // listen for requests on port 8000

  let users = []; // names of users will be stored here
  //let email = [];
  (async function getNames(){
  try{
    const {data} = await axios.get("http://swapi.dev/api/people/");

    users = data.results.map(user=>user.name);
    emails = data.map(email=>email.email);
  } catch(error){
    console.log(error)
  }
})();
app.listen(port, function(err){
    console.log('Listening on port: ' + port )
});
