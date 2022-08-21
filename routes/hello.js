const express = require("express");
const router = express.Router();

const HelloController = require("../controllers/hello");

// GET /hello
router.get("/", HelloController.sayHello);

module.exports = router;
