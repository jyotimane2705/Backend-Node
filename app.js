const express = require('express');
const mongoose = require("mongoose");

const route = require("./Route/index");

const PORT = 5500;
const HOSTNAME = "localhost";

// Request Management
const app = express();
app.use(express.json());        // A body Parser Required to post a data

app.use('/', route);

// DB
const MongoAtlas = "mongodb+srv://<username>:<password>@nodeass.uicntdi.mongodb.net/<colletionName>?retryWrites=true&w=majority&appName=NodeASS"

mongoose.connect(MongoAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => {
        app.listen(PORT, HOSTNAME, () => {
            console.log(`Server is running at ${HOSTNAME}: ${PORT}`)
        });
    })
    .catch(err => console.log(err));
