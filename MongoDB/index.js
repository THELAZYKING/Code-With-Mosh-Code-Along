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

// async function getCourses() {
//   const pageNumber = 2;
//   const pageSize = 10;

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

// const courses = await Course
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
//     .skip((pageNumber - 1) * pageSize)
//     .limit(pageSize)
//     .sort({ name: 1 })
//     // .select({ name: 1, tags: 1 });
//     .count();
//   console.log(courses);
// }

// async function updateCourse(id) {
// Approach : Query first
// findbyId()
//Modify its properties
//save()

// const course = await Course.findById(id);
// if (!course) return;
// course.isPublished = true;
// course.author = "Another Author";

// course.set({
//   isPublished: true,
//   author: "Another Author"
//});
// const result = await course.save();
// console.log(result);

//Approach : Update first
//Update directly
//Optionallly: get the updated Document

// const course = await Course.update(
//   { _id: id },
//   {
//     $set: {
//       author: "Mosh",
//       isPublished: false
//     }
//   }
// );

// Another Method

// const course = await Course.findByIdAndUpdate(
//   id,

//   {
//     $set: {
//       author: "Jack",
//       isPublished: true
//     }
//   },
//   { new: true }
// );
// console.log(course);
// }

// updateCourse("5c5ab393feb3c80a348dbb20");

// async function removeCourse(id) {
//   const result = await Course.deleteOne({ _id: id });
//   console.log(result);
// }

// removeCourse("5c5ab393feb3c80a348dbb20");

async function removeCourse(id) {
  const result = await Course.deleteMany({ _id: id });
  console.log(result);
}

removeCourse("5c5ab393feb3c80a348dbb20");
