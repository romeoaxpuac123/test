const express = require('express')
const app = express()
const port = 3000
var path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

exports.sum = function(value) {
	
  var result = value + 2;
  return result;
  
};

exports.addTested = function(value) {
	
  var result = value + " tested";
  return result;

};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
