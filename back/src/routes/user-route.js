const express = require("express");
const router = express.Router();
const pool = require("../dbs/postgres");

router.post("/login", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE login=$1 and password=$2;",
    [req.body.login, req.body.password]
  );

  if (result.rows[0]) {
    session = req.session;
    session.user = 1;

    console.log(session.user);

    res
      .status(200)
      .cookie("userId", result.rows[0].id, {
        secure: false,
      })
      .json(result.rows[0]);
  } else {
    res.status(404).send({
      result: "Not found",
    });
  }
});

router.get("/logout", (req, res) => {
  console.log("logout");
  session = null;
  req.session.destroy();
  res.send("");
});

module.exports = router;
