const express = require ("express");
const router = express.Router();


//import controllers
const { dummyLink } = require ("../controllers/LikeController");



//mapping create
router.get("./dummyroute", dummyLink);



//export
module.exports = router;