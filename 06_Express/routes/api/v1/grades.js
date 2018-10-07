var express = require('express');
var router = express.Router();

let grades = [{id: 1, name: "mohammed", course: "CS572", grade: 97}];

router.get('/', function(req, res, next) {
  res.json(grades);
});

router.post('/', function(req, res, next) {
  let grade = {};
  grade.id = req.body.id;
  grade.name = req.body.name;
  grade.course = req.body.course;
  grade.grade = req.body.grade;
  grades.push(grade);
  res.json(grade);
});

router.get('/:id', function(req, res, next) {
  grade = {};
  grades.forEach(element => {
    if(element.id == req.params.id) {
      grade = element;
    }
  });
  res.json(grade);
});

router.put('/:id', function(req, res, next) {
  grade = {};
  grades.forEach(element => {
    if(element.id == req.params.id) {
      element.name = req.body.name;
      element.course = req.body.course;
      element.grade = req.body.grade;
      grade = element;
    }
  });
  res.json(grade);
});

router.delete('/:id', function(req, res, next) {
  let size = grades.length;
  grades = grades.filter((e) => e.id != req.params.id)
  if(size > grades.length){
    res.json({status: "grade deleted successfully!"});
  }else{
    res.json({status: "no such grade found!"});
  }
});



module.exports = router;
