const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];
// app.get()
// app.post()
// app.put()
// app.delete()

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  // res.send(req.params.id);
  let course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The Course with given id not found.");
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  // const result = validateCourse(req.body);
  const { error } = validateCourse(req.body);
  if (error)
    //400 Bad Request
    return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  //lookup the course
  //if not existing, return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The Course with given id not found.");
  //Validate
  //If invalid, return 400 - bad request
  // const result = validateCourse(req.body);
  const { error } = validateCourse(req.body);
  if (error) {
    //400 Bad Request
    return res.status(400).send(error.details[0].message);
  }
  //Update course
  course.name = req.body.name;
  res.send(course);
  //Return the updated course
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(req.body.schema);
}

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with given ID was Not Found.");
  const index = courses.indexOf(course);
  genres.splice(index, 1);

  res.send(course);
});

// app.post('/api/courses', (req, res) => {
// if(!req.body.name || req.body.name.length <3){
// //400 Bad Request
// res.status(400).send('Name is required and should be minimum 3 character')
// return;
// }
// const course = {
// 	id: courses.length + 1,
// 	name: req.body.name
// };
// courses.push(course);
// res.send(course);

// });

// app.get('/api/posts/:id', (req,res) => {
// 	res.send(req.query);
// });

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
