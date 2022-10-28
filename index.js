const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 5000;


const courseList = require('./data/course-list.json')
const courseNames = require('./data/course-names.json')


// Course Title
app.get('/course-titles', (req, res) => {
    res.send(courseNames)
})


// All Course Details
app.get('/courses', (req, res) => {
    res.send(courseList)
})




// Single Course with id
app.get('/course/:id', (req, res) => {
    const id  = req.params.id
    const selectedCourse = courseList.find(course => course.id === id)
    res.send(selectedCourse)
})



// Testing The API
app.get('/', (req, res) => {
    res.send("Server is running or may be flying")
});

// Server running test
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});


