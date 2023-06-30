const express = require('express')
const router = express.Router();
const userController = require('../controller/users-controller')


router.get("/all", userController.getUsers)
router.get("/user/:id", userController.getUser)
router.post('/users', userController.createUsers);
router.delete('/delete/:id', userController.deleteUser);
router.put('/edit/:id', userController.updateUser);


module.exports = router;