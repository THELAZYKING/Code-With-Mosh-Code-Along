const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to mongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB ...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

//Classes , objects
// Course, nodeCourse
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    author: "Mosh",
    tags: ["angular", "frontend"],
    isPublished: true
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;

  const courses

  //eq(equal)
  //ne(not equal)
  //gt(greater Than)
  //gte(greater than or equal to)
  //lt(less than)
  //lte(less than or equal to)
  //in
  //nin(not in)

  //Logical Operators
  //or
  //and

  const courses = await Course
    // .find({ author: "Mosh", isPublished: true )}
    // .find({ price: 10 })
    // .find({ price: { $gt: 10, $lte: 20 } })
    // .find({ price: { $in: [10, 15, 20] } })
    // .find()
    // .or([{ author: "Mosh"} , { isPublished: true }])
    // .and([{}])

    //author that name starts with mosh
    //  .find({ author: /^Mosh/ })

    //Ends with Hamedani
    // .find({ author: /Hamedani$/i }) //i for case insesitive

    //Contains Mosh
    // .find({author: /.*Mosh*/i })

    //For Pagination 
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    // .select({ name: 1, tags: 1 });
    .count();
  console.log(courses);
}

getCourses();
