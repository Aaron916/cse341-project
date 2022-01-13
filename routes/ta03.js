//TA03 PLACEHOLDER
const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Item = require('./ta03-model');

var items = [];


router.get('/', (req, res, next) => {
  const p = path.join(path.dirname(process.mainModule.filename),'public','items.json');
  fs.readFile(p, (err, data) => {
    //console.log('data: ' + data);
    items = JSON.parse(data);
    console.log(items);

  });

  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    items: items
  });

});



module.exports = router;
