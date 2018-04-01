require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./../build/webpack.dev.config.js')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// // proxy api requests
// Object.keys(proxyTable).forEach(function (context) {
//   var options = proxyTable[context]
//   if (typeof options === 'string') {
//     options = { target: options }
//   }
//   app.use(proxyMiddleware(options.filter || context, options))
// })

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
// var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    console.log('> open browser')
    opn(uri) 
  }
  _resolve()
})

  // *******************************
  // 开发环境代理接口
  const apiProxy = proxyMiddleware({
    // target: 'http://192.168.1.57:10030',
    // target: 'http://10.10.10.58:10030',
    // target: 'http://192.168.1.54:10030',
    // target: 'http://218.17.162.184:10030',
    target: 'http://192.168.1.40:4000',  // 测试环境
    // target: 'http://192.168.1.63:10030',  // 测试环境
    // target: 'http://10.10.10.58:10030',
    changeOrigin: true
  })

  app.use('/api', apiProxy) // api子目录下的都是用代理


  // ********************************
  // 开发环境mock接口
  const router = require('./mock')
  app.use('/', router)

  // app.get('*', function(req, res) {
  //   res.sendFile(path.resolve(__dirname, './../index.html'))
  // });
  app.use('*', function (req, res, next) {
    // 'index.html' filename/Users/Jamter/project/iview-admin/dist/static/index.html
    // './../index.html' filename/Users/Jamter/project/iview-admin/dist/index.html
    const filename = path.resolve(compiler.outputPath, './../index.html')
    console.error('filename' + filename)
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
