const express = require('express');
const router = express.Router();
const {body}=require('express-validator')
const userController = require('../controllers/user.controllers')

router.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 Character long'),
    body('password').isLength({min:6}).withMessage("password must bet at least 6 Character long ")
],userController.registerUser)










module.exports = router