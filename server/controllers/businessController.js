const  express =require('express');
const router = express.Router();
var mysql = require('mysql');

var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "sspwf"
});

router.post('/signup',(req, res, next) => {
  const name = req.body.name;
  const industry = req.body.industry;
  const country = req.body.country;
  const bio = req.body.bio;
  const email = req.body.email;
  const password = req.body.password;

  var sql = "INSERT INTO companies (`name`, `industry`, `country`,`bio`,`email`,`password`) VALUES ('"+name+"','"+industry+"','"+country+"','"+bio+"','"+email+"','"+password+"')";
  dbConn.query(sql, function (err, result) {
    if(result){
      res.status(200).send({
        status:'ok',
      });
    }else{
      res.send("error")
    }
  });
});

module.exports = router;