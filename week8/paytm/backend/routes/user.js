const express = require("express");
const { User, Account } = require("../db");
const JWT_SECRET = require("../config");
const { authMiddleware } = require("../middleware");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const router = express.Router();

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(5),
  firstName: zod.string().min(1),
  lastName: zod.string().min(1),
});

router.post("/signup", async (req, res) => {
  const parseResult = signupSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      message: "Email already taken/ Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(409).json({
      message: "Email already taken",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  const userId = user._id;
  await Account.create({
    userId,
    balance: 1 + Math.random() * 1000,
  });
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const parseResult = signinBody.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      message: "Incorrect inputs",
    });
  }
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }
  res.status(401).json({
    message: "Error while login",
  });
});

const updateBody = zod.object({
  password: zod.string().min(5).optional(),
  firstName: zod.string().min(1).optional(),
  lastName: zod.string().min(1).optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const parseResult = updateBody.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({
      message: "Error while updating the function",
    });
    return;
  }
  await User.updateOne({ _id: req.userId }, req.body);
  res.json({
    message: "Updated successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });
  res.json({
    users: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
