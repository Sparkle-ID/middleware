const express = require('express');
const router = express.Router();
const {getDID} = require('../controllers/didController');


router.route('/').get(getDID);

router.route('/').post((req, res) => {
    res.status(200).json({ message: "Create credentials" });
});

module.exports = router;