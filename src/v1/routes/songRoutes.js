const express = require("express");
const songController = require("../../controllers/songController");

const router = express.Router();

router.get("/", songController.getAllSongs);

router.get("/:songId", songController.getOneSong);

module.exports = router;
