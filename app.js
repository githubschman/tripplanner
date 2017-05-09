const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const router = require('./routes');
const models = require('./models');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

nunjucks.configure('views', {noCache: true}); 
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(router);
app.use(express.static('public'));
app.use(express.static('node_modules'));


models.db.sync({})
.then(function() {
  app.listen(3000, function() {
    console.log('listening impatiently on port', 3000);
  });
}).catch(console.error)
