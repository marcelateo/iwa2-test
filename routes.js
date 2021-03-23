const express = require('express'),
router = express.Router();

var itemCtrl = require('./item-controller'),
userCtrl = require('./user-controller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);

module.exports = router;


//router.get('/hello/:foo/:bar', (req, res) => {
  //  res.json({message: 'Hello BScBest!', data: [
    //    req.params.foo,
      //  req.params.bar
    //]});
//});

//router.post('/hello', (req, res) => {
  //  res.json({result: 'Post was sent', data: req.body});
//});