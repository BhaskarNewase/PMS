const passport = require('passport');
const User = require('../model/User')

const create = async (data) => {
  return new Promise((resolve, reject) => {
    let user = new User(data);
    user.setPassword(data.password);
    user.save((error, data) => {
      if(error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

const edit = async (id, data) => {
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate(id,
      { $set: data },
      { new: true, useFindAndModify: false },
      (error, data) => {
        if(error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
  });
}

const list = async () => {
  return new Promise((resolve, reject) => {
    User.find((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
  });
}

const getUserById = async (id) => {
  return new Promise((resolve, reject) => {
    User.find({"_id": id}, (error, data) => {
      if(error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
  });
}

const deleteUserById = async (id) => {
  return new Promise((resolve, reject) => {
    User.deleteOne({"_id": id}, (error, data) => {
      if(error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
  });
}

const login = async (req, res, next) => {
  const { body: { user } } = req;
  return new Promise((resolve, reject) => {
    if(!user.email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }

    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }

    passport.authenticate('local', { session: false }, (err, passportUser, info) => {
      if(err) {
        reject(err);
        //return next(err);
      }

      if(passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
        resolve(user);
        //return res.json({ user: user });
      }

    })(req, res, next);
  });

}

module.exports = {
  create,
  edit,
  list,
  getUserById,
  deleteUserById,
  login
}
