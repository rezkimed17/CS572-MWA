var express = require('express');
var router = express.Router();
var axios = require('axios');
var { from } = require('rxjs');

/* GET users listing. */
let users = {};
let promise = axios.get('http://jsonplaceholder.typicode.com/users/');

router.get('/', function(req, res, next) {
    promise.then(function (response) {
      users.promise = response.data;
      next();
    }).catch(function (error) {
      res.send(error);
    });
});

router.get('/', function(req, res, next) {
  from(promise).subscribe(
    (x) => {
      users.observable = x.data;
      next();
    }, (error) => {
      res.send(error);
    }, () => {}
  );
});

router.get('/', async function(req, res, next) {
  try {
    let response = await promise;
    users.asyncawait = response.data;
    res.render('users', users );
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
