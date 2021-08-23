const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  session = req.session;
  if (session.userid) {
    res.send("Welcome User <a href='/logout'>click to logout</a>");
  } else res.send("ok");
});

module.exports = router;
