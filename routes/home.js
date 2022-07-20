const express = require('express');

router = express.Router();

home = require('../controllers/home');

router.get('/', (req, res, next) => {
    res.render("home.ejs", { home: "home-value" });
});

module.exports = router;