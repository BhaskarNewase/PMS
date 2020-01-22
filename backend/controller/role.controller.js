const roleService = require('../service/role.service')

// create access
exports.create = async function (req, res, next) {
  try {
    let create = await roleService.create(req.body);
    return res.status(200).json({ status: 200, data: create, message:"create role" });
  } catch (error) {
    return res.status(400) .json({ status: 400, message: error.message });
  }
}

// edit access
exports.edit = async function (req, res, next) {
  try{
    let editData = await roleService.edit(req.params.id, req.body);
    return res.status(200).json({ status: 200, data: editData, message: "update role" });
  } catch(error) {
    return res.status(400).json({ status:400, message: error.message });

  }
}

// list all access control
exports.list = async function (req, res, next) {
  try {
    let role = await roleService.list();
    return res.status(200).json({ status: 200, data: role, message: "Role List" });
  } catch (error) {
      return res.status(400).json({ status: 400, message: error.message });
  }
}

// Get role details by id
// Use get params to handle url parameter
exports.getRoleById = async function (req, res, next) {
  try {
    let roleData = await roleService.getRoleById(req.params.id);
    return res.status(200).json({ status: 200, data: roleData, message: "Role data"});
  } catch (error) {
    return res.status(400).json({ status:400, message: error.message });
  }
}

// Delete element by id
exports.delete = async function (req, res, next) {
  try {
    let removeData = await roleService.deleteRoleById(req.params.id);
    return res.status(200).json({ status:200, data: removeData, message: "Remove role element"});
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
}
