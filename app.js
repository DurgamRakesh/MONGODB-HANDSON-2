const express = require('express');
const employeeRoute = require('./routes/employeeroute');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(employeeRoute);

app.listen(9090, () => {
    console.log('server is running on 9090');
})

