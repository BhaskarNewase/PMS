const accessService = require('../service/access.service')

// create access
exports.create = async function (req, res, next) {
  try {
    let createData = await accessService.create(req.body);
    return res.status(200).json({ status: 200, data: createData, message:"create access" });
  } catch (error) {
    return res.status(400) .json({ status: 400, message: error.message });
  }
}

// edit access
exports.edit = async function (req, res, next) {
  try{
    let editData = await accessService.edit(req.params.id, req.body);
    return res.status(200).json({ status: 200, data: editData, message: "update data" });
  } catch(error) {
    return res.status(400).json({ status:400, message: error.message });

  }
}

// list all access control
exports.getAccess = async function (req, res, next) {
  try {
    let access = await accessService.getAllAccess();
    return res.status(200).json({ status: 200, data: access, message: "Access List" });
  } catch (error) {
      return res.status(400).json({ status: 400, message: error.message });
  }
}

// Get access details by id
// Use get params to handle url parameter
exports.getAccessById = async function (req, res, next) {
  try {
    let accessData = await accessService.getAccessById(req.params.id);
    return res.status(200).json({ status: 200, data: accessData, message: "Access data"});
  } catch (error) {
    return res.status(400).json({ status:400, message: error.message });
  }
}

// Delete element by id
exports.deleteAccessById = async function (req, res, next) {
  try {
    let removeData = await accessService.deleteAccessById(req.params.id);
    return res.status(200).json({ status:200, data: removeData, message: "Remove access element"});
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
}

