let router = require("express").Router();

router.get("/", function(req, res) {
	res.render("dashboard");
});

module.exports = router;