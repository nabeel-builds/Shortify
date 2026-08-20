const express = require("express");

const {
  redirectShortUrl,
} = require("../controllers/redirect.controller");

const router = express.Router();

router.get("/:shorturl", redirectShortUrl);

module.exports = router;