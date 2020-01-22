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

const login = async () => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', { session: false }, (error, passportUser, info) => {
      if(err) {
        //return next(err);
        reject(error)
      }

      if(passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();

        resolve(user);
        //return res.json({ user: user.toAuthJSON() });
      }

      //return status(400).info;
    })(req, res, next);
  })
}

module.exports = {
  create,
  edit,
  list,
  getUserById,
  deleteUserById,
  login
}
