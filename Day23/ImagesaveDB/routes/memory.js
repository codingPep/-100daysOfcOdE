const express = require("express");
const { createMemory } = require("../controllers/memory");
const router = express.Router();

router.post("/addmemory", createMemory);

module.exports = router;
