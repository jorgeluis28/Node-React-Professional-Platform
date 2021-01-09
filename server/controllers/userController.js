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
  const first_name = req.body.first_name;
  const middle_name = req.body.middle_name;
  const family_name = req.body.family_name;
  const gender = req.body.gender;
  const bio = req.body.bio;
  const profession = req.body.profession;
  const specify = req.body.specify;
  const country = req.body.country;
  const email = req.body.email;
  const password = req.body.password;
  const file = req.body.file;

  var sql = "INSERT INTO users (first_name, middle_name, family_name,gender,bio,profession,specify,country,email,password,profile_picture) VALUES ('"+first_name+"','"+middle_name+"','"+family_name+"','"+gender+"','"+bio+"','"+profession+"','"+specify+"','"+country+"','"+email+"','"+password+"','"+file+"')";
  dbConn.query(sql, function (err, result) {
    if(result){
      res.send("ok");
    }else{
      res.send("error")
    }
  });
});
function islogied(req,res, next){
  if(req.session.sessionData){
    return  next;
  }else{
    res.redirect('/');
  }
}
let sessionDatas;
router.post('/signin', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // get email and password from the database.
  var getinfo = "SELECT * FROM `users` WHERE `email`='"+email+"' AND `password`='"+password+"'";
  dbConn.query(getinfo, function(err,result){
    if(result.length!=0){
      req.session.sessionData = {
        id: result[0].id,
        email: result[0].email,
        first_name: result[0].first_name,
        middle_name: result[0].middle_name,
        family_name: result[0].family_name,
        profession: result[0].profession,
        specify: result[0].specify,
        country: result[0].country,
        bio: result[0].bio,
        password: result[0].password,
        // file: results[0].file,
    };
      sessionDatas=req.session.sessionData;
      console.log('=========== session ===========')
      console.log(sessionDatas)
      res.status(200).send({
        status:'ok',
        sessionData:sessionDatas
      });
    }else{
      res.send("error");
    }
  })
}),


router.post('/update_profile', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const first_name = req.body.first_name;
  const middle_name = req.body.middle_name;
  const family_name = req.body.family_name;
  const profession = req.body.profession;
  const specify = req.body.specify;
  const country = req.body.country;
  const bio = req.body.bio;

  // get email and password from the database.
  var getinfo = "UPDATE `users` set `first_name`='"+first_name+"' , `middle_name`='"+middle_name+"' , `family_name`='"+family_name+"' , `profession`='"+profession+"' , `specify`='"+specify+"' , `country`='"+country+"' , `bio`='"+bio+"' , `password`='"+password+"'  WHERE `email`='"+email+"'";
  
  dbConn.query(getinfo, function(err,result){
    if(result){
      res.status(200).send({
        status:'ok',
        sessionData:sessionDatas
      });
    }else{
      res.send("error")
    }
  })
})

router.post('/getinfo', (req, res, next) => {
  const email = req.body.email;
  var oldinfo = "SELECT * FROM `users` WHERE `email`='"+email+"'";

  dbConn.query(oldinfo, function(err,result){
    if(result.length!=0){
      req.session.sessionData = {
        id: result[0].id,
        email: result[0].email,
        first_name: result[0].first_name,
        middle_name: result[0].middle_name,
        family_name: result[0].family_name,
        profession: result[0].profession,
        specify: result[0].specify,
        country: result[0].country,
        bio: result[0].bio,
        password: result[0].password,
        // sample: results[0].sample,
    };
      sessionDatas=req.session.sessionData;
      res.status(200).send({
        status:'ok',
        message:'updated',
        sessionData:sessionDatas
      });
    }else{
      res.send({
        message:'error'
      });
    }
  })
})

router.post('/getsession' , (req,res) => {
  console.log(sessionDatas);
  res.status(200).send({
    status:'ok',
    sessionData:sessionDatas
  });
});

router.post('/logout',(req, res, next) => {
  req.session.sessionData = undefined;


  console.log(sessionDatas);

  res.status(200).send({
   message:"success"
  });
});

router.post('/memberinfo',(req, res, next) => {
  var getspecify = req.body.profession;

  var memeberinfo = "SELECT * FROM `users` WHERE `profession`='"+getspecify+"'";
  console.log('======== get specify ========')
  console.log(memeberinfo);

  dbConn.query(memeberinfo, function(err,result){
    res.send({
      result: result
    })
  })
})

module.exports = router;