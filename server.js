const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const router = express.Router();
const session = require('express-session');
const cookieSessionLib=require('cookie-session');
// var formidable = require('formidable');


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
 
const userController = require('./server/controllers/userController');
const businessController = require('./server/controllers/businessController');

// enable cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cookieSessionLib({
  name: 'session_info',
  keys: '@test',
}));
app.use(cors());

app
  .use('/users', userController)
  .use('/businesses', businessController)
  .use((err, req, res, next) => {
    console.error(err);
    const errorCode = err.code || 500;
    res.status(errorCode).send({ message: err.message });
  });

router.post('/logout',(req, res, next) => {
  req.session.sessionData = undefined;

  res.status(200).send({
    status:'logout',
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));