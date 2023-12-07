const mongoose = require('mongoose');

const mongoURL =
  'mongodb+srv://precious:2U3oSntUb3IokV52@cluster0.nul4lpy.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(mongoURL)
  .then((con) => {
    console.log('DB connection successful');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model('Course', courseSchema);

// async function displayCourses() {
//   try {
//     const courses = await Course.find({
//       isPublished: true,
//       tags: 'backend',
//     });
//     console.log(courses);
//     if (courses.length === 0) {
//       console.log('No matching documents found');
//     } else {
//       console.log(courses);
//     }
//   } catch (error) {
//     console.error('Error executing query', error);
//   }
// }

// displayCourses();

async function getCourses() {
  try {
    const courses = await Course.find({ author: 'Mosh' });
    console.log(courses);
  } catch (err) {
    console.error(err);
  }
}

getCourses();
