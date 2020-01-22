const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const auth = require('./auth');
const app = express();
const router = express.Router();

let userController = require('../controller/user.controller')

let localStrategy = require('../config/passport');

router.post('/create', userController.create)
router.put('/edit/:id', userController.edit)
router.get('/list', userController.list)
router.get('/getUserById/:id', userController.getUserById)
router.delete('/delete/:id', userController.delete)
router.post('/login', userController.login)


module.exports = router;



// Get all student
// router.route('/').get((req, res) => {
//   Student.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Get single student
// router.route('/read-student/:id').get((req, res, next) => {
//   Student.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Update student
// router.route('/update-student/:id').put((req, res, next) => {
//   Student.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Student successfully updated!')
//     }
//   })
// })

// // Delete student
// router.route('/delete-student/:id').delete((req, res, next) => {
//   Student.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

// //POST new user route (optional, everyone has access)
// router.route('/add-user').post((req, res, next) => {
//   const user = req.body;
//   if(!user.student_email) {
//     return res.status(422).json({
//       errors: {
//         email: 'is required',
//       },
//     });
//   }

//   if(!user.password) {
//     return res.status(422).json({
//       errors: {
//         password: 'is required',
//       },
//     });
//   }

//   const finalUser = new Student(user);

//   finalUser.setPassword(user.password);

//   return finalUser.save()
//     .then(() => res.json({ user: finalUser.toAuthJSON() }));
// });

// //POST login route (optional, everyone has access)
// router.route('/login').post((req, res, next) => {
//   const { body: { user } } = req;
//   if(!user.student_email) {
//     return res.status(422).json({
//       errors: {
//         email: 'is required',
//       },
//     });
//   }

//   if(!user.password) {
//     return res.status(422).json({
//       errors: {
//         password: 'is required',
//       },
//     });
//   }

//   return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
//     if(err) {
//       return next(err);
//     }

//     if(passportUser) {
//       const user = passportUser;
//       user.token = passportUser.generateJWT();

//       return res.json({ user: user.toAuthJSON() });
//     }

//     //return status(400).info;
//   })(req, res, next);

// });

// //GET current route (required, only authenticated users have access)
// router.route('/current', auth.require).post((req, res, next) => {
// //router.get('/current', auth.required, (req, res, next) => {
//   const { payload: { id } } = req;

//   return Student.findById(id)
//     .then((user) => {
//       if(!user) {
//         return res.sendStatus(400);
//       }

//       return res.json({ user: user.toAuthJSON() });
//     });
// });


