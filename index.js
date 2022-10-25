const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 5000;


const courseList = require('./data/courseList.json')


app.get('/course-list', (req, res) => {
    res.send(courseList)
})


// Testing The API
app.get('/', (req, res) => {
    res.send("Server is running or may be flying")
});


// Server running test
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});


