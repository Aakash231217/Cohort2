const express = require("express");
const userRouter = require("./user");
const router = express.Router();
const accountRouter = require("./account");

router.use("/account",accountRouter);

router.use("/user",userRouter);

module.exports = router