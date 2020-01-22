const Access = require('../model/Access')

const getAllAccess = async () => {
    return new Promise((resolve, reject) => {
      Access.find({"status": true}, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      })
    });
}

const getAccessById = async (id) => {
  return new Promise((resolve, reject) => {
    Access.find({"_id": id}, (error, data) => {
      if(error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
  });
}

const deleteAccessById = async (id) => {
  return new Promise((resolve, reject) => {
    Access.deleteOne({"_id": id}, (error, data) => {
      if(error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
  });
}

const create = async (data) => {
  return new Promise((resolve, reject) => {
    let accessData = new Access(data);
    accessData.save((error, data) => {
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
    Access.findOneAndUpdate(id,
      { $set: data },
      {new: true, useFindAndModify: false},
      (error, data) => {
        if(error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
  });
}

module.exports = {
  getAllAccess,
  getAccessById,
  deleteAccessById,
  create,
  edit
}
