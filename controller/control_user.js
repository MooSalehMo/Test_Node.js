// require file
const User = require('../model/user')

// start insert user
 insertUser = (req, res, next) => {
  const user = new User({
    userName: req.body.userName,
    userMail: req.body.userMail
  })
  user.save((error, result)=> {
    if (error) {
      console.log(error);
      res.redirect('/');
      return ;
    }
    console.log(result);
    res.redirect('/getUsers')
  })
}

// start insert getUser
 getUser = (req, res, next) => {
  User.find({}, 'userName userMail' , (error, result) => {
    if(error) {
      console.log(error);
      res.redirect('/')
    }
    console.log(result)
    res.render('index', {items: result})
  })
}

// start insert updateUser
 UpdateUser = (req, res, next) => {
  const ID = req.body.id 
  const userUpdate = {
    userName: req.body.userName,
    userMail: req.body.userMail
  }
  User.updateOne({_id: ID}, {$set: userUpdate}, (error, doc) => {
    if (error) {
      console.log(error);
      res.redirect('/');
      return ;
    }
    console.log(doc) 
    res.redirect('/getUsers')
  })
}

// start insert deleteUser
deleteUser = (req, res, next) => {
  const ID = req.body.id 
  User.deleteOne({_id: ID}, (error, doc) => {
    if (error) {
      console.log(error);
      res.redirect('/')
      return
    }
    console.log(doc) 
    res.redirect('/getUsers')
  })
}

// start exports
module.exports = {
  insertUser,
  getUser,
  UpdateUser,
  deleteUser
}