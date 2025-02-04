//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();
/*var app = express();
app.use(express.urlencoded({extended: true}));*/

let users = ["Bob","Sally"]

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: 'ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users : [],
    numUsers : 0
  });
});

router.post('/addUser', (req, res, next) => {
  users.push(req.body.username);
  res.render("pages/ta02", {
  title: 'Team Activity 02',
  path: 'ta02',
  users : users, 
  numUsers : users.length});
});

router.post('/deleteUser', (req, res, next) => {
  users = users.filter((user) => user !== req.body.deleteName);

  res.render("pages/ta02", {
    title: 'Team Activity 02',
    path: 'ta02',
    users : users, 
    numUsers : users.length});
})

module.exports = router;
