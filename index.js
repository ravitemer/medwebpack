const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
// Setup
const app = express();
const port = process.env['WEB_APP_PORT'];
const config = require('./build/webpack.config.js');
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: "/",  
  serverSideRender: true,
  watchOptions: {
    // Due to iOS devices memory constraints
    // disabling file watching is recommended 
    aggregateTimeout: 1000,
    poll: 6000,
  }
});
app.use(middleware);
app.get('/', (req, res) => {
  res.sendFile('src/index.html', { root: __dirname });
});
// Launch app
app.listen(port, () => {
  console.log(
    'Launching app... http://localhost:' + port + '\n')
   
     
    
  
});

// Register app and middleware. Required for better
// performance when running from play.js
try { pjs.register(app, middleware); } catch (error) { }
