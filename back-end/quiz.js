const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");

const User = users.model;
const validUser = users.valid;

const quizSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  need: String,
  photo: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Quiz = mongoose.model('Quiz', quizSchema);

router.get('/', validUser, async (req, res) => {
  let quiz = [];
    try {
        quiz = await Quiz.find({
          user: req.user
        }).sort({
          created: -1
        });
      return res.send({
        quiz: quiz
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.post('/', validUser, async (req, res) => {
  const quiz = new Quiz({
    user: req.user,
    need: req.body.need,
    photo: req.body.photo,
  });
  try {
    await quiz.save();
    return res.send({
      quiz: quiz
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Quiz.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


module.exports = {
  routes: router
}
