var express = require('express');
const { render } = require('../app');
var router = express.Router();
const control = require('../controller/control_user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', control.insertUser)

router.get('/getUsers', control.getUser)

router.post('/update', control.UpdateUser)

router.post('/delete', control.deleteUser)

module.exports = router;
