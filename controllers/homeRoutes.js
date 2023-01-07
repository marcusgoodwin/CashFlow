const router = require("express").Router();

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/about-us", async (req, res) => {
  try {
    res.render("about-us");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/sign-up", async (req, res) => {
  try {
    res.render("sign-up");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/input", async (req, res) => {
  try {
    res.render("input");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
