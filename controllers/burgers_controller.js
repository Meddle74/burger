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

// Eat burger or Put back on list
router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) res.status(404).end();
      else res.status(200).end();
    }
  );
});

module.exports = router;
