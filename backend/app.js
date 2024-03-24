const express = require('express');
const connectToMongo = require('./db');

const app = express();

// Port Configuration from .env file
let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use(express.json());

app.use('/api/color', require('./routes/colorRoute'));
app.use('/api/auth', require('./routes/userRoute'));

// create connection with mongodB
connectToMongo().then(() => {
    app.listen(port, () => {
        console.log("listening for requests");
    })
});
