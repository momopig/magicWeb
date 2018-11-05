var express = require('express')
var app = express()
var path = require('path')
var proxyMiddleware = require('http-proxy-middleware')

const apiProxy = proxyMiddleware('/api', {
    target: 'http://192.168.1.212:8080'
  })
app.use(apiProxy) // api子目录下的都是用代理

//app.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname + '/index.html'))
//})
//

app.use(express.static(__dirname + '/dist'))

app.listen(8081)
