const db = require("../models");
const User = db.user;
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Username is already in use!"
      });
      return;
    }
    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Email is already in use!"
        });
        return;
      }
      // Phone
      User.findOne({
        where: {
          phone: req.body.phone
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Phone number is already in use!"
          });
          return;
        }
        next();
      });
    });
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};
module.exports = verifySignUp;