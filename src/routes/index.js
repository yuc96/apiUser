const userRouter= require('./user.routes')
const express = require('express');
const router = express.Router();

// colocar las rutas aquí
router.use("/user", userRouter); // la ejecutamos
module.exports = router;