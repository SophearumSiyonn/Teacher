const express = require('express');
const app = express();

// //REG API
// app.post('/registration', (req, res) => {
//     res.send('<html><body>INSIDE REGISTRATION API..</body></html>');
// });

//LOGIN API
app.post('/addassignment', (req, res) => {
    res.send('<html><body>ADD ASSIGNMENT</body></html>');
});

//SEARCH API
app.get('/searchstudent', (req, res) => {
    res.send('<html><body>SEARCH STUDENT</body></html>');
});

//DELETE API
app.delete('/removestudent', (req, res) => {
    res.send('<html><body>REMOVE STUDENT</body></html>');
});

// START THE EXPRESS SERVER. 5009 is the PORT NUMBER
app.listen(5010, () =>
    console.log('EXPRESS Server Started at Port No: 5010'));








    