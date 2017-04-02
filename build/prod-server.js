var config = require('../config')
var express = require('express')
var path = require('path')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.set('view engine', 'html')

var staticPath = path.posix.join(config.prod.assetsPublicPath, config.prod.assetsSubDirectory)
app.use('/static', express.static(
path.join(__dirname, '/../dist/static')
))

console.log(path.resolve(__dirname, '/../dist/static'));
console.log(path.join(__dirname, '/../dist/static'))


app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
