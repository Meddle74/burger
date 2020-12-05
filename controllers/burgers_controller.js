const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', function (req, res) {
  burger.all(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// Add new burger to the db.
router.post('/api/burgers', function (req, res) {
  burger.create(
    ['burger_name', 'devoured'],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      // get id
      res.json({ id: result.insertId });
    }
  );
});

module.exports = router;
