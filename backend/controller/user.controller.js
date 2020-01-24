const userService = require('../service/user.service')
const User = require('../model/User')

// create new user
exports.create = async function (req, res, next) {
  try {
    let create = await userService.create(req.body);
    let user = new User(create);
    return res.status(200).json({ status: 200, user: user.toAuthJSON(), message:"User created successfully" });
  } catch (error) {
    return res.status(400) .json({ status: 400, message: error.message });
  }
}

// edit user
exports.edit = async function (req, res, next) {
  try{
    let editData = await userService.edit(req.params.id, req.body);
    return res.status(200).json({ status: 200, data: editData, message: "update role" });
  } catch(error) {
    return res.status(400).json({ status:400, message: error.message });

  }
}

// list users
exports.list = async function (req, res, next) {
  try {
    let user = await userService.list();
    return res.status(200).json({ status: 200, data: user, message: "Role List" });
  } catch (error) {
      return res.status(400).json({ status: 400, message: error.message });
  }
}

// Get role details by id
// Use get params to handle url parameter
exports.getUserById = async function (req, res, next) {
  try {
    let data = await userService.getUserById(req.params.id);
    return res.status(200).json({ status: 200, data: data, message: "Role data"});
  } catch (error) {
    return res.status(400).json({ status:400, message: error.message });
  }
}

// Delete element by id
exports.delete = async function (req, res, next) {
  try {
    let data = await userService.deleteUserById(req.params.id);
    return res.status(200).json({ status:200, data: data, message: "Remove role element"});
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
}

exports.login = async function(req, res, next) {
  try{
    let data = await userService.login(req, res, next);
    let user = new User(data);
    return res.status(200).json({ status:200, user: user.toAuthJSON(), message:"user login successfully" });
  } catch (error){
    return res.status(400).json({ status:400, message:error.message });
  }
}

