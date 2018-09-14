
const express = require('express'),
    routes = express.Router();

// home route
routes.get("/analysis", (req, res) => {
    res.render('analysis');
});

module.exports = routes;