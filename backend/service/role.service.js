const Role = require('../model/Role')

const create = async (data) => {
  return new Promise((resolve, reject) => {

    let roleData = new Role(data);
    roleData.save((error, data) => {
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
    Role.findOneAndUpdate(id,
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
    Role.find({"status": true}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
  });
}

const getRoleById = async (id) => {
  return new Promise((resolve, reject) => {
    Role.find({"_id": id}, (error, data) => {
      if(error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
  });
}

const deleteRoleById = async (id) => {
  return new Promise((resolve, reject) => {
    Role.deleteOne({"_id": id}, (error, data) => {
      if(error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
  });
}

module.exports = {
  create,
  edit,
  list,
  getRoleById,
  deleteRoleById
}
