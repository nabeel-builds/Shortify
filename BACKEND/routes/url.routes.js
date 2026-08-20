const express = require("express");

const {
  createShortUrl,
} = require("../controllers/url.controller");

const router = express.Router();

router.post("/shorten", createShortUrl);

module.exports = router;