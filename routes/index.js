const express = require('express');
const router  = express.Router();
const Story = require("../models/Story")

/* GET home page */
router.get('/', (req, res, next) => {
  
  Story.find({})
  .then(story => {
    res.render('index', {
      story: story
    });
  });
});

router.post('/add-story', (req, res, next) => {
  Story.create({
    content: req.body.content,
    writer: req.body.writer,
  })
  .then(storyCreated => {
    res.redirect("/");
  })
});

module.exports = router;
