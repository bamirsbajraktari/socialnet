
/**
 * Module dependencies.adasdsadasdsadasd
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , profile = require('./routes/profile')
  , welcome = require('./routes/welcome')
  , login = require('./routes/loginsubmit')
  ,logout = require('./routes/logout')
  ,headers = require('./routes/headers')
 ,upload = require('./functions/uploadFile')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser() );
app.use(express.session({secret:'123456789abcdef'}));
app.use(express.methodOverride());
app.use(app.router);


app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/profile', profile.showprofile);
app.get('/welcome', welcome.render);
app.get('/logout', logout.logout);
app.post('/loginsubmit', login.login);
app.post('/uploadfile', upload.uploadfile);
app.get('/:username', headers.check);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
