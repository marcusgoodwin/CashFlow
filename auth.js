const router = require("express").Router();
const { application } = require("express");
const express = require("express");
const app = express();
require("dotenv").config();
const { auth, requiresAuth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  secret: process.env.SECRET,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL

app.use(auth(config));

// req.isAuthenticated is provided from the auth router

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = router;
