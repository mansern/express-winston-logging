const express = require("express");
const router = express.Router();

const ByeController = require("../controllers/bye");

// GET /bye
router.get("/", ByeController.sayBye);

module.exports = router;
